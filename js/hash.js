/**
 * Created by jim on 2017/6/15.
 *
 * Elements And Target-Elements data-structure should be like this.
 *
 * ---- target
 * <ul data-scroll-target="targetId">
 *     <li class="active" data-id="1">标题1</li>
 *     <li data-id="2">标题2</li>
 *     <li data-id="3">标题3</li>
 *     <li data-id="...">...</li>
 * </ul>
 *
 * ---- box-elements
 *  <div data-scroll-box="targetId">
 *      <div class="active" data-scroll-index="1">
 *          <h1>标题1</h1>
 *          <p>内容</p>
 *          <span>其他</span>
 *          <a>...</a>
 *          ...
 *      </div>
 *
 *      <div data-scroll-index="2">
 *          <h1>标题2</h1>
 *          <p>内容</p>
 *          <span>其他</span>
 *          <a>...</a>
 *          ...
 *      </div>
 * *      <div data-scroll-index="3">
 *          <h1>标题3</h1>
 *          <p>内容</p>
 *          <span>其他</span>
 *          <a>...</a>
 *          ...
 *      </div>
 *      <div data-scroll-index="...">
 *          <h1>标题...</h1>
 *          <p>内容</p>
 *          <span>其他</span>
 *          <a>...</a>
 *          ...
 *      </div>
 *      ...
 *      </div>
 *
 *
 */

/**
 * targetParentElementId 为全局变量
 * @param ele
 * @returns {Array}
 */
var Hashes = function (ele) {
    this.element = ele;
    this.lists = null;

    this.create = function () {
        var hashes = new Array();
        var targetParentElement = $("#" + this.element);
        if (targetParentElement.length == 0) {
            console.error("目标元素父节点不存在");
            this.lists = hashes;
            return;
        }

        var scrollBoxElement = $("[data-scroll-box=" + targetParentElement.data("scroll-target") + "]");
        var targetElements = targetParentElement.children();
        var scrollElements = scrollBoxElement.children();
        // console.info(targetElements);
        // console.info(scrollElements);
        //若目标元素不存在
        if (targetElements.length == 0
            || scrollBoxElement.length == 0
            || targetElements.length != scrollElements.length
        ) {
            console.error("目标元素父节点不存在或匹配长度不对等");
            this.lists = hashes;
            return;
        }
        targetElements.each(function (index, e) {
            var hashKey = $(e).data('id');
            var hashElement = scrollBoxElement.find("[data-scroll-index="+ hashKey +"]");
            var prevAll = hashElement.prevAll();
            var element = {
                top: prevAll.length ? prevAll.outerHeight(true): 0,
                bottom: prevAll.length ? parseFloat(prevAll.outerHeight(true)) + parseFloat(hashElement.height()) : hashElement.height(),
                height: hashElement.innerHeight(),
                offsetTop: hashElement.offset().top,
            };

            hashes[hashKey] = element;

        });

        /**
         * 
         * @type {Array}
         */
        // for (var key = 0; key < targetElements.length; key++) {
        //     var hashKey = $(targetElements[key]).data('id');
        //     var hashElement = $(scrollElements[key]);
        //     var prevAll = hashElement.prevAll();
        //     var element = {
        //         top: prevAll.length ? prevAll.height() : 0,
        //         bottom: prevAll.length ? parseFloat(prevAll.height()) + parseFloat(hashElement.height()) : hashElement.height(),
        //         innerHeight: hashElement.innerHeight(),
        // offsetTop: hashElement.offset().top,
        //     };
        //
        //     hashes[hashKey] = element;
        // }

        // var boxElement = {
        //     top: scrollBoxElement.offset().top,
        //     bottom: scrollBoxElement.offset().top + scrollBoxElement.height(),
        //     innerHeight: scrollBoxElement.innerHeight(),
        //     scrollHeight: scrollBoxElement[0].scrollHeight,
        // };
        // hashes.push(boxElement);
        this.lists = hashes;
    };

    /**
     * 关系：positionTop(相对父节点的高度)  = scrollTop(滚动条的值) + Top(当前元素所在位置距离起点的位置
     *
     * @param scrollTop
     * @returns {*}
     */
    this.betweenHashes = function (scrollTop) {
        var hashes = this.lists;
        var res = null;
        for (var key in hashes) {
            var scrollElement = $("[data-scroll-index="+ key +"]");
            var positionTop = scrollElement.position().top;
            var positionBottom = positionTop + hashes[key].bottom;

            if (positionTop <= 0
            && positionBottom >=0
            ) {
                res = key;
                break;
            }

        }
        return res;
    };

    /**
     * 第二种算法  利用滚动条的高度来计算所在位置
     *
     *
     *
     * @param scrollTop
     */
    this.betweenHashes2 = function (scrollTop) {
        var hashes = this.lists;
        var res = null;
        for (var key in hashes) {
            //相对高度
            var positionTop = parseInt(hashes[key].offsetTop) - scrollTop;
            var positionBottom = positionTop + hashes[key].bottom;
            if ( positionTop <= 0
                && positionBottom >= 0
            ) {
                res = key;
                break;
            }
        }
        return res;
    };

    this.create();
};

//Jquery计算相对父节点位置的源码，简单化为：offset().top
var position =function () {
    if (this[0]) {
        var e, t, n = {top: 0, left: 0}, r = this[0];
        return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - n.top - x.css(r, "marginTop", !0),
            left: t.left - n.left - x.css(r, "marginLeft", !0)
        }
    }
};



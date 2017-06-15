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
            return ;
        }

        var scrollBoxElement = $("[data-scroll-box=" + targetParentElement.data("scroll-target") + "]");
        var targetElements = targetParentElement.children();
        var scrollElements = scrollBoxElement.children();

        //若目标元素不存在
        if ( targetElements.length == 0
            || scrollBoxElement.length == 0
            || targetElements.length != scrollElements.length
        ) {
            console.error("目标元素父节点不存在或匹配长度不对等");
            this.lists = hashes;
            return ;
        }

        for (var key = 0; key < targetElements.length; key++) {
            var hashKey = $(targetElements[key]).data('id');
            var hashElement = $(scrollElements[key]);
            var prevAll = hashElement.prevAll();
            var element = {
                top : prevAll.length ? prevAll.height() : 0,
                bottom : prevAll.length ? parseFloat(prevAll.height()) + parseFloat(hashElement.height()) : hashElement.height(),
            };

            hashes[hashKey] = element;
        }
            this.lists = hashes;
    };

    this.betweenHashes = function (scrollTop) {
        var hashes = this.lists;

        for (var key in hashes) {
            if (hashes[key].top <= scrollTop
                &&  hashes[key].bottom >= scrollTop
            ) {
                return key;
            }
        }
        console.info(scrollTop + "=>" + key);
        return null;
    };

    this.create();
};







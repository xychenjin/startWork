/**
 * Created by jim on 2017/6/15.
 */
var Hashes = new Hashes('proTab0');
var eee = $("[data-scroll-box=" + $("#proTab0").data("scroll-target") + "]");
console.info(Hashes);
console.info(eee.height());
console.info(eee[0].scrollHeight);

$(document).ready(function () {
    // if (! Hashes) {
    //     var Hashes = new Hashes('proTab0');
    // }
    var firstChild = eee.children().first();
    var secondChild = firstChild.next();
    var thirdChild = secondChild.next();
    var fourthChild = thirdChild.next();
    var lastChild = eee.children().last();
    var lastSecondChild = lastChild.prev();
    var lastThirdChild = lastSecondChild.prev();

    $(".TabContent").scroll(function () {
        console.info(eee.scrollTop() );
        console.info('第1个元素:'+ firstChild.text() +'的窗口顶部距离：' + firstChild.offset().top
            + ",本来高度：" + firstChild.innerHeight() + ", 相对于父元素的高度top:" + firstChild.position().top
            + ",相对于当前元素底部边界的高度：" + (parseFloat(firstChild.position().top) + parseFloat(firstChild.height()))
        );
        console.info('第2个元素:'+ secondChild.text() +'的窗口顶部距离：' + secondChild.offset().top
            + ",本来高度：" + secondChild.innerHeight() + ", 相对于父元素的高度top:" + secondChild.position().top
            + ",相对于当前元素底部边界的高度：" + (parseFloat(secondChild.position().top) + parseFloat(secondChild.height()))
        );
        console.info('第3个元素: ... 的窗口顶部距离：' + thirdChild.offset().top
            + ",本来高度：" + thirdChild.innerHeight() + ", 相对于父元素的高度top:" + thirdChild.position().top
            + ",相对于当前元素底部边界的高度：" + (parseFloat(thirdChild.position().top) + parseFloat(thirdChild.height()))
        );
        console.info('第4个元素: ... 的窗口顶部距离：' + fourthChild.offset().top
            + ",本来高度：" + fourthChild.innerHeight() + ", 相对于父元素的高度top:" + fourthChild.position().top
            + ",相对于当前元素底部边界的高度：" + (parseFloat(fourthChild.position().top) + parseFloat(fourthChild.height()))
        );
        console.info('......');

        console.info('倒数第3个元素:...的窗口顶部距离：' + lastThirdChild.offset().top
            + ",本来高度：" + lastThirdChild.innerHeight() + ", 相对于父元素的高度top:" + lastThirdChild.position().top
            + ",相对于当前元素底部边界的高度：" + (parseFloat(lastThirdChild.position().top) + parseFloat(lastThirdChild.height()))
        );
        console.info('倒数第2个元素:...的窗口顶部距离：' + lastSecondChild.offset().top
            + ",本来高度：" + lastSecondChild.innerHeight() + ", 相对于父元素的高度top:" + lastSecondChild.position().top
            + ",相对于当前元素底部边界的高度：" + (parseFloat(lastSecondChild.position().top) + parseFloat(lastSecondChild.height()))
        );

        console.info('倒数第一个元素:'+ lastChild.text() +'的窗口顶部距离：' + lastChild.offset().top
            + ",本来高度：" + lastChild.innerHeight() + ", 相对于父元素的高度top:" + lastChild.position().top
            + ",相对于当前元素底部边界的高度：" + (parseFloat(lastChild.position().top) + parseFloat(lastChild.height()))
        );
        var dom = $(this);
        var scrollBox = $(this).data("scroll-box");
        var currentScrollTop = $(this).scrollTop();
        var targetParentElement = $("[data-scroll-target= "+ scrollBox + "]");
        var className = "active";

        var changeTargetKey = Hashes.betweenHashes2(currentScrollTop);

        this.changeTargetAction = function () {
            // if (initial.positionTop()) {
            //     //滚动到顶部时，停在第一个元素处
            //     initial.targetFirstAddClass();
            // }
            // else if (initial.endBottom()) {
            //     //滚动到底部时，停在最后个元素处
            //     initial.targetLastAddClass();
            // } else {
            //     //自动完成修改
            //     initial.targetAddClass();
            // }
            initial.targetAddClass();
        };

        var initial = {
            targetElement :function () {
                return targetParentElement.find("[data-id="+ changeTargetKey +"]");
            },
            targetElementFirst: function () {
                return targetParentElement.children().first();
            },
            targetElementLast: function () {
                return targetParentElement.children().last();
            },
            targetActiveElement : function () {
                return targetParentElement.find("." + className);
            },
            targetActiveRemove: function () {
                initial.targetActiveElement().removeClass(className);
            },
            targetAddClass: function () {
                if (initial.targetElement().length
                    && ! initial.targetElement().hasClass(className)
                ) {
                    initial.targetActiveRemove();
                    initial.targetElement().addClass(className);
                }
            },
            targetFirstAddClass: function () {
                if (! initial.targetElementFirst().hasClass(className)) {
                    initial.targetActiveRemove();
                    initial.targetElementFirst().addClass(className);
                }
            },
            targetLastAddClass: function () {
                if (! initial.targetElementLast().hasClass(className)) {
                    initial.targetActiveRemove();
                    initial.targetElementLast().addClass(className);
                }
            },
            positionTop: function () {
                return dom.scrollTop() == 0;
            },
            endBottom: function () {
                var end = (parseFloat(dom.scrollTop()) + parseFloat(dom.height())) >= parseFloat(dom[0].scrollHeight);
                return end;
            },
        };

        this.changeTargetAction();
    });

});
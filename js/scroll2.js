/**
 * Created by jim on 2017/6/15.
 */
var Hashes = new Hashes('proTab0');
console.info(Hashes);
$(document).ready(function () {
    // if (! Hashes) {
    //     var Hashes = new Hashes('proTab0');
    // }

    $(".TabContent").scroll(function () {
        var dom = $(this);
        var scrollBox = $(this).data("scroll-box");
        var currentScrollTop = $(this).scrollTop();
        var targetParentElement = $("[data-scroll-target= "+ scrollBox + "]");
        var className = "active";

        var changeTargetKey = Hashes.betweenHashes(currentScrollTop);

        this.changeTargetAction = function () {
            if (initial.positionTop()) {
                //滚动到顶部时，停在第一个元素处
                initial.targetFirstAddClass();
            }
            else if (initial.endBottom()) {
                //滚动到底部时，停在最后个元素处
                initial.targetLastAddClass();
            } else {
                //自动完成修改
                initial.targetAddClass();
            }
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
                return (parseFloat(dom.scrollTop()) + parseFloat(dom.height())) >= parseFloat(dom[0].scrollHeight);
            },
        };

        this.changeTargetAction();
    });

});
/**
 * Created by jim on 2017/6/15.
 */
$(function () {
    $(".TabContent").scroll(function () {
        var initial = {
            dom: $(this),
            targetIdPrefix: "proTab0_li",//id前缀
            targetParentElement: $("#proTab0"),
            targetElementId: targetElementId,
            positionScrollTop: positionScrollTop,
            scrollElements: $(this).children().find("h1,dl"),
            targetElements: $("#proTab0 li"),
            targetActiveElement: $("#proTab0 li.active"),
            positionContainerTop: $(this).offset().top, //滚动容器的距离顶部的高度
            positionContainerBottom: parseFloat($(this).offset().top) + parseFloat($(this).height()), //滚动容器底部距离顶部的高度
            positionContainerCompareHeight: null,

            scrollDirectingBottom: function () { //鼠标滚动方向
                var currentScrollTop = initial.dom.scrollTop();
                var directingBottom = initial.positionScrollTop <= currentScrollTop;
                positionScrollTop = currentScrollTop;
                if (initial.positionTop()) {
                    positionScrollTop = 0;
                    targetElementId = $("#proTab0 li").first().attr('id');
                }
                return directingBottom;
            },
            targetElementFirst: function() {
                return initial.targetParentElement.find("li").first();
            },
            targetElement: function (n) {
                return initial.targetParentElement.find("li#" + initial.targetIdPrefix + n);
            },

            targetRemove: function () {
                initial.targetActiveElement.removeClass("active");
            },
            targetAddClass: function () {
                initial.targetRemove();
                initial.targetElement(initial.targetElementId).addClass('active');
            },
            targetFirstAddClass: function () {
                initial.targetRemove();
                initial.targetElements.first().addClass('active');
            },
            targetLastAddClass: function () {
                initial.targetRemove();
                initial.targetElements.last().addClass('active');
            },
            positionTop: function () {
                return initial.dom[0].scrollTop == 0;
            },
            beyondHalf: function () {
                if (initial.scrollDirectingBottom()) {
                    return initial.dom.scrollTop() >= parseFloat(initial.dom[0].scrollHeight / 2);
                } else {
                    return initial.dom.scrollTop() <= parseFloat(initial.dom[0].scrollHeight / 2);
                }
            },
            endBottom: function(){
                return (parseFloat(initial.dom.scrollTop()) + parseFloat(initial.dom.height())) >= parseFloat(initial.dom[0].scrollHeight);
            },
            doChangeTarget : function () {
                if (initial.targetActiveElement.attr('id')
                    != (initial.targetIdPrefix + initial.targetElementId)
                ) {
                    initial.targetActiveElement.removeClass('active');
                    initial.targetElement(initial.targetElementId).addClass('active');
                }
            },
            changeTargetAction: function () {
                if (initial.positionTop()) {
                    //滚动到顶部时，停在第一个元素处
                    initial.targetFirstAddClass();
                }
                else if (initial.endBottom()) {
                    //滚动到底部时，停在最后个元素处
                    initial.targetLastAddClass();
                } else {
                    //自动完成修改
                    initial.targetElementChanged();
                    initial.doChangeTarget();
                }
            },
            elementBetween: function (elementHeight, elementOffsetTop, positionContainerHeight) {
                return (elementOffsetTop <= positionContainerHeight) &&
                    (positionContainerHeight <= (parseFloat(elementOffsetTop) + parseFloat(elementHeight)));
            },
            compareFromBottom: function (positionContainerHeight) {
                var scrollElements = initial.scrollElements;
                for (var key = parseInt(scrollElements.length) - 1; key > 0; key--) {
                    var currentTemp = $(scrollElements[key]);

                    var elementBetween = initial.elementBetween(currentTemp.height(), currentTemp.offset().top, positionContainerHeight);
                    if (elementBetween) {
                        targetElementId = currentTemp.data("target") ? currentTemp.data("target") :  targetElementId;
                        break;
                    }
                }
            },
            compareFromTop: function (positionContainerHeight) {
                var scrollElements = initial.scrollElements;
                for (var key = 0; key < parseInt(scrollElements.length); key ++) {
                    var currentTemp = $(scrollElements[key]);

                    var elementBetween = initial.elementBetween(currentTemp.height(), currentTemp.offset().top, positionContainerHeight);
                    if (elementBetween) {
                        targetElementId = currentTemp.data("target") ? currentTemp.data("target") :  targetElementId;
                        break;
                    }
                }
            },
            targetPositionCompare : function () {
                var positionContainerHeight = initial.positionContainerTop;
                if (initial.scrollDirectingBottom()) {
                    if (initial.beyondHalf()) {
                        positionContainerHeight = initial.positionContainerBottom;
                        initial.compareFromBottom(positionContainerHeight);
                    }
                    initial.compareFromTop(positionContainerHeight);
                } else {
                    if (initial.beyondHalf()) {
                        positionContainerHeight = initial.positionContainerBottom;
                        initial.compareFromBottom(positionContainerHeight);
                    }
                    initial.compareFromTop(positionContainerHeight);
                }
            },
            targetElementChanged: function () {
                var scrollElements = initial.scrollElements;

                if (scrollElements.length == 0) {
                    return false;
                }

                initial.targetPositionCompare();
            },
        };
        initial.changeTargetAction();
    });

});

/**
 * Created by jim on 2017/5/2.
 */

$(function () {
    var money = parseFloat($("#money").attr("data"));
    if (money == 0) {
        $(".gwtextC").hide();
    }

});

$(".sub-number-btn").on("click", function () {
    change($(this))
});

$(".add-number-btn").on('click', function () {
    change($(this))

});

var change = function (that) {
    var dom = that.parent().parent().find("span.number");
    var cls = that.attr('class');
    var cnt = cls.substr(0, 3) === 'sub' ? '-' : '+';
    var val = dom.html();
    var num = cnt === '-' ? parseInt(val) - 1 : parseInt(val) + 1;

    var datanum = parseInt($("#number").attr("data"));
    var money = parseFloat($("#money").attr("data"));
    var price = parseFloat(that.attr("data"));
    if (cnt === '-') {
        if (money == 0 || datanum == 0) {
            return false;
        }
        $("#number").attr("data", datanum - 1);
        $("#number").html(datanum - 1);

        $("#money").attr("data", money - price);
        $("#money").html("¥" + (money - price));
    } else {
        $("#number").attr("data", datanum + 1);
        $("#number").html(datanum + 1);

        $("#money").attr("data", money + price);
        $("#money").html("¥" + (money + price));
    }

    if (money - price == 0) {
        $(".gwtextC").hide();
    } else {
        $(".gwtextC").show();
    }

    if (dom.length === 0 || num < 0) return false;

    if (num > 0) {
        that.parent().parent().find(".sub-number-btn").removeClass("none");
    } else {
        that.addClass("none");
    }
    dom.html(num);


    var data = {
        number: num,
        shopId: $("input[name=shopId]:hidden").val(),
        merchantsId: $("input[name=merchantsId]:hidden").val(),
        goodsId: that.data("id"),
        categoryId: that.data("category-id")
    };
    $.post(submit_url, data, function (res) {
        submitReturn(res, dom, num);
    });
}

var submitReturn = function (result, dom, num) {
    try {
        var res = typeof (result) == 'string' ? JSON.parse(x) : result;
        if (res !== null && res.data !== null && res.data.url !== null) {
            //  window.location.reload();
        } else {
            $(".gwtextC").show();
            return false;
        }
    } catch (e) {
        throw e;
    }
};

$(".gwtextC").click(function () {
    $(this).attr("disabled", "disabled");
    var data = {
        shopId: $("input[name=shopId]:hidden").val(),
        merchantsId: $("input[name=merchantsId]:hidden").val()
    };

    $.post(submit_to, data, function (result) {
        var res = typeof (result) == 'string' ? JSON.parse(result) : result;
        if (res.data.url != null) {
            window.location.href = res.data.url;
        }
        $(this).removeAttr("disabled");
    });
});
var collect_times = 0;
$(".shuochang").click(function () {
    var dom = $(this);
    dom.attr("disabled", 'disabled');
    var shopId = $(this).data("shop-id");
    var url = $(this).data("submit-url");
    var data = {shopId: shopId};
    var img = dom.children().find("img");
    if (shopId == undefined || url == undefined) return;
    if (collect_times > 4) {
        alert("点击过于频繁，请稍后再试");
        return;
    }
    $.post(url, data, function (res) {
        img.removeAttr("src");
        img.attr("src", res.data.collected ? img.data("is-collected") : img.data("default"));
        collect_times++;
    });
    dom.removeAttr("disabled");
});


function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}
function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
    }
}

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
    if (!x && d.getElementById) x = d.getElementById(n);
    return x;
}

function MM_swapImage() { //v3.0
    var i, j = 0, x, a = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) {
            document.MM_sr[j++] = x;
            if (!x.oSrc) x.oSrc = x.src;
            x.src = a[i + 2];
        }
}

$("#proTab0 li").on('click', function () {

    var dom = $(this);
    var className = "active";

    var init = {
        dataId: dom.data("id"),
        parentElement: dom.parent(),
        targetParentElement: function () {
            return $("[data-scroll-box=" + $(this.parentElement).data("scroll-target") + "]");
        },
        targetElements: function () {
            return init.targetParentElement().children()
        },
        hashes: null,
        targetElement: function () {
            return this.targetParentElement().find("[data-scroll-index=" + this.dataId + "]");
        },
        change: function () {
            init.addClass();

            var hash = init.hashes.findByIndex(init.dataId);

            if (hash === null
                || hash.scrollTop === null
            ) {
                return;
            }

            init.targetParentElement().animate({scrollTop : hash.scrollTop + "px"}, 1000);
        },

        removeActiveClass: function () {
            init.targetActiveElement().removeClass(className);
        },

        addClass: function () {
            // init.removeActiveClass();
            // dom.addClass(className);
        },

        targetActiveElement: function () {
            return $(init.parentElement).find("." + className);
        },

    };

    if (init.targetParentElement().length == 0
        || init.targetElements().length == 0
        || init.targetElement().length == 0
    ) {
        return;
    }

    if (!init.hashes
        || !Hashes
    ) {
        init.hashes = Hashes ? Hashes : new Hashes(init.parentElement.attr('id'));
    }

    init.change();
});
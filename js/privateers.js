/**
 * Created by jim on 2017/5/31.
 */


//url 域名: http://www.example.com

//username 用户名 string

//pwd 密码 string 明文

//_ENV 环境变量 [keyName : keyValue ] Array

//desc 正式环境/开发环境 default 开发环境

//databases [name 用户名, password 密码, port 默认3306, database 数据库名, tableName 表名, conditions 条件等, hostname:主机]

var getTemplate = function (key, val) {
    var getSplitName = function(val) {
       return $.trim(val).substring($.trim(val).indexOf(" ") + 1, $.trim(val).lastIndexOf(" "));
    };

    var getLinkName = function(val) {
       return val.indexOf("http://") == 0 ? '<a href="' + val + '" target="_blank">' + val + '</a>' : val;
    };

    var getReplaceName = function(val) {
       var splitName = getSplitName(val);
       return splitName ? val.replace(splitName, "<strong class='text-info'>"+ splitName + "</strong>") : val;
    };

    var formatValue = function(val){
        return "<span class='col-md-8'>"+ val +"</span>";
    };

    var keyName = getKey(key);
    var replaceValue = getReplaceName(val);
    var value = formatValue(replaceValue);
    if (key == 'url') {
        value = formatValue(getLinkName(val));
        value += '<input class="btn selectText btn-default btn-sm un-select" data-url="'+ val +'" type="button" value="选择" />';
    }

    if (key == 'username') {
        var name = getSplitName(val);
        value += name != '' ? '<input class="btn copyText btn-primary btn-sm" data-name="' + name + '" type="button" value="复制" />' : '';
    }

    return "<div class = 'row col-md-12'><label class='label-control col-md-2 col-md-offset-1'>" + keyName + " : </label>" + value + "</div>";
};

var assemble = function () {
    return cut();
};

var loadPrivateers = function (id) {
    var loadInfo = function(id, length) {
        return $("#" + id).append("<h3>一共 <small class='text-danger'>" + length +"</small> 条</h3>");
    };
    $("#" + id).append(loadInfo(id, privateers.length));
    $("#" + id).append(assemble());
    doCopy();
    doSelect();
    doHidden();
};

var getKey = function (key) {
    return keys[key] != undefined ? keys[key] : "其他";
};
var getLinkName = function(val) {
    return val.indexOf("http://") == 0 ? '<a href="' + val + '" target="_blank">' + val + '</a>' : val;
};

var cut = function () {
    if (privateers == undefined || privateers == null) return;
    var context = "<div class='form-horizontal'>";
    var hiddenBtn = function() {
       return "<div class = 'row col-md-12'><a class='btn hiddenRow btn-info btn-sm fold'><i class='icon-chevron-down'></i><font>收起</font></a></div>";
    };
    for (var i in privateers) {
        var privateer = privateers[i];
        context += "<div class= 'form-group'>";
        context += hiddenBtn();
        for (var j in privateer) {
            var items = privateer[j];
            if (typeof items == "object") {
                if (items == null) continue;
                for (var k in items) {
                    var values = items[k];
                    for (var l in values) {
                        context += getTemplate(l, values[l]);
                    }
                }
            } else {
                context += getTemplate(j, items);
            }
        }
        context += "</div>" + (i < parseInt(privateers.length) - 1 ? "<hr>" : "");
    }
    context += "</div>";
    return context;
};

var doCopy = function(){
    $(".copyText").click(function () {
        var dom = this;
        $(this).zclip({
            path: "http://dd.com.cn/js/jquery-zclip/ZeroClipboard.swf",
            copy: function () {
                return $(this).data("name");
            },
            beforeCopy: function () {
                //alert("请再试一次");
                //$(this).preventDefault();
            },
            afterCopy: function () {
                alert("复制成功");
                $(this).preventDefault();
            },
            clickAfter:function(){
                if (dom.done == undefined) {
                    dom.done = true;
                    alert("拷贝有点傻，请再点一次");
                }
            }
        });

    });
};

var doSelect =  function() {
    $(".selectText").click(function(){
        var dom = $(this);
        var span = dom.prev("span");
        if (dom.hasClass("un-select")) {
            dom.val("取消");
            dom.removeClass("un-select");
            span.html(dom.data("url"));
            span.addClass("text-danger");
        } else {
            dom.addClass("un-select");
            dom.val("选择");
            span.html(getLinkName(dom.data("url")));
            span.removeClass("text-danger");
        }
    });
};

var doHidden = function() {
    $(".hiddenRow").click(function(){
        var dom = $(this);
        var par = dom.parent().nextAll();
        if (dom.hasClass("fold")) {
            par.hide();
            dom.find("i").attr("class", 'icon-chevron-up');
            dom.find("font").html("展开");
            dom.removeClass("fold");
        } else {
            par.show();
            dom.find("i").attr("class", 'icon-chevron-down');
            dom.find("font").html("收起");
            dom.addClass("fold");
        }
    });
};



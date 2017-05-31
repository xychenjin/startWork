/**
 * Created by jim on 2017/5/31.
 */


//url 域名: http://www.example.com

//username 用户名 string

//pwd 密码 string 明文

//_ENV 环境变量 [keyName : keyValue ] Array

//desc 正式环境/开发环境 default 开发环境

//databases [name 用户名, password 密码, port 默认3306, database 数据库名, tableName 表名, conditions 条件等, hostname:主机] 

var privateers = [
    {
        url: "http://jim.www.com",
        username: "user_name[ jimm ]",
        pwd: "123456",
        _ENV: [],
        database: [{database: "dffl_user", tableName: "t_user"}],
        id: "204",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://m.dongfangfuli.com",
        username: "user_name[ jimm ]",
        pwd: "123456",
        _ENV: [],
        database: [{database: "dffl_user", tableName: "t_user"}],
        id: "204",
        hostname: "10.8.1.14",
        desc: "开发环境"
    }
];

var keys = {
    id: "ID号",
    url: "Url 域名",
    username: "用户名",
    pwd: "密码",
    _ENV: "环境变量",
    desc: "适用环境",
    database: "数据库",
    port: "端口",
    tableName: "表名",
    conditions: "条件",
    keyName: "变量名",
    keyValue: "变量值",
    hostname: "连接主机"
};

var getTemplate = function (key, val) {
    var keyName = getKey(key);
    var value = val.indexOf("http://") == 0 ? '<a href="' + val + '">' + val + '</a>' : val;
    if (key == 'username') {
        var name = $.trim(val).substring($.trim(val).indexOf(" ") + 1, $.trim(val).lastIndexOf(" "));
        val += name != '' ? '<input class="btn copyText" data-name="' + name + '" type="button" value="复制" />' : '';
        value = val;
    }

    return "<div class = 'row col-md-12'><label class='label-control col-md-2 col-md-offset-1'>" + keyName + " : </label><span class=''>" + value + "</span></div>";
};

var assemble = function () {
    return cut();
};

var loadPrivateers = function (id) {
    $("#" + id).html(assemble());

    $(".copyText").click(function () {
    $(this).zclip({
        path: "http://dd.com.cn/js/jquery-zclip/ZeroClipboard.swf",
        copy: function () {
            return $(this).data("name");
        },
		afterCopy:function() {
			alert('复制成功');
			return ;
		}
    });
    
    });
};

var getKey = function (key) {
    return keys[key] != undefined ? keys[key] : "其他";
};

var cut = function () {
    if (privateers == undefined || privateers == null) return;
    var context = "<div class='form-horizontal'>";
    for (var i in privateers) {
        var privateer = privateers[i];
        context += "<div class= 'form-group'>";
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



/**
 * Created by jim on 2017/5/31.
 */
        var urls = {
            "develop-part": {
                name: "公司开发环境域名",
                list: [
                    ["http://jim.www.com", "东方福利网-前台"],
                    ["http://m.dongfangfuli.com", "东方福利网-H5"],
                    ["http://jim.static.com", "东方福利网-常量目录"],
                    ["http://jim.psf.com", "东方福利网-老票师傅"],
                    ["http://jim.admin.com", "东方福利网-后台"],
                    ["http://jim.merchant.com", "东方福利网-商户后台"],
                    ["http://jim.booking.com", "东方福利网-400预订系统"],
                ]
            },
            "depart-part": {
                name: "云平台工会域名",
                list: [
                    ["http://union-admin.md.com", "魔都工会后台"],
                    ["http://union.md.dongfangfuli.com", "魔都工会前台"],
                    ["http://md.dongfangfuli.com", "魔都工会前台-福利商城"],
                    ["http://m.ua.md.dongfangfuli.com", "魔都工会H5版"],
                    ["http://m.md.dongfangfuli.com", "魔都工会H5版-福利商城"],

                    ["http://union.bmw.dongfangfuli.com", "宝马工会前台"],
                    ["http://bmw.dongfangfuli.com", "宝马工会前台-福利商城"],
                    ["http://union-admin.bmw.com", "宝马工会后台"],
                    ["http://m.ua.bmw.dongfangfuli.com/union/bmw/", "宝马工会H5版"],
                    ["http://m.bmw.dongfangfuli.com/union/bmw/", "宝马工会H5版-福利商城"],
                ]
            },
			"diangj-part":{
				name : "店管家",
				list :[
					["http://diangj.jim.com", "店管家H5"],
					["http://www.diangj.cn", "店管家H5-线上"],
					["http://diangj-backend.jim.com", "店管家后台"],
					["http://diangj-merchant.jim.com", "店管家商户后台"],
					["http://sh.diangj.cn", "店管家商户后台-线上"],
					["http://teamwork.acceptplay.com", "店管家-Teamwork"],
					["http://project.acceptplay.com", "店管家-Project"],
					["http://git.acceptplay.com/", "店管家-Git"],
				]
			},
			"other-part":{
				name : "其他",
				list :[
					["http://zentao.psf-dev.com", "10.8.1.7"],
					["http://gitlab.psf-dev.com", "10.8.1.15"],
					["http://dev.psf-dev.com", "10.8.1.11"],
					["http://qa.psf-dev.com", "10.8.1.12"],
				]
			},
            "all-part": {},
        };
 
    var template = function (name, href, showPrefix) {
        var formatName = function (name, href) {
            return name == "" && href.indexOf("http://") == 0 ? href.substring(7) : name;
        }
        var title = name == "" ? href : name;
		var ip = function(name ){
		    var re =  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/   
			return re.test(name) ? name : "127.0.0.1"; 
		}
        var showPrefix = showPrefix == undefined || showPrefix == false ? false : true;
        var prefix = '#<br/>'
                +
                '# ------------------------------------------------------------------------------------'
                + ip(name);
        var context = ' <a href="'
                +
                href
                +
                '" title="'
                +
                title
                +
                '" class="btn btn-link" target="_blank">'
                +
                formatName(name, href)
                + '</a>';
		var suffix = "<br/>#<br/>";		
        return name == "" ? context : (showPrefix ? prefix + context + suffix: context);
    };

    var loadUrls = function () {
        var data = urls;
        var all = Array();
        for (var i in data) {
            var id = i;
            if (data[i] == undefined || data[i].list == undefined) continue;
            var name = data[i].name == undefined ? "" : data[i].name;
            var lists = data[i].list;
            for (var j in lists) {
                var link = html = "";
                for (var k in lists[j]) {
                    link = link == "" && lists[j][k].indexOf("http://") == 0 ? lists[j][k] : link;
                    html = html == "" && lists[j][k].indexOf("http://") == -1 ? lists[j][k] : html;
                }
                var line1 = "<p>" + template(html, link, true) + "</p>";
                $("#" + id).append(line1);
                var line2 = "<p>" + template("", link) + "</p>";
                $("#" + id).append(line2);
                var line3 = "<p>" + template(html, link, false) + link + "</p>";
                all.push(line3);
            }

        }
		var loadInfo = function(id, length) {
			return $("#" + id).append("<h3>一共 <small class='text-danger'>" + length +"</small> 条</h3>");
		};
		
        var output = function (data, id, loadHeader) {
			if(loadHeader) loadInfo(id, data.length);
            for (var i in data)
                $("#" + id).append(data[i]);
        };

        output(all, "all-part", true);
    }
	
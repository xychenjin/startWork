/**
 * Created by jim on 2017/6/1.
 */

//url 域名: http://www.example.com

//username 用户名 string

//pwd 密码 string 明文

//env 环境变量 [keyName : keyValue ] Array

//desc 正式环境/开发环境 default 开发环境

//databases [name 用户名, password 密码, port 默认3306, database 数据库名, tableName 表名, conditions 条件等, hostname:主机]

var privateers = [
    {
        url: "http://jim.www.com",
        title:"东方福利网-前台",
        username: "user_name[ jimm ]",
        pwd: "123456",
        env: [],
        database: [{database: "dffl_user", tableName: "t_user"}],
        id: "204",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://m.dongfangfuli.com",
        title:"东方福利网-H5",
        username: "user_name[ jimm ]",
        pwd: "123456",
        env: [],
        database: [{database: "dffl_user", tableName: "t_user"}],
        id: "204",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://jim.psf.com",
        username: "username[ 用户名1 ]",
        pwd: "123456",
        env: [],
        database: [{database: "dffl_psf_mid", tableName: "t_user", conditions: "mobile=13916184837 AND dffl_user_id=201"}],
        id: "376196",
        hostname: "10.8.1.14",
        desc: "开发环境",
        extensions:"已弃用",
    },
    {
        url: "http://jim.admin.com",
        title:"东方福利网-管理后台",
        username: "email[ admin@psf.com ]",
        pwd: "123456",
        env: [],
        database: [{database: "dffl_admin", tableName: "users", roles: "超级管理员", permissions: "所有"}],
        id: "15",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://jim.merchant.com",
        title:"东方福利网-三方商户后台",
        username: "email[ 953440772@qq.com ]",
        merchants:"chanjim三方后台测试",
        pwd: "111111",
        env: [],
        database: [{database: "dffl_admin", tableName: "merchant_users", roles: "三方店铺管理员", permissions: "部分"}],
        id: "128",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://jim.merchant.com",
        title:"东方福利网-三方商户后台",
        username: "email[ admin ]",
        merchants:"易果生鲜API",
        pwd: "123456",
        env: [],
        database: [{database: "dffl_admin", tableName: "merchant_users", roles: "三方店铺管理员", permissions: "部分"}],
        id: "422",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://jim.booking.com",
        title:"东方福利网-400预订系统",
        username: "email[ 3214 ]",
        pwd: "123456",
        env: [],
        database: [{database: "dffl_admin", tableName: "csb_users", roles: "400账户", permissions: "部分"}],
        id: "58",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://union-admin.md.com",
        title:"魔都工会后台",
        username: "email[ admin@psf.com ]",
        pwd: "111111",
        env: [{UNION_NAME: "md"}],
        database: [{database: "dffl_union", tableName: "users", roles: "超级管理员", permissions: "全部"}],
        id: "53",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://union.md.dongfangfuli.com",
        title:"魔都工会前台",
        username: "email[ zy10001 ]",
        pwd: "111111",
        env: [{UNION_NAME: "md", UNION_FRONT_DOMAIN:"union.md.dongfangfuli.com", UNION_SHOP_DOMAIN:"md.dongfangfuli.com"}],
        database: [{database: "dffl_union", tableName: "t_user", conditions:"union_id=7 AND status=2"}],
        id: "7242",
        hostname: "10.8.1.13",
        desc: "开发环境"
    },
    {
        url: "http://md.dongfangfuli.com",
        title:"魔都工会前台-福利商城",
        username: "user_name[ union_c4_1001 ]",
        //pwd: "111111",
        env: [{UNION_NAME: "md", UNION_FRONT_DOMAIN:"union.md.dongfangfuli.com", UNION_SHOP_DOMAIN:"md.dongfangfuli.com"}],
        database: [{database: "dffl_user", tableName: "t_user"}],
        id: "308",
        hostname: "10.8.1.13",
        desc: "开发环境"
    },
    {
        url: "http://m.ua.md.dongfangfuli.com/union/md/",
        title:"魔都工会H5版",
        username: "email[ zy10001 ]",
        pwd: "111111",
        env: [{UNION_NAME: "md", H5_UNION_FRONT_DOMAIN:"m.ua.md.dongfangfuli.com/union/{union}/", H5_UNION_SHOP_DOMAIN:"m.md.dongfangfuli.com/union/{union}/", H5_DOMAIN: "m.ua.md.dongfangfuli.com"}],
        database: [{database: "dffl_union", tableName: "t_user", conditions:"union_id=7 AND status=2"}],
        id: "7242",
        hostname: "10.8.1.13",
        desc: "开发环境"
    },
    {
        url: "http://m.md.dongfangfuli.com/union/md/",
        title:"魔都工会H5版-福利商城",
        username: "email[ union_c4_1001 ]",
        //pwd: "111111",
        env: [{UNION_NAME: "md", H5_UNION_FRONT_DOMAIN:"m.ua.md.dongfangfuli.com/union/{union}/", H5_UNION_SHOP_DOMAIN:"m.md.dongfangfuli.com/union/{union}/", H5_DOMAIN: "m.md.dongfangfuli.com"}],
        database: [{database: "dffl_user", tableName: "t_user"}],
        id: "308",
        hostname: "10.8.1.13",
        desc: "开发环境"
    },
    {
        url: "http://union-admin.bmw.com",
        title:"宝马工会后台",
        username: "email[ bwm1 ]",
        pwd: "111111",
        env: [{UNION_NAME: "bmw"}],
        database: [{database: "dffl_union", tableName: "users", roles: "宝马工会管理员", permissions: "全部", conditions:"union_id=2"}],
        id: "7",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    //{
    //    url: "http://union.bmw.dongfangfuli.com",
    //    title:"宝马工会前台",
    //    username: "email[ jim777 ]",
    //    pwd: "123456",
    //    env: [{UNION_NAME: "bmw", UNION_FRONT_DOMAIN:"union.md.dongfangfuli.com", UNION_SHOP_DOMAIN:"md.dongfangfuli.com"}],
    //    database: [{database: "dffl_union", tableName: "t_user", conditions:"union_id=7 AND status=2"}],
    //    id: "7242",
    //    hostname: "10.8.1.14",
    //    desc: "开发环境"
    //},
    //{
    //    url: "http://md.dongfangfuli.com",
    //    title:"宝马工会前台-福利商城",
    //    username: "user_name[ union_c4_1001 ]",
    //    //pwd: "111111",
    //    env: [{UNION_NAME: "bmw", UNION_FRONT_DOMAIN:"union.md.dongfangfuli.com", UNION_SHOP_DOMAIN:"md.dongfangfuli.com"}],
    //    database: [{database: "dffl_user", tableName: "t_user"}],
    //    id: "308",
    //    hostname: "10.8.1.14",
    //    desc: "开发环境"
    //},
    //{
    //    url: "http://m.ua.md.dongfangfuli.com/union/md/",
    //    title:"宝马工会H5版",
    //    username: "email[ zy10001 ]",
    //    pwd: "111111",
    //    env: [{UNION_NAME: "bmw", H5_UNION_FRONT_DOMAIN:"m.ua.md.dongfangfuli.com/union/{union}/", H5_UNION_SHOP_DOMAIN:"m.md.dongfangfuli.com/union/{union}/", H5_DOMAIN: "m.ua.md.dongfangfuli.com"}],
    //    database: [{database: "dffl_union", tableName: "t_user", conditions:"union_id=7 AND status=2"}],
    //    id: "7242",
    //    hostname: "10.8.1.14",
    //    desc: "开发环境"
    //},
    //{
    //    url: "http://m.md.dongfangfuli.com/union/md/",
    //    title:"宝马工会H5版-福利商城",
    //    username: "email[ union_c4_1001 ]",
    //    //pwd: "111111",
    //    env: [{UNION_NAME: "bmw", H5_UNION_FRONT_DOMAIN:"m.ua.md.dongfangfuli.com/union/{union}/", H5_UNION_SHOP_DOMAIN:"m.md.dongfangfuli.com/union/{union}/", H5_DOMAIN: "m.md.dongfangfuli.com"}],
    //    database: [{database: "dffl_user", tableName: "t_user"}],
    //    id: "308",
    //    hostname: "10.8.1.14",
    //    desc: "开发环境"
    //},
    {
        url: "http://www.diangj.cn",
        title:"店管家H5-线上",
        username: "nickname[ Big Jim ]",
        //pwd: "111111",
        database: [{database: "diangj", tableName: "diangj_customer"}],
        id: "2",
        hostname: "121.41.13.0",
        desc: "开发环境",
        extensions:"微信用户",
    },
    {
        url: "http://sh.diangj.cn",
        title:"店管家H5-商户",
        username: "username[ 沙县小吃 ]",
        pwd: "123456",
        database: [{database: "diangj", tableName: "diangj_merchants"}],
        id: "5",
        hostname: "121.41.13.0",
        desc: "开发环境"
    },
];
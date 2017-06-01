/**
 * Created by jim on 2017/6/1.
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
        title:"东方福利网-前台",
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
        title:"东方福利网-H5",
        username: "user_name[ jimm ]",
        pwd: "123456",
        _ENV: [],
        database: [{database: "dffl_user", tableName: "t_user"}],
        id: "204",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
    {
        url: "http://jim.psf.com",
        username: "username[ 用户名1 ]",
        pwd: "123456",
        _ENV: [],
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
        _ENV: [],
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
        _ENV: [],
        database: [{database: "dffl_admin", tableName: "merchant_users", roles: "三方店铺管理员", permissions: "部分"}],
        id: "128",
        hostname: "10.8.1.14",
        desc: "开发环境"
    },
];
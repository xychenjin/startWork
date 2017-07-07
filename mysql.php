<?php
/**
 * Created by PhpStorm.
 * User: jim
 * Date: 2017/7/5
 * Time: 13:43
 */
if (!session_id()) {
    session_start();
}

//$con = mysqli_connect('localhost', 'jim', '123456', '', 3306) or die(0);
//$res = mysqli_query($con, 'select version()');

if (isset($con) && is_object($con) && $version = mysqli_fetch_array($res)) {
    $timeSql = mysqli_query($con, 'select current_timestamp()');
    $time = mysqli_fetch_row($timeSql);
    $currentUserSql = mysqli_query($con, 'select user()');
    $user = mysqli_fetch_row($currentUserSql);

    echo "<h1 style='display: block;margin: 120px auto 0;text-align: center'>数据库连接成功！</h1>";
    echo "<p style='margin: 120px auto 0; text-align: center; width: 450px;height:auto;display: block'>版本号：" . $version[0] . "<br/>"
        . "当前用户：" . $user[0] . "<br />"
        . "当前时间：" . $time[0]
        . "</p>";

    $variables = mysqli_query($con, 'SHOW GLOBAL VARIABLES');
    echo "<h1 style='display: block;margin: 120px auto 0;text-align: center'>Mysql配置：</h1>";
    echo "<ul style='margin: 12px auto 0; text-align: center; width: 450px;height:auto;display: block'>";
    while ($row = mysqli_fetch_array($variables)) {
        echo "<li>" . $row[0] . " : " . $row[1] . "</li>";
    }
    echo "</ul>";


    echo "<style>body{overflow-x: hidden;margin: 0 auto;height: auto;width: 100%; } li{display: inline-block;width: 100%;text-align: left;height:auto;word-break: break-all;}li:nth-child(odd){background: #EFEFF4;}</style>";
} else {
    echo "<h1>数据库连接失败！请重试</h1>";

}

//mysqli_close($con);








?>


<p>
    this is the short tag mark.
</p>

<div class="wrap">
</div>
<div id="row"><?php echo "张三"; ?></div>


<?= 'hhhhhhhhhhhh' ?>



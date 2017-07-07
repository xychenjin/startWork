<?php
/**
 * Created by PhpStorm.
 * User: jim
 * Date: 2017/7/7
 * Time: 11:22
 */

try {

} catch (\Exception $e ) {
    throw $e;
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>轻便式创建web动态文档</title>


    <style>
        body{
            margin: 0 auto;
            width: 100%;
            height:auto;
            overflow-y: scroll;
            overflow-x: hidden;
        }
        li,a{
            text-decoration: none;
            list-style-type: none;
        }

    </style>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="container">
    <p>需要安装插件：Emement everywhere, 前身是Zen coding</p>
    <p>想要代码写得少跑得快，需要配置 Live Templates</p>
    
    <ul class="nav">
        <li><a href="">第 1 步</a></li>
        <li><a href="">第 2 步</a></li>
        <li><a href="">第 3 步</a></li>
        <li><a href="">第 4 步</a></li>
        <li><a href="">第 5 步</a></li>
    </ul>

    <div class="container-body">
        <h1>第 1 步</h1>
        <div class="content">
            <p> &middot;1 </p>
        </div>
    </div>
    <div class="container-body">
        <h1>第 2 步</h1>
        <div class="content">
            <p> &middot;2 </p>
        </div>
    </div>
    <div class="container-body">
        <h1>第 3 步</h1>
        <div class="content">
            <p> &middot;3 </p>
        </div>
    </div>
    <div class="container-body">
        <h1>第 4 步</h1>
        <div class="content">
            <p> &middot;4 </p>
        </div>
    </div>
    <div class="container-body">
        <h1>第 5 步</h1>
        <div class="content">
            <p> &middot;5 </p>
        </div>
    </div>


    <div class="footer">
        <ul>
            <li><a href="" class="link">第 1 步</a></li>
            <li><a href="" class="link">第 2 步</a></li>
            <li><a href="" class="link">第 3 步</a></li>
            <li><a href="" class="link">第 4 步</a></li>
            <li><a href="" class="link">第 5 步</a></li>
        </ul>
    </div>

    table>(thead>tr>td*5)+(tbody>tr*5>td)
    <table>
        <thead>
        <tr>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 3</td>
            <td>column 4</td>
            <td>column 5</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td> content 1</td>
            <td> content 2</td>
            <td> content 3</td>
            <td> content 4</td>
            <td> content 5</td>
        </tr>
        <tr>
            <td> content 1</td>
            <td> content 2</td>
            <td> content 3</td>
            <td> content 4</td>
            <td> content 5</td>
        </tr>
        <tr>
            <td> content 1</td>
            <td> content 2</td>
            <td> content 3</td>
            <td> content 4</td>
            <td> content 5</td>
        </tr>
        <tr>
            <td> content 1</td>
            <td> content 2</td>
            <td> content 3</td>
            <td> content 4</td>
            <td> content 5</td>
        </tr>
        <tr>
            <td> content 1</td>
            <td> content 2</td>
            <td> content 3</td>
            <td> content 4</td>
            <td> content 5</td>
        </tr>
        </tbody>
    </table>

    ul>li{item$@-}*5
    <ul>
        <li>item5</li>
        <li>item4</li>
        <li>item3</li>
        <li>item2</li>
        <li>item1</li>
    </ul>

    form:get>input:t+input:b+input:p+input:f+button
    <form action="" method="get"><input type="text" name="" id=""><input type="button" value=""><input
                type="password" name="" id=""><input type="file" name="" id="">
        <input type="submit" value="提交">
    </form>

    select+
    <select name="" id="">
        <option value=""></option>
        <option value="">text 1</option>
        <option value="">text 2</option>
        <option value="">text 3</option>
        <option value="">text 4</option>
    </select>

    <table>
        <tr class="col">
            <td class="row"></td>
            <td>item 1</td>
            <td>item 2</td>
            <td>item 3</td>
            <td>item 4</td>
            <td>item 5</td>
        </tr>
    </table>

    <?php

    foreach ( as $index => $index) {

        }
    ?>


    <button type="reset">重置</button>



    <ul><li>不断地让自己接受新的工作，同时也不放弃原有的工作<br></li><li>开始怀疑生活、事业或者工作的意义。<br></li><li>虽然很喜欢自己的工作，但投入过多的时间时有感到很内疚。<br></li><li>有时候会莫名其妙地心烦意乱，甚至感到透不过气来。<br></li><li>你知道你的工作需要感情投入，但不知道怎么做到。<br></li><li>希望对工作更有自信心。<br></li><li>似乎没有其他时间学新的东西。<br></li><li>在工作空闲的时候也很难放松。<br></li><li>有时候会莫名其妙地心烦意乱，甚至感到透不过气来</li></ul>
</div>
</body>
</html>

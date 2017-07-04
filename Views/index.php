<?php
/**
 * Created by PhpStorm.
 * User: jim
 * Date: 2017/6/27
 * Time: 15:46
 */

    $a = 'zhangsan';
    $b = &$a;
    echo $a,$b,"${a}";

    echo 111;

    //add line for test CTRL + T : 从项目库更新代码2

    //This line is my local added. : CTRL + K 提交代码


    //CTRL + SHIFT + K push代码

class MyException extends Exception
{
    public function __construct($message = "", $code = 0, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }

    public function my(){
        $str = '';


        if (empty($aaa) || empty($bbb)) {
        }
        $str .= 'bbb';

        $str .= 'ccc';

    }

}

?>







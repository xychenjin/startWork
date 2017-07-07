<?php
/**
 * Created by PhpStorm.
 * User: jim
 * Date: 2017/7/5
 * Time: 15:23
 */

//echo phpinfo(INFO_MODULES);

$a = 1;
$b = &$a;
$c = $b;
$c = 2;
$b += 1;
$e = false;

echo $a,$b, $c, $e;


class me
{
    public function see()
    {
        
    }

    private function eat()
    {

    }

    protected function sleep()
    {
        foreach ([1,2,3] as $index => $item) {

        }
        
        throw new \Exception('wrong');
    }
    
    
    
}

?>



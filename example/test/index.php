<?php 
	$arr=array('the','melio','and','chennai');
		$string="the melio is the one of the software company in chennai and melio is the popular in chennai";
        $b=explode(" ",$string);
        //print_r($b);
        $c=count($arr);
        //echo "</br>";
        //echo $c;
        $d=count($b);
        //echo $d;
  	        for($i=0;$i<$c;$i++)
  	        {
                for($j=0;$j<$d;$j++)
                {
                	if($arr[$i] == $b[$j])
                	$e="$arr[$i]"." ".$e;
                }
  	        }
        //echo $e; 
 	    $f=explode(" ",$e);   
        //print_r($f);  

        print_r(array_count_values($f));
        

?>



<?php 
    //$arr=array(' $_POST['name']',);
        $str=$_POST["words"];
        $arr=explode(",",$str);

        $string=$_POST["story"];
        $b=explode(" ",$string);
        //print_r($b);s
        $c=count($arr);
        //echo "</br>";
        //echo $c;
        $d=count($b);
        //echo $d;
            for($i=0;$i<$c;$i++)
            {
                for($j=0;$j<$d;$j++)
                {
                    if($arr[$i] == $b[$j])
                    $e="$arr[$i]"." ".$e;
                }
            }
        //echo $e; 
        $f=explode(" ",$e);   
        //print_r($f);  

        print_r(array_count_values($f));
        

?>
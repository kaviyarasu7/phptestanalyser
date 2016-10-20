<html>
<head>
	<title>Text Analyze</title>
</head>
<body>
<h1 style="color: #ccc"><b>Output of Text Analyze</b></h1>
<?php 
	    $result_array="";
        $key_words=$_POST["words"];
        $key_words_array=explode(",",$key_words);

		$paragraph=$_POST["story"];
        $paragraph_array=explode(" ",$paragraph);
        //print_r($b);s
        $words_count=count($key_words_array);
        //echo "</br>";
        //echo $c;
        $paragraph_count=count($paragraph_array);
        //echo $d;
  	        for($i=0;$i<$words_count;$i++)
  	        {
                for($j=0;$j<$paragraph_count;$j++)
                {
                	if($key_words_array[$i] == $paragraph_array[$j])
                	$result_array="$key_words_array[$i]"." ".$result_array;
                }
  	        }
        //echo $e; 
 	    $result=explode(" ",$result_array,-1);   
        //print_r($f);  

        //print_r(array_count_values($result));
        $suresh=array_count_values($result);
        

?>
<p><b>Words:</b></p><?php echo $_POST["words"]; ?></br>
<p><b>Story/Passage:</b></p><?php echo $_POST["story"]; ?></br>
<p><b>Result:</b></p>
<table border="1">
<tr>
	<th><b>word</b></th>
	<th><b>count</b></th>
</tr>
<?php foreach($suresh as $var1 => $var2){ ?>
<tr>
<td><?php echo $var1; ?></td>
<td><?php echo $var2; ?></td>
</tr>
<?php } ?>
</table>

</body>
</html>

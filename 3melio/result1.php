<html>
    <head>
    	<title>Text Analyze</title>
        <link rel="stylesheet" type="text/css" href="css/c3.css">
        <script src="js/d3.js" charset="utf-8"></script>
        <script src="js/c3.js"></script>
        <script src="js/jquery.js"></script>
    </head>
    <body>
        
        <h1 style="color: #ff00bf; text-align:center;"><b>Output of Text Analyze</b></h1>
            <?php 
                    $result_string="";

            	    $key_words=$_POST["words"];
                    
                    $key_words_array1=array_unique(preg_split("/[\s,.]+/",$key_words));

                    $key_words_string=implode( " ", $key_words_array1);
                    
                    $key_words_array2=explode(" ",$key_words_string);
                                          
            		$paragraph=$_POST["story"];

                    $paragraph_array = preg_split("/[\s,.]+/", $paragraph,-1 );

                                   
                    $words_count=count($key_words_array2);
                    
                    $paragraph_count=count($paragraph_array);
                    
              	        for($i=0;$i<$words_count;$i++)
              	        {
                            for($j=0;$j<$paragraph_count;$j++)
                            {
                                
                            	if($key_words_array2[$i] == $paragraph_array[$j])
                                
                            	$result_string .="$key_words_array2[$i]"." ";

                            }
              	        }
                                            
             	    $result_array=explode(" ",$result_string,-1);
                    
                                                                                                 
                    $result_count=array_count_values($result_array);

                    asort($result_count);

                    
            ?>

                <h3><b>Find Words:</b></h3>
                <?php echo $_POST["words"]; ?>
                <h3><b>Story/Passage:</b></h3>
                <?php echo $_POST["story"]; ?>
                <h3 style="color: green;"><b>Table Result:</b></h3>

                    <table border="1">
                        <tr>
                        	<th><b>word</b></th>
                        	<th><b>count</b></th>
                        </tr>
                            <?php foreach($result_count as $var1 => $var2){ ?>
                        <tr>
                            <td><?php echo $var1; ?></td>
                            <td><?php echo $var2; ?></td>
                        </tr>
                            <?php } ?>
                    </table></br>
                        <h3 style="color: green;"><u>Chart Model Result:</u></h3></br >
                                             

                             
                         
                            <div id="chart"></div>
                            
                                <script type="text/javascript">
                                    
                                        var chart= c3.generate({
                                            bindto: '#chart',
                                            data: {
                                            columns: [
                                            <?php foreach($result_count as $var3 => $var4){ ?>
                                                
                                                ['<?php echo $var3; ?>', <?php echo $var4; ?>],

                                            <?php } ?>
                                            ],
                                            type : 'bar'
                                        },
                                        bar:{
                                            width:{
                                                ratio:0.1
                                            }
                                            
                                        }
                                       });
                                </script>     

                                <div id="chart2"></div>
                            
                                     <script type="text/javascript">

                                            var chart= c3.generate({
                                                bindto: '#chart2',
                                                
                                                data: {
                                                columns: [
                                                <?php foreach($result_count as $var3 => $var4){ ?>
                                                    
                                                    ['<?php echo $var3; ?>', <?php echo $var4; ?>],

                                                <?php } ?>
                                                ],
                                                type : 'pie'
                                            },
                                            pie:{
                                                width:{
                                                    ratio:0.1
                                                }
                                                
                                            }
                                           });
                                    </script>
                                    <div id="chart3"></div>
                            
                                     <script type="text/javascript">

                                            var chart= c3.generate({
                                                bindto: '#chart3',
                                                
                                                data: {
                                                columns: [
                                                <?php foreach($result_count as $var3 => $var4){ ?>
                                                    
                                                    ['<?php echo $var3; ?>', <?php echo $var4; ?>],

                                                <?php } ?>
                                                ],
                                                type : 'donut'
                                            },
                                            donut:{
                                                width:{
                                                    ratio:0.1
                                                }
                                                
                                            }
                                           });
                                    </script>
                        
 

    </body>
</html>

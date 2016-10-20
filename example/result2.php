<html>
    <head>
    	<title>Text Analyze</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/c3.css">
        <link rel="stylesheet" type="text/css" href="css/bs.css">
        <link rel="stylesheet" type="text/css" href="css/bootstrapexternal.css">
        <script src="js/d3.js"></script>
        <script src="js/c3.js"></script>
        <script src="js/jquery.js"></script>
        <script src="js/bs1.js"></script>
        <script src="js/bs2.js"></script>
    </head>

<div class="container-fluid">
    <body>
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
                                            
                    $result_array=explode(" ",$result_string,-2);
                    
                                                                                                 
                    $result_count=array_count_values($result_array);

                    asort($result_count);

                    foreach($result_count as $var3 => $var4)
                    { 
                                                
                    }                                 

                     

                    
            ?>
        <div class="row">
            <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 header"><a href="welcome.php">BACK</a><h3 class="text">PHP TEXT ANALYSER</h3></div>
        </div>
        <div class="row">
            <div class="inner col-md-12 col-xs-12 col-sm-12 col-lg-12">
                <h4><b>Find Words:</b></h4>
                <?php echo $_POST["words"]; ?>
                <h4><b>Story/Passage:</b></h4>
                <?php echo $_POST["story"]; ?>
            </div>
        </div>
        <div class="row">
            <div class="total col-md-4 col-xs-4 col-sm-4 col-lg-4 ">
                <center><b class="count"><?php echo $paragraph_count=count($paragraph_array); ?></b></center></br>
                <center><b>Total Words</b></center>
            </div>
            <div class="find col-md-4 col-xs-4 col-sm-4 col-lg-4 ">
               <center><b class="count"><?php echo $words_count=count($key_words_array2); ?></b></center></br> 
               <center><b>Find Words</b></center>   
            </div>
            <div class="top col-md-4 col-xs-4 col-sm-4 col-lg-4 ">
                <center><b class="count"><?php echo $var3; ?></b></center></br>
                <center><b>Top Word</b></center>
            </div>
        </div>
        <div class="row">
            <div class="donut col-md-4 col-xs-4 col-sm-4 col-lg-4 ">
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
            </div>
            <div class="pie col-md-4 col-xs-4 col-sm-4 col-lg-4 ">
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
            </div>
            <div class="bar col-md-4 col-xs-4 col-sm-4 col-lg-4 ">
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
            </div>
        </div>
        </div>
        
        <div class="row">
            <div class="footer col-md-12 col-xs-12 col-sm-12 col-lg-12 "><h4>www.meliosystems.com</h4></div>
        </div>
        </div>
          </body>
</html>      
        

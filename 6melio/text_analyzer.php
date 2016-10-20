<?php 
        
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);

        $data_array=array();
       
        @$key_words=$request->words;

        $data_array['key_words']=$key_words;
                
        $key_words_array1=array_unique(preg_split("/[\s,.]+/",$key_words));

        $key_words_string=implode( " ", $key_words_array1);
        
        $key_words_array2=explode(" ",$key_words_string);
                              
        @$paragraph=$request->story;

        $data_array['paragraph']=$paragraph;
        

        $paragraph_array = preg_split("/[\s,.]+/", $paragraph,-1 );

                       
        $words_count=count($key_words_array2);

        $data_array['words_count']=$words_count;
        
        $paragraph_count=count($paragraph_array);

        $data_array['paragraph_count']=$paragraph_count;

        $result_string="";
        
            for($i=0;$i<$words_count;$i++)
            {
                for($j=0;$j<$paragraph_count;$j++)
                {
                    
                    if($key_words_array2[$i] == $paragraph_array[$j])
                    
                    $result_string .= $key_words_array2[$i]." ";

                }
            }
                                
        $result_array=explode(" ",$result_string,-1);
        
                                                                                     
        $result_count=array_count_values($result_array);


        
        asort($result_count);

        $array_set=array();

        foreach($result_count as $key=>$val)
        {
              $array_set[]=array($key,$val);
        }

        //$arr1=array(array('the',8), array('and',5),array('is',6));
        $data_array['key']=$key;
        
        $data_array['array_set']=$array_set;   

       //$json = array(json_encode($data_array));
        $json = json_encode($data_array);                

        print_r($json);
           
        
        
           

?>
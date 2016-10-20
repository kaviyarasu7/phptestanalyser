var app = angular.module('myApp', []);
	app.controller('formCtrl', function($scope,$http) {
		
		$scope.myFunction = function() {
				
			$http.post("text_analyzer.php",
						{'words':$scope.words,'story' : $scope.story}).success(function(data){
							//console.log(data);
			 	$scope.response = data.array_set;
				$scope.response1 = data.key_words;	
				$scope.response2 = data.paragraph;
				$scope.response3 = data.words_count;	
				$scope.response4 = data.paragraph_count; 
				$scope.response5 = data.key;	
						 	

					var chart= c3.generate({
							bindto: '#chart1',
								data:
									{
										columns: 
											
											
												$scope.response,
											
										type : 'bar'
									},
									bar:{
											width:
											{
												ratio:0.1
											}

										}
					});

					var chart= c3.generate({
							bindto: '#chart2',
								data:
									{
										columns: 
														
												$scope.response,		
											
										type : 'pie'
									},
									pie:{
											width:
											{
												ratio:0.1
											}

										}
					});

					var chart= c3.generate({
							bindto: '#chart3',
								data:
									{
										columns: 
														
												$scope.response,		
											
										type : 'donut'
									},
									donut:{
											width:
											{
												ratio:0.1
											}

										}
					});

			        

			});
		}
	});


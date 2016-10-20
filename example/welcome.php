<html>
	<head>
		<title>welcome</title>
		<script src="js/validate.js" type="text/javascript"></script>
	</head>
	<body>
		<form name="form1" action="result2.php" method="post" onsubmit="return(validate());">
			<h1 style="color: #ff00bf; text-align: center;">Welcome to TextAnalyze App</h1>
			<center><img src="images/text4.jpeg" width="500" height="150"></center></br>
	            <center>
					<table border="0">
						<tr>
							<td><b>Find Words:<b></td>
							<td><textarea rows="2" cols="70" name="words" value="<?php echo $_POST['words']; ?>"></textarea></td>
						</tr>
						<tr>
							<td><b>Story/Passage:<b></td>
							<td><textarea rows="5" cols="70" name="story" value="<?php echo $_POST['story']; ?>"></textarea></td>
						</tr>
						<tr>
							<td></td>
							<td><center><input type="submit" value="Submit"><input type="reset" value="Clear"></center></td>
						</tr>
					</table>
				</center>
		</form>	
	</body>
</html>	

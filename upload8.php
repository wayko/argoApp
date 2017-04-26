<?php
	
	/* Variable declarations */
	$init_dir = "uploads/";
	$invalid_dir = "invalidcode/";
	$studentID = $_POST['subjectinput'];
	$phoneNum = $_POST['phoneinput'];
	$emailInfo = $_POST['emailinput'];
	$monthSelect = $_POST['monthinput'];
	$tempArray = array();
	$semesterBegin = ("01-04-2017");
	$semesterEnd = ("01-05-2017");
	$plus1 = date("d-m-Y",strtotime("+1 day",strtotime($semesterEnd)));
	$minus5 = date("d-m-Y",strtotime("-1 day",strtotime($semesterBegin)));
	$currentDate = date("d-m-Y");
	$messageMonth;
	$usedArray = array();
	$isFound = false;
	$isInvalid = $_POST['invalidcode'];
	$domain = strstr($emailInfo, '@');
	/* End declarations */
	
	/* Verify if textboxes are not empty and formatted correctly */
	if($studentID != NULL && $phoneNum != NULL && $emailInfo != NULL){
		if(ctype_digit($studentID) && $domain == '@live.tcicollege.edu' || ctype_digit($studentID) && $domain == '@tcicollege.edu')
		{
			/* Get Result Function */
	function getResults($messageId)
	{	
		$curlResponseUrl = "https://app.eztexting.com/sending/reports/".$messageId."/?format=json&User=tci&Password=Tciez1"; 
		$curl2 = curl_init(); 
		curl_setopt($curl2,CURLOPT_URL,$curlResponseUrl);
		curl_setopt($curl2, CURLOPT_RETURNTRANSFER, 1);
		// If you experience SSL issues, perhaps due to an outdated SSL cert
		// on your own server, try uncommenting the line below
		curl_setopt($curl2, CURLOPT_SSL_VERIFYPEER, false);
		$response2 = curl_exec($curl2);
		curl_close($curl2);
		var_dump($curlResponseUrl);
		var_dump($response2);
	}
	/* End Get Result Function */

	/* Texting function */
	function sendText($phoneNumb, $codes, $messageM){
		$data = array(
		'User'          => 'tci',
		'Password'      => 'Tciez1',
		'PhoneNumbers'  => $phoneNumb,
		'Subject'       => $messageM . 'Key',
		'Message'       => 'This is the code for https://nytci.electude.com :' . $codes,
		'MessageTypeID' => 1
		);

		$curl = curl_init('https://app.eztexting.com/sending/messages?format=json');
		curl_setopt($curl, CURLOPT_POST, 1);
		curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		// If you experience SSL issues, perhaps due to an outdated SSL cert
		// on your own server, try uncommenting the line below
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		$response = curl_exec($curl);
		curl_close($curl);

		$json = json_decode($response);
		$json = $json->Response;

		if ( 'Failure' == $json->Status ) {
			$errors = array();
		if ( !empty($json->Errors) ) {
			$errors = $json->Errors;
		}

			echo 'Status: ' . $json->Status . "\n" .
		'Errors From Extexting: <li>' . implode(', ' , $errors) . '</li>';
		} else {
			$phoneNumbers = array();
		if ( !empty($json->Entry->PhoneNumbers) ) {
			$phoneNumbers = $json->Entry->PhoneNumbers;
		}

		$localOptOuts = array();
		if ( !empty($json->Entry->LocalOptOuts) ) {
			$localOptOuts = $json->Entry->LocalOptOuts;
		}

		$globalOptOuts = array();
		if ( !empty($json->Entry->GlobalOptOuts) ) {
			$globalOptOuts = $json->Entry->GlobalOptOuts;
		}

		$groups = array();
		if ( !empty($json->Entry->Groups) ) {
		$groups = $json->Entry->Groups;
		}
		$MessageId = $json->Entry->ID;

		echo 
			'<li>'.
			'Status: ' . $json->Status . "\n" .
			'Message ID : ' . $json->Entry->ID . ',' .
			'Subject: ' . $json->Entry->Subject . ',' .
			'Message: ' . $json->Entry->Message . ',' .
			'Message Type ID: ' . $json->Entry->MessageTypeID . ',' .
			'Total Recipients: ' . $json->Entry->RecipientsCount . ',' .
			'Credits Charged: ' . $json->Entry->Credits . ',' .
			'Time To Send: ' . $json->Entry->StampToSend . ',' .
			'Phone Numbers: ' . implode(', ' , $phoneNumbers).
			'</li>';

		getResults($MessageId);

		}
	}
	/* End Texting Funtion */

	/* Mailing Function */

	function sendEmail($email, $subject, $message){
		mail($email, $subject . ' Key', 'This is the code for https://nytci.electude.com :' .$message,'From:electude@tcicollege.edu');
	}
	/* End Mailing Function */

	/* Rename Function */
	function rename_win($oldfile,$newfile) {

	if (!rename($oldfile,$newfile)) {
		if (copy ($oldfile,$newfile)) {
			unlink($oldfile);
			return TRUE;
		}
			return FALSE;
		}
			return TRUE;
	}
	/* End Rename Function */



	/* Get Folder Selection */
	if($monthSelect == "1Month")
	{
		$target_dir = $init_dir . "1Month/";  
		$messageMonth = "1Mnth ";
	}
	else if($monthSelect == "3Month")
	{
		$target_dir = $init_dir . "3Month/";
		$messageMonth = "3Mnth ";

	}
	else
	{
		$target_dir = $init_dir . "1Month/";
	}
	/* End Folder Selection */

	/* Date Comparison */
	if(strtotime($currentDate) > strtotime($plus1))
	{
		print_r("Semester has ended");
	}
	else if(strtotime($currentDate) < strtotime($minus5))
	{
		print_r("Semester has not begun");
	}
	else if(strtotime($currentDate) < strtotime($plus1) && strtotime($currentDate) > strtotime($minus5))
	{
		$target_file = array_slice(scandir($target_dir),2);

		foreach($target_file as $key => $value)
		{
			if(strlen($value) == 27)
			{	
				array_push($tempArray,$value);
			}
			else
			{
				array_push($usedArray,$value);
			}
		}
		
		
		
		while(list(, $val) = each($usedArray)){
		if (substr($val,0,6) == $studentID)
		{
			$codeFound = substr($val,22,19);
			print_r($studentID . ' is found <br /> Their code is ' . $codeFound . "<br />");
			$isFound = true;
			
			
			if($isInvalid == 'invalidcode')
			{
				copy($target_dir . $val,$invalid_dir . 'invalid'.$val);
				unlink($target_dir . $val);
				$currentFile = $tempArray[0];
				$info = pathinfo($currentFile);
				$code = substr($info['filename'],4);
				$newName = $studentID . '-' . $currentDate . ' ' . $currentFile;

				print_r("Only " . count($tempArray) . " files left for distribution <br />");
				$oldFileName = $target_dir . $currentFile;
				$newFileName = $target_dir. $newName;
				
				rename_win($oldFileName,$newFileName );
				
				print_r("Old filename: " . $currentFile . "<br /> New filename: ". $newName . "<br />"); 
				print_r("Student ID: " . $studentID . "<br /> Mobile Number: ". $phoneNum . "<br />" . $code);

				sendText($phoneNum,$code,$messageMonth);
				sendEmail($emailInfo,$messageMonth,$code);
			}
			else
			{
			sendText($phoneNum,$codeFound,$messageMonth);
			sendEmail($emailInfo,$messageMonth,$codeFound);
			}
			
			
			
			break 1;	
		}	
	} 
	if($isFound == false)
	{
		$currentFile = $tempArray[0];
				$info = pathinfo($currentFile);
				$code = substr($info['filename'],4);
				$newName = $studentID . '-' . $currentDate . ' ' . $currentFile;

				print_r("Only " . count($tempArray) . " files left for distribution <br />");
				$oldFileName = $target_dir . $currentFile;
				$newFileName = $target_dir. $newName;
				
				rename_win($oldFileName,$newFileName );
				
				print_r("Old filename: " . $currentFile . "<br /> New filename: ". $newName . "<br />"); 
				print_r("Student ID: " . $studentID . "<br /> Mobile Number: ". $phoneNum . "<br />" . $code);

				sendText($phoneNum,$code,$messageMonth);
				sendEmail($emailInfo,$messageMonth,$code);
			}
		}
	}
	else
	{
		if(ctype_digit($studentID) == false){
		print_r("Student ID must be numerical <br />");
		}
		if($domain != '@live.tcicollege.edu' || $domain != '@tcicollege.edu')
		{
			print_r($domain . "<br /> Email should be either from @live.tcicollege.edu or @tcicollege.edu domain<br/>");
		}
	}
	}
	else
	{
		if($studentID == NULL)
		{
			print_r("Student Field must be populated </br>");
		}
		if($phoneNum == NULL)
		{
			print_r("Phone Number Field must be populated<br />");
		}
		if($emailInfo == NULL)
		{
			print_r("Email Field must be populated<br />");
		}
	}
	/* End of Verification Section */
		

?>
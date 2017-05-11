<?php

$returnArray = array();
$rowArray = array();
$tempArray = array();
$usedArray = array();
$cellNumber;
$init_dir = "uploads/";
$isFound = false;
$invalid_dir = "invalidcode/";
$messageMonth;
$i = 0;
$currentDate2 = date("d-m-Y");
$con = odbc_connect("Driver={SQL Server};Server=T3-CAMPUSVUESQL;Database=C2000", "admstat", "b4v0e1jj");

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
	
	function writeText($phoneNumb, $codes, $messageM, $email)
	
	{
		echo $email . '-' .$phoneNumb . '-' . $messageM . '-' . $codes . '<br />';
	}
	

	/* Texting function */
	function sendText($phoneNumb, $codes, $messageM)
	{
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
	function rename_win($oldfile,$newfile) 
	{

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




if (!$con)
  {
 print_r("Not Connected");
  }
  
 $sql ="SELECT StuNum, Phone, MobileNumber, StudentName, OtherPhone, email, TermStartDate, TermEndDate FROM cst_AdAutoStudentCurrentTerm_TCI_AF_vw";
  $result = odbc_exec($con,$sql);
  $count = odbc_num_rows($result);
	

	if($count<1){
	echo("No student Found");
}
else {
	for($i = 0; $i < $count; $i++)
	{
		
	while($row = odbc_fetch_row($result))
	{
	
		$stuNum = odbc_result($result, 'StuNum');
		$stuName = odbc_result($result, 'StudentName');
		$stuEmail = odbc_result($result, 'email');
		$stuMobile = odbc_result($result, 'MobileNumber');
		$stuOther = odbc_result($result, 'OtherPhone');
		$stuPhone = odbc_result($result, 'Phone');
		$startDate = odbc_result($result, 'TermStartDate');
		$endDate = odbc_result($result, 'TermEndDate');
		
		$rowArray['StuNum'] = $stuNum;
		$rowArray['StudentName'] = $stuName;
		$rowArray['email'] = $stuEmail;
		$rowArray['MobileNumber'] = $stuMobile;
		$rowArray['OtherNumber'] = $stuOther;
		$rowArray['Phone'] = $stuPhone;
		$rowArray['TermStartDate'] = $startDate;
		$rowArray['TermEndDate'] = $endDate;
		
		array_push($returnArray,$rowArray);
	}
}
}

$currentDate = date("m/d/Y");
$amountOfDays = strtotime($currentDate) - strtotime($startDate) ;
/* print_r($currentDate  . ' ' . $startDate . '  ' .$amountOfDays .' '.floor($amountOfDays / (60 * 60 * 24)) . '<br/>'); */
if(floor($amountOfDays / (60 * 60 * 24)) < 28)
{
	$target_dir = $init_dir . "1Month/";  
	$messageMonth = "1Mnth ";
}	
else
{
	$target_dir = $init_dir . "3Month/";
	$messageMonth = "3Mnth ";
}


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

$studentList = json_encode($returnArray);
$fullList = json_decode($studentList); 




foreach($fullList as $fList)
  {
	  
	$fStuNumBroken = $fList->StuNum;
	$fStuName = $fList->StudentName;
	$fMoble = $fList->MobileNumber;
	$fOther = $fList->OtherNumber;
	$fPhone = $fList->Phone;
	$fEmail = $fList->email;
	$fStuNum = substr($fStuNumBroken,0,6);
	if($fMoble == "" || $fMoble == NULL)
	{
		if($fOther == "" || $fOther == NULL)
		{
			if($fPhone == "" || $fPhone == NULL)
			{
				echo("No Number Attached");
			}
			else
			{
				$cellNumber = $fPhone;
			}
		}
		else
		{
			$cellNumber = $fOther;
		}
	}
	else
	{
		$cellNumber = $fMoble;
	}
	$phone = preg_replace('/\D+/', '', $cellNumber);
	//echo $phone . '<br />';
	
	while(list(, $val) = each($usedArray)){
		if (substr($val,0,6) == $fStuNum)
		{
			$codeFound = substr($val,22,19);
			print_r($studentID . ' is found <br /> Their code is ' . $codeFound . "<br />");
			$isFound = true;
			writeText($phone,$codeFound,$messageMonth);
			//sendText($phoneNum,$codeFound,$messageMonth);
			//sendEmail($emailInfo,$messageMonth,$codeFound);
			}
			
			
			
			break 1;	
		}
	if($isFound == false)
	{
	
		$currentFile = $tempArray[$i];
				$info = pathinfo($currentFile);
				$code = substr($info['filename'],4);
				$newName = $fStuNum . '-' . $currentDate2 . ' ' . $currentFile;

				//print_r("Only " . count($tempArray) . " files left for distribution <br />");
				$oldFileName = $target_dir . $currentFile;
				$newFileName = $target_dir. $newName;
				
				rename_win($oldFileName,$newFileName );
				
				//print_r("Old filename: " . $currentFile . "<br /> New filename: ". $newName . "<br />"); 
				//print_r("Student ID: " . $fStuNum . "<br /> Mobile Number: ". $phone . "<br />" . $code);
				writeText($phone,$code,$messageMonth, $fEmail);
				//sendText($phone,$code,$messageMonth);
				//sendEmail($fEmail,$messageMonth,$code);
				$i = $i+1;
	}
  }


?>
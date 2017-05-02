<?php

$returnArray = array();
$rowArray = array();
$cellNumber;
$init_dir = "uploads/";
$invalid_dir = "invalidcode/";
$messageMonth;

$con = odbc_connect("Driver={SQL Server};Server=T3-CAMPUSVUESQL;Database=C2000", "admstat", "b4v0e1jj");
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
print_r($currentDate  . ' ' . $startDate . '  ' .$amountOfDays .' '.floor($amountOfDays / (60 * 60 * 24)) . '<br/>');
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

/* echo $result['StuNum'];*/
$studentList = json_encode($returnArray);
$fullList = json_decode($studentList); 


foreach($fullList as $fList)
  {
	  
	$fStuNum = $fList->StuNum;
	$fStuName = $fList->StudentName;
	$fMoble = $fList->MobileNumber;
	$fOther = $fList->OtherNumber;
	$fPhone = $fList->Phone;
	
  }

  print_r($target_dir);
?>
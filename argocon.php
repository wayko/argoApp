<?php

$returnArray = array();
$cellNumber;
$con = odbc_connect("Driver={SQL Server};Server=T3-CAMPUSVUESQL;Database=C2000", "admstat", "b4v0e1jj");
if (!$con)
  {
 print_r("Not Connected");
  }
  
 $sql ="SELECT StuNum, Phone, MobileNumber, StudentName, OtherPhone, email, TermStartDate, TermEndDate FROM cst_AdAutoStudentCurrentTerm_TCI_AF_vw";
  $result = odbc_exec($con,$sql);
  $count = odbc_num_rows($result);
	
	echo "<table><tr>";
	if($count<1){
	
}
else {
	for($i = 0; $i < $count; $i++)
	{
		
	while($row = odbc_fetch_row($result))
	{
	
		echo '<td class="red">'.odbc_result($row, 'StuNum').'</td>';
		echo '<td class="red">'.odbc_result($row, 'StudentName').'</td>';
		echo '<td class="red">'.odbc_result($row, 'email').'</td>';
		echo '<td class="red">'.odbc_result($row, 'MobileNumber').'</td>';
		echo '<td class="red">'.odbc_result($row, 'OtherPhone').'</td>';
		echo '<td class="red">'.odbc_result($row, 'Phone').'</td></tr>';
		
		$rowArray['StuNum'] = $row['StuNum'];
		$rowArray['StudentName'] = $row['StudentName'];
		$rowArray['email'] = $row['email'];
		$rowArray['MobileNumber'] = $row['MobileNumber'];
		$rowArray['OtherNumber'] = $row['OtherNumber'];
		$rowArray['Phone'] = $row['Phone'];
		
		array_push($returnArray,$rowArray);
	}
}
}

echo '</table>';

echo $result['StuNum'];
$studentList = json_encode($returnArray);
$fullList = json_decode($studentList);

  
?>
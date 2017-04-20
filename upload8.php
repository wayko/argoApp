<?php
$target_dir = "uploads/";
$studentID = $_POST['subjectinput'];
$phoneNum = $_POST['phoneinput'];
$target_file = array_slice(scandir($target_dir),2);// . realpath($_FILES["fileToUpload"]["name"]);

$tempArray = array();
//$newFileName = rename($target_file, $newName);
foreach($target_file as $key => $value){
	if(strlen($value) == 27)
	{	
	array_push($tempArray,$value);
	
	
	}
}

print_r("Only " . count($tempArray) . " files left for distribution <br />");
$currentFile = $tempArray[0];
$info = pathinfo($currentFile);
$code = substr($info[filename],4);
$newName = $studentID . '-' . date("d-m-Y") . ' ' . $currentFile;
rename($target_dir . $currentFile, $target_dir. $newName);

print_r("Old filename: " . $currentFile . "<br /> New filename: ". $newName . "<br />"); 
print_r("Student ID: " . $studentID . "<br /> Mobile Number: ". $phoneNum . "<br />" . $code);



$data = array(
    'User'          => 'tci',
    'Password'      => 'Tciez1',
    'PhoneNumbers'  => $phoneNum,
    'Subject'       => 'Argo Key',
    'Message'       => $code,
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

?>

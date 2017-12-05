<?php
$xmldat = simplexml_load_file("ResultsReport.xml") or die("Error: Cannot create object");
$i=1;
$stringarray = array();
$stringnotarray = array();
if(!empty($xmldat)) {
	foreach($xmldat as $resulset) {
		if(!empty($resulset->mm_displaystr)) {
			$basestring = $resulset->mm_displaystr;
			$basestring_split = explode('{{',$basestring);
			if(isset($basestring_split[1])){
				$requries_string = $basestring_split[1];
				
				$strposlast = strpos($requries_string, "|");
				$strposlastFilter = substr($requries_string,0,$strposlast);
				if (strpos($strposlastFilter,'$') !== false) {
					$strposlastFinally = $strposlastFilter;
					$stringnotarray[] = $strposlastFilter;
				} else {
					$strposlastFinally = substr($strposlastFilter,1,-1);
				}
				if(!empty($strposlastFinally) && strpos($strposlastFilter,'$') === false) {
					/*$Insstring_single = str_replace("'","&#39;",$strposlastFinally);
					$Insstring_comma = str_replace(",","&#44;",$Insstring_single);
					$stringarray[$Insstring_comma]= $Insstring_comma;*/
					$stringarray[$strposlastFinally]= $strposlastFinally;
					$i++;
				}
			}
		}
	}
}
$xmfinalarray = array();
if(!empty($stringarray)) {
	array_unique($stringarray);
	foreach($stringarray as $stringarraydata) {
		/*if(substr($stringarraydata, -5) == "&#39;"){
			$xmfinalarray[$stringarraydata] = substr($stringarraydata,0,-5);
		} else {
			$xmfinalarray[$stringarraydata] = $stringarraydata;
		}*/
		if(substr($stringarraydata,-1) == "'" || substr($stringarraydata,-1) == "\"") {
			$stringarraydata = substr($stringarraydata,0,-1);
		}
		if(substr($stringarraydata, 0,1) == "'" || substr($stringarraydata, 0,1) == "\"") {
			$stringarraydata = substr($stringarraydata,1);
		}
		$xmfinalarray[$stringarraydata] = $stringarraydata;
	}
}
$xmldat = simplexml_load_file("ResultsReport2.xml") or die("Error: Cannot create object");
$i=1;
$stringarray = array();
$stringnotarray = array();
if(!empty($xmldat)) {
	foreach($xmldat as $resulset) {
		if(!empty($resulset->mm_displaystr)) {
			$basestring = $resulset->mm_displaystr;
			$basestring_split = explode('{{',$basestring);
			if(isset($basestring_split[1])){
				$requries_string = $basestring_split[1];
				
				$strposlast = strpos($requries_string, "|");
				$strposlastFilter = substr($requries_string,0,$strposlast);
				if (strpos($strposlastFilter,'$') !== false) {
					$strposlastFinally = $strposlastFilter;
					$stringnotarray[] = $strposlastFilter;
				} else {
					$strposlastFinally = substr($strposlastFilter,1,-1);
				}
				if(!empty($strposlastFinally) && strpos($strposlastFilter,'$') === false) {
					/*$Insstring_single = str_replace("'","&#39;",$strposlastFinally);
					$Insstring_comma = str_replace(",","&#44;",$Insstring_single);
					$stringarray[$Insstring_comma]= $Insstring_comma;*/
					$stringarray[$strposlastFinally]= $strposlastFinally;
					$i++;
				}
			}
		}
	}
}
if(!empty($stringarray)) {
	array_unique($stringarray);
	foreach($stringarray as $stringarraydata) {
		/*if(substr($stringarraydata, -5) == "&#39;"){
			$xmfinalarray[$stringarraydata] = substr($stringarraydata,0,-5);
		} else {
			$xmfinalarray[$stringarraydata] = $stringarraydata;
		}*/
		if(substr($stringarraydata,-1) == "'" || substr($stringarraydata,-1) == "\"") {
			$stringarraydata = substr($stringarraydata,0,-1);
		}
		if(substr($stringarraydata, 0,1) == "'" || substr($stringarraydata, 0,1) == "\"") {
			$stringarraydata = substr($stringarraydata,1);
		}
		$xmfinalarray[$stringarraydata] = $stringarraydata;
	}
}
//$resultset="";
//$resultset = array_diff($xmfinalarray,$csvarray);
//echo json_encode($xmfinalarray);exit;
//print_r($xmfinalarray);exit;
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "abssalvador";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$k = "DELETE FROM `translations`";
$delete_result = $conn->query($k);
if (!empty($xmfinalarray)) {
	foreach ($xmfinalarray as $value) {
		$insert_lang = "INSERT INTO `translations` (`id`, `created_at`, `updated_at`, `language_id`, `key`, `lang_text`, `is_translated`, `is_google_translate`, `is_verified`) VALUES
		(NULL, '".date('Y-m-d h:i:s')."', '".date('Y-m-d h:i:s')."','42', '".$value."','".$value."', 0, 0, 1)";
		$insert_result = $conn->query($insert_lang);
	}
}
exit;
//file_put_contents('lx.json', json_encode($xmfinalarray, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
?>
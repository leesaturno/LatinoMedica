<?php
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
$request_body = file_get_contents('php://input');
if (!empty($request_body)) {
	$datas = json_decode($request_body, true);	
	$language_iso2 = 'es';	
	unset($_POST['googtrans']);
	if ($language_iso2 != "en") {
		$language_id = "";
		$lang_sql = "SELECT * FROM `languages` WHERE `iso2`= '".$language_iso2."'";
		$lang_result = $conn->query($lang_sql);
		if ($lang_result->num_rows > 0) {
			while($row = $lang_result->fetch_assoc()) {
				$language_id = $row['id'];
				$k = "DELETE FROM `translations` WHERE `language_id` = ".$row['id'];
				$delete_result = $conn->query($k);
			}
		}
		$incremet_trans = 0;
		if ($language_id != "") {
			foreach ($datas as $data) {
				if (!is_array($value)) {
					$insert_lang = "INSERT INTO `translations` (`created_at`, `updated_at`, `language_id`, `key`, `lang_text`, `is_translated`, `is_google_translate`, `is_verified`) VALUES
					('".date('Y-m-d h:i:s')."', '".date('Y-m-d h:i:s')."',".$language_id.", '".$data['language']."','".$data['value']."', 1, 1, 0)";
					$insert_result = $conn->query($insert_lang);
					$incremet_trans++;
				}
			}
			$update_lang_count = "UPDATE `languages` SET `translation_verify_count`= 0, translation_not_verified_count`= ".$incremet_trans."  WHERE `id` = ".$row['id'];
			$delete_update_lang_count = $conn->query($update_lang_count);
			echo 'successfully translated';
			echo '<a href=http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'>Go back</a>';
			exit;
		} else {
			echo 'successfully translated';
			echo '<a href=http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'>Go back</a>';
			exit;
		}
	} else {
		echo 'successfully translated';
		echo '<a href=http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'>Go back</a>';
		exit;
	}
}
?>
<!DOCTYPE html>
<html lang='en'>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
</head>
<body data-lang="<?php echo $_GET['lang'];?>">
<div id="google_translate_element">
</div>
<script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element");
        };

        $(function () {
            $.getScript("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
            setTimeout(function(){
              $(".goog-te-combo").change(function () {
				$('#iso2_key').val($(this).val());
              });
            }, 2000);
			$('.js-lang-sub').click(function(){
				var formData = [];
				$('.js-class-lang').each(function(){
					var str = $(this).html().replace('<font><font>','').replace('</font></font>','');
				  $('#'+$(this).attr('data-id')).val(str);
				  var en_str = $('#'+$(this).attr('data-id')).attr('name');
				  if(typeof(en_str) != 'undefined' && en_str != 'undefined') {
					formData.push({
						language : en_str,
						value : str
					});
				 }
				});
				console.log(JSON.stringify(formData));
				//$("#google_id").submit();
				$.ajax({
					url: "google_translation.php",
					type: 'POST',
					contentType: 'application/json',
					data: JSON.stringify(formData),
					success: function (data) {
						console.log(data);
					},
					error: function (textStatus, jqXHR, errorThrown) {
						swal('Sorry, but this page timed out. Please refresh your browser and try this action again. Thank you.');
					},
				});
			});
        });
    </script>

<?php
$lang = 'en';
if (!empty($_GET['lang'])) {
    $lang = $_GET['lang'];
}
$json_sql = "SELECT * FROM `translations` WHERE `language_id` = 42";
$results = $conn->query($json_sql);
if ($results->num_rows > 0) {
	$i = 0;
	$textarea = '';
	$t1 = array();
	while($rows = $results->fetch_assoc()) {
		$k = $rows['key'];
		$v = $rows['lang_text'];
		$t1['translation_' . $i] = $k;
		if (strpos($k, '{{count}}') !== false) {
			$textarea .= '<div><label class="js-class-lang translation_' . $i . '" data-id="translation_' . $i . '">' . $v . '</label><textarea id="translation_' . $i . '" name="translation_' . $i . '">' . $k . '</textarea></div>';
		} else {
			$textarea .= '<div><label class="js-class-lang" data-id="translation_' . $i . '">' . $k . '</label><textarea id="translation_' . $i . '" name="' . $k . '">' . $v . '</textarea></div>';
		}
		$i++;
	}
}

echo '<form name="translation" method="post" accept-charset="UTF-8" id="google_id" enctype="multipart/form-data">';
echo '<input type="text" name="googtrans" id="iso2_key" class="notranslate js-class-lang">';
echo '<input type="button" value="Submit" class="js-lang-sub notranslate">';
echo $textarea;
echo '</form>';
?>
</body>
</html>
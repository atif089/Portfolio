<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		
		<?php
		if ($handle = opendir('.')) {
		while (false !== ($entry = readdir($handle))) {
		if ($entry != "." && $entry != ".." && stristr($entry, "html") == true) {
		echo "<a href=\"$entry\">$entry</a><br>\n";
		}
		}
		closedir($handle);
		}
		?>
	</body>
</html>
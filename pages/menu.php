<?php

$menu = array("Home" => "home"); 
$menu["About"]   = "about"; 
$menu["Contact"] = "contact";

?>

<div class="menu">
	
<?php
foreach($menu as $key => $value) {
	$lowerkey = strtolower($key);
	echo "<a href='#$value' class='menulink $value" . "_link' title='$key: Trebella'>$key</a>";
}

?>
</div> <!-- end div menu -->
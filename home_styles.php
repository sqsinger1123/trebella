<?php header("Content-type: text/css"); ?>

<?php
	// Theme colors
	$highlight_color = "#A00";

	
?>

/****************************************************************************
 * Trebella and Samuel Q Singer present:
 * styles.php
 *
 * Currently included for demonstration purposes only; not integrated
 * within the current mockup version.
 *
 * Inspired by the article on PHP for dynamic stylesheets:
 *   	http://www.barelyfitz.com/projects/csscolor/
 *
 *
 * Dynamic global stylesheet by Sam Singer, for use on his website and others.
 * This is a CSS stylesheet generated with PHP code.
 * The developer may routinely "re-compile" the stylesheet, as it were. 
 ***************************************************************************/


/* Custom Master classes */

/* Margin and Padding Master Classes... */
<?php
	$types = array("m"=>"margin", "p"=>"padding");
	
	// Outputs pattern: .m0 {margin:0px} \n .m5 {margin:5px;} etc.
	foreach($types as $k => $v) {
		for($i=0; $i<=100; $i+=5) {
			echo ".{$k}$i { {$v}:{$i}px; }\n";
		}
		echo "\n";
	}
?>

/* Height and Width Master % Classes... */
<?php
	$types = array("w"=>"width", "h"=>"height", "maxw" => "max-width", "minw" => "min-width", );
	
	foreach($types as $k => $v) {
		for($i=0; $i<=100; $i+=5) {
			echo ".{$k}$i% { {$v}:{$i}%; }\n";
		}
		echo "\n";
	}
?>




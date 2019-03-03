<center><?php
$gbc ='<br><br><a href="index.php"><b><font size="5">Go Back</font></b></a>';

if(isset($_POST['c1name'],$_POST['c1class'],$_POST['c2name'],$_POST['c2class'],$_POST['sc_name'],$_POST['sc_address']
	,$_POST['sc_mob'],$_POST['sc_em'])) // Checking if all datas are sent
{
	if(
		(
			(
				empty($_POST['c1name']) || empty($_POST['c1class'])
			)
			||
			(
				empty($_POST['c2name']) || empty($_POST['c2class'])
			)
		)
		||
		(
			(
				empty($_POST['sc_name']) || empty($_POST['sc_address'])
			)
			||
			(
				empty($_POST['sc_mob']) || empty($_POST['sc_em'])
			)
		)
	)
	{
		// The last `if` was for checking every feild are not empty
		die("<br><br><br><br><br><b>Please Fill The Required Feilds</b>".$gbc);
	}



		$to = "getwebloud@gmail.com"; // You can list Emails with seperating with a comma
		$message = "
Candidate 1  -- ".$_POST['c1name']." -- Class ".$_POST['c1class']."
Candidate 2  -- ".$_POST['c2name']." -- Class ".$_POST['c2class']."
\n
School : ".$_POST['sc_name']." \n
School Address
=====================
".$_POST['sc_address']."
\n
Mobile : ".$_POST['sc_mob']."
Email : ".$_POST['sc_em']."
\n\n
Ip Address : ".$_SERVER['REMOTE_ADDR']."
"; // Just edit coontents 



	$subject = "Technitia Registeration";

	if($x = mail($to,$subject,$message,$headers)){
		echo "Registered Success Fully<br>";
	}
	else{
		echo "Error While Registering , Try again or Contact Admin";
	}
	echo $gbc;
}
else{
	die("<br><br><br><br><br><b>Some Required Datas Are Missing</b>".$gbc);	
}
?>
</center>
	
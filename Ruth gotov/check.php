<?php
	$login = filter_var(trim($_POST['login']),
	FILTER_SANITIZE_STRING);

	$name = filter_var(trim($_POST['name']),
	FILTER_SANITIZE_STRING);

	$pass = filter_var(trim($_POST['pass']),
	FILTER_SANITIZE_STRING);

	if(mb_strlen($login) < 5 || mb_strlen($login) > 90){
		echo "Not correct length of login";
		exit();
	} else if(mb_strlen($name) < 3 ||  mb_strlen($name) > 50){
		echo "Not correct length of name";
		exit();
	} else if(mb_strlen($pass) < 2 ||  mb_strlen($pass) > 6){
		echo "Not correct length of password";
		exit();
	}


	$mysql = new mysqli("localhost", "root", "", "register-bd","3306");
	$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`) VALUES('$login', '$pass', '$name')");

	$mysql->close();

	header('Location: /');
	exit;
?>
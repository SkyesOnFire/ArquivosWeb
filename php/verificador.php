<?php
	$email = trim($_POST["email"]);
	$senha = trim($_POST["senha"]);

	$xml_string = file_get_contents("../xml/dados.xml");
	$xml = simplexml_load_string($xml_string);

	$retorno = 0;

	foreach($xml->usuario as $user){
		if($user->email == $email && $user->senha == $senha){
			$retorno = 1;
		}
	}

	$retorno_json = json_encode($retorno);
    echo $retorno_json;

?>
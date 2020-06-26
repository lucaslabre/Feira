<?php

Class Usuario
{
	private $pdo;
	public $msgErro = "";

	public function conectar($nome, $host, $usuario, $senha) /*Parâmetros exigidos no PDO*/
	{
		global $pdo;
		try {
			$pdo = new PDO("mysql:dbname".$nome.";host=".$host,$usuario,$senha);
		} catch (PDOException $e) {
			$msgErro = $e->getMessage();
		}
		
	}

	public function cadastrar($nome, $telefone, $email, $senha)
	{
		global $pdo;
		//Verificar se já existe o e-mail cadastrado
		$sql = $pdo->prepare("SELECT id_usuario FROM usuarios WHERE email = :e");
		$sql->bindValue(":e",$email);
		$sql->execute();
		if($sql->rowCount() > 0)
		{
			return False;  // Pessoa já cadastrada
		}
		else
		{
			//Caso não, Cadastrar
			$sql = $pdo->prepare("INSERT INTO usuarios (nome, telefone, email, senha) VALUES (:n, :t, :e, :s)");
			$sql->bindValue(":n",$nome);
			$sql->bindValue(":t",$telefone);
			$sql->bindValue(":e",$email);
			$sql->bindValue(":s",md5($senha));
			$sql->execute();
			return True; // Tudo OK
		}
		
	}

	public function logar($email, $senha)
	{
		global $pdo;
		// Verificar se o email e a senha já estão cadastrados
		$sql = $pdo->prepare("SELECT id_usuario FROM usuarios WHERE email = :e and senha = :s");
		$sql->bindValue(":e",$email);
		$sql->bindValue(":s",md5($senha));
		$sql->execute();
		if($sql->rowCount() > 0)
		{
			//Entrar no site (sessão)
			$dado = $sql->fetch();
			session_start();
			$_SESSION['id_usuario'] = $dado['id_usuario'];
			return True;  // logado com sucesso
		}
		else
		{
			return False;
		}	
	}
}
?>
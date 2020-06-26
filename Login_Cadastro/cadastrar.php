<?php
	require_once 'CLASSES/usuario.php';
	$u = new Usuario;
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8"/>
	<title>Projeto Login</title>
	<link rel="stylesheet" href="estilo.css">
</head>
<body>
	<div id='corpo-form-cad'>
		<h1>Cadastrar</h1>
		<form method="POST">
			<input type="text" name="nome" placeholder="Nome Completo" maxlength="50">
			<input type="text" name="telefone" placeholder="Telefone" maxlength="14">
			<input type="email" name="email" placeholder="Usuário" maxlength="50">
			<input type="password" name="senha" placeholder="Senha" maxlength="15">
			<input type="password" name="confSenha" placeholder="Confirmar Senha" maxlength="15">
			<input type="submit" value="Cadastrar">
		</form>
	</div>

	<?php
	// verificar se clicou no botão cadastrar
	if(isset($_POST['nome']))
	{
		$nome = addslashes($_POST['nome']);
		$telefone = addslashes($_POST['telefone']);
		$email = addslashes($_POST['email']);
		$senha = addslashes($_POST['senha']);
		$confirmaSenha = addslashes($_POST['confSenha']);
		// verificar se está preenchido
		if(!empty($nome) && !empty($telefone) && !empty($email) && !empty($senha) && !empty($confirmaSenha))
		{
			$u->conectar("projeto_login", "localhost", "root", "");
			if($u->msgErro == "")  // Se estiver tudo OK
			{
				if($senha == $confirmaSenha)
				{
					if($u->cadastrar($nome,$telefone,$email,$senha))
					{
						echo "Cadastrado com sucesso! Acesse para entrar.";
					}
					else
					{
						echo "E-mail já cadastrado!";
					}
				}
				else
				{
					echo "Senha e confirmar senha não correspondem!";
				}
			}
			else
			{
				echo "Erro: ".$u->msgErro;
			}
		}
		else
		{
			echo "Preencha todos os campos!";
		}
	}

	?>
</body>
</html>
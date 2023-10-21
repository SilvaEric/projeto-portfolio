<?php
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);
    $mensagem = addslashes($_POST['mensagem']);

    $destino = "ericsilvaa004@gmail.com";
    $assunto = "Informações para Contato -> de Portfólio";

    $corpoEmail = "Nome: ". $nome."\n"."Email: ". $email."\n"."Celular: ". $celular."\n"."Mensagem: ". $mensagem;

    $cabeca = "From ericgoleiro2004@gmail.com"."\n"."Reply-to: ". $email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destino,$assunto,$corpoEmail,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }

    else{
        echo("Houve um erro ao enviar o email!");
    }
?>
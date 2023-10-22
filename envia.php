<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    </head>
    <body>
        <?php
            $nome = addslashes($_POST['nome']);
            $email = addslashes($_POST['email']);
            $celular = addslashes($_POST['celular']);
            $mensagem = addslashes($_POST['mensagem']);
    
            $destino = "ericsilvaa004@gmail.com";
            $assunto = "Informações para Contato -> Site Portfólio";
    
            $corpoEmail = "Nome: ". $nome."\n"."Email: ". $email."\n"."Celular: ". $celular."\n"."Mensagem: ". $mensagem;
    
            $cabeca = "From: <$email>"."\n"."Reply-to: ". $email."\n"."X=Mailer:PHP/".phpversion();
    
            if(mail($destino,$assunto,$corpoEmail,$cabeca)){
                date_default_timezone_set("America/Sao_Paulo");
                echo("E-mail enviado com sucesso! às") . date("G:i;s") . date("d/M/Y");
            }
    
            else{
                echo("Houve um erro ao enviar o email!");
            }
        ?>
    </body>
</html>
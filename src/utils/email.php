<?php
if(isset($_POST['email']) && !empty($_POST['email'])){
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['message']);
    $assunto = addslashes($_POST['subject']);

    $to = "lauanegonzagasilva@gmail.com";
    $subject = "Contato - ArcaEmbriões: " . $assunto;
    $body = "Nome: " .$nome. "\r\n".
            "Email: " .$email. "\r\n".
            "Mensagem: " .$mensagem;
    $header = "From:lauanegonzagajpmg@gmail.com" . "\r\n". 
              "Reply-To:".$email. "\r\n". 
              "X-Mailer:PHP/" .phpversion();

    if(mail($to, $subject, $body, $header)){
        echo "Email enviado com sucesso";
    } else {
        echo "Email não enviado";
    }
}
?>

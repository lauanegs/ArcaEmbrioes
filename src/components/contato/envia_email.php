<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $assunto = htmlspecialchars($_POST['assunto']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    $to = 'lauanesilva@unipam.edu.br';
    $subject = $assunto;
    $body = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Mensagem enviada com sucesso!';
    } else {
        echo 'Falha ao enviar a mensagem.';
    }
}
?>

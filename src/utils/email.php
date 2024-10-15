<?php
// Verifica se o email foi enviado pelo formulário
if (isset($_POST['email']) && !empty($_POST['email'])) {
    // Sanitiza os dados recebidos do formulário
    $nome = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mensagem = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
    $assunto = htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8');

    // Valida o email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "lauanegonzagasilva@gmail.com";
        $subject = "Contato - ArcaEmbriões: " . $assunto;
        $body = "Nome: " . $nome . "\r\n" .
                "Email: " . $email . "\r\n" .
                "Mensagem: " . $mensagem;
        
        $header = "From: lauanegonzagajpmg@gmail.com" . "\r\n" . 
                  "Reply-To: " . $email . "\r\n" .
                  "Content-type: text/plain; charset=UTF-8" . "\r\n" . 
                  "X-Mailer: PHP/" . phpversion();

        // Tenta enviar o email
        if (mail($to, $subject, $body, $header)) {
            echo json_encode(["message" => "Email enviado com sucesso"]);
        } else {
            echo json_encode(["message" => "Falha ao enviar o email"]);
        }
    } else {
        echo json_encode(["message" => "Email inválido"]);
    }
} else {
    echo json_encode(["message" => "Por favor, preencha todos os campos obrigatórios"]);
}
?>

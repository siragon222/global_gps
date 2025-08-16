<?php
header('Content-Type: application/json');

// Permitir solicitudes desde el origen de tu aplicación React
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Si es una solicitud OPTIONS (preflight), terminar aquí
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Obtener los datos JSON enviados
$data = json_decode(file_get_contents('php://input'), true);

// Validar los datos recibidos
if (!isset($data['name']) || !isset($data['email']) || !isset($data['phone'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos requeridos: nombre, correo o teléfono']);
    exit;
}

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];

// Dirección de correo a la que se enviará el mensaje
$to_email = $data['to_email'];

// Configurar el correo
$subject = 'Nuevo mensaje de suscripción desde la web';
$message = "Nombre: $name\n";
$message .= "Correo electrónico: $email\n";
$message .= "Teléfono: $phone\n";

$headers = "From: info@transportesomegagroup.com\r\n"; // Cambia esto al correo de tu sitio
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Intentar enviar el correo
if (mail($to_email, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el correo']);
}

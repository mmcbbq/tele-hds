<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$privateKey = file_get_contents('../src/Security/privatekey.pem');
$publicKey = file_get_contents('../src/Security/publickey.pem');


$email = $_POST['email'];
$password = $_POST['password'];
$repo = new UserRepository();

$user = $repo->findByEmail($email);
if (password_verify($password, $user->getPassword())) {


    $payload = [
        'iss' => 'example.org',
        'aud' => 'example.com',
        'iat' => 1356999524,
        'nbf' => 1357000000,
        'user' => $user

    ];
    $jwt = JWT::encode($payload, $privateKey, 'RS256');
    header('Content-Type: application/json');
    echo json_encode([
        'message' => 'it worked',
        'token' => $jwt,
    ]);
    exit();

}else{
    header('Content-Type: application/json');
    echo json_encode([
        'message'=> 'email or password is wrong'
    ]);
}















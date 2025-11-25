<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;



$publicKey = file_get_contents('../src/Security/publickey.pem');


$headers = apache_request_headers();
try {
    if(isset($headers['Authorization'])){
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            $token = $matches[1];
            $decode = JWT::decode($token, new Key($publicKey, 'RS256'));
            header('Content-Type: application/json');
//            var_dump($decode);
            echo json_encode([
                'login' => true,
                'message' => "drin",
                'email' => $decode->user->email,
                'role' => $decode->user->role
            ]);
            exit();
        }

}

}catch (Exception $exception){
    echo json_encode([
        'login' => false
        ]
    );
}
<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

//$publicKey = <<<EOD
//-----BEGIN PUBLIC KEY-----
//MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuzWHNM5f+amCjQztc5QT
//fJfzCC5J4nuW+L/aOxZ4f8J3FrewM2c/dufrnmedsApb0By7WhaHlcqCh/ScAPyJ
//hzkPYLae7bTVro3hok0zDITR8F6SJGL42JAEUk+ILkPI+DONM0+3vzk6Kvfe548t
//u4czCuqU8BGVOlnp6IqBHhAswNMM78pos/2z0CjPM4tbeXqSTTbNkXRboxjU29vS
//opcT51koWOgiTf3C7nJUoMWZHZI5HqnIhPAG9yv8HAgNk6CMk2CadVHDo4IxjxTz
//TTqo1SCSH2pooJl9O8at6kkRYsrZWwsKlOFE2LUce7ObnXsYihStBUDoeBQlGG/B
//wQIDAQAB
//-----END PUBLIC KEY-----
//EOD;

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
                'email' => $decode->user->email
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
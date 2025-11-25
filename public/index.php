<?php
include '../config/loader.php';
//set_error_handler(function($severity, $message, $file, $line) {
//    throw new ErrorException($message, 0, $severity, $file, $line);
//});
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$publicKey = file_get_contents('../src/Security/publickey.pem');

$uri = str_replace('/', '', $_SERVER['REQUEST_URI']);
if ($uri === 'getcustomerfiles') {
    $repo = new FileRepository();
    header('Content-Type: application/json');
    echo json_encode($repo->findAll());
    exit();
} elseif ($uri == 'checkautho') {
    require_once '../src/Security/checkAutho.php';
    exit();



} elseif ($uri == 'uploadcustomerfile') {
    header('Content-Type: application/json');
    try {
        $headers = apache_request_headers();
        if (isset($headers['Authorization'])) {
            if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
                $token = $matches[1];
                $decode = JWT::decode($token, new Key($publicKey, 'RS256'));
            }
        }
        if (!in_array('admin',json_decode($decode->user->role))){
            throw new Exception('keine Rechte');
        }
        $repo = new FileRepository();
        $data = array_merge($_POST, ['name' => $_FILES['file']['name'], 'userid' => $decode->user->id]);
        $file = $repo->create($data);
        $file->saveFile();

    }catch (Exception $exception){
        echo json_encode(['message' => $exception->getMessage(),
            'type'=> "danger"]);
    }




//    include '../src/Filemanger/upload.php';
    exit();
} elseif ($uri === 'login') {
    require_once '../src/Security/login.php';
} elseif ($uri === 'signup') {
    $repo = new UserRepository();
//    $data = ['email'=>'test2@test.de','password'=>'123'];
    $user = $repo->create($_POST);

//    header('Content-Type: application/json');
//    echo json_encode($user);
    exit();

}


?>
<!doctype html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">


    <title>Document</title>
    <script type='module' src='assets/js/main.js' defer></script>
    <link rel='stylesheet' type='text/css' href='assets/css/style.css'>
</head>
<body>
<div class="container text-left p-2" style='margin-top: 40px'>
    <span class='tele display-3 fw-bold px-3 ' style=' border-radius: 20px'>
    TELE-HDS
    </span>
    <span class='partner px-3' style=' font-size: 30px'>Ihr starker Partner für alle Services rund ums Internet </span>
</div>
<div id='navplace' class='navspace container p-2 text-center' style='font-size: 30px'></div>
<div id='content' class='content container p-2 text-center d-flex justify-content-around'></div>
<div id='liveAlertPlaceholder' > </div>
<!--<div class="alert alert-danger alert-dismissible " role="alert">-->
<!--    A simple danger alert—check it out!-->
<!--    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>-->
<!--</div>-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
</body>
</html>
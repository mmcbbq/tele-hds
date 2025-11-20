<?php
include '../config/loader.php';
$uri = str_replace('/','',$_SERVER['REQUEST_URI']);
if ($uri === 'getcustomerfiles') {
    include '../src/Filemanger/getFilesinfo.php';
    exit();
}elseif ($uri == 'uploadcustomerfile'){
    $repo = new FileRepository();
    $data = array_merge($_POST,['name'=>$_FILES['file']['name'],'userid'=>1]);
    $file = $repo->create($data);
    $file->saveFile();
//    include '../src/Filemanger/upload.php';
    exit();
}elseif ($uri === 'test'){

//    $data = ['name'=> 'filename', 'path'=> '../data/customer', 'description'=>'wichtig', 'userid'=>1];
//    $repo->create($data);



}

function dbcon():PDO
{
    $dbHost = $_ENV['DB_HOST'];
    $dbName = $_ENV['DB_NAME'];
    $dbUser = $_ENV['DB_USER'];
    $dbPw = $_ENV['DB_USER_PW'];

    return new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPw);
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
<body >
<div class="container text-left p-2" style='margin-top: 40px'>
    <span class='tele display-3 fw-bold px-3 ' style=' border-radius: 20px'>
    TELE-HDS
    </span>
    <span class='partner px-3' style=' font-size: 30px'>Ihr starker Partner für alle Services rund ums Internet </span>
</div>
<div id='navplace' class='navspace container p-2 text-center' style='font-size: 30px'></div>
<div id='content' class='content container p-2 text-center d-flex justify-content-around'></div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
</body>
</html>
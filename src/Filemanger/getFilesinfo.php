<?php

$dir = opendir('./download/customer');
$response = [];
while (false !== ($entry = readdir($dir))) {
    if ('.'!== $entry and '..' !== $entry){
        $response[] = $entry;
    }
}
header('Content-Type: application/json');
echo json_encode($response);
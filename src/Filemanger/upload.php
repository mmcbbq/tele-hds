<?php

header('Content-Type: application/json');
//echo json_encode('test');
$filename = $_FILES['file']['name'];
$filepath = './download/customer/' . basename($_FILES['file']['name']);
$description = $_POST['name'];

if (move_uploaded_file($_FILES['file']['tmp_name'], $filepath)) {
    $response = ['data' => [
        'filename' => $filename,
        'description' => $description
    ]
    ];
} else {
    $response = ['data' => [false]];
}
echo json_encode($response);
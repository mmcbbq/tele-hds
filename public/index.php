<?php
include '../config/loader.php';

$repo = new EmployeeRepository();
//var_dump($repo->findAll());


foreach ($repo->findAll() as $employee){
    echo $employee->getFname();
}

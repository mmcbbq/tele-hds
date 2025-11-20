<?php

class File implements EntityInterface
{


    private int $id;
    private string $name;
    private string $path;
    private string $description;
    private int $userid;


    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function setPath(string $path): void
    {
        $this->path = $path;
    }

    public function getUserid(): int
    {
        return $this->userid;
    }

    public function setUserid(int $userid): void
    {
        $this->userid = $userid;
    }

    public function saveFile():void
    {
        header('Content-Type: application/json');
        $filename = $_FILES['file']['name'];
        $filepath = './download/customer/' . basename($_FILES['file']['name']);
        $description = $_POST['description'];
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
    }


}
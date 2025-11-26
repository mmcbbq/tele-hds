<?php

class File implements EntityInterface, JsonSerializable
{


    private int $id;
    private string $name;
    private string $path;
    private string $description;
    private int $userid;
    private string $email;


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

    public function saveFile(string $dir): void
    {
        header('Content-Type: application/json');
        $filename = $_FILES['file']['name'];
        $filepath = $dir . basename($_FILES['file']['name']);
        $description = $_POST['description'];
        if (move_uploaded_file($_FILES['file']['tmp_name'], $filepath)) {
            $response = [
//                'filename' => $filename,
//                'description' => $description,
                'message' => "$filename hochgeladen",
                'type' => 'success'

            ];
        } else {
            $response = ['data' => [false]];
        }
        echo json_encode($response);
    }


    public function jsonSerialize(): mixed
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'path' => $this->path,
            'description'=> $this->description,
            'userid' => $this->userid,
            'email' => $this->email
        ];
    }
}
<?php

class User implements EntityInterface, JsonSerializable
{
    private string $email;
    private string $password;
    private string $role;

    private int $id;

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getId(): int
    {
        return $this->id;
    }



    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }


    public function jsonSerialize(): mixed
    {
        return [
            'email'=> $this->getEmail(),
            'id'=> $this->getId(),
            'role' => $this->role
        ];
    }
}
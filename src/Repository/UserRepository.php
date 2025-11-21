<?php

class UserRepository extends AbstractRepository
{

    public function findAll()
    {
        // TODO: Implement findAll() method.
    }

    public function findById(int $id)
    {
        $con = $this->dbcon();
        $sql = 'SELECT * FROM user where id=:id';
        $stat = $con->prepare($sql);
        $stat->execute([':id'=>$id]);
        return $stat->fetchAll(PDO::FETCH_CLASS,"User")[0];
    }


    public function create(array $data): User
    {
        $data['role']= json_encode(['user']);
        $data['password'] = password_hash($data['password'],PASSWORD_DEFAULT);
        $con = $this->dbcon();
        $sql = 'Insert into user (email, password, role) VALUES (:email, :password, :role)';
        $stat = $con->prepare($sql);
        $stat->execute($data);
        return $this->findById($con->lastInsertId());

    }

    public function update(int $id)
    {
        // TODO: Implement update() method.
    }

    public function delete(int $id)
    {
        // TODO: Implement delete() method.
    }

    public function findByEmail(string $email):User
    {
        $con = $this->dbcon();
        $sql = 'SELECT * FROM user where id=:email';
        $stat = $con->prepare($sql);
        $stat->execute([':email'=>$email]);
        return $stat->fetchAll(PDO::FETCH_CLASS,"File")[0];

    }
}
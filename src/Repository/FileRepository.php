<?php

class FileRepository extends AbstractRepository
{

    public function findAll()
    {
        $con = $this->dbcon();
        $sql = 'SELECT * FROM file';
        $stat = $con->prepare($sql);
        $stat->execute();
        return $stat->fetchAll(PDO::FETCH_CLASS,"FileEntity");
    }

    public function findById(int $id):FileEntity
    {
        $con = $this->dbcon();
        $sql = 'SELECT * FROM file where id=:id';
        $stat = $con->prepare($sql);
        $stat->execute([':id'=>$id]);
        return $stat->fetchAll(PDO::FETCH_CLASS,"FileEntity")[0];
    }

    public function create(array $data)
    {
        $con = $this->dbcon();
        $sql = 'INSERT INTO file (name, path, description, userid) VALUES
                                                       (:name, :path, :description, :userid) ';
        $stat = $con->prepare($sql);
        $stat->execute($data);
        $id = $con->lastInsertId();
        $file = $this->findById($id);
        $file->saveFile();
    }




    public function update(int $id)
    {
        // TODO: Implement update() method.
    }

    public function delete(int $id)
    {
        // TODO: Implement delete() method.
    }
}
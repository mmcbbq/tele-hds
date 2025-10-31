<?php

class EmployeeRepository extends AbstractRepository
{

    public function findAll():array
    {
        $con = $this->dbcon();
        $sql = 'SELECT * FROM employee';
        $stmt = $con->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_CLASS,'Employee');
    }

    public function findById(int $id)
    {
        // TODO: Implement findById() method.
    }

    public function create()
    {
        // TODO: Implement create() method.
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
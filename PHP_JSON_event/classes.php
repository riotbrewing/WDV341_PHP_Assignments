<?php
//create class
class Events
{

    private $id, $name, $description, $presenter, $date, $time, $inserted, $updated;
    // setters
    function set_id($input)
    {
        $this->id = $input;
    }
    function set_name($input)
    {
        $this->name = $input;
    }
    function set_description($input)
    {
        $this->description = $input;
    }
    function set_presenter($input)
    {
        $this->presenter = $input;
    }
    function set_date($input)
    {
        $this->date = $input;
    }
    function set_time($input)
    {
        $this->time = $input;
    }
    function set_inserted($input)
    {
        $this->inserted = $input;
    }
    function set_updated($input)
    {
        $this->updated = $input;
    }
    // getters
    public function get_id()
    {
        return $this->id;
    }
    public function getName()
    {
        return $this->name;
    }
    public function getDescription()
    {
        return $this->description;
    }
    public function getPresenter()
    {
        return $this->presenter;
    }
    public function getDate()
    {
        return $this->date;
    }
    public function getTime()
    {
        return $this->time;
    }
    public function getInserted()
    {
        return $this->inserted;
    }
    public function getUpdated()
    {
        return $this->updated;
    }

    //function to return the values of all the object variables
    public function getAllVariables()
    {
        return get_object_vars($this);
    }

} // end of class
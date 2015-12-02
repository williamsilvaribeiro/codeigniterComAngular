<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Persons extends CI_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('personModel');
    }
    public function index() {
        $p['persons'] = $this->personModel->Persons();
        $c['content'] = $this->load->view('Persons/persons.php', $p, true);
        $this->load->view('_shared/_layout.php');
    }

    public function All() {
        $persons = $this->personModel->Persons();
        echo json_encode($persons);
    }

    public function Update() {
        $person = (Object)$_GET;

        if (!empty($person)) {
            $this->personModel->Update($person);
        }
    }

    public function Delete() {
        $person = (Object)$_GET;

        if (!empty($person)) {
            $this->personModel->delete($person);
        }
    }

    public function Create() {
        $person = (Object)$_GET;

        if (!empty($person)) {
            $person->guid = uniqid('', true);
            $this->personModel->Create($person);
        }

    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
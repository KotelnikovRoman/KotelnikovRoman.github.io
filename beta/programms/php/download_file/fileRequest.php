<?php

class fileRequest {
    protected $files;

    public function __construct() {
        $this->files = $_FILES;
    }

    public function get(string $key) {
        return $this->files[$key] ?? null;
    }
}

?>
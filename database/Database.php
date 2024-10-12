<?php
    $HostName = 'localhost';
    $Directory = 'root';
    $Password = '';
    $DB_Name = 'nfc_student_id';

    $connect = mysqli_connect($HostName, $Directory, $Password, $DB_Name);

    if(!$connect){
        die("Connecting to database failed." . mysqli_connect_error());
    }
?>
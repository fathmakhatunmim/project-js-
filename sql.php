<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mini";

// Connection
$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_errno){
    die("Connection failed: " . $conn->connect_error);
}

// --- Division List ---
if(!isset($_GET['division_id']) && !isset($_GET['district_id'])){
    $sql = "SELECT * FROM division";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
        echo "<li><a href='#' class='division-item' data-id='{$row['id']}'>{$row['name']}</a></li>";
    }
}

// --- District List ---
if(isset($_GET['division_id'])){
    $division_id = (int)$_GET['division_id'];
    $sql = "SELECT * FROM district WHERE division_id = $division_id";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
        echo "<li><a href='#' class='district-item' data-id='{$row['id']}'>{$row['name']}</a></li>";
    }
}

// --- Sub-district List ---
if(isset($_GET['district_id'])){
    $district_id = (int)$_GET['district_id'];
    $sql = "SELECT * FROM subdistrict WHERE district_id = $district_id";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
        echo "<li><a href='#' class='subdistrict-item' data-id='{$row['id']}'>{$row['name']}</a></li>";
    }
}
?>

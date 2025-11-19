<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mini";

// Connection
$conn = new mysqli($servername,$username,$password,$dbname);//mysqil php build in class
if($conn->connect_errno){
    die("Connection failed: " . $conn->connect_error);
}
// isset() মানে হলো: কোনো ভ্যারিয়েবল (variable) সেট আছে কিনা / অর্থাৎ তৈরি ও খালি না কিনা চেক করা।

// fetch_assoc() প্রতিবার টেবিল থেকে একটি রো (row) অ্যারের মতো এনে দেয়।






// --- Division List ---
// fetch_assoc() প্রতিবার টেবিল থেকে একটি রো (row) অ্যারের মতো এনে দেয়।
if(!isset($_GET['division_id']) && !isset($_GET['district_id'])){
    $sql = "SELECT * FROM division";

    $result = $conn->query($sql);
   // উপরের SQL কুয়েরি ডাটাবেজে রান করা হচ্ছে।

    //  fetch_assoc() প্রতিবার টেবিল থেকে একটি রো (row) অ্যারের মতো এনে দেয়।
    while($row = $result->fetch_assoc())
        {
        echo "<li><a href='#' class='division-item' data-id='{$row['id']}'>{$row['name']}</a></li>";
    }
}

// --- District List ---
// ইউজার কোনো division-এ ক্লিক করলে URL বা AJAX request-এ division_id যাবে,
if(isset($_GET['division_id'])){
    // URL থেকে পাওয়া division_id-কে একটি ভ্যারিয়েবলে রাখা হচ্ছে।
    $division_id = (int)$_GET['division_id'];
// যদি URL বা Request এ division_id ও district_id–এই দুইটার কোনোটাই পাঠানো না থাকে, তাহলে if-এর ভেতরের কোড চলবে।
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

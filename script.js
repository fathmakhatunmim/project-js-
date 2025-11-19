// // Division
// const divisionSummary = document.getElementById("divisionSummary"); // summary button
// const divisionItems = document.querySelectorAll("#divisionBox ul li a"); // list items
// const divisionBox = document.getElementById("divisionBox"); // <details>

// divisionItems.forEach(item => {
//     item.addEventListener("click", function(e){
//         e.preventDefault();
//         divisionSummary.textContent = this.textContent; // SHOW SELECTED NAME
//         divisionSummary.dataset.id = this.dataset.id;  // SAVE ID
//          // Close the details dropdown manually
//         divisionBox.removeAttribute("open");
//     });
// });

document.addEventListener("DOMContentLoaded", function(){
// HTML লোড শেষ হলে এই ফাংশন চালু হবে।

    // Get references
    const divisionSummary = document.getElementById("divisionSummary");

    const divisionList = document.querySelectorAll("#divisionBox ul li a");
    // Division dropdown-এর সব <a> linkগুলোর লিস্ট Array-এর মতো নিয়ে রাখছে।

    const divisionBox = document.getElementById("divisionBox");
    // Division-এর dropdown container Element রেফারেন্স করা হলো।




    const districtSummary = document.getElementById("districtSummary");
    const districtList = document.getElementById("districtList");
    const districtBox = document.getElementById("districtBox");



    const subdistrictSummary = document.getElementById("subdistrictSummary");
    const subdistrictList = document.getElementById("subdistrictList");
    const subdistrictBox = document.getElementById("subdistrictBox");

    // --- Division select ---
    divisionList.forEach(item => {
        // সব division link একে একে লুপ করবে।
        item.addEventListener("click", function(e){
            // ইউজার যখন কোনো division-এ ক্লিক করবে, তখন এই function চলবে।
            e.preventDefault();
            // <a> লিঙ্কের default page refresh/reload বন্ধ করছে।
            divisionSummary.textContent = this.textContent;
            // নির্বাচিত division এর নাম summary box-এ দেখানো হচ্ছে।
            divisionSummary.dataset.id = this.dataset.id;
            // HTML data attribute-এ division-এর ID সংরক্ষণ করা হচ্ছে (JavaScript-এর কাজে লাগবে)।
            divisionBox.removeAttribute("open");
            // Dropdown বন্ধ করা হচ্ছে।


            // Reset district and sub-district
            districtSummary.textContent = "District";
            // নতুন division নির্বাচন করার পর district summary default এ সেট।
            districtList.innerHTML = `<li><a>Loading...</a></li>`;
            // District লিস্টে লোডিং লেখা দেখানো হচ্ছে।
            
            subdistrictSummary.textContent = "Sub-district";
            // Sub-district summary reset করা হলো।
            subdistrictList.innerHTML = `<li><a>Select district first</a></li>`;
            // District না বাছাই করলে এটি মেসেজ দেখাবে।

            // Fetch districts dynamically
            fetch(`sql.php?division_id=${this.dataset.id}`)
            // sql.php ফাইলে
            // division_id=নির্বাচিত id
                .then(res => res.text())
                // Response কে text (HTML list) হিসেবে নিচ্ছে।
                .then(data => {
                    districtList.innerHTML = data;
                });
                // Fetch করা district list dropdown-এ বসিয়ে দিচ্ছে।
        });
    });

    // --- District select ---
    // District dropdown-এ যেকোনো ক্লিক detect করবে।
    districtList.addEventListener("click", function(e){
        if(e.target && e.target.tagName === "A"){
            // নিশ্চিত করছে যে click হয়েছে কোনো <a> tag-এ।
            e.preventDefault();
            //  Default link behavior বন্ধ।
            districtSummary.textContent = e.target.textContent;
            // নির্বাচিত district নাম summary-তে দেখাবে।

            districtSummary.dataset.id = e.target.dataset.id;
            // district ID সংরক্ষণ করলো।
            districtBox.removeAttribute("open");
            // District dropdown বন্ধ।

            // Reset sub-district
            subdistrictSummary.textContent = "Sub-district";
            subdistrictList.innerHTML = `<li><a>Loading...</a></li>`;





            // Fetch sub-districts dynamically
            fetch(`sql.php?district_id=${e.target.dataset.id}`)
            // sql.php-এ district_id পাঠিয়ে sub-district এনে নিচ্ছে।
                .then(res => res.text())
                // response text হিসেবে নিচ্ছে।
                .then(data => {
                    subdistrictList.innerHTML = data;
                });
                // পাওয়া HTML sub-district list দেখিয়ে দিচ্ছে।
        }
    });

    // --- Sub-district select ---
    subdistrictList.addEventListener("click", function(e){
        // sub-district list-এ ক্লিক detect।
        if(e.target && e.target.tagName === "A"){
            // নিশ্চিত করছে যে <a> তে ক্লিক হয়েছে।
            e.preventDefault();
            // default behavior বন্ধ।
            subdistrictSummary.textContent = e.target.textContent;
            // নির্বাচিত sub-district summary-তে দেখাবে
            subdistrictSummary.dataset.id = e.target.dataset.id;
           
            subdistrictBox.removeAttribute("open"); 
            // dropdown বন্ধ।
        }
    });

});


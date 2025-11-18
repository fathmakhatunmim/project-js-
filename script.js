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

    // Get references
    const divisionSummary = document.getElementById("divisionSummary");
    const divisionList = document.querySelectorAll("#divisionBox ul li a");
    const divisionBox = document.getElementById("divisionBox");



    const districtSummary = document.getElementById("districtSummary");
    const districtList = document.getElementById("districtList");
    const districtBox = document.getElementById("districtBox");



    const subdistrictSummary = document.getElementById("subdistrictSummary");
    const subdistrictList = document.getElementById("subdistrictList");
    const subdistrictBox = document.getElementById("subdistrictBox");

    // --- Division select ---
    divisionList.forEach(item => {
        item.addEventListener("click", function(e){
            e.preventDefault();
            divisionSummary.textContent = this.textContent;
            divisionSummary.dataset.id = this.dataset.id;
            divisionBox.removeAttribute("open");


            // Reset district and sub-district
            districtSummary.textContent = "District";
            districtList.innerHTML = `<li><a>Loading...</a></li>`;
            
            subdistrictSummary.textContent = "Sub-district";
            subdistrictList.innerHTML = `<li><a>Select district first</a></li>`;

            // Fetch districts dynamically
            fetch(`sql.php?division_id=${this.dataset.id}`)
                .then(res => res.text())
                .then(data => {
                    districtList.innerHTML = data;
                });
        });
    });

    // --- District select ---
    districtList.addEventListener("click", function(e){
        if(e.target && e.target.tagName === "A"){
            e.preventDefault();
            districtSummary.textContent = e.target.textContent;
            districtSummary.dataset.id = e.target.dataset.id;
            districtBox.removeAttribute("open");

            // Reset sub-district
            subdistrictSummary.textContent = "Sub-district";
            subdistrictList.innerHTML = `<li><a>Loading...</a></li>`;





            // Fetch sub-districts dynamically
            fetch(`sql.php?district_id=${e.target.dataset.id}`)
                .then(res => res.text())
                .then(data => {
                    subdistrictList.innerHTML = data;
                });
        }
    });

    // --- Sub-district select ---
    subdistrictList.addEventListener("click", function(e){
        if(e.target && e.target.tagName === "A"){
            e.preventDefault();
            subdistrictSummary.textContent = e.target.textContent;
            subdistrictSummary.dataset.id = e.target.dataset.id;
            subdistrictBox.removeAttribute("open");
        }
    });

});


showprayers();
  
// If user adds a prayer, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let prayers = localStorage.getItem("prayers");
  
    if (prayers == null) prayersObj = [];
    else prayersObj = JSON.parse(prayers);
  
    prayersObj.push(addTxt.value);
    localStorage.setItem("prayers", JSON.stringify(prayersObj));
    addTxt.value = "";
  
    showprayers();
});
  
// Function to show elements from localStorage
function showprayers() {
    let prayers = localStorage.getItem("prayers");
  
    if (prayers == null) prayersObj = [];
    else prayersObj = JSON.parse(prayers);
  
    let html = "";
  
    prayersObj.forEach(function(element, index) {
        html += `<div class="prayerCard my-2 mx-2 card" 
            style="width: 10rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        prayer ${index + 1}
                    </h5>
                    <p class="card-text"> 
                        ${element}
                    </p>
   
                  <button id="${index}" onclick=
                    "deleteprayer(this.id)"
                    class="btn btn-primary">
                    Delete
                </button>
            </div>
        </div>`;
    });
  
    let prayersElm = document.getElementById("prayers");
  
    if (prayersObj.length != 0) prayersElm.innerHTML = html;
    else
        prayersElm.innerHTML = `No Prayers.`;
}
  
// Function to delete a prayer
function deleteprayer(index) {
    let prayers = localStorage.getItem("prayers");
  
    if (prayers == null) prayersObj = [];
    else prayersObj = JSON.parse(prayers);
  
    prayersObj.splice(index, 1);
  
    localStorage.setItem("prayers", 
        JSON.stringify(prayersObj));
  
    showprayers();
}


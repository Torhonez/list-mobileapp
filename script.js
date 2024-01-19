import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://firstapp-1eff9-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const listInDB = ref(database, "list");


var inputId = document.getElementById('inputId');
var addBtn = document.getElementById('addTocart');
var shoppingList = document.getElementById('shoppingList');
addBtn.addEventListener("click", function(){
    let inputValue = inputId.value;
    push (listInDB, inputValue)
    console.log(`${inputValue} added to database`);
    shoppingList.innerHTML += `<li>${inputValue}</li>`;
})
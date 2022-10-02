const bookName = document.querySelector(".book-name")
const authName = document.querySelector(".author-name")
const genreBtns = document.querySelectorAll(".dropdown-menu a");
const addBtn = document.querySelector(".add-btn")

let genre = ""
genreBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        genre = e.target.textContent;
        console.log(e.target.textContent);
    })
})
let rowNumber = 0;

const updateList = (bookName, authName, genre) => {
    let table = document.getElementById("tableBody")
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.textContent = bookName;
    cell2.textContent = authName;
    cell3.textContent = genre;
    cell4.textContent = " - ";
}
let val = 0
addBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(bookName.value!=="" && authName.value!=="" && genre!==""){
        let table = document.getElementById("tableBody")
        var row = table.insertRow(val);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.textContent = bookName.value;
        cell2.textContent = authName.value;
        cell3.textContent = genre;
        cell4.textContent = " - ";
        bookName.value = ""
        authName.value = ""
        genre = ""
        val = val + 1;
    }
    else{
        alert("Please fill all the fields and select genre!")
    }
});
var button = document.getElementById("popup-button")
var popupoverlay = document.getElementById("popup-overlay")
var popupbox = document.getElementById("popup-box")

button.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancel = document.getElementById("cancel")
var addbook =  document.getElementById("add-book")

cancel.addEventListener("click", function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

addbook.addEventListener("click", function(){
    event.preventDefault()    
})




var addbook = document.getElementById("add-book")
var container = document.getElementById("container")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("book-description")

addbook.addEventListener("click", function(){
    var div = document.createElement("div")
    div.setAttribute("id","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${bookdescription.value}</p>
    <button onclick="deletecontainer(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletecontainer(event)
{
    event.target.parentElement.remove()
} 
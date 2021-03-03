
//some hardcoded testing items for the library
let myLibrary = [
    {
    name: "Brave new world",
    author: "Aldous Huxley",
    pages: 311,
    read: true
    },

    {
     name: "Nineteen Eighty-Four",
     author: "George Orwell",
     pages: "328",
     read: false  
    }

];

loadLibrary()
printLibrary(myLibrary)

function Book(name, author, pages, read, cover) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.cover = cover
    myLibrary.push(this)
}

//this function prints out the current library as "cards",
//and adds the delete button and read status button for each item.

function printLibrary(arr) {
    
    const cardArea = document.querySelector('#cardArea')
    cardArea.textContent = ""

    arr.forEach(function(item, index){
        let card = document.createElement('div')
        card.classList.add('card')
        //card.setAttribute("id", index)
        cardArea.appendChild(card)
        
        let cover = document.createElement('img')
        cover.classList.add("cover")
        cover.src = item.cover
        cover.onerror = function(){
           console.log("asd")   
            cover.src = 'Pictures/noCover.png';
         };
        card.appendChild(cover);
         

        let title = document.createElement('h2')
        title.classList.add('title')
        title.textContent = item.name
        card.appendChild(title)


        let status = "Not read"
        item.read === true ? status = "Read" : status = "Not read";
        
        let info = document.createElement('p')
        info.classList.add('info')
        info.textContent =  `Author: ${item.author}
                             Pages: ${item.pages}
                             Status:  ${status}`
        card.appendChild(info)

        let del = document.createElement('img')
        del.setAttribute("data-index", index)
        del.src = "Pictures/delete.png"
        del.classList.add('icon')
        card.appendChild(del)
        document.querySelector(`[data-index='${index}']`).addEventListener("click", function(){
        arr.splice(index, 1)
        del.parentElement.remove();
        console.log(myLibrary)
        storeLibrary(arr)
        })


        //the read status button
        let statusBtn = document.createElement('input')
        statusBtn.type = "checkbox"
        statusBtn.setAttribute("data-status", index)
        card.appendChild(statusBtn)
        item.read === true ? statusBtn.checked = true : statusBtn.checked = false;   
        statusBtn.addEventListener("click", function(){
        statusBtn.checked === true ? item.read = true : item.read = false
        storeLibrary(arr)
    })
})    
}   


document.getElementById("addButton").addEventListener("click", function() {
    let name = document.getElementById("name")
    let author = document.getElementById("author")
    let pages = document.getElementById("pages")
    let read = document.getElementById("read")
    let cover = document.getElementById("cover")
    let book = new Book(name.value, author.value, pages.value, read.checked, cover.value)
    
    if(name.value === "" || name.value === undefined){
        alert("Please enter name of your book!")
    }
    else{
    printLibrary(myLibrary)
    name.value = ""
    pages.value = ""
    author.value = ""
    cover.calue = ""
    } 
    storeLibrary(myLibrary)
});


//writes the myLibrary array into local storage
function storeLibrary(arr){  
    //let serializedLibrary = JSON.stringify(arr)
    localStorage.setItem("library", JSON.stringify(arr))   
}

function loadLibrary(){
    myLibrary = JSON.parse(localStorage.getItem("library"))
}

function deleteButton() {
    

}
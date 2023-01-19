let addButton = document.getElementById('addButton');
let grocery = document.getElementById('grocery')
let list = document.getElementById('list')
let deleteContainer = document.getElementById('deleteContainer');
let move = document.getElementById('move')
let moveUpButton = document.getElementById('moveUp')
let moveDownButton = document.getElementById('moveDown')
let groceryList = [];

function createDeleteButton(index){
    let button = document.createElement('button');
    button.innerHTML = 'Delete';
    deleteContainer.appendChild(button);
    button.onclick = (e) =>{
        e.preventDefault()
        let allLIs = document.querySelectorAll('li')
        allLIs[index].remove()
        let allButtons = document.querySelectorAll('button')
        allButtons[index+1].remove()
        groceryList.splice(index, 1)
    }
}

let count = 0;
addButton.onclick = (e) =>{
    count++;
    e.preventDefault();
    if(grocery.value != ''){
        groceryList.push(grocery.value)
        console.log(groceryList)
        let newGrocery = document.createElement('li')
        newGrocery.innerHTML = grocery.value;
        list.appendChild(newGrocery);
        grocery.value = "";
        createDeleteButton(count-1);
        let allLIs = document.querySelectorAll('li')
        console.log(allLIs)
        moveUpButton.onclick = (e) =>{
            e.preventDefault()
            let index = parseInt(move.value) - 1;
            let temp = allLIs[index].innerHTML
            allLIs[index].innerHTML = allLIs[index-1].innerHTML
            allLIs[index-1].innerHTML = temp;
        }

        moveDownButton.onclick = (e) =>{
            e.preventDefault()
            let index = parseInt(move.value) - 1;
            let temp = allLIs[index].innerHTML
            allLIs[index].innerHTML = allLIs[index+1].innerHTML
            allLIs[index+1].innerHTML = temp;
        }
    }
}


const input = document.querySelector(".input")
const add = document.querySelector(".add")

// Icon
const icon = document.querySelector("#icon")



// input show
icon.addEventListener("click", ()=>{
    document.querySelector(".inp-container").style.display = "block"
})



add.addEventListener("click", ()=>{

     //condition
      if(input.value.length > 0){
        let stgItems = JSON.parse(localStorage.getItem('keeps'))

        if(stgItems === null)
        {
          items = [] //create an array
        }
 
        //add the value to array
        items.unshift(input.value)
        localStorage.setItem('keeps', JSON.stringify(items))
     
        document.querySelector(".inp-container").style.display = "none"
 
     show()
      }else{
        //if user didn't input anything in the box
        alert("ERROR! Please input a value.")
      }


})


//show created value
const show = () =>{

    const display = document.querySelector(".display")

    //existed
    let stgItems = JSON.parse(localStorage.getItem('keeps'))


    if(stgItems === null){
        items = []
    }else{
        //the keeps key value is the array
        items = stgItems
    }


    //element container
    let holder = ''

    //array value format
    items.forEach((element, index) => {
        
        let tods = new Date()
        let mo = tods.getMonth()
        let date = tods.getDate()
        let yr = tods.getFullYear()

        holder += `<div class = "board">
        <textarea class="txtarea" rows="10" cols="50" disabled>${element}</textarea>
        <p>Created since : DATE : ${mo}/${date}/${yr}</p>
        <button class="del" onclick="del(${index})">DELETE</button>
        </div>
        `
    
    });

    //display
    display.innerHTML = holder  

}


const del = (item) =>{
    let stgItems = JSON.parse(localStorage.getItem('keeps'))


    //delete the index
    stgItems.splice(item, 1)
 
    //set the updated value
    localStorage.setItem('keeps', JSON.stringify(stgItems));
 
    //the value
    show()
}

show()

const clearAll = () =>{
    //clear the localstorage
    localStorage.clear()
    
    //show the value
    show()
}



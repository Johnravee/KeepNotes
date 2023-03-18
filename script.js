

const input = document.querySelector(".input")
const add = document.querySelector(".add")

// Icon
const icon = document.querySelector("#icon")



// input show
icon.addEventListener("click", ()=>{
    document.querySelector(".inp-container").style.display = "block"
})



add.addEventListener("click", ()=>{

    
      if(input.value.length > 0){
        let stgItems = JSON.parse(localStorage.getItem('keeps'))

        if(stgItems === null)
        {
          items = []
        }
 
        items.unshift(input.value)
        localStorage.setItem('keeps', JSON.stringify(items))
     
        document.querySelector(".inp-container").style.display = "none"
 
     show()
      }else{
        alert("ERROR! Please input a value.")
      }


})

const show = () =>{

    const display = document.querySelector(".display")

    let stgItems = JSON.parse(localStorage.getItem('keeps'))

    if(stgItems === null){
        items = []
    }else{
        items = stgItems
    }

    let holder = ''

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


    stgItems.splice(item, 1)
 
 
    localStorage.setItem('keeps', JSON.stringify(stgItems));
 

    show()
}

show()

const clearAll = () =>{
    localStorage.clear()
    show()
}



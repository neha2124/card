console.log("hello")
const main = document.querySelector("#main")
const Name =document.getElementById("Name").value
const Pro =document.getElementById("profession").value
const age =document.getElementById("age").value

let data = [{ id:1 ,name : "john" , profession : "Developer" , Age:18} , {id:2 , name: "jack" , profession:"Devloper" , Age : 20}, {id:3 , name : "karan" , profession : "Admin" , Age:19}]
let new_data = [{
    id:3,
    name:Name,
    profession:Pro,
    Age:age

}]
const add_data= () =>{


    // console.log(new_data)
    new_data.id++
    data = [...data,...new_data]
    console.log(data)
    
    }
    console.log(data)
//    function filterCard () =>{

//    }

function updateDom(providedata = data) {

    providedata.forEach((item) => {
        const div = document.createElement('div')
        div.innerHTML = `<span> ${item.id} Name:${item.name}  Profession : ${item.profession} Age:${item.Age} </span> `
        div.classList.add('person')
        main.appendChild(div)
    })

    //    console.log(data)
}
updateDom()


// document.querySelector(".filter").addEventListener('click',()=> FileList())

   document.querySelector(".add").addEventListener('click',add_data())
 document.querySelector(".add").addEventListener('click',()=>updateDom())
   
    



 
 
 

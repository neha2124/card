const option = document.getElementById("pro")
let list = document.getElementById("main")
let filter = document.getElementById('filter')
let add = document.getElementById('user')
// console.log(filter)
let nameInput = document.getElementById("Name")
let professionInput = document.getElementById("profession")
let ageInput = document.getElementById('age')

const userData = [
  { id: 1, name: "John", age: "18", profession: "Devloper" },
  { id: 2, name: "Jack", age: "20", profession: "Devloper" },
  { id: 3, name: "Karen", age: "19", profession: "admin" },
]

filter.addEventListener('click',filterProfession)
add.addEventListener('click',addUser)

function updateDom (data){
  list.innerHTML=""
  data.forEach((item)=>{
    let newDiv = document.createElement("div")
    newDiv.innerHTML =`id : ${item.id}  Name : ${item.name} age: ${item.age} profession : ${item.profession}`
   newDiv.classList.add('person')
    list.append(newDiv)
  })
}

function filterProfession () {
  let select = option.value
  // console.log(select)
  if(select == "profession"){
    alert("please select profession")
  }else{
    let filterData = userData.filter((item)=>{
      return item.profession == select
    })
       updateDom(filterData)
  }
}
function addUser (){
 
  let name = nameInput.value
  let age = ageInput.value
  let profession = professionInput.value
  if(name != "" && profession != "" && age != ""){
    let newData = {
      id:userData.length+1,
      name,
      age,
      profession


    }
    userData.push(newData)
    console.log(userData)
     updateDom(userData)
  }else{
    alert("please fill all the input")
  }
}



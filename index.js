// Add your code here
const submitData = (userName, userEmail)=>{
    const bodyObj={
        name:`${userName}`,
        email:`${userEmail}`
    }
    return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(bodyObj)
       })
       .then((res)=> res.json())
       .then((data)=>{
        const newId = data.id
        //create element to hold id
        const idDisplay=document.createElement("li")
        //assign data to the element
        idDisplay.textContent=newId
        //append the li to the dom as a child of the body element in the document
        document.body.appendChild(idDisplay)
        })
        .catch((error) => {
            const errorMessage= error.message
            const errorDisplay=document.createElement("li")
            errorDisplay.textContent=errorMessage
            document.body.appendChild(errorDisplay)
        });   
        

}
document.addEventListener('DOMContentLoaded',submitData)
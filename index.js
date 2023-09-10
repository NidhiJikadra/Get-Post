document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()


    const display = (data) => {
        // document.getElementById("output").innerHTML = " "
        data.map((ele) => {
            let img = document.createElement("img")
            img.src=ele.img
            let name = document.createElement("h2")
            name.innerHTML = ele.name
            let email = document.createElement("h2")
            email.innerHTML = ele.email
            let mobileno = document.createElement("h3")
            mobileno.innerHTML = ele.mobileno
            let password = document.createElement("h3")
            password.innerHTML = ele.password
            let div = document.createElement("div")
            div.setAttribute("class","ui")
            div.append(img,name,email,mobileno,password)
            document.getElementById("output").append(div)   
        })
    }

    let users = {
        img : document.getElementById("img").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        mobileno : document.getElementById("mobileno").value,
        password : document.getElementById("password").value
    }

    fetch("http://localhost:3000/users",{
        method : 'POST',
        headers : {"content-type":"application/JSON"},
        body : JSON.stringify(users)
    })

    fetch("http://localhost:3000/users")
    .then((res)=>res.JSON())
    .then((res)=>display(res))
})
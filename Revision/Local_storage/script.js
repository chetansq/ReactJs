
// function setData(){
//     localStorage.setItem("userName", "Chetan")
// localStorage.setItem("age", 22)

// }
// function getData() {
//     let data = localStorage.getItem("userName")
//     document.getElementById('text').innerHTML = data
// }

// function removeData() {
//     localStorage.removeItem("userName")
// }

// function clearData() {
//     localStorage.clear()
// }


// Session storage

function setData() {
    sessionStorage.setItem('userName', "chetan")
    sessionStorage.setItem('age', 22)
}


function getData() {
    let data = sessionStorage.getItem("userName")
    document.getElementById('text').innerHTML = data
}


function removeData() {
    sessionStorage.removeItem("userName")
}

function clearData() {
    sessionStorage.clear()
}


// cookies


document.cookie = "userName=Chetan" // for set cookies

document.cookie = "userName=Chetan; expires = Thu, 30 Jan 25 4:39:00 UTC" // for delete/remove cookies
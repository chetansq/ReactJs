function getitem() {
    let storedata = localStorage.getItem("name");
    console.log('name', storedata)
}

function add() {
    localStorage.setItem("name", "aman");
    localStorage.setItem("age", "22");
}

function removeitem() {
    localStorage.removeItem('age')

}

function allclear() {
    localStorage.clear()
}

// SessionStorage

function addsession() {
    sessionStorage.setItem("name", "ajay");
    sessionStorage.setItem("age", "22");
}

function getitem_session() {
    let data = sessionStorage.getItem("name");
    console.log('name', data);
}

function removeitem_session() {
    sessionStorage.removeItem("name");
}

function allclear_session() {
    sessionStorage.clear();
}
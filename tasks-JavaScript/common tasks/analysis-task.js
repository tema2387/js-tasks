const path = "/users/download/index.html"

const isHtml = path => {
    const pathRequired = ".html";
    const pathAdd = path.slice(-5);


    if (pathAdd == pathRequired) {
        return true
    } else {
        return false
    }
} 

console.log(isHtml(path))
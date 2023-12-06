let cursor = document.getElementById("cursor");
let inner_cursor = document.getElementById("inner_cursor");
let offset = {x: 10.5, y: 10.5};
let tunned_cursor = "";

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    inner_cursor.style.left = (x) + "px";
    inner_cursor.style.top = (y) + "px";
    setTimeout(() => {
        cursor.style.left = (x-offset.x) + "px";
        cursor.style.top = (y-offset.y) + "px";
    }, 45);
});

function change_cursor(nc) {
    if(tunned_cursor == nc) {
        cursor.outerHTML = "<div id='cursor'></div>"
        offset = {x: 10.5, y: 10.5};
        cursor = document.getElementById("cursor");
        tunned_cursor = "";
        inner_cursor.classList.remove("invisible");
        cursor.classList.remove("eminem");
    }else{
        tunned_cursor = nc;
        cursor.outerHTML = "<img id='cursor' style='border: none;' src='../assets/" + nc + ".png' width='60' height='60'/>"
        offset = {x: 15, y: 20};
        cursor = document.getElementById("cursor");
        inner_cursor.classList.add("invisible");
        if(nc == "eminem") {
            cursor.classList.add("eminem");
        }
    }
}
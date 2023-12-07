let introSvg = document.getElementById("introSvg");
let childs = introSvg.children;
let interaction_active = false;
let intro_made = false;
let info_viewed = [];
// ALL INFO
/*
who
studies
projects
gaming
eminem
biking
hiking
nancy
*/

introSvg.addEventListener("click", function() {
    if(intro_made) return 0;
    intro_made = true;
    childs[8].children[0].classList.add("letter8_top");
    childs[8].children[2].classList.add("letter8_bottom");
    setTimeout(() => {
        childs[8].children[1].classList.add("letter8_mid");
    }, 100);
    setTimeout(() => {
        childs[8].children[3].classList.add("letter8_left");
    }, 200);
    setTimeout(() => {
        childs[7].children[0].classList.add("letter7_diag");
    }, 300);
    setTimeout(() => {
        childs[7].children[1].classList.add("letter7_top");
        childs[7].children[2].classList.add("letter7_right");
        childs[7].children[3].classList.add("letter7_bottom");
    }, 500);
    setTimeout(() => {
        childs[7].children[4].classList.add("letter7_left");
    }, 600);
    setTimeout(() => {
        childs[6].children[0].classList.add("letter6_top");
        childs[6].children[2].classList.add("letter6_bottom");
    }, 700);
    setTimeout(() => {
        childs[6].children[1].classList.add("letter6_mid");
    }, 800);
    setTimeout(() => {
        childs[6].children[3].classList.add("letter6_left");
    }, 900);
    setTimeout(() => {
        childs[5].children[0].classList.add("letter5_left");
        childs[5].children[1].classList.add("letter5_right");
    }, 1000);
    setTimeout(() => {
        childs[5].children[2].classList.add("letter5_mid");
    }, 1100);
    setTimeout(() => {
        childs[4].children[0].classList.add("letter4_top");
        childs[4].children[1].classList.add("letter4_bottom");
    }, 1300);
    setTimeout(() => {
        childs[4].children[2].classList.add("letter4_left");
    }, 1400);
    setTimeout(() => {
        childs[3].children[0].classList.add("letter3_top");
        childs[3].children[1].classList.add("letter3_bottom");
    }, 1500);
    setTimeout(() => {
        childs[3].children[2].classList.add("letter3_left");
    }, 1600);
    setTimeout(() => {
        childs[2].children[0].classList.add("letter2_top");
        childs[2].children[1].classList.add("letter2_bottom");
    }, 1700);
    setTimeout(() => {
        childs[2].children[2].classList.add("letter2_mid");
    }, 1800);
    setTimeout(() => {
        childs[1].children[0].classList.add("letter1_bottom");
    }, 1900);
    setTimeout(() => {
        childs[1].children[1].classList.add("letter1_left");
    }, 2000);
    setTimeout(() => {
        childs[0].children[0].classList.add("letter0_top");
        childs[0].children[1].classList.add("letter0_bottom");
    }, 2100);
    setTimeout(() => {
        childs[0].children[2].classList.add("letter0_left");
    }, 2200);
    setTimeout(() => {
        childs[0].children[2].classList.add("letter0_join");
        childs[1].children[1].classList.add("letter1_join");
        childs[2].children[2].classList.add("letter2_join");
        childs[3].children[2].classList.add("letter3_join");
        childs[4].children[2].classList.add("letter4_join");
        childs[5].children[2].classList.add("letter5_join");
        childs[6].children[3].classList.add("letter6_join");
        childs[7].children[4].classList.add("letter7_join");
        childs[8].children[3].classList.add("letter8_join");
    }, 2400);
    setTimeout(() => {
        childs[0].children[2].classList.add("arrow_NE");
        childs[1].children[1].classList.add("arrow_NE");
        childs[2].children[2].classList.add("arrow_NE");
    }, 3000);
    setTimeout(() => {
        childs[1].children[1].classList.add("arrow_NE_top");
        childs[2].children[2].classList.add("arrow_NE_right");
    }, 3200);
    setTimeout(() => {
        document.getElementById("NE_container").classList.add("visible");
    }, 3500);
    setTimeout(() => {
        childs[1].children[1].classList.add("arrow_NO_left");
    }, 4000);
    setTimeout(() => {
        childs[0].children[2].classList.add("arrow_NO");
    }, 4200);
    setTimeout(() => {
        childs[2].children[2].classList.add("arrow_NO_top");
    }, 4400);
    setTimeout(() => {
        document.getElementById("NO_container").classList.add("visible");
    }, 4700);
    setTimeout(() => {
        childs[1].children[1].classList.add("arrow_S_right");
    }, 5100);
    setTimeout(() => {
        childs[0].children[2].classList.add("arrow_S");
    }, 5300);
    setTimeout(() => {
        childs[2].children[2].classList.add("arrow_S_left");
    }, 5500);
    setTimeout(() => {
        document.getElementById("S_container").classList.add("visible");
    }, 5800);
    setTimeout(() => {
        childs[1].children[1].classList.add("arrow_S_right_collapse");
    }, 6100);
    setTimeout(() => {
        childs[0].children[2].classList.add("arrow_S_collapse");
    }, 6300);
    setTimeout(() => {
        childs[2].children[2].classList.add("arrow_S_left_collapse");
    }, 6500);
    setTimeout(() => {
        childs[1].children[1].outerHTML = "<path d='M26 3.5 l0 0'/>";
        childs[0].children[2].outerHTML = "<path d='M26 3.5 l0 0'/>";
        childs[2].children[2].outerHTML = "<path d='M26 3.5 l0 0'/>";
        interaction_active = true;
    }, 6700);
});

function hide_tag(section) {
    if(interaction_active) {
        check_ending(section, false);
        interaction_active = false;
        document.getElementById("S_container").classList.toggle("visible");
        document.getElementById("NO_container").classList.toggle("visible");
        document.getElementById("NE_container").classList.toggle("visible");
        document.getElementById("close_section_button").classList.toggle("visible");
        setTimeout(() => {
            introSvg.classList.toggle("tag_hide");
            childs[1].children[1].outerHTML = "<path d='M26 3.5 l0 0'/>";
            childs[0].children[2].outerHTML = "<path d='M26 3.5 l0 0'/>";
            childs[2].children[2].outerHTML = "<path d='M26 3.5 l0 0'/>";
            childs[1].children[1].classList.add("circle_left");
        }, 100);
        setTimeout(() => {
            childs[0].children[2].classList.add("circle_left");
        }, 300);
        setTimeout(() => {
            childs[2].children[2].classList.add("circle_left");
        }, 500);
        setTimeout(() => {
            childs[1].children[1].classList.add("triangle_left");
            childs[0].children[2].classList.add("triangle_right");
            childs[2].children[2].classList.add("triangle_bottom");
        }, 700);
        setTimeout(() => {
            document.getElementById(section).classList.toggle("visible");
        }, 1000);
        setTimeout(() => {
            interaction_active = true;
        }, 1300);
    }
}

function show_tag() {
    if(interaction_active) {
        check_ending("", true);
        interaction_active = false;
        document.getElementById('studies').classList.remove("visible");
        document.getElementById('who').classList.remove("visible");
        document.getElementById('projects').classList.remove("visible");
        document.getElementById("S_container").classList.toggle("visible");
        document.getElementById("NO_container").classList.toggle("visible");
        document.getElementById("NE_container").classList.toggle("visible");
        document.getElementById("close_section_button").classList.toggle("visible");
        setTimeout(() => {
            introSvg.classList.toggle("tag_hide");
            childs[1].children[1].classList.add("untriangle_left");
            childs[0].children[2].classList.add("untriangle_right");
            childs[2].children[2].classList.add("untriangle_bottom");
        }, 0);
        setTimeout(() => {
            childs[1].children[1].outerHTML = "<path d='M5 3.5 l0 0'/>";
            childs[0].children[2].outerHTML = "<path d='M5 3.5 l0 0'/>";
            childs[2].children[2].outerHTML = "<path d='M5 3.5 l0 0'/>";
            childs[1].children[1].classList.add("circle_mid");
        }, 100);
        setTimeout(() => {
            childs[0].children[2].classList.add("circle_mid");
        }, 300);
        setTimeout(() => {
            childs[2].children[2].classList.add("circle_mid");
        }, 500);
        setTimeout(() => {
            childs[1].children[1].classList.remove("circle_left");
            childs[0].children[2].classList.remove("circle_left");
            childs[2].children[2].classList.remove("circle_left");
        }, 1000);
        setTimeout(() => {
            interaction_active = true;
        }, 1300);
    }
}

document.getElementById("go_to_raycast").addEventListener("click", () => {
    window.open("../projects/RayCast/index.html");
});
document.getElementById("go_to_sudoku").addEventListener("click", () => {
    window.open("../projects/Sudoku/index.html");
});
document.getElementById("go_to_pong").addEventListener("click", () => {
    window.open("../projects/Pong/index.html?gaming=" + (tunned_cursor == "gaming" ? true : false));
});
document.getElementById("go_to_birds").addEventListener("click", () => {
    window.open("../projects/Birds/index.html");
});
document.getElementById("go_to_isocube").addEventListener("click", () => {
    window.open("../projects/Isocube/index.html");
});

var projectsDiv = document.getElementById("projects");
var scrollArrow = document.getElementById("scroll_arrow");

document.addEventListener("DOMContentLoaded", function() {
    if (projectsDiv.scrollHeight > projectsDiv.clientHeight) {
        scrollArrow.style.display = "block"; // Put block to see arrow indicating scroll
    } else {
        scrollArrow.style.display = "none";
    }
});

function france_appears() {
    var france = document.createElement('div');
    france.innerHTML = "<img src='./assets/france.svg' class='france'/>"
    document.body.appendChild(france);
    check_ending("france", false);
}

function check_ending(a, b) {
    if(info_viewed.indexOf(a) == -1 && a != "") info_viewed.push(a);
    if(info_viewed.length == 8 && b) {
        document.getElementById("ending").style.visibility = "visible";
        ending_animate();
    }
}
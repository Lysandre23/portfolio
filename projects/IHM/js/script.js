const width = 0.7*window.innerWidth;
const height = 0.8*window.innerHeight;

let alphabet = "abcdefghijklmnopqrstuvwxyz123456789%ù^¨*$#@`£+={}[]!&".split("");
let hacking = false;
let hackingEffetApplyButton = false;
let objHackingEffectApplyButton = null;
let oldSettings = {};
let time = 0;
let menuOpened = false;
let language = "en";

let system = new System();

function setup() {
    createCanvas(width, height);
    $(".destroyModal").toggle();
    $(".refreshModal").toggle();
}

function draw() {
    time++;
    background(245);
    system.render();
    if(hackingEffetApplyButton && time%5 == 0) {
        let t = "";
        for(let i=0; i<4; i++) {
            t += alphabet[Math.floor(Math.random()*alphabet.length)];
        }
        $("#" + objHackingEffectApplyButton).children(".bar").children(".applyButtonBox").children(".applyButton").text(t);
    }
}

function mousePressed() {
    if(isMouseOnCanva() && !hacking) {
        if(system.isElementClicked() != null) {
            showSettings(system.isElementClicked());
        }
    }
}

function isMouseOnCanva() {
    return mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
}

function showSettings(obj) {
    hacking = true;
    $("#" + obj).children(".bar").children(".applyButtonBox").children(".applyButton").text(lang[language]["buttonApplySettingsCarpet"]);
    $('#' + obj).css("bottom", "5%");
    /* Carpet */
    if(obj == 'carpet') {
        oldSettings = {
            allowMovementCarpet: $('#cbAllowMovementCarpet').attr('value')
        }
    }
    if(obj == 'piston1') {
        oldSettings = {
            allowMovementPiston1: $('#cbBlockPiston1').attr('value')
        }
    }
    if(obj == 'piston2') {
        oldSettings = {
            allowMovementPiston2: $('#cbBlockPiston2').attr('value')
        }
    }
    if(obj == 'barrier') {
        oldSettings = {
            allowMovementBarrier: $('#cbBlockBarrier').attr('value')
        }
    }
    if(obj == 'pistonMag') {
        oldSettings = {
            allowMovementPistonMag: $('#cbBlockPistonMag').attr('value')
        }
    }
}

function applySettings(obj) {
    hacking = false;
    hackingEffetApplyButton = true;
    objHackingEffectApplyButton = obj;
    $("#" + obj).children(".bar").children(".applyButtonBox").children(".hackingEffect").addClass("active");
    setTimeout(() => {
    if(obj == 'carpet') {
        if($('#cbAllowMovementCarpet').attr('value') == 1) {
            system.carpet.blocked = true;
        }else{
            system.carpet.blocked = false;
        }
    }
    if(obj == 'piston1') {
        if($('#cbBlockPiston1').attr('value') == 1) {
            system.piston1.blocked = true;
        }else{
            system.piston1.blocked = false;
        }
    }
    if(obj == 'piston2') {
        if($('#cbBlockPiston2').attr('value') == 1) {
            system.piston2.blocked = true;
        }else{
            system.piston2.blocked = false;
        }
    }
    if(obj == 'barrier') {
        if($('#cbBlockBarrier').attr('value') == 1) {
            system.barrier.blocked = true;
        }else{
            system.barrier.blocked = false;
        }
    }
    if(obj == 'pistonMag') {
        if($('#cbBlockPistonMag').attr('value') == 1) {
            system.pistonMag.blocked = true;
        }else{
            system.pistonMag.blocked = false;
        }
    }
    
    $('#' + obj).css("bottom", "-50%");
    hackingEffetApplyButton = false;
    objHackingEffectApplyButton = null;
    $("#" + obj).children(".bar").children(".applyButtonBox").children(".hackingEffect").removeClass("active");
    }, 1000);
}

function cancelSettings(obj) {
    hacking = false;
    /* Carpet */
    if(obj == 'carpet') {
        if(oldSettings.allowMovementCarpet != $('#cbAllowMovementCarpet').attr('value')) {
            $('#cbAllowMovementCarpet').click();
        }
    }
    if(obj == 'piston1') {
        if(oldSettings.allowMovementPiston1 != $('#cbBlockPiston1').attr('value')) {
            $('#cbBlockPiston1').click();
        }
    }
    if(obj == 'piston2') {
        if(oldSettings.allowMovementPiston2 != $('#cbBlockPiston2').attr('value')) {
            $('#cbBlockPiston2').click();
        }
    }
    if(obj == 'barrier') {
        if(oldSettings.allowMovementBarrier != $('#cbBlockBarrier').attr('value')) {
            $('#cbBlockBarrier').click();
        }
    }
    if(obj == 'pistonMag') {
        if(oldSettings.allowMovementPistonMag != $('#cbBlockPistonMag').attr('value')) {
            $('#cbBlockPistonMag').click();
        }
    }
    $('#' + obj).css("bottom", "-50%");
}

function openSoteriaWebsite() {
    window.open("https://soteria-lab.com");
}

function changeCheckboxValue(obj) {
    $(obj).attr('value', ($(obj).attr('value') == 0 ? 1 : 0));
}

function toggleInfoMenuButton(obj) {
    let infoBull = $(obj).parent().children("p");
    if($(infoBull).css("visibility") == "hidden") {
        $(infoBull).css("visibility", "visible");
    }else{
        $(infoBull).css("visibility", "hidden");
    }
}

function showDestroyModal() {
    $(".p5Canvas").css("filter", "blur(3px)");
    $(".destroyModal").toggle();
}

function showRefreshModal() {
    $(".p5Canvas").css("filter", "blur(3px)");
    $(".refreshModal").toggle();
}

function closeDestroyModal() {
    $(".p5Canvas").css("filter", "blur(0px)");
    $(".destroyModal").toggle();
}

function closeRefreshModal() {
    $(".p5Canvas").css("filter", "blur(0px)");
    $(".refreshModal").toggle();
}

function refresh() {
    $(".refreshModal").toggle();
    if($('#cbAllowMovementCarpet').attr('value') == 1) $("#cbAllowMovementCarpet").click();
    if($('#cbBlockPiston1').attr('value') == 1) $("#cbBlockPiston1").click();
    if($('#cbBlockPiston2').attr('value') == 1) $("#cbBlockPiston2").click();
    if($('#cbBlockBarrier').attr('value') == 1) $("#cbBlockbarrier").click();
    $(".refreshLoader").css("visibility", "visible");
    setTimeout(() => {
        system.carpet.blocked = false;
        $(".refreshLoader").children("div").css("width",100*(400/2700)+"%");
        setTimeout(() => {
            system.piston1.blocked = false;
            $(".refreshLoader").children("div").css("width",100*(1000/2700)+"%");
            setTimeout(() => {
                system.piston2.blocked = false;
                $(".refreshLoader").children("div").css("width",100*(1200/2700)+"%");
                setTimeout(() => {
                    system.barrier.blocked = false;
                    $(".refreshLoader").children("div").css("width",100+"%");
                    setTimeout(() => {
                        $(".refreshLoader").css("visibility", "hidden");
                        $(".p5Canvas").css("filter", "blur(0px)");
                        setTimeout(() => {
                            $(".refreshLoader").children("div").css("width","0%");
                        }, 500);
                    }, 500);
                }, 1000);
            }, 200);
        }, 600);
    }, 400);
}

function destroy() {
    $(".destroyModal").toggle();
    if($('#cbAllowMovementCarpet').attr('value') == 0) $("#cbAllowMovementCarpet").click();
    if($('#cbBlockPiston1').attr('value') == 0) $("#cbBlockPiston1").click();
    if($('#cbBlockPiston2').attr('value') == 0) $("#cbBlockPiston2").click();
    if($('#cbBlockBarrier').attr('value') == 0) $("#cbBlockbarrier").click();
    $(".destroyLoader").css("visibility", "visible");
    setTimeout(() => {
        system.carpet.blocked = true;
        $(".destroyLoader").children("div").css("width",100*(400/2700)+"%");
        setTimeout(() => {
            system.piston1.blocked = true;
            $(".destroyLoader").children("div").css("width",100*(1000/2700)+"%");
            setTimeout(() => {
                system.piston2.blocked = true;
                $(".destroyLoader").children("div").css("width",100*(1200/2700)+"%");
                setTimeout(() => {
                    system.barrier.blocked = true;
                    $(".destroyLoader").children("div").css("width",100+"%");
                    setTimeout(() => {
                        $(".destroyLoader").css("visibility", "hidden");
                        $(".p5Canvas").css("filter", "blur(0px)");
                        setTimeout(() => {
                            $(".destroyLoader").children("div").css("width","0%");
                        }, 500);
                    }, 500);
                }, 1000);
            }, 200);
        }, 600);
    }, 400);
}

function toggleLanguage() {
    let langEmoji = {
        "fr": 129360,
        "en": 128130,
        "de": 127866,
        "it": 127829
    }
    let langList = ["en", "fr", "de"];
    let index = langList.indexOf(language);
    language = langList[(index + 1)%langList.length];
    for(k in lang[language]) {
        $("#" + k).text(lang[language][k]);
        if(k == "textButtonLanguageMenu") {
            $("#" + k).text (lang[language][k] + " " + String.fromCodePoint(langEmoji[language]));
        }
    }
}
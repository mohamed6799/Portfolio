let navbar = document.querySelectorAll(".nav .navbar")[0];
let h1 = document.querySelectorAll(".nav  h1")[0];
let menu = document.querySelectorAll(".nav .menu")[0];
let settingsBut = document.querySelectorAll(".content .settings .buttons button");
let content = document.querySelectorAll(".portfolio .content")[0];
let item = document.querySelectorAll(".portfolio .content .item");
let darkmode = document.getElementById("checkdark");
let buttondark = document.querySelectorAll(".input2 label")[0];
let coursesUnit = document.querySelectorAll(".portfolio .content .courses .units .unit");

// border = bdr
let borderabout = document.querySelectorAll(".about .units .unit .twounit .minunit");
let contentImgborder = document.querySelectorAll(".content .home .img div");
let borderImg = document.querySelectorAll(".nav  img")[0];

//color = oor
let navItem = document.querySelectorAll(".menu ul li a");
let spanNameH1 = document.querySelectorAll(".content .home .title h1 span");

// bg
let downloadcv = document.getElementById("cv");
let textHover = document.querySelectorAll(".portfolio .content .courses .units .unit .text_hover");
let borderAnimation = document.querySelectorAll(".portfolio .content .item .projects .bor");
let buttonIncard = document.querySelectorAll(".but");
let buttonHome = document.querySelectorAll(".content .home .title button")[0];

opacityImg()
function opacityImg(){
    if(content.scrollTop > item[0].scrollHeight/2){
        let colorBorder="";
        settingsBut.forEach(e=>{
            if(e.classList == "colorbutton activeColor"){
                colorBorder = e.style.backgroundColor;
            }
        })
        borderImg.style.cssText=`
        opacity:1;
        transition:0.3s ease;
        border:5px solid ${colorBorder};
    `;
    navbar.style.cssText = `
        transition:0.3s ease;
        transform:translateY(0);
    `;
    }else{
        borderImg.style.cssText = `
        transition:0.3s ease;
        opacity:0;
    `;
    navbar.style.cssText = `
        transition:0.3s ease;
        transform:translateY(-100px)
    `;    
    }
}

buttondark.addEventListener("click",function(){
    if(darkmode.checked){
        navItem.forEach(e=>{
            if(e.classList != "linkItem active"){
                e.style.color="#eeeeee"
            }
        })
        
    }else{
        navItem.forEach(e=>{
            if(e.classList != "linkItem active"){
                e.style.color="black"
            }
        })
        
    }
})

navItem.forEach(e=>{
    e.onclick=function(){
        shortactive()
    }
})

content.onscroll = function(){
    opacityImg()
    if(content.scrollTop < item[0].scrollHeight){
        shortactive(0)
        activeItemnav()
    }
    else if(content.scrollTop < item[0].scrollHeight+item[1].scrollHeight){
        shortactive(1)
        activeItemnav();
    }
    else if(content.scrollTop < item[0].scrollHeight+item[1].scrollHeight+item[2].scrollHeight){
        shortactive(2)
        activeItemnav()
    }
    else if(content.scrollTop < item[0].scrollHeight+item[1].scrollHeight+item[2].scrollHeight+item[3].scrollHeight){
        shortactive(3)
        activeItemnav()
    }
    else if(content.scrollTop < item[0].scrollHeight+item[1].scrollHeight+item[2].scrollHeight+item[3].scrollHeight+item[4].scrollHeight){
        shortactive(4)
        activeItemnav()
    }
    // else if(content.scrollTop < item[0].scrollHeight+item[1].scrollHeight+item[2].scrollHeight+item[3].scrollHeight+item[4].scrollHeight+item[5].scrollHeight){
    //     shortactive(5)
    //     activeItemnav()
    // }
}

settingsBut.forEach(e=>{
    e.onclick = function(){
        settingsBut.forEach(e=> e.classList.remove("activeColor"));
        e.classList.add("activeColor");
        activeColor(e)
        opacityImg()
    }
    activeColor(e)
})

function activeColor(e){
    if(e.classList == "colorbutton activeColor"){
        borderImg.style.cssText = `
        border:5px solid  ${e.style.backgroundColor};
        transition:0.3s ease;
        `;
        navItem.forEach(m=>{
            if(m.classList == "linkItem active"){
                m.style.cssText = `
                color:${e.style.backgroundColor};
                transition:0.3s ease;
                
                `;
            }
        })
        contentImgborder.forEach(m=> {
            m.style.cssText = `
                border-color:${e.style.backgroundColor};
                transition:0.3s ease;
            `;
        })
        spanNameH1.forEach(m=> {
            m.style.cssText = `
            color:${e.style.backgroundColor};
            transition:0.3s ease;
            `})
        buttonIncard.forEach(m=>{
                m.style.cssText = `
                background-color:${e.style.backgroundColor}
                `;    
        })
        borderAnimation.forEach(m=>{
                m.style.cssText = `
                background-color:${e.style.backgroundColor}
                `
        })
        textHover.forEach(m=>{
                m.style.cssText = `
                background-color:${e.style.backgroundColor}
                `
        })
        borderabout.forEach(m=>{
                m.style.cssText = `
                transition:0.3s ease;
                border:2px solid ${e.style.backgroundColor};
                `
        })
        downloadcv.style.cssText = `
            background-color:${e.style.backgroundColor}
        `;
        buttonHome.style.cssText = `
            background-color:${e.style.backgroundColor};
            
        `;    
    }
}

function activeItemnav(){
    settingsBut.forEach(e=>{
        if(e.classList == "colorbutton activeColor"){
            navItem.forEach(m=>{
                if(m.classList == "linkItem active"){
                    m.style.color = `${e.style.backgroundColor}`
                }else{
                    if(darkmode.checked){
                        m.style.color = "black"
                    }else{
                        m.style.color="#eeeeee"
                    }
                }
            })
        }
    })
}

function shortactive(n){
    navItem.forEach(e=> e.classList.remove("active"));
        navItem[n].classList.add("active");
}




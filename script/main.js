let settingsBut = document.querySelectorAll(".content .settings .buttons button");
let navItem = document.querySelectorAll(".menu ul li a");
let borderImg = document.querySelectorAll(".nav img")[0];
let h1 = document.querySelectorAll(".nav h1")[0];
let menu = document.querySelectorAll(".nav .menu")[0];
let content = document.querySelectorAll(".portfolio .content")[0];
let item = document.querySelectorAll(".portfolio .content .item");
let darkmode = document.getElementById("checkdark");
let buttondark = document.querySelectorAll(".input2 label")[0];


function opacityImg(){
    if(content.scrollTop > item[0].scrollHeight/2){
        borderImg.style.cssText = `
        opacity:1;
        transition:0.5s ease-out;
    `;
        h1.style.cssText = `
        transform:translateY(0);
        transition:0.3s ease-out;
    `;
        menu.style.cssText = `
        transform:translateY(0);
        transition:0.3s ease-out;
    `;
    }else{
        borderImg.style.cssText = `
        opacity:0;
        transition:0.5s ease-out;
    `;
        h1.style.cssText = `
        transform:translateY(-100px);
        transition:0.3s ease-out;
    `;
        menu.style.cssText = `
        transform:translateY(-100px);
        transition:0.3s ease-out;
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
    else if(content.scrollTop < item[0].scrollHeight+item[1].scrollHeight+item[2].scrollHeight+item[3].scrollHeight+item[4].scrollHeight+item[5].scrollHeight){
        shortactive(5)
        activeItemnav()

    }
}

settingsBut.forEach(e=>{
    e.onclick = function(){
        settingsBut.forEach(e=> e.classList.remove("activeColor"));
        e.classList.add("activeColor");
        activeColor(e)
        }
        activeColor(e)
})

function activeColor(e){
    if(e.classList == "colorbutton activeColor"){
        borderImg.style.border = `5px solid  ${e.style.backgroundColor}`;
        navItem.forEach(m=>{
            if(m.classList == "linkItem active"){
                m.style.color = `${e.style.backgroundColor}`
            }
        })
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




var menubtn = document.getElementById("menubtn")
var menubtn = document.getElementById("sideNav")
var menubtn = document.getElementById("menu")
sideNav.style.right = "-250px"

menubtn.onclick = function(){
    if (sideNav.style.right == "-250px") 
    {
        sideNav.style.right = "0";
        menu.src = "https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"
    }
    else{
        sideNav.style.right = "-250px" ;
        menu.src = "https://manula.s3.amazonaws.com/user/484/img/bulleted-menu-no-stroke-manual.png" 
       

    }
}
let isOpen = true
let sideBarDiv = document.getElementById("sideBar")
let btnOpenCloseDiv = document.getElementById("btnSideBarHideShow")

function ChangeSideBar() {
    if (isOpen){
        btnOpenCloseDiv.innerHTML=">"
        btnOpenCloseDiv.classList.remove("btnSideBarHide")
        btnOpenCloseDiv.classList.add("btnSideBarShow")
        sideBarDiv.classList.remove("sideBarOpen")
        sideBarDiv.classList.add("sideBarClose")
    }else{
        btnOpenCloseDiv.innerHTML="<"
        btnOpenCloseDiv.classList.remove("btnSideBarShow")
        btnOpenCloseDiv.classList.add("btnSideBarHide")
        sideBarDiv.classList.remove("sideBarClose")
        sideBarDiv.classList.add("sideBarOpen")
    }
    isOpen=!isOpen
}
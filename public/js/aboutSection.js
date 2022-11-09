const tabContents = document.getElementsByClassName("tab-contents");
const allSection = document.getElementsByClassName("all-section");
const opentab = (tabName) => {
    for (tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    for (sect of allSection) {
        sect.classList.remove("selected");
    }
    event.currentTarget.classList.add("selected");
    document.getElementById(tabName).classList.add("active-tab");
}
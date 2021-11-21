// For Sidebar
// let arrow = document.querySelectorAll(".arrow");
// for (var i = 0; i < arrow.length; i++) {
//     arrow[i].addEventListener("click", (e) => {
//         let arrowParent = e.target.parentElement.parentElement;
//         arrowParent.classList.toggle("showMenu");
//     });
// };

// For Toggle Dropdown
let dropItems = document.querySelectorAll(".drop-item");
for (var i = 0; i < dropItems.length; i++) {
    dropItems[i].addEventListener("click", (e) => {
        if (e.target.classList.contains("arrow")) {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        }

        else if (e.target.classList.contains("bx") || e.target.classList.contains("link_name")) {
            let arrowParent = e.target.parentElement.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        }

        else if (e.target.classList.contains("iocn-link")) {
            let arrowParent = e.target.parentElement;
            arrowParent.classList.toggle("showMenu");
        }

        else {
            e.target.classList.toggle("showMenu");
        };
    });
};

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

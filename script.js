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

// For Side Bar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// For all words change
const allWordsList = ["Welcome to LA SCALA", "READY TO BE OPENED", " RESERVATION", "Discover", "OUR STORY", "OUR STORY Description", "FRANK REYES", "Master Chef", "Amazing Delicious", "Steak Fingers & Gravy", "Special Cocktails", "Bean Salad", "Amazing Delicious Description", "Book A Table", "Discover", "OUR MENU", "Starter", "Lunch", "Dinner", "Dessert", "Alcoholic", "Drinks", "View More", "BEST PLACE OF CULINARY", "OUR GALLERY", "Reservation", "BOOK A TABLE", "Book a table details", "LA SCALA Description", "RECENT POSTS", "Egestas Fringilla Phasellus", "Arcu Cursus Euismod Quis", "Magna Etiam Tempor Viverra", "Varius Sit Amet Mattis", "GALLERY", "CONTACT INFO", "Reon, 1535 Broadway, New York", "+1 888-999-3333", "Contact@example.com", "Lunch", "Everyday", "Dinner: Mon- Thu", "18:00-21:30", "Dinner: Fri- Sun", "19:00-21:00", "Copyright @ 2019 Reon. Get The Theme", "The Menu", "The Menu Details", "SALAD", "CURRY", "POTATO", "ONION AND NUTMEG SALAD........$12", "ur 100% grass-fed hand-cut top sirloin is seared to lock in the juices.", "VINEGAR AND PRUNE SALAD........$12", "Pork and fresh potato combined into chunky make it good.", "CHERVIL AND GUAVA SALAD........$12", "A crisp salad featuring chervil and fresh guava pork and fresh potato.", "GOAT AND MINT SALAD........$22", "Goat and dried mint served on a bed of lettuce. pork and fresh potato.", "STEAKHOUSE SIRLOIN........$25", "Our 100% grass-fed hand-cut top sirloin is seared to lock in the juices.", "SKINNY CARNIVORE........$12", "Genoa salami, smoked prosciutto, barrel-aged Sriracha, bocconcini.", "MEAT", "SUSHI", "TURKEY", "STEAK", "SOUP", "FISH", "About Us", "About Us Details", "Our Story Details", "About Us Details 2", "OUR STAFF", "Andrew Austin", "Chef", "Tom Anderson", "Staff", "Emma Johnson", "TESTIMONIALS", "Reviews", "Lunch 12:00 - 14:00", "Everyday", "Dinner 19:00 - 21:00", "Monday – Thursday", "Dinner 18:00 - 21:30", "Friday – Sunday", "Our Team", "Our Team Text", "Our Events", "Our Events Details", "Suscipit Tellus Mauris", "READ MORE", "January 5, 2019", "Reservation", "Reservation Details", "RESERVE BY PHONE", "RESERVE BY PHONE Details", "PRIVATE DINING & EVENTS", "PRIVATE DINING & EVENTS Details", "Pages Not Found", "OOPS! PAGE NOT FOUND", "GO BACK HOME", "WE ARE COMMING SOON", "DAYS", "HOURS", "MINUTES", "SECONDES", "Gallery Grid", "Gallery Grid Text", "Blog Sidebar", "Blog Sidebar Text", "Search", "Categories", "Search Here", "Decorate", "Even", "Gallery", "Recipe"];

let allWordsChangeContainer = document.getElementById("all-words-field-container");

allWordsList.map(word => {
    let div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<label class="form-label">
                ${word}
            </label>

            <input type="text" class="form-control text-dark" value="${word}">`;

    allWordsChangeContainer.appendChild(div);
})
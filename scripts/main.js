import projectidea from "./modules/projectidea.js";
import businessplan from "./modules/businessplan.js";
import info from "./modules/info.js";
import nav from "./modules/nav.js";
import footer from "./modules/footer.js";

document.getElementById("nav").innerHTML = `${nav}`;

document.getElementById("businessplan").addEventListener("click", () => {
    document.getElementById("app").innerHTML = `${businessplan}`;
});

document.getElementById("projectidea").addEventListener("click", () => {
    document.getElementById("app").innerHTML = `${projectidea}`;
});

document.getElementById("info").addEventListener("click", () => {
    document.getElementById("app").innerHTML = `${info}`;
});

document.getElementById("footer").innerHTML = `${footer}`;
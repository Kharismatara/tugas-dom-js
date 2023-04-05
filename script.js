//Section 2. Selecting elements
// Section 2. Selecting elements
// getElementById() – select an element by id.
const element = document.getElementById("belajar1");
document.getElementById("belajarnodejs").innerHTML = "Target bulan ini kami berhasil Belajar " + element.innerHTML;
// getElementsByName() – select elements by name.
const element1 = document.getElementsByTagName("p");
document.getElementById("belajar").innerHTML = "Hasil minggu ini di belajar " + element1[3].innerHTML;
// getElementsByTagName()  – select elements by a tag name.
const x = document.getElementById("mydiv");
const y = document.getElementsByTagName("p");
document.getElementById("namaku").innerHTML = "Taras belajar " + y[0].innerHTML;
// getElementsByClassName() – select elements by one or more class names.
const isclass = document.getElementsByClassName("my-class");
document.getElementById("namaku1").innerHTML = "Ini adalah hasil pertamaku belajar " + isclass[0].innerHTML;
// querySelector()  – select elements by CSS selectors
const isselektor = document.querySelectorAll("p.my-class");
document.getElementById("namaku2").innerHTML = "Ini adalah hasil pertamaku belajar dan implementasi " + isselektor[3].innerHTML;

// Section 3. Traversing elements
// Get the parent element – get the parent node of an element.
let name1 = document.getElementById("belajar1").parentNode.nodeName;
document.getElementById("coba").innerHTML = name1;
// Get child eleme

//section 4
let div = document.createElement("div");
div.id = "container";
div.innerHTML = "<p>Membuat pagaraf dalam div</p>";
document.body.appendChild(div);

let navbar = document.getElementById("nav");

// create new a element
let a = document.createElement("a");
a.textContent = "lokasi";
// add it to the a element
navbar.appendChild(a);

let clonednavbar = navbar.cloneNode(true);
clonednavbar.id = "navbar-layanan";
document.body.appendChild(clonednavbar);
//section 5-6
document.getElementById("penjelasan").setAttribute("class", "header");
document.getElementById("paragraf").setAttribute("style", "color: red; font-size: 20px;");

function removeStyle() {
    let para = document.getElementById("myParagraph");
    para.removeAttribute("style");
    para.classList.remove("highlight");
}
div.style.backgroundColor = "blue";
div.style.color = "white";
div.style.padding = "20px";

//section 7-8
function submitForm() {
    // mengambil nilai dari input form
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;

    // melakukan validasi input
    if (nama == "") {
        alert("Nama tidak boleh kosong");
    } else if (email == "") {
        alert("Email tidak boleh kosong");
    } else if (!email.includes("@")) {
        alert("Email tidak valid");
    } else {
        // melakukan proses submit form ke server
        alert("Form berhasil disubmit dengan nilai: " + nama + ", " + email);
        document.getElementById("nama").value = "";
        document.getElementById("email").value = "";
    }
}
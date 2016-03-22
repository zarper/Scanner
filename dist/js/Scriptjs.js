object.addEventListener("click", Ajoutscript);

function Ajoutscript()
{
var balisage = element.innerHTML;
element.innerHTML = balisage;

d = document.getElementById("d");
dump(d.innerHTML);

document.body.innerHTML = "";
}
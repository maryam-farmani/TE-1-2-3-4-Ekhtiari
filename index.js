const body = document.body;
const inputText = document.getElementById("title")
const buttonSubmit = document.getElementById("button-addon2")
const creatH2 = document.createElement("h2");
body.append(creatH2);
 
function person(name) {
    console.log("hello" + name);
};
person(" maryam");


function user(name="sara") {
    console.log("hello " + name.toUpperCase());
}; 
user();


function userName(name = "s i m a") {
    console.log("hello " + name.split(' ').join('_'));

};
userName();


function naming(name) {
    const toUpperCase = name.toUpperCase();
    const toSplit = toUpperCase.split(" ");
    const joiningii = toSplit.join("_");
    creatH2.innerHTML = joiningii;
    creatH2.style.color = "orange";
    console.log(`hello ${joiningii}`);
}
naming("m a r y a m");
 

console.log(inputText.value)

buttonSubmit.addEventListener("click" , () => naming(inputText.value));
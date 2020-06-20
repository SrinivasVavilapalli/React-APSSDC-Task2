var body= document.getElementById('root');
console.log(body);
var card1link = document.createElement("a");
card1link.setAttribute("href","resume.html");
card1link.setAttribute("style","color:inherit");
body.appendChild(card1link);
var card1 = document.createElement("div");
card1.classList.add("card-1");
card1link.appendChild(card1);
var logo =document.createElement("img");
logo.setAttribute("id","logo");
logo.src="assets/logo.png";
logo.alt="APSSDC"
card1.appendChild(logo);
var num = document.createElement("p");
num.textContent="2020";
card1.appendChild(num);
var blk = document.createElement("div");
blk.setAttribute("class","block");
card1.appendChild(blk);
var logo =document.createElement("img");
logo.setAttribute("id","person");
logo.src="assets/per.jpg";
logo.alt="PERSON"
card1.appendChild(logo);
var name1 = document.createElement("h3");
name1.setAttribute("id","name");
name1.textContent="SRINIVAS VAVILAPALLI";
card1.appendChild(name1);
var mail = document.createElement("h3");
mail.setAttribute("id","mail");
mail.textContent="srinivas123@gmail.com";
card1.appendChild(mail);
var mobile = document.createElement("h3");
mobile.setAttribute("id","mobile");
mobile.textContent="+91 91919100000";
card1.appendChild(mobile);




var card2link = document.createElement("a");
card2link.setAttribute("href","resume.html");
card2link.setAttribute("style","color:inherit");
body.appendChild(card2link);
var card2 = document.createElement("div");
card2.classList.add("card-2");
card2link.appendChild(card2);
var logo =document.createElement("img");
logo.setAttribute("id","logo");
logo.src="assets/logo.png";
logo.alt="APSSDC"
card2.appendChild(logo);
var num = document.createElement("p");
num.textContent="2020";
card2.appendChild(num);
var blk = document.createElement("div");
blk.setAttribute("class","block");
card2.appendChild(blk);
var logo =document.createElement("img");
logo.setAttribute("id","person");
logo.src="assets/per.jpg";
logo.alt="PERSON"
card2.appendChild(logo);
var name1 = document.createElement("h3");
name1.setAttribute("id","name");
name1.textContent="SRINIVAS VAVILAPALLI";
card2.appendChild(name1);
var mail = document.createElement("h3");
mail.setAttribute("id","mail");
mail.textContent="srinivas123@gmail.com";
card2.appendChild(mail);
var mobile = document.createElement("h3");
mobile.setAttribute("id","mobile");
mobile.textContent="+91 91919100000";
card2.appendChild(mobile);

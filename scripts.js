const freelancers = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Bob", price: 50, occupation: "teacher"},
    {name: "Alice", price: 70, occupation: "programmer"}
];

const possibleNames = ["George", "Bill", "Jim", "Bartholomew", "Hank", "Walter", "Sarah", "Ashley"];
const possibleOccupations = ["writer", "teacher", "mercenary", "clown", "competitive sleeper", "bank robber", "bounty hunter", "egg thrower"];

function getAveragePrice()
{
    let sum = 0;
    freelancers.forEach(freelancer => {
        sum += freelancer.price;
    });
    return sum/freelancers.length;
}

document.body.addEventListener("load", () => {
    
});

let table = document.querySelector("table");
for(let i = 0; i < 2; i++)
{
    let tr = document.createElement("tr");
    let lancerName = document.createElement("td");
    lancerName.innerText = freelancers[i].name;
    tr.appendChild(lancerName);
    let lancerOccupation = document.createElement("td");
    lancerOccupation.innerText = freelancers[i].occupation;
    tr.appendChild(lancerOccupation);
    let lancerPrice = document.createElement("td");
    lancerPrice.innerText = freelancers[i].price;
    tr.appendChild(lancerPrice);
    table.appendChild(tr);
}
document.querySelector("#averageprice").innerText = `The average starting price is $${(freelancers[0].price + freelancers[1].price)/2}`;
setTimeout(() => {
    addToTable(freelancers[2].name, freelancers[2].occupation, freelancers[2].price);
}, 3000);

setInterval(() => {
    generateRandomFreelancer();
}, 4000);

function addToTable(name, occupation, price) 
{
    let tr = document.createElement("tr");
    let lancerName = document.createElement("td");
    lancerName.innerText = name;
    tr.appendChild(lancerName);
    let lancerOccupation = document.createElement("td");
    lancerOccupation.innerText = occupation;
    tr.appendChild(lancerOccupation);
    let lancerPrice = document.createElement("td");
    lancerPrice.innerText = price;
    tr.appendChild(lancerPrice);
    table.appendChild(tr);
    document.querySelector("#averageprice").innerText = `The average starting price is $${getAveragePrice()}`;
}

function addToFreelancers(name, occupation, price)
{
    const freelancer = {name: name, price: price, occupation: occupation};
    freelancers.push(freelancer);
    addToTable(name, occupation, price);
}

function generateRandomFreelancer()
{
    const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
    const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
    const price = Math.floor(Math.random() * 100);
    addToFreelancers(name, occupation, price);
}
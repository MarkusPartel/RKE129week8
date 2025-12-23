const fnameSpan = document.querySelector("#fName");
const rollSpan = document.querySelector("#roll")
const kontaktList = document.querySelector("#kontaktid")
const oskusedList = document.querySelector("#oskused")



window.onload = () => {

    fetch("person.json")
    .then(response => response.json())
    .then(data => {

        fnameSpan.textContent = data.fName +" " + data.lName;
        rollSpan.textContent = data.roll

        for(let i = 0; i < data.kontaktid.length; i++) {

            let li = document.createElement("li");
            li.innerHTML = data.kontaktid[i];

            kontaktList.appendChild(li);
        }

        for(let i = 0; i < data.oskused.length; i++) {

            let li = document.createElement("li");
            li.innerHTML = data.oskused[i];

            oskusedList.appendChild(li);
        }





    })







} 
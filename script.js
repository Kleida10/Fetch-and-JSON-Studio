window.onload = function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
           json.sort(function (a, b) {
               return b.hoursInSpace - a.hoursInSpace;
            }); 
            let container = document.getElementById("container");
            let myString = "";
            for (i = 0; i < json.length; i++) {
                if(json[i].active === true){
                    document.getElementById("active").style.color = "green";
                }
                myString = myString + `
     <div class="astronaut">
        <div class="bio">
           <h3>${json[i].firstName} ${json[i].lastName}</h3>
           <ul>
              <li>ID: ${json[i].id}</li>
              <li id="active">Active: ${json[i].active}</li>
              <li>Skills: ${json[i].skills}</li>
              <li>Hours in Space: ${json[i].hoursInSpace}</li>
           </ul>
        </div>
        <img class="avatar" src="${json[i].picture}">
     </div>`
    
            }
            myString =` Number of Astronauts: ${json.length}` + myString;
            container.innerHTML = myString;

        });
    });
}
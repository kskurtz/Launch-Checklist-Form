   window.addEventListener("load",function(){
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            console.log(json)
        
         const container= document.getElementById("missionTarget");
         container.innerHTML=`
           <h2>Mission Destination</h2>
           <ol>
           <li>Name: ${json[2].name}</li>
           <li>Diameter: ${json[2].diameter}</li>
           <li>Star: ${json[2].star}</li>
           <li>Distance from Earth: ${json[2].distance}</li>
           <li>Number of Moons: ${json[2].moons}</li>
           </ol>
           <img src="${json[2].image}">
              `;          
        });
      });
   });
   window.addEventListener("load",function(event){
      event.preventDefault();
      
      let form = document.querySelector("form");         
      form.addEventListener("submit", function(event) {
         let pilotnameInput = document.querySelector("input[name=pilotName]");                                
         let copilotnameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         event.preventDefault();
         if (pilotnameInput.value === "" || copilotnameInput.value === ""||fuelLevelInput.value === "" || cargoMassInput.value === ""){
             alert("All fields are required!");
         }else if
            (!isNaN(pilotnameInput.value) || !isNaN(copilotnameInput.value)) {
               console.log("else1")
               alert ("Enter a name not a number!");
         }else if           
            (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
               console.log("else2")
              alert("Enter a number!");                   
         }else if
            (fuelLevelInput.value <10000){
               console.log("elseif")
            let launchheader = document.getElementById("launchStatus");
            let pilot = document.getElementById("pilotStatus");
            let copilot = document.getElementById("copilotStatus");
            let fuelLevel = document.getElementById("fuelStatus");
            let cargoMass = document.getElementById("cargoStatus");
            launchheader.innerHTML = "Shuttle Not Ready for Launch";
            launchheader.style.color= "red";
            let visible = document.getElementById("faultyItems");
            visible.style.visibility = "visible";
            pilot.innerHTML = `Pilot ${pilotnameInput.value} is ready for launch.`;
            copilot.innerHTML = `Co-pilot ${copilotnameInput.value}is ready for launch.`;
            fuelLevel.innerHTML = "Fuel Level too low for launch.";
               if(cargoMassInput.value>10000){
                  cargoMass.innerHTML = "Cargo Mass too high for launch."
               }else{
            cargoMass.innerHTML = "Cargo Mass low enough for launch.";
               }
         }else if
            (cargoMassInput.value>10000){
               let launchheader = document.getElementById("launchStatus");
               let pilot = document.getElementById("pilotStatus");
               let copilot = document.getElementById("copilotStatus");
               let fuelLevel = document.getElementById("fuelStatus");
               let cargoMass = document.getElementById("cargoStatus");
               launchheader.innerHTML = "Shuttle Not Ready for Launch";
               launchheader.style.color =  "red";
               let visible = document.getElementById("faultyItems");
               visible.style.visibility = "visible";
               pilot.innerHTML = `Pilot ${pilotnameInput.value} is ready for launch.`;
               copilot.innerHTML = `Co-pilot ${copilotnameInput.value} is ready for launch.`;
               fuelLevel.innerHTML = "Fuel Level high enough for launch.";
               cargoMass.innerHTML = "Cargo Mass too high for launch.";               
         }else{
            let launchheader = document.getElementById("launchStatus");
            let pilot = document.getElementById("pilotStatus");
            let copilot = document.getElementById("copilotStatus");
            let fuelLevel = document.getElementById("fuelStatus");
            let cargoMass = document.getElementById("cargoStatus");
            launchheader.innerHTML = "Shuttle Ready for Launch";
            launchheader.style.color = "green";
            let visible = document.getElementById("faultyItems");
            visible.style.visibility = "visible";
            pilot.innerHTML = `Pilot ${pilotnameInput.value} is ready for launch.`;
            copilot.innerHTML = `Co-pilot ${copilotnameInput.value} is ready for launch.`;
            fuelLevel.innerHTML = "Fuel Level high enough for launch.";
            cargoMass.innerHTML = "Cargo Mass low enough for launch.";
         }
         event.preventDefault();
      });
   });



   
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

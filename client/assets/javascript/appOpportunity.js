let mainDivOpp = document.querySelector("#opp");
//mainDivOpp.innerHTML = "";


//

let resultsArray = [];

function createImageOppsCards(resultsArray2) {
 resultsArray2.forEach((result) => {
     
    // Card Container
    
    let card = document.createElement("div");
    card.setAttribute("class", "card mb-3");
    card.setAttribute("style", "margin-bottom:20px");
    
    //Create Card Body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
     
    const res = result["camera"];
    const rover = result["rover"];
     
     
     
    const fullName = document.createElement('h5');
    fullName.setAttribute('class','card-title');
    fullName.textContent = `Full Name: ${res.full_name}`;
     
     
     
    const shortCameraName = document.createElement('h5');
    shortCameraName.setAttribute('class','card-title');
    shortCameraName.textContent = `Short Camera Name: ${res.name}`;
     
    
    
    
    const roverName = document.createElement('h5');
    roverName.setAttribute('class','card-title');
    roverName.textContent = `Rover Name: ${rover["name"]}`;
    
    
     
    const earthDate = document.createElement('h5');
    earthDate.setAttribute('class','card-title');
    earthDate.textContent = `Earth Date: ${result["earth_date"]}`;
     
    const landingDate = document.createElement('h5');
    landingDate.setAttribute('class','card-title');
    landingDate.textContent = `Landing Date: ${rover["landing_date"]}`;
     
    const launchDate = document.createElement('h5');
    launchDate.setAttribute('class','card-title');
    launchDate.textContent = `Launch Date: ${rover["launch_date"]}`;
     
     
     
     
    const status = document.createElement('h5');
    status.setAttribute('class','card-title');
    status.textContent = `Launch Date: ${rover["status"].charAt(0).toUpperCase()+ rover["status"].slice(1)}`;
     
    
     
    const image = document.createElement('img');
    image.src = result["img_src"];
    image.alt = 'NASA Picture of the Day';
    image.loading = 'lazy';
    image.setAttribute('class','card-img-top');
    image.height = "600";
    image.width = "600";
     
      //const res = result["camera"];
    console.log(res.full_name);
    console.log(res.name);
    console.log(result["earth_date"]);
    console.log(result["img_src"]);
    
    console.log(rover["name"]);
    console.log(rover["landing_date"]);
    console.log(rover["launch_date"]);
    console.log(rover["status"].charAt(0).toUpperCase()+ rover["status"].slice(1));
    
     
     
    
     
    cardBody.append(fullName, shortCameraName, roverName, earthDate, landingDate, status);
     
    
    card.append(cardBody, image);
     
    
     
    mainDivOpp.appendChild(card);
     
   
     
      
    
 });

};



fetch(`http://localhost:3000/opportunityData`, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
  .then(response => response.json())
  .then(data => createImageOppsCards(data["image"]["photos"]))

fetch(`http://localhost:3000/opportunityData`, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
  .then(response => response.json())
  .then(data => console.log(data["image"]["photos"]))


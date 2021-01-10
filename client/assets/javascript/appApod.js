
let mainDivApod = document.querySelector("#apod");
//mainDiv1.innerHTML = "";



let resultsArray = [];

function createImageCards(resultsArray) {
 resultsArray.forEach((result) => {
     
    // Card Container
    
    let card = document.createElement("div");
    //card.classList.add("card mb-3");
    card.setAttribute("class", "card mb-3");
     
    
     
    // Create Image
    const image = document.createElement('img');
    image.src = result.url;
    image.alt = 'NASA Picture of the Day';
    image.loading = 'lazy';
    image.classList.add('card-img-top');
    image.height = "600";
    image.width = "600";
    
    //Create Card Body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    // Card Title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result.title;
     
    // Card Text
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = result.explanation;
     
     
    // Card Footer
    const cardTextFooter = document.createElement('p');
    cardTextFooter.classList.add('card-text');
     
  
    const cardTextFooterSmall = document.createElement('small');
    cardTextFooterSmall.classList.add('text-muted');
    cardTextFooterSmall.textContent = ` Picture Date: ${result.date}` ;
     
   
    
    cardTextFooter.append(cardTextFooterSmall);
     
      
     
    
    cardBody.append(cardTitle, cardText, cardTextFooter);
  
    card.append(image, cardBody);
    
    //console.log(result);
    //const result2 = result;
    //console.log(result2);
    //console.log(card);
    //console.log(card);
     
           
    mainDivApod.appendChild(card);
    
      
    
 });

};

// Example API call


fetch(`http://localhost:3000/apodData`, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
  .then(response => response.json())
  .then(data => createImageCards(data["image"]))

fetch(`http://localhost:3000/apodData`, {
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }
})
  .then(response => response.json())
  .then(data => console.log(data["image"]))


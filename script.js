async function getPokemon() {
    try {
        
        const searchTerm = document.getElementById("searchTerm").value;
        
        const pokeResponse = await fetch("https://pokeapi.co/api/v2/pokemon/"+searchTerm);
        const poke = await pokeResponse.json();

        const pokeResponse2 = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+searchTerm);
        const poke2 = await pokeResponse2.json();
        console.log(JSON.stringify(poke));

        console.log(JSON.stringify(poke2));

        const pokeHolder = document.getElementById("pokeHolder");

        pokeHolder.innerHTML = "";
       
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD
            const divHolder = document.createElement("div");
            divHolder.classList.add("card");
            
            
            

            
            

            // Create an image element
            //      point it to the image from this movie            
            const img = document.createElement("img");
            img.src = poke.sprites.front_default;
            img.width = 100;


            // Create a CONTAINER div to hold the title and year.
            const card = document.createElement("div");
            card.classList.add("container");
            // Give the CONTAINER div the style of container
            const titleHeader = document.createElement("h4");
            titleHeader.textContent = poke.name;

            const description = document.createElement("p");
            description.textContent = poke2.flavor_text_entries
            .find(entry => entry.language.name === "en").flavor_text;

            // Add the CONTAINER to the CARD
            card.appendChild(titleHeader);
            card.appendChild(description);
            divHolder.appendChild(img);
            divHolder.appendChild(card);
            // Add all the elements to the pokeHolder element
            pokeHolder.appendChild(divHolder);
        


    }
    catch (error) {
        console.log(error)
    }
}
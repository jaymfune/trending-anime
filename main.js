// Declaration of variables
let animeDiv = document.querySelector(".wrapper");


getAnimeData();

function getAnimeData() {
  
  fetch("https://kitsu.io/api/edge/trending/anime")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data[0].attributes);

      let animeTitles = data.data;

      animeTitles.map((animeTitles) => {
        animeDiv.innerHTML += `
            <div class="anime">
                <div class="anime__poster">    
                    <figure>
                        <img src="${animeTitles.attributes.posterImage.tiny}" alt="${animeTitles.attributes.slug}">
                    </figure>
                </div>

                <div class="anime__info">
                    <h3>Name: ${animeTitles.attributes.slug}</h3>
                    <p>Rating: ${animeTitles.attributes.averageRating}</p>
                    <p>Rank: ${animeTitles.attributes.popularityRank}</p>
                </div>
            </div>
        `;
      })  
        
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


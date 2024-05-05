// API //

document.addEventListener("DOMContentLoaded", function () {
    /** On appelle l'API */ function fetchCards() {
        fetch("https://hp-api.lainocs.fr/characters")
            .then((reponse) => reponse.json())
            .then((data) => displayCards(data))
            .catch((error) => console.log(error));
    }

    function displayCards(cards) {
        const cardContainer = document.querySelector(
            ".collection-container .mid"
        );

        cards.forEach((card) => {
            /** Pour toutes les cartes */
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            const cardImage = document.createElement("img");
            cardImage.classList.add("card-img");
            cardImage.src = card.image;

            const cardName = document.createElement("h2");
            cardName.classList.add("card-name");
            cardName.textContent = card.name;

            const cardLink = document.createElement("a");
            cardLink.href = `pageDetails.html?slug=${encodeURIComponent(
                card.slug
            )}&image=${encodeURIComponent(card.image)}`;

            cardLink.appendChild(cardImage);
            cardLink.appendChild(cardName);

            cardElement.appendChild(cardLink);

            cardContainer.appendChild(cardElement);
        });
    }
    fetchCards();
});

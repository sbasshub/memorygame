//grab things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

//link text
playerLivesCount.textContent = playerLives;

//generate the data
const getData = () => [
    // {
    //     imgSrc: "./images/sada.jpg",
    //     name: "sada"
    // },
    {
        imgSrc: "./images/dua.jpg",
        name: "dua"
    },
    {
        imgSrc: "./images/dua.jpg",
        name: "dua"
    },
    {
        imgSrc: "./images/tolu.jpg",
        name: "tolu"
    },
    {
        imgSrc: "./images/tolu.jpg",
        name: "tolu"
    },
    {
        imgSrc: "./images/opat.jpg",
        name: "opat"
    },
    {
        imgSrc: "./images/opat.jpg",
        name: "opat"
    },
    // {
    //     imgSrc: "./images/lima.jpg",
    //     name: "lima"
    // },
    // {
    //     imgSrc: "./images/onom.jpg",
    //     name: "onom"
    // },
    // {
    //     imgSrc: "./images/pitu.jpg",
    //     name: "pitu"
    // },
    // {
    //     imgSrc: "./images/walu.jpg",
    //     name: "walu"
    // },
    {
        imgSrc: "./images/siwa.jpg",
        name: "siwa"
    },
    {
        imgSrc: "./images/siwa.jpg",
        name: "siwa"
    },
    {
        imgSrc: "./images/sapulu.jpg",
        name: "sapulu"
    },
    {
        imgSrc: "./images/sapulu.jpg",
        name: "sapulu"
    },
    // {
    //     imgSrc: "./images/sapulusaada.jpg",
    //     name: "sapulusada"
    // },
    {
        imgSrc: "./images/sapuludua.jpg",
        name: "sapuludua"
    },
    {
        imgSrc: "./images/sapuludua.jpg",
        name: "sapuludua"
    },
    // {
    //     imgSrc: "./images/sapulutolu.jpg",
    //     name: "sapulutolu"
    // },
    {
        imgSrc: "./images/sapuluopat.jpg",
        name: "sapuluopat"
    },
    {
        imgSrc: "./images/sapuluopat.jpg",
        name: "sapuluopat"
    },
    {
        imgSrc: "./images/sapululimo.jpg",
        name: "sapululimo"
    },
    {
        imgSrc: "./images/sapululimo.jpg",
        name: "sapululimo"
    },
    // {
    //     imgSrc: "./images/sapuluonom.jpg",
    //     name: "sapuluonom"
    // },
];

// randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//card generator function
const cardGenerator = () => {
    const cardData = randomize();
    //generate the HTML
    cardData.forEach(item => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //attach the image source to the card
        face.src = item.imgSrc;
        card.setAttribute('name', item.name)
        //attach the card to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};
//checks card
const checkCards = (e) => {
        console.log(e);
        const clickedCard = e.target;
        clickedCard.classList.add('flipped');
        const flippedCards = document.querySelectorAll('.flipped');
        const toggleCard = document.querySelectorAll(".toggleCard");
        console.log(flippedCards);
        //logic
        if (flippedCards.length === 2) {
            if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
                console.log("match");
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                    card.style.pointerEvents = "none"
                });
            } else {
                console.log("wrong");
                flippedCards.forEach(card => {
                    card.classList.remove("flipped");
                    setTimeout(() => card.classList.remove("toggleCard"), 1000)
                });
                playerLives--;
                playerLivesCount.textContent = playerLives;
                if(playerLives === 0) {
                    restart("👎, better luck next time!");
                }
            }
        }
        //check if we win the game
        if(toggleCard.length === 16) {
            restart("🤙, YOU WON!!");
        }
    };

    //restart
    const restart = (text) => {
        let cardData = randomize();
        let faces = document.querySelectorAll(".face");
        let cards = document.querySelectorAll(".card");
        section.style.pointerEvents = "none";
        cardData.forEach((item,index) => {
            cards[index].classList.remove('toggleCard');
            // randomize
            setTimeout(() => {
                cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
            }, 1000);
        });
        playerLives = 6;
        playerLivesCount.textContent = playerLives;
        setTimeout(() => window.alert(text), 100)
    };

        cardGenerator();
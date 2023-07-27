//Definine a card class that represents the value & suit 
class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  
//Displaying the output of the name of the card
    get displayName() {
      if (this.value === "10") {
        return `${this.value} of ${this.suit}`;
      }
      return `${this.value.charAt(0)} of ${this.suit}`;
    }
  }
  
  // Definine a function for the deck variable and create variables that are used for looping through the deck of cards
  function generateDeck() {
    const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    const deck = [];
  
    for (const suit of suits) {
      for (const value of values) {
        deck.push(new Card(value, suit));
      }
    }
  
    return deck;
  }
  
  //Randomize the deck length 
  function getRandomIndex(deckLength) {
    return Math.floor(Math.random() * deckLength);
  }
  
  //Deal a specific number of cards from the deck
  function dealCards(deck, numberOfCards) {
    if (deck.length < numberOfCards) {
      alert("Not enough cards in the deck to deal.");
      return [];
    }
  
    const hand = [];
    while (hand.length < numberOfCards) {
      const randomIndex = getRandomIndex(deck.length);
      const card = deck.splice(randomIndex, 1)[0];
      hand.push(card);
    }
  
    return hand;
  }
  
  //Displaying the output of the hands of the cards for the user
  function displayHand(hand) {
    const handElement = document.getElementById("hand");
    handElement.innerHTML = "";
  
    //Loop through
    for (const card of hand) {
      const cardItem = document.createElement("p");
      cardItem.textContent = card.displayName;
      handElement.appendChild(cardItem);
    }
  }
  
  //Dealing and generating 5 maximum cards
  function handleDealButtonClick() {
    const deck = generateDeck();
    const hand = dealCards(deck, 5);
    displayHand(hand);
  }
  
  //Create the *Deal cards* button to create an event listener
  const dealButton = document.getElementById("dealButton");
  dealButton.addEventListener("click", handleDealButtonClick);
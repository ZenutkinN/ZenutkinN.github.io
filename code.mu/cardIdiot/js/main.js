let startSection = document.querySelector('#startSection');
let buttonStart = document.querySelector('#buttonStart');
let trumpCard = document.querySelector('#trumpCard');
let playerCardsWrappers = document.querySelectorAll('.playerCards');
let playerTitlesWrappers = document.querySelectorAll('.playerTitle');
let myCardsWrapper = document.querySelector('#myCards');
let cardInGameWrappers = document.querySelectorAll('.cardInGame');
let stateConsol = document.querySelector('#stateConsol');
let makeStepButton = document.querySelector('#makeStep');
let getCardsButton = document.querySelector('#getCards');
let hangUpButton = document.querySelector('#hangUp');
let restCards = document.querySelector('#restCards');
let trupTitle = document.querySelector('#trupTitle');
let endSection = document.querySelector('#endSection');



buttonStart.addEventListener('click', function (event) {
	event.preventDefault();
	let numberOfPlayers = document.querySelector('#numberOfPlayers').value;
	// let flip = document.querySelector('#flip').checked;
	// let transfer = document.querySelector('#transfer').checked;
	
	startSection.style.opacity = 0;
	startSection.style.visibility = 'hidden';
	
	let game = new Game(numberOfPlayers, trumpCard, playerCardsWrappers, playerTitlesWrappers, myCardsWrapper, cardInGameWrappers, stateConsol, makeStepButton, getCardsButton, hangUpButton, restCards, trupTitle, endSection);
});





class Game {
	constructor(numberOfPlayers, trumpCardWrapper, playerCardsWrappers, playerTitlesWrappers, myCardsWrapper, cardInGameWrappers, stateConsol, makeStepButton, getCardsButton, hangUpButton, restCards, trupTitle, endSection) {
		this.numberOfPlayers = numberOfPlayers;
		this.names = [
			'Грязный Билли',
			'Не такой грязный Билли',
			'Толян Лесоповал',
			'Вася Тапок',
			'Хоп хэй лалалэй',
		];
		this.foldCards = [];
		this.endSection = endSection;

		this.deck = new CardDeck;
		this.trump = this.deck.getTrumpCard();

		this.players = [new MyPlayer('Вы', this.foldCards)];
		this.addPlayers(this.players, this.numberOfPlayers);
		this.dealCards();

		this.gameField = new GameField(this.players, trumpCardWrapper, playerCardsWrappers, playerTitlesWrappers, myCardsWrapper, cardInGameWrappers, stateConsol, restCards, trupTitle)
		this.gameField.addTrumpCard(this.trump);
		this.gameField.layOutCards();
		this.gameField.layOutMyCards(this.players[this.players.length - 1].getCards());
		this.gameField.layOutPlayers();
		this.gameField.conrolRestCard(this.deck.getNumbersCard());

		this.idxFirstPlayer = this.getidxPlayerWithLowestTrumpCard()
		this.firstPlayer = this.players[this.idxFirstPlayer];
		this.secondPlayer;
		this.setSecondPlayer()

		this.makeStepButton = makeStepButton;
		this.makeStepButton.addEventListener('click', () => this.secondPlayerStruggle());
		this.getCardsButton = getCardsButton;
		this.getCardsButton.addEventListener('click', () => this.myPlayerGetCards());
		this.hangUpButton = hangUpButton;
		this.hangUpButton.addEventListener('click', () => this.hangUp());
		
		this.gameField.addTextOnStartGame(this.firstPlayer)

		setTimeout(() => {
			this.chooseGameVariant();
		}, 3000)
		
	};

	addPlayers() {
		for (let i = 0; i < this.numberOfPlayers; i++) {
			this.players.unshift(new Player(this.names[i], this.foldCards));
		};
	};

	dealCards() {
		nextPlayer:
		for (let i = 0; i < this.players.length; i++) {
			if (this.deck.getNumbersCard() == 0) break;
			if (this.players[i].getCountCards() >= 6) continue nextPlayer;
			this.players[i].setCard(this.deck.getCard());
		};
		
		if (this.deck.getNumbersCard() != 0) {
			let flag = this.players.some((player) => player.getCountCards() < 6);
			if (flag) {
				this.dealCards();
			};
		};
	};

	getidxPlayerWithLowestTrumpCard() {
		let indexPlayer;
		let lowestNominal = 14;
		this.players.forEach((player, idx) => {
			player.getCards().forEach(card => {
				if (card.suit == this.trump.suit && card.nominal < lowestNominal) {
					indexPlayer = idx;
					lowestNominal = card.nominal;
				};
			});
		});

		if (indexPlayer == undefined) {
			indexPlayer = this.players.length - 1;
		};

		return indexPlayer;
	};

	setFirstPlayer() {
		const lengthArrPlayer = this.players.length - 1;

		if (this.idxFirstPlayer == lengthArrPlayer) {
			this.idxFirstPlayer = 0;
		} else {
			this.idxFirstPlayer++;
		}

		this.firstPlayer = this.players[this.idxFirstPlayer];
	}

	setSecondPlayer() {
		const lengthArrPlayer = this.players.length - 1;
		let idxSecondPlayer;
		if (this.idxFirstPlayer == lengthArrPlayer) {
			idxSecondPlayer = 0;
		} else {
			idxSecondPlayer = this.idxFirstPlayer + 1;
		};
	
		this.secondPlayer = this.players[idxSecondPlayer];
	}

	chooseGameVariant() {
		this.gameField.addTextOnStep(this.firstPlayer, this.secondPlayer)
		setTimeout(() => {
			if (this.isMyPlayerClass(this.firstPlayer)) {
				this.makeStepButton.disabled = false;
				return;
			} else {
				this.firstPlayerStep();
			}
	
			if (this.isMyPlayerClass(this.secondPlayer)) {
				this.getCardsButton.disabled = false;
				this.hangUpButton.disabled = false;
				return;
			} else {
				this.secondPlayerStruggle();
			}
		}, 3000)
	}

	nextStepIfHangUp() {
		this.prepareNextStep();

		if (this.players.length == 1) {
			this.addIdiot();
			return;
		}

		if (!this.checkMyPlayerHasLeft()) {
			this.addMyPlayerLeft();
			return
		}
		
		setTimeout(() => {
			this.setFirstPlayer();
			this.setSecondPlayer();

			this.chooseGameVariant();
		}, 3000)
	}

	nextStepIfGetCards() {	
		this.prepareNextStep();

		if (this.players.length == 1) {
			this.addIdiot();
			return;
		}

		if (!this.checkMyPlayerHasLeft()) {
			this.addMyPlayerLeft();
			return
		}
	
		setTimeout(() => {
			this.setFirstPlayer();
			this.setFirstPlayer();
			this.setSecondPlayer();

			this.chooseGameVariant();
		}, 3000)
	}

	prepareNextStep() {
		this.cleanFolderCards();

		if (this.deck.getNumbersCard() == 0) {
			this.removePlayerWitoutCards();
		} else {
			this.gameField.addTextConsole('Раздаем карты.');
			this.dealCards();
			this.gameField.layOutCards();
			this.gameField.layOutMyCards(this.players[this.players.length - 1].getCards());
		}

		this.gameField.conrolRestCard(this.deck.getNumbersCard());
	}

	secondPlayerStruggle() {
		this.setMyFoldCardInFoldcard();
		let flag = true;
		this.gameField.addTextConsole('Игрок "' + this.secondPlayer.getNamePlayer() + '" отбивается.');
		setTimeout(() => {
			[...this.gameField.getCardInGameWrappers()].forEach(wrapper => {
				let cardInField = wrapper.firstElementChild;
				
				if (cardInField) {
					let playerCards = this.secondPlayer.getCards();
					let cardLengthBefore = playerCards.length;
					step:
					for (let i = 0; i < playerCards.length; i++) {
						if (
							(cardInField.dataset.suit === this.trump.suit && playerCards[i].suit === this.trump.suit && cardInField.dataset.nominal < playerCards[i].nominal) ||
							(cardInField.dataset.suit === playerCards[i].suit && cardInField.dataset.nominal < playerCards[i].nominal) ||
							(playerCards[i].suit === this.trump.suit && cardInField.dataset.nominal < playerCards[i].nominal)||
							(cardInField.dataset.suit !== this.trump.suit && playerCards[i].suit == this.trump.suit)
						) {
							
							let img = document.createElement('img');
							img.src = playerCards[i].src
							wrapper.appendChild(img);
	
							this.setInFoldCard(playerCards[i]);
							this.secondPlayer.deletePlayerFolderCards(playerCards[i])
							this.gameField.layOutCards();
							
							break step;
						}
					}
	
					let cardLengthAfter = playerCards.length;
					if (cardLengthBefore == cardLengthAfter) {
						this.secondPlayer.setFoldCardsInPlayerCards(this.foldCards);
						this.gameField.layOutCards();
						this.gameField.addTextConsole('"' + this.secondPlayer.getNamePlayer() + '" не смог отбиться и взял карты.');
						this.makeStepButton.disabled = true;
						this.cleanGameField();
						flag = false;
						setTimeout(() => {
							this.nextStepIfGetCards()
						}, 3000)
						return;
					} 
				}
			})

			if (flag) {
				this.gameField.addTextConsole('"' + this.secondPlayer.getNamePlayer() + '"отбился. Отбой!');
				this.makeStepButton.disabled = true;
				setTimeout(() => {
					this.cleanGameField();
					this.nextStepIfHangUp();
				}, 3000)
			}
		}, 3000)
	}

	firstPlayerStep() {
		let playerfoldCards = this.firstPlayer.getPlayerFoldCards();
		let cardInGameWrappers = this.gameField.getCardInGameWrappers();
		for (let i = 0; i < playerfoldCards.length; i++) {
			this.setInFoldCard(playerfoldCards[i])
			this.firstPlayer.deletePlayerFolderCards(playerfoldCards[i])
			let {suit, nominal, src} = playerfoldCards[i];
			let img = document.createElement('img');
			img.dataset.suit = suit;
			img.dataset.nominal = nominal;
			img.src = src;
			cardInGameWrappers[i].appendChild(img);
		}
		this.gameField.layOutCards();
	}

	myPlayerGetCards() {
		this.setMyFoldCardInFoldcard();
		let myPlayer = this.players[this.players.length - 1];
		myPlayer.setFoldCardsInPlayerCards(this.foldCards);
		this.gameField.layOutMyCards(myPlayer.getCards());
		this.cleanGameField();
		this.getCardsButton.disabled = true;
		this.hangUpButton.disabled = true;
		this.gameField.addTextConsole('Вы взяли карты');

		setTimeout(() => {
			this.nextStepIfGetCards()
		}, 3000)
	}

	cleanGameField() {
		[...this.gameField.getCardInGameWrappers()].forEach(wrapper => wrapper.innerHTML = '')
	}

	hangUp() {
		let wrapperWithCards = [...this.gameField.getCardInGameWrappers()].filter(wrapper => wrapper.firstElementChild)
		let flag = wrapperWithCards.every(wrapper => wrapper.children.length == 2)
		if (flag) {
			this.gameField.addTextConsole('Отбой!');
			this.cleanGameField();
			this.getCardsButton.disabled = true;
			this.hangUpButton.disabled = true;
			setTimeout(() => {
				this.nextStepIfHangUp();
			}, 3000)
		} else {
			this.gameField.addTextConsole('Если не можете отбиться, то берите карты.');
		}
	}

	isMyPlayerClass(obj) {
		return obj instanceof MyPlayer;
	};

	setInFoldCard(card) {
		this.foldCards.push(card);
	};

	cleanFolderCards() {
		let myPlayer = this.players[this.players.length - 1]
		myPlayer.delFolderCardsMyPlayer();
		this.foldCards = []
	}

	setMyFoldCardInFoldcard() {
		let myPlayer = this.players[this.players.length - 1];
		myPlayer.getFolderCardsMyPlayer().forEach(card => this.foldCards.push(card));
		myPlayer.delFolderCardsMyPlayer();
	}

	removePlayerWitoutCards() {
		let playersWithcard = this.players.filter(player => {
			if (player.getCountCards() > 0) {
				return true;
			} else {
				this.gameField.addTextPlayeHasLeft(player);
				return false;
			}
		});
		this.players = playersWithcard;
	}

	addIdiot() {
		this.endSection.style.visibility = 'visible';
		this.endSection.style.opacity = 1;

		let str;
		if (this.isMyPlayerClass(this.players[0])) {
			str = 'Вы оказались дураком. '
		} else {
			str = this.players[0].getNamePlayer() + ' оказался дураком. '
		}
		
		this.endSection.firstElementChild.firstElementChild.innerHTML = str + '<br>Чтобы сыграть еще раз - обновите страницу.'
	}

	checkMyPlayerHasLeft() {
		return this.players.some(player => this.isMyPlayerClass(player))
	}

	addMyPlayerLeft() {
		this.endSection.style.visibility = 'visible';
		this.endSection.style.opacity = 1;
		this.endSection.firstElementChild.firstElementChild.innerHTML = 'Вы уже точно не дурак.<br>Чтобы сыграть еще раз - обновите страницу.'
	}
};





class Player {
	constructor(namePlayer) {
		this.playerCards = [];
		this.namePlayer = namePlayer;
	};

	setCard(card) {
		this.playerCards.push(card);
	};

	getCountCards() {
		return this.playerCards.length;
	};

	getCards() {
		return this.playerCards;
	};

	getNamePlayer() {
		return this.namePlayer;
	};

	getLowestNominal() {
		let lovestGameNominal = 14;

		this.playerCards.forEach(card => {
			if (card.nominal < lovestGameNominal) {
				lovestGameNominal = card.nominal;					
			};
		});

		return lovestGameNominal;
	};

	getPlayerFoldCards() {
		let lowestNominal = this.getLowestNominal();
		let foldCards = this.playerCards.filter(card => card.nominal == lowestNominal)
		return foldCards;
	};

	deletePlayerFolderCards(card) {
		let {suit, nominal} = card
		this.playerCards.forEach((card, idx) => {
			if (card.suit == suit && card.nominal == nominal) {
				this.playerCards.splice(idx, 1);
			}
		})
	}

	setFoldCardsInPlayerCards(foldCards) {
		foldCards.forEach(card => this.setCard(card))
	}

};





class MyPlayer extends Player {
	constructor(namePlayer, foldCards) {
		super(namePlayer, foldCards);
		this.folderCards = []
	};

	setFolderCardsMyPlayer(card) {
		this.folderCards.push(card);
	}

	getFolderCardsMyPlayer() {
		return this.folderCards;
	}

	delFolderCardsMyPlayer() {
		this.folderCards = [];
	}
};





class GameField {
	constructor(players, trumpCardWrapper, playerCardsWrappers, playerTitlesWrappers, myCardsWrapper, cardInGameWrappers, stateConsol, restCards, trupTitle) {
		this.trumpCardWrapper = trumpCardWrapper;
		this.playerCardsWrappers = playerCardsWrappers;
		this.playerTitlesWrappers = playerTitlesWrappers;
		this.myCardsWrapper = myCardsWrapper;
		this.cardInGameWrappers = cardInGameWrappers;
		this.stateConsol = stateConsol;
		this.myCardsDOM = [];
		this.restCards = restCards;
		this.trupTitle = trupTitle;

		this.players = players;
		this.flagMyStep = true;
	};

	addTrumpCard(card) {
		let {suit, nominal, src} = card;
		let img = document.createElement('img');
		img.dataset.suit = suit;
		img.dataset.nominal = nominal;
		img.src = src;
		this.trumpCardWrapper.appendChild(img);
	};

	layOutCards() {
		for (let i = 0; i < this.players.length - 1; i++) {
			this.playerCardsWrappers[i].innerHTML = '';
			for (let j = 0; j < this.players[i].getCountCards(); j++) {
				let img = document.createElement('img');
				img.src = './img/Deck.png';
				this.playerCardsWrappers[i].appendChild(img);
			};	
		};
	};

	layOutMyCards(myCards) {
		this.myCardsWrapper.innerHTML = '';
		
		myCards.forEach((card) => {
			const img = document.createElement('img');
			const {suit, nominal, src} = card;
			img.src = card.src;
			img.dataset.suit = suit;
			img.dataset.nominal = nominal;
			img.draggable = true;
			img.classList.add('myCard');
			this.myCardsWrapper.appendChild(img);
			this.myCardsDOM.push(img);
		});

		this.addDragAndDrop();
	};

	addDragAndDrop() {
		let myCardsDOM = this.myCardsDOM;
		let cardInGameWrappers = this.cardInGameWrappers;
		let myPlayer = this.players[this.players.length - 1];
		let trumpCardSuit = this.trumpCardWrapper.firstElementChild.dataset.suit;
	
		myCardsDOM.forEach((card, index)=> {
			card.addEventListener('dragstart', function (event) {
				event.dataTransfer.setData('index', index);
			});
		});
		
		this.cardInGameWrappers.forEach(card => {
			card.addEventListener('dragover', function (event) {
				event.preventDefault();
			});
		
			card.addEventListener('drop', function () {
				let card = myCardsDOM[event.dataTransfer.getData('index')]
				
				if ((this.children.length == 0 && card != undefined && checkMyStep(card) ||
					(this.firstElementChild && checkMyStruggle(this.firstElementChild, card))) && this.tagName != 'IMG'
				) {
					let objCard = {
						suit: card.dataset.suit,
						nominal: card.dataset.nominal,
						src: card.src
					} 
					myPlayer.setFolderCardsMyPlayer(objCard);
					myPlayer.deletePlayerFolderCards(objCard);
					this.appendChild(card);
				};
			});
		});

		function checkMyStep(card) {
			// let isEmpty = [...cardInGameWrappers].every(wrapper => !wrapper.children.length);
			let cardInField = [...cardInGameWrappers].filter(wrapper => wrapper.children.length != 0);
			if (cardInField.length != 0) {
				return cardInField.every(wrapper => wrapper.firstElementChild.dataset.nominal == card.dataset.nominal)
			}

			return true;
		}

		function checkMyStruggle(cardInGame, foldCard) {
			if (
				(cardInGame.dataset.suit === trumpCardSuit && foldCard.dataset.suit === trumpCardSuit && +cardInGame.dataset.nominal < +foldCard.dataset.nominal) ||
				(cardInGame.dataset.suit === foldCard.dataset.suit && +cardInGame.dataset.nominal < +foldCard.dataset.nominal) ||
				(foldCard.dataset.suit === trumpCardSuit && +cardInGame.dataset.nominal < +foldCard.dataset.nominal) ||
				(cardInGame.dataset.suit !== trumpCardSuit && foldCard.dataset.suit == trumpCardSuit)
			) {
				return true;
			} else {
				return false;
			}
		}
	};

	getName(idx) {
		return this.names[idx];
	};

	layOutPlayers() {
		for (let i = 0; i < this.players.length - 1; i++) {
			this.playerTitlesWrappers[i].innerHTML = this.players[i].getNamePlayer();
		};
	};


	addTextConsole(text) {
		this.stateConsol.innerHTML = '';
		this.stateConsol.innerHTML = text
	};

	getCardInGameWrappers() {
		return this.cardInGameWrappers;
	}
	
	addTextOnStartGame(firstPlayer) {
		if (this.isMyPlayerClass(firstPlayer)) {
			this.addTextConsole(
				firstPlayer.getNamePlayer() + ' ходите первым. У Вас наименьшая козырная карта.'
			)		
		} else {
			this.addTextConsole(
				'"' + firstPlayer.getNamePlayer() + '" ходит первым. У него наименьшая козырная карта.'
			)
		}
	}

	addTextOnStep(firstPlayer, secondPlayer) {
		if (this.isMyPlayerClass(firstPlayer)) {
			this.addTextConsole(
				'Делайте свой ход на игрока "' + secondPlayer.getNamePlayer() + '".'
			)		
		} else if (this.isMyPlayerClass(secondPlayer)) {
			this.addTextConsole(
				'Сейчас, игрок "' + firstPlayer.getNamePlayer() + '" ходит на Вас. Отбивайтесь или берите карты.' 
			)
		} else {
			this.addTextConsole(
				'Сейчас, игрок "' + firstPlayer.getNamePlayer() + '" ходит на игрока "' +  secondPlayer.getNamePlayer() + '".'
			)
		}
	}

	isMyPlayerClass(obj) {
		return obj instanceof MyPlayer;
	};

	addTextPlayeHasLeft(player) {
		[...this.playerTitlesWrappers].forEach(title => {
			if (title.innerHTML == player.getNamePlayer()) {
				title.innerHTML = title.innerHTML + '<br>' + '(Вышел из игры)';
			}
		});
	}

	cleanRestCard() {
		this.restCards.innerHTML = '';
	}

	conrolRestCard(deckLength) {
		if (deckLength == 0) {
			this.cleanRestCard();
			this.trupTitle.innerHTML = 'Козырь на руках';
		}
	}
};





class CardDeck {
	constructor() {
		this.deck = [
			{suit: 'heart', nominal: 6, src: './img/H6.png'},
			{suit: 'heart', nominal: 7, src: './img/H7.png'},
			{suit: 'heart', nominal: 8, src: './img/H8.png'},
			{suit: 'heart', nominal: 9, src: './img/H9.png'},
			{suit: 'heart', nominal: 10, src: './img/H10.png'},
			{suit: 'heart', nominal: 11, src: './img/HJ.png'},
			{suit: 'heart', nominal: 12, src: './img/HQ.png'},
			{suit: 'heart', nominal: 13, src: './img/HK.png'},
			{suit: 'heart', nominal: 14, src: './img/HA.png'},
			{suit: 'spade', nominal: 6, src: './img/S6.png'},
			{suit: 'spade', nominal: 7, src: './img/S7.png'},
			{suit: 'spade', nominal: 8, src: './img/S8.png'},
			{suit: 'spade', nominal: 9, src: './img/S9.png'},
			{suit: 'spade', nominal: 10, src: './img/S10.png'},
			{suit: 'spade', nominal: 11, src: './img/SJ.png'},
			{suit: 'spade', nominal: 12, src: './img/SQ.png'},
			{suit: 'spade', nominal: 13, src: './img/SK.png'},
			{suit: 'spade', nominal: 14, src: './img/SA.png'},
			{suit: 'club', nominal: 6, src: './img/C6.png'},
			{suit: 'club', nominal: 7, src: './img/C7.png'},
			{suit: 'club', nominal: 8, src: './img/C8.png'},
			{suit: 'club', nominal: 9, src: './img/C9.png'},
			{suit: 'club', nominal: 10, src: './img/C10.png'},
			{suit: 'club', nominal: 11, src: './img/CJ.png'},
			{suit: 'club', nominal: 12, src: './img/CQ.png'},
			{suit: 'club', nominal: 13, src: './img/CK.png'},
			{suit: 'club', nominal: 14, src: './img/CA.png'},
			{suit: 'diamond', nominal: 6, src: './img/D6.png'},
			{suit: 'diamond', nominal: 7, src: './img/D7.png'},
			{suit: 'diamond', nominal: 8, src: './img/D8.png'},
			{suit: 'diamond', nominal: 9, src: './img/D9.png'},
			{suit: 'diamond', nominal: 10, src: './img/D10.png'},
			{suit: 'diamond', nominal: 11, src: './img/DJ.png'},
			{suit: 'diamond', nominal: 12, src: './img/DQ.png'},
			{suit: 'diamond', nominal: 13, src: './img/DK.png'},
			{suit: 'diamond', nominal: 14, src: './img/DA.png'},
		];

		this.shuffleDeck(this.deck)
	};
	
	shuffleDeck(deck) {
		for (let i = deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[deck[i], deck[j]] = [deck[j], deck[i]];
		};
	};

	getTrumpCard() {
		return this.deck[this.deck.length - 1];
	};

	getCard() {
		return this.deck.shift();
	};

	getNumbersCard() {
		return this.deck.length;
	};
};






// let myCards = document.querySelector('#myCards');

// let deck = new CardDeck;
// console.log(deck.returnCard());

// let {suit, nominal, src} = deck.returnCard();

// let img = document.createElement('img')
// img.src = src;
// myCards.appendChild(img)












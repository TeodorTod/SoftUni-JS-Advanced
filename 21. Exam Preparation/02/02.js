class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;

        }

        if (this.listOfParticipants.some(x => x.name = name)) {
            return `The ${name} is already registered at the camp.`;
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let indexOfParticipant = this.listOfParticipants.findIndex(x => this.name = name);

        if (indexOfParticipant == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(indexOfParticipant, 1);

        return `The ${name} was successfully registered.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        playerOne = this.listOfParticipants.find(x => x.name = participant1);
        let playerTwo = null;

        if (typeOfGame === 'Battleship') {

            if (!playerOne) {
                throw new Error(`Invalid entered name/s.`);
            }
            playerOne.power += 20;

            return `The ${playerOne} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame === 'WaterBalloonFights') {
            let playerWinner = '';
            playerTwo = this.listOfParticipants.find(x => x.name = participant2);
            if (!playerTwo) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (playerOne.condition !== playerTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (playerOne.power > playerTwo.power) {
                playerOne.wins++;
                playerWinner = playerOne.name;
            } else if (playerOne.power < playerTwo.power) {
                playerTwo.wins++;
                playerWinner = playerTwo.name;
            } else {
                return `There is no winner.`;
            }

            return `The ${playerWinner} is winner in the game ${typeOfGame}.`;
        }
    }
   

    toString () {
        console.log(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => {
                console.log(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
            });
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
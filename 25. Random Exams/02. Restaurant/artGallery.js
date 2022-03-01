class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error(`This article model is not included in this gallery!`);
        }
        if (this.listOfArticles.includes(articleName)) {
            this.listOFArticles.quantity += quantity;
        } else {
            let articleModelToAdd = articleModel.toLowerCase();
            let article = {
                articleModelToAdd,
                articleName,
                quantity
            
            };
            this.listOfArticles.push(article);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            let guestObj = {
                guestName,
                points: 0,
                purchaseArticle: 0
            };

            if (personality === 'Vip') {
                guestObj.points = 500;
            } else if (personality === 'Middle') {
                guestObj.points = 250;
            } else {
                guestObj.points = 50;
            }

            this.guests.push(guestObj);

            return `You have successfully invited ${guestName}!`;
        }

    }

    buyArticle (articleModel, articleName, guestName) {
        if (!this.listOFArticles.some(x => x.articleName == articleName && x.articleModelToAdd == articleModel)) {
            throw new Error ("This article is not found.");
        }

        let articleToBuy = this.listOFArticles.find(x => x.articleModelToAdd == articleModel && x.articleName == articleName);
        
        if (articleToBuy.quantity = 0) {
            return `The ${articleName} is not available.`;
        }

        if (!this.guests.some(x => x.guestName == guestName)) {
            return "This guest is not invited.";
        }

        let guest = this.guests.find(x => x.guestName == guestName); // тук твоето търси първия, който не е undefined, а трябва да намери елемента с това име

        if (guest.points < this.possibleArticles[articleModel.toLowerCase()]) { // тук не знам какво си се опитал да направиш
            return `You need to more points to purchase the article.`;
        } else {
            guest.points -= this.possibleArticles[articleModel.toLowerCase()]; // тук не знам какво си се опитал да направиш
            articleToBuy.quantity--;
            guest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel.toLowerCase()]} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            return `Articles information:\n${this.listOFArticles // тук имаш грешка в изписването с малка буква, вместо голяма
                .map(
                    article =>
                        `${article.articleModelToAdd} - ${article.articleName} - ${article.quantity}` // тук грешно взимат property, което го няма в този масив
                )
                .join('\n')}`;
        }

        if (criteria === 'guest') {
            return `Guests information:\n${this.guests
                .map(guest => `${guest.guestName} - ${guest.purchaseArticle}`)
                .join('\n')}`;
        }
    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
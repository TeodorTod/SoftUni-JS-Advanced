class LibraryCollection{
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook (bookName, bookAuthor) {
        if (this.capacity == 0) {
            throw new Error("Not enough space in the collection.");
        } else {
            let book = {
                bookName,
                bookAuthor,
                payed: false
            };
            this.capacity -= 1;
            this.books.push(book);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;

        }
    }

    payBook(bookName){
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (this.books.some(x => x.payed == true)) {
            throw new Error(`${bookName} has already been paid.`);
        }
        for (let el of this.books) {
            el['payed'] = true;
            return `${bookName} has been successfully paid.`;
        }
    } 
    removeBook(bookName) {
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (this.books.some(x => x.payed == false)) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books = this.books.filter(x => x.bookName != bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        
        if (bookAuthor == undefined) {
            for (let el of this.books) {
            if(el['payed'] == true) {
                el['payed'] = 'Has Paid';
            } else {
                el['payed'] = 'Not Paid';
            }
        }
            let result = [];
            
            result.push(`The book collection has ${this.capacity} empty spots left.`);
            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(x => {
                    result.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed}.`);
                });
                return result.join('\n');
        } else {
            if (this.books.some(x => x.bookAuthor != bookAuthor)) {
                return new Error(`${bookAuthor} is not in the collection.`);
            }
            let result = [];
            this.books
                .sort((a, b) => a.bookName - b.bookName)
                .forEach(x => {
                    result.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed}.`);
                });
                return result.join('\n');
        }
    }

}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


let ivan = a'gosk'a;
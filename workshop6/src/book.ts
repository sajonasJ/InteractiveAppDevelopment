class Book implements Item {
    constructor(public year, public author, public title){
    }

    display() {
        console.log(`${this.year},${this.author},"${this.title}"`)
    }
}
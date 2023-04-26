class Movie implements Item {
    constructor(public year, public title, public director){

    }
    display() {
        console.log(`${this.year},${this.title},"${this.director}"`)
    }
}
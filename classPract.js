class Person {
    constructor(food, income, language) {
    this.food = food
    this.income = income
    this.language = language
    }
}

class PostalWorker extends Person {
    constructor (food, income, language){
        super(food, income, language)
    }
}
console.log(Person)
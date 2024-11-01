// 1. •	Creati un obiect, apoi adaugati 3 key noi cu propietati diferite 
// (writable, enumerable, configurable) si aratati cum is are efectul 
// proprietatile la fiecare cheie

const obj = {
    name: 'Alice',
    age: '34',
}

// console.log(Object.getOwnPropertyDescriptor(obj, 'age'))

Object.defineProperties(obj, {
    job: {
        value: 'teacher',
        enumerable: true,
        configurable: true
    },
    hobby: {
        value: 'sing',
        writable: true,
        configurable: true
    },
    language: {
        value: 'romana',
        writable: true,
        enumerable: true,
        configurable: true
    }

})

console.log(Object.getOwnPropertyDescriptors(obj, 'job', 'hobby'))


// 2.•	Creati o functie care apeleaza this, apoi cu ajutorul la call,
// aplly si bind apelati 3 scoup diferite.

const funct = function (mess1, mess2) {
    return mess1 + ' ' + 'Salut! Ma numesc: ' + this.name + ' ' + mess2 + ' ' + this.hobby

}

const obj1 = {
    name: 'Dan',
    age: '23',
    pers: funct
}

const obj2 = {
    name: 'Ana',
    age: '18',
    hobby: 'draw',
    pers: funct
}


const obj3 = {
    name: 'Elena',
    age: '34',
    pers: funct
}

console.log(obj1.pers.apply(obj1,['M-Apply-Start =', '= M-Apply-End =']))

console.log(obj3.pers.call(obj2, 'M-Call-Start =', '= M-Call-End ='))

const scoup3 = funct.bind(obj2)
console.log(scoup3('M-BIND-START', 'M-BIND-END'))


// 3.•	Creati o clasa care are cateva chei predefinite si cateva
// care le primeste ca argument, extindenti clasa adaugand proprietati noi
// si metode noi.

class Animals {
    constructor(tip) {
        this.rasa = tip.rasa
        this.hrana = tip.hrana
        this.varsta = tip.varsta
        this.familia = 'pisici'
    }
}
const tigru = new Animals({rasa:'Siberian', hrana:'carnivora', varsta: '10 ani'})

console.log(tigru)

class AnimaleDomestice extends Animals {
    constructor(tip) {
        super(tip)
        this.clasa = tip.clasa
        this.categorie = tip.categorie
        this.familia = 'cal'
    }
}
const cal = new AnimaleDomestice({clasa:'mamifere', categorie:'domestice', rasa:'pony', hrana:'ierbivor', varsta:'20 ani' })

console.log(cal)
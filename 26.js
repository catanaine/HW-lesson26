// const  obj = {
//     name: 'Alex'
// }
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// Object.defineProperties(obj, 'job',{
//     value: 'dev',
//     writable: true,
//     enumerable: true,
//     configurabile: true,
// })
// console.log(Object.getOwnPropertyDescriptor(obj))

// const obj1 = {
//     name:'Alice',
//     job: 'dev',
//     age:'22'
// }
// console.log(Object.getOwnPropertyDescriptors(obj1, 'name', 'job'))

// Object.defineProperties(obj1, {
//     job: {
//     writable: false,
//     configurable: true
// },
// hobby: {
//     writable: true,
//     configurable: true

// }
// })

// console.log(Object.getOwnPropertyDescriptors(obj1))

class flowers {
    constructor(options) {
        this.clima = options
        this.inter = options.inter
        this.exter = options.exter
    }
    dcor(){
        console.log('verde')
    }
}
const aloe = new flowers({clima: 'calda', inter: 'casa', exter:'teren'})
console.log(aloe)

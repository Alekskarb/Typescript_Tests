import {NUM} from "./module.js";

console.log("number", NUM)

// interface IUser {
//     name: string
//     age: number
//     isProgrammer: boolean
//     address: {
//         city: string
//         street: string
//     }
// }

// type UserData = Omit<IUser, 'street'>
// const user: UserData = {address: {city: "", street: "yyy"}, age: 0, isProgrammer: false, name: ""}
// console.log("omit", user.address.street)

interface IUser {
    name: string
    age: number
    isProgrammer: boolean
    address: {
        city: string
        street: string
    }
}

type UserData = Extract<'name', IUser>
const user: UserData = <never>{}

function decorator(_: string) {
    return function (target: Object, key: string | symbol) {
        console.log(target);
        console.log(key); // <---
    }
}

class User {
    @decorator('Max')
    name: string
    constructor(name: string) {
        this.name = name;
    }
}

interface ILoan {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
}

const totalPrice = (object: ILoan): number => {
if (object.isInstallment) {
    return (object.price / object.months) * ( 1 - object.discount / 100 );
}
    return (object.price / object.months);
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);



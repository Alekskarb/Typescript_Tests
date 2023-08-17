var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NUM } from "./module.js";
console.log("number", NUM);
const user = {};
function decorator(_) {
    return function (target, key) {
        console.log(target);
        console.log(key);
    };
}
class User {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    decorator('Max')
], User.prototype, "name", void 0);
const totalPrice = (object) => {
    if (object.isInstallment) {
        return (object.price / object.months) * (1 - object.discount / 100);
    }
    return (object.price / object.months);
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);
//# sourceMappingURL=index.js.map
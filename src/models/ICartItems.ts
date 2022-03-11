import {IRoses, ITulip} from "./IFlower";

export interface ICartItem {
    cartItem: IRoses | ITulip,
    quantity: number
}

import {IRoses, ITulip} from "./IFlower";

export interface IOrder{
    order: IRoses | ITulip,
    price: number
}
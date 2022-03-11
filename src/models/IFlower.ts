export interface IRoses {
    id: number;
    parentId: number;
    name: string;
    price: number;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
    quantity: number;
}

export interface ITulip {
    id: number;
    parentId: number;
    name: string;
    price: number;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
    quantity?: number;

}

export interface IBasket {
    id: number;
    parentId: number;
    name: string;
    price: number;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
    quantity?: number;
}

export interface IBouquet {
    id: number;
    parentId: number;
    name: string;
    price: number;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
    quantity?: number;
}

export interface IFlower {
    roses: IRoses[][];
    tulip: ITulip[];
    basket: IBasket[];
    bouquets: IBouquet[];
}
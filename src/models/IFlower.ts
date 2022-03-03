export interface IRose {
    group: any[]
}

export interface IRoses {
    id: number;
    parentId: number;
    name: string;
    price: string;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
}

export interface ITulip {
    id: number;
    parentId: number;
    name: string;
    price: string;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
}

export interface IBasket {
    id: number;
    parentId: number;
    name: string;
    price: string;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
}

export interface IBouquet {
    id: number;
    parentId: number;
    name: string;
    price: string;
    image: string;
    discount: number;
    top: boolean;
    stock: boolean;
}

export interface IFlower {
    roses: IRose[];
    tulip: ITulip[];
    basket: IBasket[];
    bouquets: IBouquet[];
}
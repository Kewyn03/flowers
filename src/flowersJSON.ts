import RedrosePNG from './assets/images/roses/101redrose.png'
import PinkrosePNG from './assets/images/roses/25pinkrose.png'
import LoversPNG from './assets/images/roses/lovers.png'
import BasketsunPNG from './assets/images/roses/basketsunmood.png'
import FlowerbedPNG from './assets/images/roses/flowerbed.png'

const flowers = {
    "roses": [
        {
            "id": "1",
            "parentId": "1",
            "name": "101 красная роза",
            "price": 2800,
            "image": RedrosePNG,
            "discount": 19,
            "top": true
        },
        {
            "id": "2",
            "parentId": "2",
            "name": "25 розовых пионовидных роз",
            "price": 2800,
            "image": PinkrosePNG,
            "discount": 10,
            "top": true
        },
        {
            "id": "3",
            "parentId": "3",
            "name": "Влюбленность",
            "price": 2800,
            "image": LoversPNG,
            "discount": 19,
            "top": true
        },
        {
            "id": "4",
            "parentId": "4",
            "name": "Корзина солнечного настроения",
            "price": "1680",
            "image": BasketsunPNG,
            "discount": 0,
            "top": true
        },
        {
            "id": "5",
            "parentId": "5",
            "name": "Цветочная клумба",
            "price": "1270",
            "image": FlowerbedPNG,
            "discount": 0,
            "top": true
        },
        {
            "id": "6",
            "parentId": "6",
            "name": "101 красная роза",
            "price": "2800",
            "image": RedrosePNG,
            "discount": 19,
            "top": true
        },
        {
            "id": "7",
            "parentId": "7",
            "name": "25 розовых пионовидных роз",
            "price": 2800,
            "image": PinkrosePNG,
            "discount": 10,
            "top": true
        },
        {
            "id": "8",
            "parentId": "8",
            "name": "101 красная роза",
            "price": "2800",
            "image": RedrosePNG,
            "discount": 19,
            "top": true
        }
    ],
    "tulip":
        [
            {
                "id": "1",
                "parentId": "1",
                "name": "25 желтых тюльпанов",
                "price": "995",
                "image": "/assets/images/tulips/25yellowtulips.png",
                "discount": 10,
                "top": true
            },
            {
                "id": "2",
                "parentId": "2",
                "name": "25 желтых тюльпанов",
                "price": "995",
                "image": "/assets/images/tulips/25yellowtulips.png",
                "discount": 10,
                "top": true
            },
            {
                "id": "3",
                "parentId": "3",
                "name": "25 желтых тюльпанов",
                "price": "995",
                "image": "/assets/images/tulips/25yellowtulips.png",
                "discount": 10,
                "top": true
            },
            {
                "id": "4",
                "parentId": "4",
                "name": "25 желтых тюльпанов",
                "price": "995",
                "image": "/assets/images/tulips/25yellowtulips.png",
                "discount": 10,
                "top": true
            },

        ],
    "basket":
        [
            {
                "id": "1",
                "parentId": "1",
                "name": "Корзина Дюймовочка",
                "price": "2020",
                "image": "/assets/images/basket/basketInch.png",
                "discount": 0,
                "top": true
            }
        ],
    "bouquets":
        [
            {
                "id": "1",
                "parentId": "1",
                "name": "Мечтательница",
                "price": "2280",
                "image": "/assets/images/basket/basketInch.png",
                "discount": 0,
                "top": true
            }
        ]
}

export default flowers
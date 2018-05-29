import ProductEntity from "../models/ProductEntity";

export default class MockData {
    static arrProducts = [
        new ProductEntity('1', 'Sofa', 'https://cdn.vatgia.vn/pictures/thumb/320x320/2017/10/cyb1507353427.jpg', 5000),
        new ProductEntity('2', 'Mobile phone', 'https://cdn.vatgia.vn/pictures/thumb/320x320/2017/04/jwo1492057055.JPG', 10000),
        new ProductEntity('3', 'Desk', 'https://cdn.vatgia.vn/pictures/thumb/320x320/2017/08/tdt1502333730.jpg', 2000),
        new ProductEntity('4', 'Shoes', 'https://cdn.vatgia.vn/pictures/thumb/320x320/2011/06/bwy1308849482.jpg', 1500),
    ];
}
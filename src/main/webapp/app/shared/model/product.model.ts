import { IProductCategory } from 'app/shared/model//product-category.model';

export interface IProduct {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    size?: number;
    imageContentType?: string;
    image?: any;
    productCategory?: IProductCategory;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public price?: number,
        public size?: number,
        public imageContentType?: string,
        public image?: any,
        public productCategory?: IProductCategory
    ) {}
}

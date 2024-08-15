export interface ProductType {
    [x: string]: Key | null | undefined;
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    minimumOrderQuantity: number;
    price: number;
    rating?: number;
    returnPolicy?: string;
    reviews?: [
        { comment: string, date: string, rating: number, reviewerEmail: string, reviewerName: string }
    ];
    shippingInformation?: string;
    sku?: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
}


// export interface ItemsType {
//     productId:ProductType
//     quantity:number
// }

export interface CartType {
userId:string;
// items:[ItemsType]
productId: ProductType;
quantity:number
}

export interface ParamsProps {
    params: { id: string }
}
export interface UserParamsProps {
    params: { userId: string }
}
export interface IdsProps {
    params :{
        userId: string,
        productId: string
    }
}
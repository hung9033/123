export type Product = {
    id: string;
    title: string;
    desc: string;
    isSale: boolean;
    price: number;
    status: string;
}
export type ProductInput = Omit<Product, 'id'>;
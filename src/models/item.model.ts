export interface Item {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    imageUrl: string;
}

export interface Client {
    id: number;
    name: string;
    items: Item[];
    primaryColor: string;
    secondaryColor: string;
    imageOrientation: string;
    logoUrl: string;
}
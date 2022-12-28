export enum Category {
    APPETIZER = 'appetizer',
    MAIN = 'main',
    DESSERT = 'dessert',
    DRINKS = 'drinks'
}

export interface MenuProps {
    name: string;
    category: Category;
    image: string;
    description: string;
    price: number
}

export class Menu {
    private props: MenuProps;
    constructor(props: MenuProps) {
        this.props = props
    }
}
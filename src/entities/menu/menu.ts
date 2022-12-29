export enum Category {
    APPETIZER = 'appetizer',
    MAIN = 'main',
    DESSERT = 'dessert',
    DRINKS = 'drinks'
}

export interface MenuProps {
    dish_id: string;
    category: Category;
}

export class Menu {
    private props: MenuProps;
    constructor(props: MenuProps) {
        this.props = props
    }
}
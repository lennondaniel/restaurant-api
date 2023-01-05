export enum Category {
    APPETIZER = 'appetizer',
    MAIN = 'main',
    DESSERT = 'dessert',
    DRINKS = 'drinks'
}

export class Menu {
    public dish_id: string;
    public category: Category;
    constructor(dish_id: string, category: Category) {
        this.dish_id = dish_id;
        this.category = category;
    }
}
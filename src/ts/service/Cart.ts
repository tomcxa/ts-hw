import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    totalPrice(): number {
        const price: number = this._items.reduce(((prev, current) => prev + current.price), 0);
        return price;
    }

    priceWithDiscount(discount: number): number {
        const price: number = this.totalPrice();
        const discountPrice: number = price - price * discount / 100;
        return discountPrice;
    }

    delete(id: number): void {
        const items: Buyable[] = this._items.filter(item => item.id !== id);
        this._items = items;
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}
import { describe, it, expect } from 'vitest';

describe('Cart Logic (Mock)', () => {
    it('should calculate total correctly', () => {
        const items = [
            { id: 1, price: 100, quantity: 2 },
            { id: 2, price: 50, quantity: 1 }
        ];
        const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        expect(total).toBe(250);
    });

    it('should update quantity correctly', () => {
        let items = [{ id: 1, quantity: 1 }];
        const id = 1;
        const delta = 1;
        items = items.map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item);
        expect(items[0].quantity).toBe(2);
    });
});

import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be working', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);

  expect(cart.items).toEqual([book]);
  expect(cart.totalPrice()).toBe(2000);
  expect(cart.priceWithDiscount(10)).toBe(1800);
  cart.delete(1001);
  expect(cart.items.length).toBe(0);
});

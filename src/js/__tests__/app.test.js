import demo from '../app';

test('функция корректно возвращает значение', () => {
  expect(demo(1)).toBe(1);
});

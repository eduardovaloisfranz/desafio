import { PutZeroIfAbsentPipe } from './put-zero-if-absent.pipe';

describe('PutZeroIfAbsentPipe', () => {
  it('create an instance', () => {
    const pipe = new PutZeroIfAbsentPipe();
    expect(pipe).toBeTruthy();
  });
});

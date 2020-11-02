import { PricePipe } from './price.pipe';

describe('PricePipe', () => {
  it('create an instance', () => {
    // Given
    const pipe = new PricePipe();
    // Then
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should add € suffix', () => {
      // Given
      const pipe = new PricePipe();  
      const price = 15.43;  
      // When
      const result = pipe.transform(price);
      // Then
      expect(result).toEqual(`${price} €`);
    });
    it('should always take 2 decimals', () => {
      // Given
      const pipe = new PricePipe();  
      const price = 15.4323254;  
      const expectedPrice = 15.43;
      // When
      const result = pipe.transform(price);
      // Then
      expect(result).toEqual(`${expectedPrice} €`);
    });
  });
  
});

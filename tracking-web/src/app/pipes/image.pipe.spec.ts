import { imagesUrl } from '../configuration/Properties';
import { ImagePipe } from './image.pipe';

describe('ImagePipe', () => {
  it('create an instance', () => {
    // Given
    const pipe = new ImagePipe();
    // Then
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should add url prefix', () => {
      // Given
      const pipe = new ImagePipe();  
      const id = 1;  
      // When
      const result = pipe.transform(id);
      // Then
      expect(result).toEqual(`${imagesUrl}/${id}`);
    });
  });
  
});

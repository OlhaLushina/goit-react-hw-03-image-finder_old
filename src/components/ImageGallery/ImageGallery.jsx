import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageList }) => (
  <ul class="gallery">
    {imageList.map(item => (
      <ImageGalleryItem />
    ))}
  </ul>
);

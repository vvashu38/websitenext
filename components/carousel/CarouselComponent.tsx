"use client";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import TypographyComponent from 'components/Preline/Typography';

interface CarouselItem {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselItem[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel fade>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <div className="relative w-full h-96">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
          <Carousel.Caption>
            {img.title && (
              <TypographyComponent
                variant='display-h1'
                text={img.title}
                className='text-responsive'
              />
            )}
            {img.caption && (
              <TypographyComponent
                className='mb-96 text-responsive'
                variant='display-md'
                text={img.caption}
              />
            )}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
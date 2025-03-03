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
          <Image
            src={img.src}
            alt={img.alt}
            layout="responsive"
            width={1000}
            height={600}
            className="d-block w-100"
          />
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

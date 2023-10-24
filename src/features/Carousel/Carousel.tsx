import { ReactNode, Children } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './Carousel.module.scss';

import 'swiper/css';

export type CarouselProps = {
  slideClassName?: string;
  className?: string;
  children: ReactNode;
  [key: string]: any;
};

export const Carousel: React.FC<CarouselProps> = ({ slideClassName, className, children, ...rest }) => {
  const params = {
    ...rest
  };
  return (
    <Swiper
      modules={[Mousewheel]}
      className={`${s.Carousel} ${className ? className : ''}`}
      {...params}>
      {children &&
        Children.map(children, (child, index) => (
          <SwiperSlide key={index} className={slideClassName ? slideClassName : ''}>
            {child}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
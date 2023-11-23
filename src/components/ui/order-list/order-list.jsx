import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import OrderCard from '../order-card/order-card';

function OrderList({ products }) {
  return (
    <SwiperStyle
      modules={[Mousewheel, Scrollbar]}
      spaceBetween={12}
      direction="vertical"
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      autoHeight
      mousewheel
      pagination={{
        type: 'fraction',
      }}
      loop>
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <OrderCard {...product} />
        </SwiperSlide>
      ))}
    </SwiperStyle>
  );
}

export default OrderList;

const SwiperStyle = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

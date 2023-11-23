import React from 'react';
import styled from 'styled-components';
import products from '../../../mocks/products';
import Container from '../../layout/container/container';
import OrderList from '../../ui/order-list/order-list';
import ProductForm from '../../ui/product-form/product-form';

function OrderPage() {
  return (
    <Wrapper>
      <Container>
        <PageWrapper>
          <ProductForm products={products} />
          <OrderList products={products} />
        </PageWrapper>
      </Container>
    </Wrapper>
  );
}

export default OrderPage;

const Wrapper = styled.div`
  background-color: #f6f6f6;
`;

const PageWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

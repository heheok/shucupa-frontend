import React, { Component } from 'react';
import styled from 'styled-components';
import { media, FixedWithContainer } from 'utils/styles';
import ProductList from 'ProductList';

export default class Listing extends Component {
  render() {
    return (
      <FixedWithContainer>
        <TitleWrapper>
          <h1>Shucupa Art'a Hoşgeldiniz</h1>
          <p>
            Sıradan tasarımlardan nadir parçalara yada sadece size özel olacak
            eşi benzeri bulunmayan ürünlere buradan ulaşabilirsiniz.
          </p>
        </TitleWrapper>
        <ProductList />
      </FixedWithContainer>
    );
  }
}

const TitleWrapper = styled.div`
  margin-bottom: 100px;
  max-width: 700px;
  padding-top: 100px;
  width: 90%;

  > h1 {
    font-size: 38px;
    font-weight: 300;
    line-height: 1.5;
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 1px;
    color: #787878;
    margin-bottom: 15px;
  }
`;

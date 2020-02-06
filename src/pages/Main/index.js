import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

export default function Main() {
  return (
    <Container>
      <Header />
      <Product />
      <Footer />
    </Container>
  );
}

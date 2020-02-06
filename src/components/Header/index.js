import React from 'react';
import {Image} from 'react-native';
import {Container, ContainerImage} from './styles';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
  return (
    <Container>
      <Icon name="chevron-left" size={25} color="#010101" />
      <ContainerImage>
        <Image
          source={logo}
          resizeMode={'contain'}
          style={{height: 55, width: 55}}
        />
      </ContainerImage>
      <Icon name="shopping-bag" size={25} color="#010101" />
    </Container>
  );
}

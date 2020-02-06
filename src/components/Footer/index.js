import React, {Component} from 'react';
import {
  Container,
  Title,
  ContainerText,
  Price,
  ContainerBottom,
  ButtonLabel,
  TextButton,
  ButtonLabel2,
  TextButton2,
} from './styles';

export default class Footer extends Component {
  state = {
    colors: ['#3777e5', '#d5cfcf'],
    buttonColor: '#d5cfcf',
  };
  changeColor() {
    const colorArray = this.state.colors;
    var currentColor = colorArray.filter(cor => cor != this.state.buttonColor);
    this.setState({buttonColor: currentColor});
  }

  render() {
    return (
      <Container>
        <ContainerText>
          <Title>Tênis Nike Air Force 1 '07 LV8</Title>
          <Price>R$ 499,90</Price>
        </ContainerText>
        <ContainerBottom>
          <ButtonLabel>
            <TextButton>37</TextButton>
          </ButtonLabel>
          <ButtonLabel>
            <TextButton>38</TextButton>
          </ButtonLabel>
          <ButtonLabel>
            <TextButton>39</TextButton>
          </ButtonLabel>
          <ButtonLabel>
            <TextButton>40</TextButton>
          </ButtonLabel>
          <ButtonLabel>
            <TextButton>41</TextButton>
          </ButtonLabel>
          <ButtonLabel
            style={{backgroundColor: this.state.buttonColor}}
            onPress={() => this.changeColor()}>
            <TextButton>42</TextButton>
          </ButtonLabel>
          <ButtonLabel>
            <TextButton>43</TextButton>
          </ButtonLabel>
        </ContainerBottom>

        <ButtonLabel2>
          <TextButton2>Adicionar ao carrinho</TextButton2>
        </ButtonLabel2>
      </Container>
    );
  }
}

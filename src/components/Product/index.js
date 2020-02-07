import React, {Component} from 'react';
import {
  Container,
  TabsContainer,
  Tabs,
  TabItem,
  Image,
  ContainerBottom,
  ButtonLabel,
  ButtonLabel2,
} from './styles';
import nike1 from '../../assets/nike1.png';
import nike2 from '../../assets/nike2.png';
import nike3 from '../../assets/nike3.png';
import nike4 from '../../assets/nike4.png';
import nike5 from '../../assets/nike5.png';
import nike6 from '../../assets/nike6.png';
import nike21 from '../../assets/nike21.png';
import nike22 from '../../assets/nike22.png';
import nike23 from '../../assets/nike23.png';
import nike24 from '../../assets/nike24.png';
import nike25 from '../../assets/nike25.png';
import nike26 from '../../assets/nike26.png';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    product: [],
    setProduct: [],
  };

  componentWillMount() {
    () => {
      if (!this.product) {
        this.setState({product: [nike1, nike2, nike3, nike4, nike5, nike6]});
      }
    };
  }

  SetColorBlack() {
    this.setState({product: [nike1, nike2, nike3, nike4, nike5, nike6]});
  }

  SetColorWhite() {
    this.setState({
      product: [nike21, nike22, nike23, nike24, nike25, nike26],
    });
  }

  render() {
    return (
      <Container>
        <TabsContainer>
          {this.state.product.map(item => (
            <Tabs key={item}>
              <TabItem>
                <Image source={item} />
              </TabItem>
            </Tabs>
          ))}
        </TabsContainer>
        <ContainerBottom>
          <ButtonLabel onPress={() => this.SetColorBlack()} />
          <ButtonLabel2 onPress={() => this.SetColorWhite()} />
        </ContainerBottom>
      </Container>
    );
  }
}

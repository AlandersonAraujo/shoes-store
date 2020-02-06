import React from 'react';
import {Container, TabsContainer, Tabs, TabItem, Image} from './styles';
import nike1 from '../../assets/nike1.png';
import nike2 from '../../assets/nike2.png';
import nike3 from '../../assets/nike3.png';
import nike4 from '../../assets/nike4.png';
import nike5 from '../../assets/nike5.png';
import nike6 from '../../assets/nike6.png';

export default function Product() {
  return (
    <Container>
      <TabsContainer>
        <Tabs>
          <TabItem>
            <Image source={nike1} />
          </TabItem>
        </Tabs>

        <Tabs>
          <TabItem>
            <Image source={nike2} />
          </TabItem>
        </Tabs>

        <Tabs>
          <TabItem>
            <Image source={nike3} />
          </TabItem>
        </Tabs>

        <Tabs>
          <TabItem>
            <Image source={nike4} />
          </TabItem>
        </Tabs>

        <Tabs>
          <TabItem>
            <Image source={nike5} />
          </TabItem>
        </Tabs>

        <Tabs>
          <TabItem>
            <Image source={nike6} />
          </TabItem>
        </Tabs>
      </TabsContainer>
    </Container>
  );
}

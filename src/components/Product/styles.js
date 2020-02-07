import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View``;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  snapToAlignment: 'center',
})`
  margin-top: 30px;
`;

export const Tabs = styled.View`
  display: flex;
  width: 425px;
  margin-right: 14px;
  margin-top: 20px;
`;

export const TabItem = styled.View`
  width: 425px;
  height: 350px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 425px;
  height: 350px;
  border-radius: 10px;
  position: absolute;
`;

export const ButtonLabel = styled(RectButton)`
  height: 20px;
  width: 20px;
  background-color: #252323;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 10px;
`;

export const ButtonLabel2 = styled(RectButton)`
  height: 20px;
  width: 20px;
  background-color: #c0baac;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 10px;
`;

export const ContainerBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 25px 5px 25px;
`;

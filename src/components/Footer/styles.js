import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #827a7a;
  font-weight: bold;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 55px 25px 5px 25px;
`;

export const Price = styled.Text`
  font-size: 22px;
  color: #121212;
  font-weight: bold;
`;

export const ButtonLabel = styled(RectButton)`
  height: 40px;
  width: 40px;
  background-color: #d5cfcf;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 10px;
`;

export const TextButton = styled.Text`
  color: #252323;
  font-size: 18px;
`;

export const ContainerBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px 25px 5px 25px;
`;

export const ButtonLabel2 = styled(RectButton)`
  height: 60px;
  width: 340px;
  background-color: #252323;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 40px;
  margin-top: 44px;
`;

export const TextButton2 = styled.Text`
  color: #fff;
  font-size: 18px;
`;

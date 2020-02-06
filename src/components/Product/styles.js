import styled from 'styled-components/native';

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


import styled from '@emotion/styled';

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
`;
export const Cardame = styled.p`
  font-size: 25px;
  margin: 0 0 0 40px;
`;
export const CardAvatar = styled.img`
  background-color: gray;
  border-radius: 30%;
  margin-left: 20px;
`;
export const CardStatus = styled.span`
  margin-left: 20px;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${props => {
    if (props.isOnline === true) {
      return 'green';
    }
    return 'red';
  }};
`;
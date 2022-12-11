import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  margin-left: 20px;
  max-width: 500px;
`;

export const ButtonDelete = styled.button`
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 0 16px 0 16px;
  background-color: #606060;
  border: none;
  border-radius: 5px;

  font-family: inherit;
  font-size: 20px;
  height: 40px;

  max-width: 100px;

  color: white;
  cursor: pointer;
`;

export const ContactItem = styled.li`
  display: flex;
  font-size: 24px;
  align-items: center;
  gap: 20px;
  justify-content: space-around; ;
`;

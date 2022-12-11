import styled from 'styled-components';

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

export const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const InputText = styled.input`
  font-size: 20px;
  min-width: 400px;
  min-height: 40px;
  color: black;

  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ButtonForm = styled.button`
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 16px 0 16px;
  min-width: 100px;
  height: 40px;

  border-radius: 5px;
  color: black;
  background-color: white;

  font-size: 20px;
  cursor: pointer;

  :hover {
    color: #ffff;
    background-color: #606060;
    cursor: pointer;
  }
`;

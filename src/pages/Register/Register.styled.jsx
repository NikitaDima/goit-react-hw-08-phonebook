import styled from '@emotion/styled';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const FormBtn = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

import styled from '@emotion/styled';
export const Spiner = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
border: 4px solid #ccc;
border-top-color: #999;
animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

export const FormAddBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  width: 300px;
  margin: auto;
`;

export const FormAddTitle = styled.h2`
  margin-bottom: 10px;
`;

export const FormAddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

import styled from '@emotion/styled';
export const Spiner = styled.div`
width: 20px;
height: 20px;
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

export const ListBtn = styled.button`
  display: block;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid red;
  color: red;
  &:hover {
    border-color: darkred;
    background-color: white;
  }
`;

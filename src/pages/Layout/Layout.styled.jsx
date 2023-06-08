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

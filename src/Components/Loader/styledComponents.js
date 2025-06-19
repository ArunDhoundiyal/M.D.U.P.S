import styled, {keyframes} from 'styled-components';

export const loading = keyframes`
0%{
transform:scale(1) rotateX(0deg);
}

100%{
transform:scale(1.2) rotateY(360deg);
}
`;

export const Img = styled.img`
height:175px;
@media screen and (max-width:700px){
height:100px;
}
animation-name:${loading};
animation-duration:1.5s;
animation-timing-function: ease-in-out;
animation-iteration-count:infinite;
animation-fill-mode:both;
animation-direction:alternate;
`;

export const LoaderContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
height:100vh;
background-size:cover;
background-color: #ffffff;
`;



export const LoadingMsg = styled.p`
color: #32338b;
font-weight:bold;
font-size:20px;
`;
import styled from 'styled-components';

export const WhatsAppButton = styled.button`
background-color: transparent;
cursor:pointer;
position:fixed;
bottom:100px;
right:20px;
border:none;
z-index:10;
`;

export const Img = styled.img`
height:60px;
width:60px;
@media screen and (max-width:600px){
height:50px;
width:50px;
}
`;


export const AnchorTag = styled.a`
font-style:inherite;
text-decoration:none;
`;
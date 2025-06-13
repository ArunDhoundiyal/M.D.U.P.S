import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;

export const DonationFormBgContainer = styled.div`
position:fixed;
top:120px;
right:70px;
height:500px;
width:450px;
background-color: #ffffff;
border:solid 1px #0553ae;
z-index:10;
border-radius:18px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
`;

export const Heading = styled.h2`
font-weight:400;
color: #cc0000;
animation-name: ${fadeIn};
animation-duration:1s;
animation-timing-function:ease-in-out;
animation-iteration-count:infinite;
`;

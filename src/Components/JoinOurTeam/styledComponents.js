import styled from 'styled-components';


export const DonationBgContainer = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
background-size:cover;
`;

export const DonationTopImageContainer = styled.div`
position:relative;
height:50vh;
width:100%;
margin-top:100px;
`;

export const  DonationImage = styled.img`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
object-fit:contain;

`;

export const DonationCardDesContainer = styled.div`
max-width:50vw;
display:flex;
flex-direction:column;
padding:20px;
margin:0 100px;
overflow:auto;
`;

export const DonationHeading = styled.h2`
color: #32338b;
font-weight:600;
line-height:40px;
margin:12px 0;
`;

export const DonationMessage = styled.p`
font-size:18px;
color: #555555;
margin:4px 0;
`;

export const BoldArrow = styled.span`
color: #32338b;
`;










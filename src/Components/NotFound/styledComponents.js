import styled from 'styled-components';
import { MdArrowBackIosNew } from "react-icons/md";

export const BackIcon = styled(MdArrowBackIosNew)``;

export const NotFoundPageBgContainer = styled.div`
min-height:100vh;
background-size:cover;
position:relative;
`; 

export const NotFoundPageContainer = styled.div`
position:absolute;
top:100px;
left:0;
width:100%;
height:calc(100vh - 100px);
display:flex;
flex-direction:column;
align-items:center;
`;

export const NoteFoundImgContainer = styled.div`
height:100%;
width:600px;
position:absolute;
top:0;
@media screen and (max-width:650px){
width:100%;
}
`;

export const NotFoundImg = styled.img`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
object-fit:cover;
@media screen and (max-width:800px){
object-fit:contain;
}
`;

export const NotFoundMsgButtonContainer = styled.div`
position:absolute;
bottom:0;
height:calc(100% - 60vh);
width:100%;
display:flex;
flex-direction:column;
align-items:center;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
text-align:center;
font-family:Manrope, sans-serif;
padding:20px;

`;

export const ImgContainer = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:60vh;
`;

export const Heading = styled.h1`
font-weight:600;
color: #32338b;
font-size:25px;
`;

export const Msg = styled.p`
color: #555555;
font-size:20px;
`;

export const BackButton = styled.button`
background-color: #transparent;
color: #32338b;
border:solid 4px #32338b;
height:60px;
width:250px;
font-size:15px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
cursor:pointer;
font-weight:bold;
transition-property:background-color color;
transition-duration:0.50s;
transition-timing-function: ease-in-out;
&:hover{
background-color: #32338b;
color: #ffffff;
}
`;
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

export const CrossIcon = styled(TfiClose)``;

export const CloseButton = styled.button`
color: #ffffff;
position:absolute;
top:20px;
right:20px;
font-size:30px;
background-color:transparent;
border:none;
cursor:pointer;
`;


export const ViewInFullSizeContainer = styled.div`
position:fixed;
top:0;
left:0;
height:100%;
width:100%;
background-color: rgba(0, 0, 0, 0.7);
z-index:1001;
`;

export const Img = styled.img`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
object-fit: contain;
width: 80vw;
max-width: 1200px;
height: auto;
max-height: 80vh;
`;

export const LeftButton = styled.button`
color: #ffffff;
position:absolute;
top:50%;
left:2px;
font-size:30px;
background-color:transparent;
border:none;
cursor:pointer;
`;

export const RightButton = styled.button`
color: #ffffff;
position:absolute;
top:50%;
right:2px;
font-size:30px;
background-color: transparent;
border:none;
cursor:pointer;
`;


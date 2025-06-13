import styled, {keyframes} from "styled-components";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const moveUpAndDown = keyframes`
0%,100%{
transform:translateY(5px);
}

50%{
transform:translateY(-5px);
}
`;

export const ArrowIcon = styled(MdKeyboardDoubleArrowUp)`
animation-name:${moveUpAndDown};
animation-duration:1.5s;
animation-timing-function:ease-in-out;
animation-iteration-count:infinite;
`;

export const ScrollTopButton = styled.button`
cursor:pointer;
position:fixed;
bottom:20px;
right:20px;
border:solid 2px #ffffff;
height:60px;
width:60px;
border-radius:30px;
font-size:40px;
background-color: #32338b;
color: #ffffff;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
z-index:10;
@media screen and (max-width:600px){
height:50px;
width:50px;
font-size:35px;
}
`;
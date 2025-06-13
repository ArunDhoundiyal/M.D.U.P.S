import styled from 'styled-components';
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

export const DropDownArrow = styled(IoMdArrowDropdown)`
transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
transition-property:transform;
transition-duration:0.75s;
transition-timing-function:ease-in-out;
font-size:20px;

`;
export const CloseCrossIcon = styled(RxCross1)``;

export const CloseButton = styled.button`
border:none;
background-color:transparent;
cursor:pointer;
margin:8px;
`;

export const CloseButtonContainer = styled.div`
display:flex;
justify-content:flex-end;
`;

export const LanguageSpan = styled.span`
color: #32338b;
margin-left:4px;
`;


export const SelectLanguageContainer = styled.div`
position:relative;
background-color:transparent;
display:flex;
flex-direction:row;
align-items:center;
color: #555555;
font-weight:bold;
cursor:pointer;
`;


export const LanguageCard = styled.ul`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position:absolute;
z-index:1000;
top:80px;
left:10px;
background-color: #ffffff;
list-style-type:none;
display:flex;
flex-direction:column; 
justify-content:space-around;
overflow:auto;
text-align:center;
width:150px;
border-radius:8px;
border:1px solid lightgrey;
`;


export const LanguageItem = styled.li`
background-color:${(({isActive})=> isActive ? ' #32338b': 'transparent')};
color:${(({isActive})=> isActive ? ' #ffffff': ' #555555')};
font-weight:bold;
width:100%;
padding:12px;
cursor:pointer;
&:hover{
}
`;
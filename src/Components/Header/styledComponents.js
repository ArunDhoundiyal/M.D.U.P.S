import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';
import { FcDonate } from "react-icons/fc";
import { MdKeyboardArrowDown } from "react-icons/md";


export const HeaderContainer = styled.header`
height:100px;
position: fixed;
top: 0;
left: 0;
right: 0;
width:100%;
background-color: #ffffff;
z-index:1000;
`;


export const AnchorTag = styled.a`
font-style:inherit;
text-decoration:none;
`;

export const LinkNavItem = styled(Link)`
text-decoration:none;
color:inherit;
`;

export const NavbarCloseOpenButton = styled.button`
cursor:pointer;
background-color: transparent;
border:none;
color: #32338b;
font-size:30px;
margin-right:20px;
display:flex;
justify-content:center;
align-items:center;
@media screen and (min-width:1451px){
display:none;
}
transition-property: transform;
transition-duration: 0.50s;
transition-timing-funciton:ease-in-out;
transform:${({rotate})=>(rotate ? `rotate(180deg)`: `rotate(deg)`)};
`;

export const Nav = styled.nav`
background-size:cover;
height:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`;

export const ImageLogo = styled.img`
height:120px;
width:120px;
margin-left:20px;
cursor:pointer;
`;

export const NavItemsContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
align-items:center;
gap:20px;
margin:0 20px;
height:100%;
@media screen and (max-width:1450px){
display:none;
}
`;

export const ListItem = styled.li`
height:50px;
cursor:pointer;
color:${({isactive})=>isactive? ' #32338b' : ' #555555'};
font-weight:bold;
position:relative;
display:flex;
flex-direction:row;
align-items:center;
&::after{
content:"";
width:${({isactive})=>isactive? '100%' : '0%'};
height:3px;
background-color: #32338b;
position:absolute;
bottom:0;
left:0;
transition-property:width;
transition-duration:0.25s;
transition-timing-function:ease-in-out;
}
&:hover::after{
width:100%;
}
&:hover{
color:#002fa7;  
font-weight:bold;
}
@media screen and (max-width:850px){
display:none;
}
`;

export const JoinTeamButton = styled.button`
background-color: #32338b;
cursor:pointer;
font-size:15px;
color: #ffffff;
height:45px;
width:140px;
font-weight:600;
border:none;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
transition-property:background-color, color;
transition-duration:0.25s;
transition-timing-function:ease-in-out;
&:hover{
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`;


export const DonationButton = styled.button`
background-color:transparent;
cursor:pointer;
font-size:15px;
color:#002fa7;
height:45px;
width:140px;
font-weight:600;
border:solid 3px #32338b;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
transition-property:background-color, color;
transition-duration:0.25s;
transition-timing-function:ease-in-out;
&:hover{
background-color: #32338b;
color:#ffffff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`;

const zoomInzoonOut = keyframes`
from{
transform:scale(1);
}
to{
transform:scale(0.8);
}
`;



export const HeartIcon = styled(FcDonate)`
margin-left:8px;    
font-size:30px;
animation-name: ${zoomInzoonOut};
animation-duration:1.25s;
animation-timing-function:ease-in-out;
animation-iteration-count:infinite;
animation-direction:alternate;
`;

export const NavSideBarBlurBackgroundConatiner = styled.div`
display:${({isactive})=>isactive ? 'flex' : 'none'};
position:fixed;
top:100px;
left:0;
width:100%;
height:100%;
background-size:cover;
background-color: rgba(0, 0, 0, 0.4);
z-index:999;
backdrop-filter:blur(8px);
@meida screen and (min-width:1451px){
display:none;
}
`;

export const NavSideBar = styled.div`
position:fixed;
top:100px;
right:0; 
width:300px;
height:100%;
z-index:1000;
background-color: #32338b;
transform:${({isactive})=>isactive?'translateX(0)':'translateX(100%)'};
transition-property:transform;
transition-duration:0.50s;
transition-timing-function: ease-in-out;
@media screen and (min-width:1451px){
display:none;
}
@media screen and (max-width:400px){
width:100%;
}
`;

export const NavSideBarListItemContainer = styled.div`
position:absolute;
top:0;
right:0;
width:95%;
height:100%;
background-color: #ffffff;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
transform:${({isactive})=>isactive?'translateX(0)':'translateX(100%)'};
transition-property:transform;
transition-duration:1s;
transition-timing-function: ease-in-out;
@media screen and (min-width:1451px){
display:none;
}
overflow:auto;
&::-webkit-scrollbar{
width:8px;
}
&::-webkit-scrollbar-thumb{
background: #32338b;
}
`;

export const NavSideBarItemContainer = styled.ul`
list-style-type:none;
width:100%; 
display:flex;
flex-direction:column;
font-weight:550;
`;

export const SideBarNavListItem = styled.li`
  height: 45px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ isactive }) => (isactive ? ' #ffffff' : ' #555555')};
  background-color:${({ isactive }) => (isactive ? ' #32338b' : 'transparent')};
  transition: all 0.2s ease-in-out;
  position: relative;
  &:hover {
    background-color: ${({ isactive }) => (isactive ? 'transparent' : ' #32338b')};
    color: ${({ isactive }) => (isactive ? ' #32338b' : ' #ffffff')};
  }
`;

export const NavSideBarSelectLanguage = styled.li`
height:auto;
width:100%;
display:flex;
flex-direction:column;
color: #555555;
`;

export const SideBarSelectLanguage = styled.div`
position:relative;
padding:12px;
cursor:pointer;
`;


export const SelectLanguageContainer = styled.ul`
  list-style-type: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  max-height: ${({ isactive }) => (isactive ? '500px' : '0')}; 
  opacity: ${({ isactive }) => (isactive ? '1' : '0')};
  transition: max-height 0.50s ease, opacity 0.50s ease;
`;

export const SelectLanguageListItem = styled.li`
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
height:45px;
cursor:pointer;
color:${({isactive})=>isactive ? ' #ffffff' : ' #555555'};
background-color:${({isactive})=> isactive ? ' #32338b' : ' #ffffff'};
transition: all 0.2s ease-in-out;
&:hover{
background-color: #32338b;
color: #ffffff;
}
`;

export const ArrowIcon = styled(MdKeyboardArrowDown)`
position:absolute;
top:8px;
right:12px;
font-size:28px;
transform:${({isactive})=> isactive ? 'rotate(180deg)':'rotate(0deg)'};
transition: transform 0.50s ease-in-out;
`;


export const NavSidebarMdupsFollowUsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
width:100%; 
margin:50px 0;
`;


export const NavSideBarFollowUsContainer = styled.ul`
display:flex;
flex-direction:row;
list-style-type:none;
gap:10px;
margin-bottom:100px;
`;

export const NavSideBarFollowUsIconItem = styled.li`
height:30px;
width:30px;
position:relative;
cursor:pointer;
`;
export const NavSideBarFollowUsIcon = styled.img`
position:absolute;
top:0;
left:0;
height:100%;
width:100%; 
object-fit:fill;
`;

export const NavSideBarFollowUsHeading = styled.h1`
color: #555555;
font-size:20px;
font-weight:600;
`;

export const SideBarJoinTeamButton = styled.button`
background-color:transparent;
cursor:pointer;
font-size:15px;
color: #ffffff;
height:45px;
width:110px;
font-weight:550;
background-color: #32338b;
border:none;
transition-property:background-color, color;
transition-duration:0.25s;
transition-timing-function:ease-in-out;
&:hover{
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
margin:8px;
flex-shrink:0;
`;


export const SideBarButton = styled.button`
background-color:transparent;
cursor:pointer;
font-size:15px;
color: #002fa7;
height:45px;
width:110px;
font-weight:550;
border:solid 3px #32338b;
transition-property:background-color, color;
transition-duration:0.25s;
transition-timing-function:ease-in-out;
&:hover{
background-color: #32338b;
color:#ffffff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
margin:8px;
flex-shrink:0;
`;

export const SideBarButtonContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:250px;
`;

export const IconWrapper = styled.span`
margin-right:8px;
font-size:20px;
`;



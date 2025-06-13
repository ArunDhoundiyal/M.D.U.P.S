import styled, {keyframes} from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { SlSizeFullscreen } from "react-icons/sl";

const backgroundImage = keyframes`
0%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679456/pexels-abhra-ghosh-362148807-16152405_bfzjs0.webp');
}
10%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679456/tourism-leisure-survival-scout-freedom_1_1_1_rv5ef3.webp');
}
20%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679455/pexels-anuj-yadav-34803963-7719327_z7tti4.webp');
}
30%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679491/herd-cattle-grazing-green-fields_anak7s.webp');
}
40%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679490/pexels-vinod-singh-489965859-16660010_a0haws.webp');
}
50%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679457/pexels-soubhagya23-19010047_fdw552.webp');
}
60%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679490/ulsan-bawi-rock-seoraksan-mountains-winter-south-korea_wuqvv6.webp')};
70%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679456/pexels-abhra-ghosh-362148807-16152405_bfzjs0.webp');
}
80%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679491/akshay-syal-5vDTocCCutE-unsplash_sq9nch.webp');}
90%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679491/pexels-debphotography-16635815_ya84ua.webp');
}
100%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748679455/pexels-anuj-yadav-34803963-7719327_z7tti4.webp');
}
`;


export const ViewInFullSizeIcon = styled(SlSizeFullscreen)`
margin-left:8px;
`;

export const OurTeamBgContainer = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BackgroundImageContainer = styled.div`
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  top: 100px;
  width: 100%;
  left: 0;
  animation-name: ${backgroundImage};
  animation-duration:60s;
  animation-timing-function: ease-in-out;
  animation-iteration-count:infinite;
  animation-fill-mode:both;
  animation-direction: alternate-reverse; 
`;



export const BackgroundContentContent = styled.div`
position:absolute;
z-index:2;
height:100%;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
background-color: rgba(0, 0, 0, 0.4);
padding:80px;

`
export const BannerHeading = styled.h1`
color: #ffffff;
font-weight:bold;
font-size:50px;
@media screen and (max-width:1000px){
font-size:40px;
}
@media screen and (max-width:600px){
font-size:25px;
}
@media screen and (max-width:400px){
font-size:18px;
}
`;



export const OurTeamHeadingContainer = styled.div`
  display: inline-block;
  margin-top: 120px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 0%;
    height: 4px;
    background-color: #32338b;
    position: absolute;
    bottom: 0;
    left: 0;
    transition-property: width;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const OurTeamHeading = styled.h1`
  text-align: center;
  color: #32338b;
  line-height: 80px; 
  @media screen and (max-width:600px){
  font-size:25px;
  } 
  @media screen and (max-width:300px){
  font-size:20px;
  } 

`;

export const OurTeamContainer = styled.div`
  display: flex;
  width: 80%;
  height: 550px;
  position:relative;
  margin-top:50px 0;
  margin:50px 0;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
    position: static; 
  }
  `;

  export const PersonPhoto = styled.img`
  transition: transform 1s ease-in-out;
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width:500px){
  object-fit:contain;
  }
`;

export const TeamPersonPhotoContainer = styled.div`
overflow:hidden;
cursor:pointer;
  height: 100%;
  width: 400px;
  position:absolute;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
&:hover ${PersonPhoto}{
transform:scale(1.1);
}
@media screen and (max-width:1000px){
left:50%;
transform:translate(-50%);
}
@media screen and (max-width:550px){
width:100%;
}
@media screen and (max-width:500px){
  position: static;
    width: 100%;
    height: auto;
    transform: none;
}
`;

export const TeamPersonTwoPhotoContainer = styled.div`
overflow:hidden;
cursor:pointer;
  height: 100%;
  width: 400px;
  position:absolute;
  top:0;
  right:0;
  display: flex;
  align-items: center;
  justify-content: center;
&:hover ${PersonPhoto}{
transform:scale(1.1);
}
@media screen and (max-width:1000px){
right:50%;
transform:translate(50%);
}
@media screen and (max-width:550px){
width:100%;
}
@media screen and (max-width:500px){
  position: static;
  width: 100%;
  height: auto;
  transform: none;
}
`;


export const TeamMessageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 400px;
  width: calc(100% - 400px);
  overflow:auto;
  display:flex;
  flex-direction:column;
  padding:18px;

  &::-webkit-scrollbar{
  width:8px;
  }
  &::-webkit-scrollbar-thumb{
  background: #32338b;
  }
  @media screen and (max-width:1000px){
  display:none;
  }
`;

export const TeamTwoMessageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 400px;
  width: calc(100% - 400px);
  overflow:auto;
  display:flex;
  flex-direction:column;
  padding:18px;
  &::-webkit-scrollbar{
  width:8px;
  }
  &::-webkit-scrollbar-thumb{
  background: #32338b;
  }
  @media screen and (max-width:1000px){
  display:none;
  }
  `;

  export const SmallScreenTeamMessageContainer = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    padding:18px;
    @media screen and (min-width:1001px){
    display:none;
    }
  `;

export const Message = styled.p`
font-size:16px;
color: #555555;
margin:18px 0;
`;

export const BoldContent = styled.p`
font-weight:bold;
color: #555555;
`;

export const DisplayOurTeamContainer = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;
width: 75%;
margin-top:50px;
margin-bottom:50px;
list-style-type:none;
`;

export const KaryeKariniMembersNameContainer = styled.li`
cursor:pointer;
background-color: #f4f0ec;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:8px;
margin:12px;
border-top:solid 1px darkgrey;
border-left:solid 1px darkgrey;
border-right:solid 1px darkgrey;
border-bottom: solid 5px ${(props)=>props.color};
border-top-right-radius:0px;
border-bottom-left-radius:0px;
overflow:auto;
flex-grow:0;
flex-shrink:1;
flex-basis:300px;
height:300px;
`;

export const KaryeKariniMembers = styled.div`
`;

export const Name = styled.p`
font-size:18px;
margin-top:18px;
color: #555555;
`;

export const UserIcon = styled(BiUserCircle)`
font-size:80px;   
color:${props => props.color};
`;

export const StyleDesignation = styled.span`
font-weight:600;
`;
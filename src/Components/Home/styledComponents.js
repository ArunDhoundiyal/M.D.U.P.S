import styled, { keyframes } from 'styled-components';
import { FaArrowRightLong } from "react-icons/fa6";
import { SiComma } from "react-icons/si";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcDonate } from "react-icons/fc";
import { LiaLocationArrowSolid } from "react-icons/lia";


export const ArrowIcon = styled(LiaLocationArrowSolid)`
transform:rotate(90deg);
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
color:#ff0000;
margin-left:8px;
font-size:40px;
animation-name: ${zoomInzoonOut};
animation-duration:1.25s;
animation-timing-function:ease-in-out;
animation-iteration-count:infinite;
animation-direction:alternate;
`;

export const Star = styled(IoStarSharp)``;
export const OutlineStar = styled(IoStarOutline)``;

export const TopComma = styled(SiComma)`
  transform: rotate(180deg);
  font-size: 25px;
`;

export const RightArrowIcon = styled(FaArrowRightLong)`
margin-left:8px;
`;

export const HomeContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;
background-size:cover;
background-color: #ffffff;
`;

export const HomeMDUPSLogoMeaningContainer = styled.div`
display:flex;
flex-direction:row;
background-color:transparent;
width:90%;
margin:50px 0;
height:600px;
position:relative;
`;

export const HomeMDUPSLogoContainer = styled.div`
cursor:pointer;
position:absolute;
top:0;
right:0;
height:100%;
width:400px;
@media screen and (max-width:800px){
width:100%;
}
}
`;

export const HomeMDUPSLogoContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% - 400px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  margin: 0;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #32338b;
  }
  @media screen and (max-width:800px){
  display:none;
  }
`;

export const SmallHomeMDUPSLogoContentContainer = styled.div`
width:90%;
display: flex;
flex-direction: column;
padding: 10px;
gap: 10px;
margin: 0;
box-sizing: border-box;
@media screen and (min-width:801px){
display:none;
}
`;


export const HomeMDUPSLogoDescription = styled.p`
font-size:18px;
color: #555555;
text-align:center;
@media screen and (max-width:1050px){
font-size:15px;
}
`;

export const HomeMDUPSLogoSubDescription = styled.p`
font-size:18px;
color: #555555;
text-align:left;
@media screen and (max-width:1050px){
font-size:15px;
}
`;

export const MDUPSHeading = styled.h1`
color: #32338b;
font-weight:600;
line-height:30px; 
margin-top:20px;
text-align:center;
@media screen and (max-width:1050px){
font-size:25px;
}
`;

export const MDUPSsubHeading = styled.h2`
color: #32338b;
font-weight:600;
line-height:40px;
text-align:left;
line-height:24px;
align-items:center;
@media screen and (max-width:1050px){
font-size:20px;
}
`;

export const MDUPSsubHeadingTwo = styled.h3`
color: #32338b;
font-weight:600;
line-height:20px;
text-align:left;
@media screen and (max-width:1050px){
font-size:16px;
}
`;

export const Word = styled.span`
font-weight:bold;
text-decoration:underline;
`;

export const BoldWord = styled.span`
font-weight:bold;
`;
export const BoldArrowLine = styled.span`
font-weight:bold;
color: #32338b;
`;

export const HomeMDUPSLogo = styled.img`
height:100%;
width:100%;
position:absolute;
top:0;
left:0;
object-fit:cover;
@media screen and (max-width:800px){
object-fit :contain;
}
`;

export const HomeCardContainer = styled.div`
display:flex;
flex-direction:row;
background-color:transparent;
width:90%;
margin:50px 0;
position:relative;
`;

export const HomeAboutUsCollargeContainer = styled.div`
  height: 600px;
  width: 600px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  &::-webkit-scrollbar{
  width:8px;
  }
  &::-webkit-scrollbar-thumb{
  background: #32338b;
  }
  @media screen and (max-width:1100px){
  width: 500px;
  }
@media screen and (max-width:950px){
  width: 450px;
}
@media screen and (max-width:900px){
  width:100%;
}
  @media screen and (max-width:500px){
  height:500px;
  }
  @media screen and (max-width:450px){
    height:300px;
  }
    @media screen and (max-width:300px){
    height:250px;
    }

`;

export const HomeAboutUsCollargeImg = styled.img`
flex-grow:1;
flex-shrink:1;
flex-basis:35%;
object-fit:cover;
max-height:190px;
height:auto;
cursor:pointer;
@media screen and (max-width:1100px){
max-height:150px;
}
@media screen and (max-width:950px){
max-height:145px;
}
@media screen and (max-width:900px){
max-height:240px;
}
@media screen and (max-width:820px){
max-height:200px;
}
@media screen and (max-width:700px){
max-height:180px;
}
@media screen and (max-width:620px){
max-height:155px;
}
@media screen and (max-width:550px){
max-height:150px;
}
@media screen and (max-width:520px){
max-height:145px;
}
@media screen and (max-width:500px){
max-height:120px;
}
@media screen and (max-width:420px){
max-height:100px;
}
@media screen and (max-width:350px){
max-height:80px;
}
@media screen and (max-width:300px){
max-height:70px;
}
@media screen and (max-width:250px){
max-height:60px;
}
`;

export const HomeHeadingDesContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
gap:20px;
background-color:transparent;
position:absolute;
top:0;
left:600px;
width: calc(100% - 600px);
height:600px;
overflow:auto;
&::-webkit-scrollbar{
width:8px;
}
@media screen and (max-width:1100px){
width: calc(100% - 500px);
left:500px;
}
@media screen and (max-width:950px){
width: calc(100% - 450px);
left:450px;
}
@media screen and (max-width:900px){
display:none;
}
`;
export const HomeHeadingAboutUsDesContainer = styled.div`
width:90%;
margin:10px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
gap:20px;
background-color:transparent;
@media screen and (min-width:901px){
display:none;
}
`;

export const HomeCarausalCardContainer = styled.div`
flex-direction:row;
background-color:transparent;
width:90%;
margin:50px 0;
position:relative;
`;

export const HomeCarausalDesCardContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
width:500px;
height:550px;
background-color:transparent;
padding:20px;
gap:20px;
overflow:auto;
&::-webkit-scrollbar{
width:8px;
}
&::-webkit-scrollbar-thumb{
background: #32338b;
}
@media screen and (max-width:1100px){
width:100%;
height:auto
}
`;

export const OurMissionCarausalContainer = styled.div`
position:absolute;
top:0;
left:500px;
width:calc(100% - 500px);
height:100%;
@media screen and (max-width:1100px){
display:none;
}
`;
export const AnotherOurMissionCarausalContainer = styled.div`
@media screen and (max-width:1100px){
width:90%;
height:550px;
}
@media screen and (min-width:1101px){
display:none;
}
`;

export const CarausalCardHeading = styled.h2`
color: #32338b;
font-size:20px;
font-weight:600;
font-style:italic;
transition-property:color;
transition-duration: 0.5s;
transition-timing-function: ease-in-out;
@media screen and (max-width:1650px){
font-size:18px;
}
@media screen and (max-width:1500px){
font-size:16px;
}
@media screen and (max-width:1400px){
font-size: 18px;
}
@media screen and (max-width:1150px){
font-size: 15px;
}
@media screen and (max-width:1100px){
font-size:18px;
}
@media screen and (max-width:1000px){
font-size:16px;
}
@media screen and (max-width:900px){
font-size:14px;
}
@media screen and (max-width:850px){
font-size:12px;
}
@media screen and (max-width:750px){
font-size:16px;
}
@media screen and (max-width:700px){
font-size:14px;
}
@media screen and (max-width:500px){
font-size:18px;
}
@media screen and (max-width:400px){
font-size:14px;
}
@media screen and (max-width:360px){
font-size:16px;
}
@media screen and (max-width:350px){
font-size:14px;
}
@media screen and (max-width:300px){
font-size:13px;
}
@media screen and (max-width:225px){
font-size:12px;
}
`;

export const CarausalCardDescription = styled.p`
font-size:16px;
color: #555555; 
transition-property:color;
font-style:italic;
transition-duration:0.5s;
transition-timing-function: ease-in-out;
@media screen and (max-width:1650px){
font-size:14px;
}
@media screen and (max-width:1400px){
font-size:16px;
}
@media screen and (max-width:1300px){
font-size:14px;
}
@media screen and (max-width:1100px){
font-size:16px;
}
@media screen and (max-width:1000px){
font-size:14px;
}
@media screen and (max-width:850px){
font-size:13px;
}
@media screen and (max-width:750px){
font-size:14px;
}
@media screen and (max-width:600px){
font-size:12px;
}
@media screen and (max-width:500px){
font-size:16px;
}
@media screen and (max-width:400px){
font-size:13px;
}
@media screen and (max-width:300px){
font-size:12px;
}
@media screen and (max-width:250px){
font-size:10px;
}
`;

export const IconWrapper  = styled.span`
font-size: 60px;
position:absolute;
bottom:0px;
right:20px;
color:${({color})=>`${color}`};
border-bottom:${({color})=>`solid 3px ${color}`};
transition-property::color;
transition-duration: 0.5s;
transition-timing-function: ease-in-out;
@media screen and (max-width:1450px){
font-size: 50px;
}
@media screen and (max-width:1400px){
font-size: 60px;
}
@media screen and (max-width:1200px){
font-size:50px;
}
@media screen and (max-width:1150px){
font-size:40px;
}
@media screen and (max-width:1100px){
font-size:50px;
}
@media screen and (max-width:1000px){
font-size:40px;
}
@media screen and (max-width:950px){
font-size:30px;
}
@media screen and (max-width:750px){
font-size:30px;
}
@media screen and (max-width:500px){
font-size:50px;
}
@media screen and (max-width:450px){
font-size:35px;
}

@media screen and (max-width:400px){
font-size:30px;
}
@media screen and (max-width:310px){
font-size:30px;
}
`;

export const OurMissionCarausalCardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 100%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: solid 1px darkgrey;
  border-radius: 18px;
  padding: 20px;
  gap: 20px;
  background-color: #f4f0ec;
  box-shadow: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: ${({ color }) => `${color}`};
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  &:hover ${CarausalCardHeading} {
    color: #ffffff;
  }
    
  &:hover ${CarausalCardDescription} {
    color: #ffffff;
  }

  &:hover ${IconWrapper} {
  color: #ffffff 
  }

`;


export const HomeAboutUsHeading = styled.h1`
color: #232b2b;
font-weight:500;
line-height:40px;
@media screen and (max-width:1050px){
font-size:25px;
}
`;

export const Bold = styled.span`
color: #232b2b;
font-weight:600;
`;

export const BoldUnderline = styled.span`
color: #32338b;
cursor:pointer;
font-weight:600;
position:relative;
&::after{
content:"";
bottom:0;
left:0;
width:0%;
height:3px;
background-color: #32338b;
position:absolute;
transition-property:width;
transition-duration:0.50s;
transition-timing-function:ease-in-out;
}
&:hover::after{
width:100%;
}
`;

export const HomeCardDescription = styled.p`
font-size:18px;
color: #555555;
@media screen and (max-width:1050px){
font-size:15px;
}
`;


export const Button = styled.button`
flex-shrink:0;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
cursor:pointer;
border:solid 4px #32338b;
background-color:transparent;
height:60px;
width:250px;
font-size:20px;
margin:12px;
color: #32338b;
font-weight:bold;
border-radius:8px;
transition-property:background-color, color;
transition-duration:0.25s;
transition-timing-function:ease-in-out;
&:hover{
color: #ffffff;
background-color: #32338b;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
@media screen and (max-width:1000px){
width:200px;
} 
@media screen and (max-width:950px){
font-size:15px;
}
`;

export const Heading = styled.h1`
color: #32338b;
font-weight:600;
margin:20px 0;
@media screen and (max-width:1050px){
font-size:25px;
}
`;

export const CarouselHeading = styled.h1`
font-size:16px;
color:#232b2b;
line-height:30px;
`;

export const CarouselDescription = styled.p`
font-size:14px;
margin-top:18px;
color: #555555;
`;
export const Img = styled.img`
height:50px;
width:50px;
margin-top:12px;
`;

export const HomeDonationContainer = styled.div`
width:90%;
background-size:cover;
height:500px;
position:relative;
margin:50px 0;
@media screen and (max-width:600px){
height:300px;
}
`;

export const DonationImage = styled.img`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
transition: transform 1s ease-in-out;
@media screen and (max-width:600px){
object-fit:contain;
}
`;

export const HomeDonationImageContainer = styled.div`
position:absolute;
top:0;
right:0;
width:500px;
height:100%;
overflow:hidden;
cursor:pointer;
&:hover ${DonationImage}{ 
transform: scale(1.2);
}
@media screen and (max-width:1000px){
width:100%;
}
`;

export const HomeDonationContentContainer = styled.div`
position:absolute;
top:0;
right:500px;
width:calc(100% - 500px);
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
gap:20px;
overflow:auto;
&::-webkit-scrollbar{
width:8px;
}
&::-webkit-scrollbar-thumb{
background: #32338b
}
@media screen and (max-width:1000px){
display:none; 
}
`;

export const SmallScreenHomeDonationContentContainer = styled.div`
width:90%;
margin:50px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
gap:20px;
background-color:transparent;
@media screen and (min-width:1001px){
display:none;
}
`;

export const CarausalContainer = styled.div`
  margin: 50px auto;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  text-align: center;
`;

const zoomInZoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
`;

export const HomeCarausalContainer = styled.div`
position: relative;
height:450px;
margin-top:20px;
@media screen and (max-width:1000px){
height:350px;
}
&:hover span {
    animation: ${zoomInZoomOut} 0.8s alternate infinite;
}
`;

export const ImgContainer = styled.div`
width: 90%;
height: 100%;
margin: 0 auto;
cursor: pointer;
position: relative;  
overflow: hidden;
`;
  
export const CarausalImg = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: contain;


`;

export const TestimonialCarausalContainer = styled.div`
position:absolute;
top:0;
left:500px;
width:calc(100% - 500px);
height:100%;
@media screen and (max-width:1100px){
display:none;
}
`;
export const AnotherTestimonialCarausalContainer = styled.div`
@media screen and (max-width:1100px){
width:90%;
height:550px; 
}
@media screen and (max-width:1000px){
height:450px;
}
@media screen and (min-width:1101px){
display:none;
}
`;
  

export const TestimonialCarausalCardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 100%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: solid 1px darkgrey;
  border-radius: 18px;
  padding: 20px;
  gap: 20px;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  box-shadow:none;
  transition:box-shadow 0.50s ease-in-out;
  &:hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const TestimonialProfileIconNameContainer = styled.div`
position:absolute;
top:0;
left:0;
height:100px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
gap:8px;
@media screen and (max-width:1000px){
height:50px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:8px;
}
`;

export const TestimonialProfileIcon = styled(FaRegCircleUser)`
font-size:50px;
margin-top:8px;
color:${({color})=>`${color}`};
@media screen and (max-width:1000px){
display:none;
}
`;
export const TestimonialProfileUserName = styled.h3`
color: #555555;
font-style:italic;
@media screen and (max-width:1350px){
font-size:18px;
}
@media screen and (max-width:1300px){
font-size:15px;
}
`;
export const TestimonialMessage = styled.p`
color: #ffffff;
`;

export const TestimonialCommaContainer = styled.div`
display:flex;
color: #ffffff;
`;
export const TestimonialContentContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-style: italic;
  padding: 20px;
  overflow: auto;
  background-color: #32338b;
  @media screen and (max-width:1000px){
    top: 50px;
    height:250px;
  }
`;

export const TestimonialStarContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
left:50%; 
bottom:0px;
height:40px;
width:100%;
transform:translate(-50%);
color: #ffa500;
font-size:22px;
@media screen and (max-width:1000px){
height:50px;
}
`;

export const HomeVisionMissionHeadingCardContainer = styled.div`
display:flex;
flex-direction:column;
text-align:center;
width:90%;
margin:18px;
`;

export const HomeVisionAndMissionContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;
width:100%;
text-align:center;
margin:30px 0;
`;


export const VisionMissionBackCardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #32338b;
  z-index: 0; 
  transform-origin:left bottom;
  transform:rotate(0deg);
  transition-property:transform;
  transition-duration:0.50s;
  transition-timing-function:ease-in-out;
`;

export const VisionMissionCardContainer = styled.div`
  height: 100%;
  width: 100%;
  border: solid 1px lightgrey;
  position: relative;
  z-index: 1; 
  background-color: #ffffff;
  box-shadow:none;
  transition-property:border box-shadow;
  transition-duration:0.50s;
  transition-timing-function:ease-in-out;
  &:hover{
  border: solid 1px #32338b;
  box-shadow: rgba(46, 65, 240, 0.4) -5px 5px, rgba(46, 53, 240, 0.3) -10px 10px, rgba(72, 46, 240, 0.2) -15px 15px, rgba(49, 46, 240, 0.1) -20px 20px, rgba(46, 69, 240, 0.05) -25px 25px;
  }
`;

export const VisionMissionImg = styled.img`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: transform 1s ease-in-out;
  `;

export const VisionMissionWrapper = styled.div`
  cursor:pointer;
  position: relative;
  height: 500px;
  width: 300px;
  margin: 25px 30px;
  &:hover ${VisionMissionBackCardContainer}{
  transform: rotate(5deg);
  }
    &: hover ${VisionMissionImg}{
  transform: scale(1.2);
  }
`;

export const VisionMissionImageContainer = styled.div`
  position: absolute;
  overflow:hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  @media screen and (max-width:400px){
    height: 200px;
  }
`;

  export const VisionMissionDescriptionContainer = styled.div`
    position:absolute;
    top:250px;
    left:0;
    width: 100%;
    height: calc(100% - 250px);
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    gap:8px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #ffffff;
    @media screen and (max-width:400px){
        top:200px;
        height: calc(100% - 200px);
    }
    overflow:auto;
    &::-webkit-scrollbar{
    width:2px;
    }
    &::-webkit-scrollbar-thumb{
    background: #32338b;
    }

  `;

  export const VisionMissionHeading = styled.h1`
    color: #32338b;
    font-size: 20px;
    line-height:30px;
  `;

  export const VisionMissionDescription = styled.p`
    color: #555555;
    font-size: 14px;
    margin: 0;
    padding: 0;
  `;

  export const VissionMissionButton = styled.button`
    color:#32338b;
    border:solid 3px #32338b;
    background-color: transparent;
    cursor:pointer;
    font-weight: bold;
    height:40px;
    width: 100px;
    flex-shrink:0;
    border-radius:5px;
    transform:scale(1);
    transition-property:transform background-color color;
    transition-duration:0.50s;
    transition-timing-function:ease-in-out;
    &:hover{
    transform:scale(1.1);
    background-color: #32338b;
    color: #ffffff;
    }
  `;

  export const HomeOurTeamBgContainer = styled.div`
  width:90%;
  position:relative;
  height:500px;
  margin:50px 0;
  `;

  export const HomeOurTeamCollargeContainer = styled.div`
  position:absolute;
  top;0;
  right:0;
  height:100%;
  width:600px;
  overflow:auto;
  @media screen and (max-width:1100px){
    width:500px;
  }
  @media screen and (max-width:900px){
    width:400px;
  }
    @media screen and (max-width:800px){
    width:100%;
    }
  `;

  export const HomeOurTeamImageOne = styled.img`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  transition: transform 1s ease-in-out;
  `;


  export const HomeOurTeamImageOneContainer = styled.div`
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:400px;
  cursor:pointer;
  overflow:hidden;

  &:hover ${HomeOurTeamImageOne}{
  transform: scale(1.2);
  }
  @media screen and (max-width:800px){
  width:600px;
  }
  @media screen and (max-width:600px){
  width:400px;
  }
  @media screen and (max-width:400px){
    width:100%;
  }
  `;

  export const HomeOurTeamImageTwo = styled.img`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  transition: transform 1s ease-in-out;
  `;

  export const HomeOurTeamImageTwoContainer = styled.div`
  position:absolute;
  bottom:0;
  right:0;
  height:250px;
  width:300px;
  z-index:5;
  cursor:pointer;
  overflow: hidden;
  &: hover ${HomeOurTeamImageTwo}{
  transform: scale(1.2);
  }
  @media screen and (max-width:1100px){
    width:250px;
    height:200px;
  }
  @media screen and (max-width:500px){
  width:200px;
  height:150px;
  }
  @media screen and (max-width:250px){
  width:100%;
  height:150px;
  }
  `;

  export const HomeOurTeamContentContainer = styled.div`
  position:absolute;
  top:0;
  right:600px;
  height:100%;
  width: calc(100% - 600px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  align-items:center;
  padding:20px;
  gap:20px;
  @media screen and (max-width:1100px){
    width: calc(100% - 500px);
    right:500px;
  }
    @media screen and (max-width:900px){
    width: calc(100% - 400px);
    right:400px;
    }
    @media screen and (max-width:800px){
    display:none;
    }
  `;
export const SmallScreenHomeOurTeamContentContainer = styled.div`
width:90%;
margin:50px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
gap:20px;
background-color:transparent;
@media screen and (min-width:801px){
display:none;
}
  `;

export const JoinUsImage = styled.img`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
object-fit:cover;
transition: transform 1s ease-in-out;
@media screen and (max-width:700px){
object-fit:contain;
}
`;


export const HomeJoinUsImageContainer = styled.div`
position:absolute;
top:0;
left:0;
width:500px;
height:100%;
overflow:hidden;
cursor:pointer;
&:hover ${JoinUsImage}{
transform:scale(1.2);
}
@media screen and (max-width:1000px){
width:100%;
}

`;


export const HomeJoinUsContentContainer = styled.div`
position:absolute;
top:0;
left:500px;
width:calc(100% - 500px);
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
gap:20px;
overflow:auto;
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

export const SmallScreenHomeJoinUsContentContainer = styled.div`
width:90%;
margin:50px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
gap:20px;
background-color:transparent;
@media screen and (min-width:1001px){
display:none;
}
`;








// Heading
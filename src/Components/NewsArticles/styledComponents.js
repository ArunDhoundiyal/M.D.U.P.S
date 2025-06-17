import styled, {keyframes} from "styled-components";
const backgroundImage = keyframes`
0%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748671678/wmremove-transformed_15_zdrtto.webp');
}
20%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748671678/tourists-taking-photos-beautiful-scenery-skiing-around-deogyusan_u1tlvw.webp');
}
40%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748671680/beautiful-landscape-arang-kel-kashmir-with-green-fields-local-houses-with-hidden-clouds_b9bthy.webp');
}
60%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748671678/wmremove-transformed_15_zdrtto.webp');
}
80%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748671678/landscape-view-himalayan-mountain-ranges-clear-sky-background_s6uobt.webp');
}
100%{
background-image:url('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748671679/himalayas-covered-snow-against-blue-sky_moclaa.webp');
}
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
  animation-duration:30s;
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
export const Heading = styled.h1`
color: #ffffff;
font-weight:bold;
font-size:50px;
@media screen and (max-width:1000px){
font-size:40px;
}
@media screen and (max-width:600px){
font-size:30px;
}
@media screen and (max-width:400px){
font-size:20px;
}
`;

export const ArticleBgContainer = styled.div`
  margin-top:150px;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const ArticleContainer = styled.div`
  display: flex;
  width: 80%;
  height: 550px;
  position:relative;
  margin:50px 0;
  @media screen and (max-width: 500px) {
  height: fit-content;
  }
  `;

export const TeamPersonPhotoContainer = styled.div`
  cursor:pointer;
  height: 100%;
  width: 400px;
  position:absolute;
  top:0;
  left:0;  
  @media screen and (max-width:1000px){
  left:50%;
  transform:translate(-50%);
  }
  @media screen and (max-width:500px){
 position: static;
  width: 100%;
  height: auto;
  transform: none;
  }
`;


export const TeamPersonTwoPhotoContainer = styled.div`
cursor:pointer;
  height: 100%;
  width: 400px;
  position:absolute;
  top:0;
  right:0;
  @media screen and (max-width:1000px){
  right:50%;
  transform:translate(50%);
  }
  @media screen and (max-width:500px){
  position: static;
  width: 100%;
  height: auto;
  transform: none;
  }
`;

export const NewsArticlesImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
  @media screen and (max-width:500px){
  object-fit: contain;
  }
`;

export const TeamMessageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 400px;
  width: calc(100% - 400px);
  overflow: auto;
   padding:20px;
   text-align:left;
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

  export const SmallScreenOurTeamMsgContainer = styled.div`
    width: 75%;
    display:flex;
    flex-direction:column;
    text-align:left;
    @media screen and (min-width:1001px){
    display:none;
    }
    gap:2px;
  `;

export const TeamTwoMessageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 400px;
  width: calc(100% - 400px);
  overflow: auto;
  padding:20px;
  text-align:left;
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

export const MainHeading = styled.h1`
color: #353839;
font-size:25px; 
text-align:left;
@media screen and (max-width:1200px){
font-size:20px;
}
@media screen and (max-width:1000px){
font-size:18px;
}
`;

export const SubHeadingOne = styled.h2`
color: #555555;
font-size:22px; 
text-align:left;
@media screen and (max-width:1200px){
font-size:17px;
}
@media screen and (max-width:1000px){
font-size:15px;
}

`;

export const SubHeadingTwo = styled.h3`
color: #32338b;
font-size:20px; 
text-align:left;
@media screen and (max-width:1200px){
font-size:17px;
}
@media screen and (max-width:1000px){
font-size:15px;
}
`;

export const SubHeadingThree = styled.h4`
color: #32338b;
font-size:20px; 
text-align:left;
@media screen and (max-width:1200px){
font-size:17px;
}
@media screen and (max-width:1000px){
font-size:15px;
}
`;

export const Message = styled.p`
font-size:18px;
color: #555555;
text-align:left;
@media screen and (max-width:1200px){
font-size:15px;
}
`;


export const BoldText = styled.span`
font-weight:bold;
`;










import styled, {keyframes} from "styled-components";

const scaleImg = keyframes`
0%, 100%{
transform: scale(1);
}
50%{
transform: scale(1.2);
}
`;

export const AboutUsBgContainer = styled.div`
min-height:100vh;
background-size:cover;
display:flex;
flex-direction:column;
align-items:center;
`;

export const AboutUsBannerContainer = styled.div`
width:100%;
margin-top:100px;
position:relative;
height:50vh;
overflow:hidden;
`;

export const AboutUsTopBannerContainer = styled.div`
background-color: rgba(0, 0, 0, 0.3);
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
`;

export const AboutUsImgBanner = styled.img`
width:100%;
height:100%;
object-fit:cover;
animation-name: ${scaleImg};
animation-duration:10s;
animation-timing-function:ease-in-out;
animation-iteration-count:infinite;
`;

export const AboutUsDesHeadingContainer = styled.div`
display;flex;
flex-direction:column;
align-items:center;
text-align:left;
width:90%;
padding:20px;
`;

export const Heading = styled.h1`
color: #32338b;
font-weight:600;
line-height:40px;
margin-top:20px;
text-align:center;
@media screen and (max-width:1000px){
font-size:25px;
}   
`;

export const AboutUsDescription = styled.p`
font-size:18px;
color: #555555;
margin-top:10px;
text-align:left;
@media screen and (max-width:1000px){
font-size:15px;
}
`;

export const Word = styled.span`
font-weight:bold;
text-decoration:underline;
`;

export const AboutUsMissionContainer = styled.div`
width:90%;
position:relative;
height:400px;
margin:20px 0;
`;

export const AboutUsMissionImage = styled.img`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
object-fit:cover;
transition: transform 0.75s ease-in-out;
@media screen and (max-width:900px){
object-fit:contain;
}
`;


export const AboutUsMissionImageContainer = styled.div`
position:absolute;
top:0;
left:0;
width:350px;
height:100%;
overflow:hidden;
cursor:pointer;
&:hover ${AboutUsMissionImage}{
transform:scale(1.1);
}
@media screen and (max-width:900px){
width:100%;
}

`;


export const AboutUsMissionContentContainer = styled.div`
position:absolute;
left:350px;
height:100%;
width:calc(100% - 350px);
padding:20px;
overflow:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
overflow:auto;
&::-webkit-scrollbar{
width:8px;
}
&::-webkit-scrollbar-thumb{
background: #32338b;
}
@media screen and (max-width:900px){
display:none;
}
`;

export const SmallScreenAboutUsMissionContentContainer = styled.div`
width:90%;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
@media screen and (min-width:901px){
display:none;
}
`;

export const AboutUsVisionContainer = styled.div`
width:90%;
position:relative;
height:400px;
margin:20px 0;
`;

export const AboutUsVisionImage = styled.img`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
object-fit:cover;
transition: transform 0.75s ease-in-out;
@media screen and (max-width:900px){
object-fit:contain;
}

`;

export const AboutUsVisionImageContainer = styled.div`
position:absolute;
top:0;
right:0;
width:350px;
height:100%;
cursor:pointer;
overflow:hidden;
&:hover ${AboutUsVisionImage}{
transform:scale(1.1);
}
@media screen and (max-width:900px){
width:100%;
}
`;

export const AboutUsVisionContentContainer = styled.div`
position:absolute;
right:350px;
height:100%;
width:calc(100% - 350px);
padding:20px;
overflow:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
overflow:auto;
&::-webkit-scrollbar{
width:8px;
}
&::-webkit-scrollbar-thumb{
background: #32338b;
}
@media screen and (max-width:900px){
display:none;
}
`;
export const SmallScreenAboutUsVisionContentContainer = styled.div`
width:90%;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
@media screen and (min-width:901px){
display:none;
} 
`;





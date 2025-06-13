import styled from 'styled-components';
import { BiBookReader } from "react-icons/bi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";

export const EducationIcon = styled(BiBookReader)`
`;
export const HealthIcon = styled(MdOutlineHealthAndSafety)`
`;
export const SocialIcon = styled(FaPeopleRoof)`
`;
export const SelfRelianceIcon = styled(GiSelfLove)`
`;


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

export const DonationDispalyIconContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
gap:30px;
`;

export const DonationIconHeading = styled.h2`
color: #555555;
font-size:20px;
font-weight:400;
transition-property:color;
transition-duration:0.50s;
transition-timing-function: ease-in-out;
`;

export const DonationIcon = styled.li`
flex-basis:300px;
flex-grow:1;
flex-shrink:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
font-size:80px;
padding:12px;
color:${(({color})=>color)};
transition-property:color background-color;
transition-duration:0.50s;
transition-timing-function: ease-in-out;
&:hover{
background-color:${(({color})=>color)};
color: #ffffff;
}
&:hover ${DonationIconHeading}{
color: #ffffff;
}
cursor:pointer;
`;







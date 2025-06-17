import styled from 'styled-components';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { PiArrowBendRightDownBold } from "react-icons/pi";
export const FacebookIcon = styled(FaFacebookF)``;
export const LinkedinIcon = styled(FaLinkedinIn)``;
export const YoutubeIcon = styled(IoLogoYoutube)``;

export const FollowUsIconButton = styled.button`
background-color: rgba(0, 0, 0, 0.3);
border:none;
color: #ffffff;
border:solid 1px #ffffff;
font-size:20px;
height:40px;
width:40px;
border-radius:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
transition-property:color, background-color;
transition-duration:0.50s;
transition-timing-function:ease-in-out;
&:hover{
color: #32338b;
background-color: #ffffff;
}
`;

export const MailIcon = styled(IoIosMail)`
font-size:25px;
margin-right:8px;
`;

export const LocationIcon = styled(FaLocationDot)`
font-size:25px;
margin-right:8px;
`;

export const PhoneNumberIcon = styled(FaPhone)`
font-size:20px;
margin-right:8px;
transform:rotate(90deg);
`;

export const FooterBgContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
background-color: #32338b;
margin-top:80px;
position:relative;
align-items:center;
`;


export const FooterContainer = styled.footer`
background-color: transparent;
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
width:80%;
gap:40px;
@media screen and (max-width:555px){
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
margin-top:50px;
} 
// border:solid 4px red;
margin-top:70px;
`;

export const MDUPSlogo = styled.img`
position:absolute;
height:200px;
top:-100px;
right:60px;
cursor:pointer;
transition: transform 0.75s ease-in-out;
&:hover{
transform:scale(1.1);
}
@media screen and (max-width:600px){
height:150px;
top:-80px;
}
@media screen and (max-width:400px){
height:100px;
top:-50px;

}
`;

export const FooterItemParentContainer = styled.div`
text-align:left;
position:relative;
height:fit-content;
color: #ffffff;
@media screen and (max-width:555px){
width:100%;
margin:0px;
cursor:pointer; 
}

`;

export const DropDownArrow = styled(IoIosArrowDown)`
transform:rotate(${({isactive})=> isactive ? '180deg' : '0deg'});
transition: transform 0.5s ease-in-out;
`;


export const FooterDropDownButton = styled.button`
@media screen and (min-width:556px){
display:none;
}
background-color: transparent;
border:none;
color: #ffffff;
font-size:25px;
position:absolute;
right:0px;
top:10px;
cursor:pointer;
`;

export const FooterItemContainer = styled.ul`
display:flex;
flex-direction:column;
text-align:left;
color: #ffffff;
list-style-type:none;
gap:12px;
@media screen and (max-width:555px){
width:100%;
visibility:${({isactive})=> isactive ? 'visible' : 'hidden'};
display:${({isactive})=> isactive ? 'flex' : 'none'};
}
`;

export const FooterContactUsContainer = styled.div`
display:flex;
flex-direction:column;
gap:18px;
color: #ffffff;
@media screen and (max-width:555px){
visibility:${({isactive})=> isactive ? 'visible' : 'hidden'};
display:${({isactive})=> isactive ? 'flex' : 'none'};
}
`;

export const FooterNameHeading = styled.h4`
font-weight:600;
`;

export const FooterAddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffffff; 
`;



export const FooterItem = styled.li`
&:hover{
color: #ff8f00;
text-decoration:underline;
cursor:pointer;
}
@media screen and (max-width:550px){
text-align:left;
width:100%;
}
`;

export const FooterHeading = styled.h3`
margin:12px 0;
`;

export const Detail = styled.p``;

export const FollowUsContainer = styled.div`
text-align:left;
color: #ffffff;
position:relative;
@media screen and (max-width:550px){
text-align:left;
width:100%;
}
`;

export const FollowUsIndicationArrow = styled(PiArrowBendRightDownBold)`
position:absolute;
top:20px;
left:90px;
font-size:22px;
`;

export const FollowUsLogoContainer = styled.div`
display:flex;
flex-direction:row;
justify-cotent:space-evenly;
gap:10px;
font-size:25px;
margin:10px 0;
`;

export const AnchorTag = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const FooterFollowUsHeading = styled.h4`
font-weight:bold;
`;
 
export const HrLine = styled.hr`
color: #ffffff;
width:80%;
margin:30px 0;
`;

export const CopyRightMsg = styled.p`
color: #ffffff;
`;


export const FooterCopyRightContainer = styled.footer`
width:100%;
background-color: transparent;
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
width:80%;
margin-bottom:50px;
gap:20px;
`;

export const PrivacyContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
width:100%;
`;

export const PrivacyPolicyMsg = styled.p`
color: #ffffff;
`;

export const TermsConditionMsg = styled.p`
color: #ffffff;
`;
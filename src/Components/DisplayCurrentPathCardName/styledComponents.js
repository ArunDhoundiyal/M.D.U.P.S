import styled from "styled-components";

export const DisplayCurrentPathContainer = styled.div`
position:absolute;
bottom:0;
left:50px;
height:50px;
width:180px;
background-color: #ffffff;
border-top-left-radius:8px;
border-top-right-radius:8px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:600px){
height:40px;
width:100px;
}
`;

export const PathPageName = styled.p`
position:relative;
font-weight:bold;
color: #32338b;
font-style:italic;
@media screen and (max-width:600px){
font-size:8px;
}
`;


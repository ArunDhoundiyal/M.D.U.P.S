import styled from "styled-components";

export const GalleryBgContainer = styled.div`
min-height:100vh;
background-size:cover;
position:relative;
`;

export const DisplayGalleryContainer = styled.div`
height:100%;
margin-left:20px;
margin-top:50px;
margin-right:20px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-auto-rows: 10px;
gap: 20px;
`;

export const GalleryImage = styled.img`
object-fit:cover;
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
border-radius: 18px;
transition: transform 0.3s ease-in-out;
`;

export const GalleryImageContainer = styled.div`
overflow:hidden;
cursor:pointer;
padding: 20px;
box-sizing: border-box;
border-radius: 18px;
transform:translateY(0);
transition-property:transform;
transition-duration:0.3s;
transition-timing-function:ease-in-out;
display: flex;
align-items: center;
justify-content: center;
grid-row: ${({gridrow})=>`span ${gridrow}`};
&:hover{
transform:translateY(-10px);
}
&:hover ${GalleryImage}{
transform:scale(1.1);
}
`;

export const GalleryHeading = styled.h1`
color: #32338b;
margin-top:140px;
margin-left:20px;
text-align:center;
@media screen and (max-width:1000px){
font-size:25px;
}
@media screen and (max-width:600px){
font-size:20px;
}
`;




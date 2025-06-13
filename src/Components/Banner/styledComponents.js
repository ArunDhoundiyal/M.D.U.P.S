import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: calc(-90px * 22); 
  }
`;


export const BannerWrapper = styled.div`
  margin-top: 100px;
  height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const BannerContainer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerDisplayTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const BannerMdupsLogoContainer = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
  @media screen and (max-width:1000px){
    height: 200px;
    width: 200px;
  }
  @media screen and (max-width:500px){
  height:150px;
  width:150px;
  }
`;

export const BannerMdupsLogoImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerMdupsHeadingContainer = styled.ul`
  height: 90px;
  line-height: 90px;
  overflow: hidden;
  list-style-type: none;
  width:100%;
  position: relative;
  & > li {
    position: relative;
    top: 0;
    animation: ${slide} 120s steps(22) infinite;
  }
`;

export const BannerTextHeading = styled.li`
  height: 90px;
  line-height: 90px;
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  @media screen and (max-width:900px){
  font-size:25px;
  }
  @media screen and (max-width:700px){
  font-size:20px;
  }
  @media screen and (max-width:600px){
  font-size:18px;
  }
  @media screen and (max-width:500px){
    font-size:12px;
  }

`;

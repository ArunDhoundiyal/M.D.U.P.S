import {useContext} from 'react';
import ScrollToTopButton from '../ScrollToTopButton';
import DisplayCurrentPathCardName from '../DisplayCurrentPathCardName';
import WhatsApp from '../WhatsApp';
import Footer from '../Footer';
import {CreateLanguageContext} from '../Context';

import {
    AboutUsBgContainer, 
    AboutUsBannerContainer, 
    AboutUsImgBanner, 
    Heading, 
    AboutUsDesHeadingContainer, 
    AboutUsDescription, 
    AboutUsMissionContainer, 
    AboutUsMissionImageContainer, 
    AboutUsMissionImage, 
    AboutUsMissionContentContainer, 
    AboutUsVisionContainer, 
    AboutUsVisionImageContainer, 
    AboutUsVisionImage,
    AboutUsVisionContentContainer, 
    AboutUsTopBannerContainer, 
    SmallScreenAboutUsMissionContentContainer, 
    SmallScreenAboutUsVisionContentContainer
} from './styledComponents';
import Header from '../Header';
import {aboutUsData, mdupsName} from '../Data';
const {ourMissionData} = aboutUsData[0];
const {ourVisionData} = aboutUsData[1];
const {aboutUsOne, aboutUsTwo, aboutUsThree, aboutUsFour} = aboutUsData[2];
const AboutUs = () => {
    const {languageId} = useContext(CreateLanguageContext);
    const findOurMissionData = ourMissionData.find((item)=>(item.languageId === languageId));
    const findOurVisionData = ourVisionData.find((item)=>(item.languageId === languageId));
    const findAboutUsOne = aboutUsOne.find((item)=> (item.languageId === languageId));
    const findAboutUsTwo = aboutUsTwo.find((item)=>item.languageId === languageId);
    const findAboutUsThree = aboutUsThree.find((item)=>(item.languageId === languageId)); 
    const findAboutUsFour = aboutUsFour.find((item)=>(item.languageId === languageId));
    const AboutUsMainHeading = mdupsName.find((item)=>(item.languageId === languageId));
    return(
        <AboutUsBgContainer>
            <Header />
            <AboutUsBannerContainer>
                <AboutUsImgBanner src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1746450169/WhatsApp_Image_2025-05-03_at_17.41.57_73fd6d0ee_jdiyex.jpg'/>
                <AboutUsTopBannerContainer>
                    <DisplayCurrentPathCardName />
                </AboutUsTopBannerContainer>
            </AboutUsBannerContainer>
            <AboutUsDesHeadingContainer>
            <Heading>{AboutUsMainHeading.heading}</Heading>
            <AboutUsDescription>
            {findAboutUsOne.aboutusDes}
            </AboutUsDescription>
            <AboutUsDescription>
            {findAboutUsTwo.aboutusDes}
            </AboutUsDescription>
            <AboutUsDescription>
            {findAboutUsThree.aboutusDes}
            </AboutUsDescription>
            <AboutUsDescription>
                {findAboutUsFour.aboutusDes}
            </AboutUsDescription>
            </AboutUsDesHeadingContainer>
            <AboutUsMissionContainer>
                <AboutUsMissionImageContainer>
                    <AboutUsMissionImage src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1746510200/20943958_limewm.jpg' alt='mission-image' />
                </AboutUsMissionImageContainer>
                <AboutUsMissionContentContainer>
                    <Heading>{findOurMissionData.heading}</Heading>
                <AboutUsDescription>
                    {findOurMissionData.ourMission}
                </AboutUsDescription>
            </AboutUsMissionContentContainer>
            </AboutUsMissionContainer>
            <SmallScreenAboutUsMissionContentContainer>
                   <Heading>{findOurMissionData.heading}</Heading>
                <AboutUsDescription>
                    {findOurMissionData.ourMission}
                </AboutUsDescription>
            </SmallScreenAboutUsMissionContentContainer>
            <AboutUsVisionContainer>
               <AboutUsVisionImageContainer>
                <AboutUsVisionImage src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1746515948/6137734_bjmlnf.jpg' alt='vision-image' />
                </AboutUsVisionImageContainer> 
                <AboutUsVisionContentContainer>
                <Heading>{findOurVisionData.heading}</Heading>
                <AboutUsDescription>
                    {findOurVisionData.ourVision}
                </AboutUsDescription>
                </AboutUsVisionContentContainer>
            </AboutUsVisionContainer>
            <SmallScreenAboutUsVisionContentContainer>
                                <Heading>{findOurVisionData.heading}</Heading>
                <AboutUsDescription>
                    {findOurVisionData.ourVision}
                </AboutUsDescription>
            </SmallScreenAboutUsVisionContentContainer>
            <WhatsApp />
            <ScrollToTopButton />
            <Footer/>
        </AboutUsBgContainer>

    )
}


export default AboutUs
import {useState, useContext} from 'react';
import {CreateLanguageContext} from '../Context';
import {useNavigate} from 'react-router-dom';
import ViewInFullSize from '../ViewInFullSize';
import ScrollToTopButton from '../ScrollToTopButton';

import {
  homeJoinUsData, 
  homeDonationData, 
  homeTownData, 
  HomeVisionMissionData, 
  LatestNewsData, 
  MissionData, 
  TestimonialData, 
  CarausalImage, 
  homeTestimonialData, 
  homeMsgfromUs, 
  homeNewsArticleHeadingData, 
  VisionMissionHeadingData, 
  HomeAboutUsData, 
  homeMDUPSLogoIntroductionData
} from '../Data';
import Footer from '../Footer';
import Header from '../Header';
import Banner from '../Banner';
import WhatsApp from '../WhatsApp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    HomeContainer, 
    HomeCardContainer, 
    HomeAboutUsHeading, 
    Bold, 
    HomeHeadingDesContainer, 
    HomeCardDescription, 
    BoldUnderline, 
    HomeAboutUsCollargeImg, 
    HomeAboutUsCollargeContainer, 
    Button, 
    RightArrowIcon, 
    Heading, 
    HomeDonationContainer, 
    HomeDonationImageContainer,
    HomeCarausalCardContainer, 
    CarausalContainer, 
    HomeCarausalContainer, 
    ImgContainer, 
    CarausalImg, 
    OurMissionCarausalContainer, 
    HomeCarausalDesCardContainer, 
    OurMissionCarausalCardContainer, 
    CarausalCardHeading, 
    CarausalCardDescription, 
    IconWrapper, 
    TestimonialCarausalCardContainer,
    TestimonialCarausalContainer, 
    TestimonialStarContainer, 
    Star, 
    OutlineStar, 
    HomeVisionAndMissionContainer, 
    VisionMissionCardContainer, 
    VisionMissionImageContainer, 
    VisionMissionImg, 
    VisionMissionDescriptionContainer, 
    VisionMissionHeading, 
    VisionMissionDescription, 
    VissionMissionButton, 
    HomeVisionMissionHeadingCardContainer, 
    VisionMissionBackCardContainer, 
    HomeOurTeamBgContainer, 
    HomeOurTeamCollargeContainer, 
    HomeOurTeamImageOneContainer, 
    HomeOurTeamImageOne, 
    HomeOurTeamImageTwoContainer, 
    HomeOurTeamImageTwo, 
    HomeOurTeamContentContainer, 
    VisionMissionWrapper, 
    DonationImage, 
    HomeDonationContentContainer, 
    TopComma,
    TestimonialProfileIcon, 
    TestimonialProfileIconNameContainer, 
    TestimonialProfileUserName, 
    TestimonialContentContainer, 
    TestimonialCommaContainer, 
    TestimonialMessage, 
    HeartIcon, 
    HomeMDUPSLogoMeaningContainer, 
    HomeMDUPSLogoContainer, 
    HomeMDUPSLogo, 
    HomeMDUPSLogoContentContainer, 
    HomeMDUPSLogoDescription, 
    MDUPSsubHeading, 
    MDUPSHeading, 
    MDUPSsubHeadingTwo, 
    HomeMDUPSLogoSubDescription, 
    BoldArrowLine, 
    ArrowIcon, 
    HomeJoinUsContentContainer,   
    JoinUsImage, 
    HomeJoinUsImageContainer, 
    HomeHeadingAboutUsDesContainer, 
    AnotherOurMissionCarausalContainer, 
    SmallHomeMDUPSLogoContentContainer, 
    SmallScreenHomeOurTeamContentContainer, 
    AnotherTestimonialCarausalContainer, 
    SmallScreenHomeJoinUsContentContainer, 
    SmallScreenHomeDonationContentContainer
  } from './styledComponents';

const Home = () => {
  const [imagePass, setPassImage] = useState(null);
  const {languageId} = useContext(CreateLanguageContext);
  const filterLatestNewsData = LatestNewsData.find(eachItem => eachItem.languageId === languageId);
  const filterMissionData = MissionData.find(eachItem => eachItem.languageId === languageId);
  const filterHomeTownData = homeTownData.find(eachItem => eachItem.languageId === languageId);
  const filterHomeDonationData = homeDonationData.find(eachItem => eachItem.languageId === languageId);
  const filterHomeJoinUsData = homeJoinUsData.find(eachItem => eachItem.languageId === languageId);
  const filterHomeTestimonialData = homeTestimonialData.find(eachItem => eachItem.languageId === languageId);
  const {donationHeading, donationMsg, buttonName} = filterHomeDonationData;
  const {heading, msg} = filterHomeTownData;
  const {data} = filterLatestNewsData;
  const filterNewsAndArticleHeading = homeNewsArticleHeadingData.find((eachItem)=> eachItem.languageId === languageId);
  const filterTestimonialData = TestimonialData.find((eachItem)=> eachItem.languageId===languageId);
  const filterHomeMsgFromUs = homeMsgfromUs.find((eachItem)=> eachItem.languageId === languageId);
  const filterHomeVisionMissionData = HomeVisionMissionData.find((eachItem)=> eachItem.languageId === languageId);
  const filterVisionMissionHeading = VisionMissionHeadingData.find((eachItem)=> eachItem.languageId === languageId);
  const filterHomeAboutUsData = HomeAboutUsData.find((eachItem)=>eachItem.languageId === languageId);
  const filterHomeMDUPSLogoIntroductionData = homeMDUPSLogoIntroductionData.find((eachItem)=>eachItem.languageId === languageId);
  const {
     mdupsTopLogoIntroduction,
     mdupsTopLogoMsg, 
     mdupsLogoMountainHandsHeading, 
     mdupsLogoMountainSubHeading, 
     mdupsLogoMountainSubHeadingPointOne, 
     mdupsLogoMountainSubHeadingPointTwo, 
     mdupsLogoMountainSubHeadingPointThree, 
     mdupsLogoMountainSubHeadingPointFour, 
     mdupsLogoMountainSubHeadingTwo, 
     mdupsLogoMountainSubHeadingTwoPointOne, 
     mdupsLogoMountainSubHeadingTwoPointTwo, 
     mdupsOuterCircleHeading, 
     mdupsOuterCircleSubHeading, 
     mdupsOuterCircleSubHeadingPointOne, 
     mdupsOuterCircleSubHeadingTwo, 
     mdupsOuterCircleSubHeadingTwoPointOne, 
     mdupsOuterCircleSubHeadingThree, 
     mdupsOuterCircleSubHeadingThreePointOne, 
     mdupsOuterCircleSubHeadingThreePointTwo, 
     mdupsBlueColorHeding, 
     mdupsBlueColorSubHeding, 
     mdupsBlueColorSubHedingPointOne, 
     mdupsBlueColorSubHedingTwo, 
     mdupsBlueColorSubHedingTwoPointOne, 
     mdupsBlueColorSubHedingThree, 
     mdupsBlueColorSubHedingThreePointOne, 
     mdupsBlueColorSubHedingFour, 
     mdupsBlueColorSubHedingFourPointOne, 
     mdupsFinalConclusionHeading, 
     mdupsFinalConclusionMsg, 
     mdupsFinalConclusionHeadingSubHeading, 
     mdupsFinalConclusionHeadingSubHeadingPointOne, 
     mdupsFinalConclusionHeadingSubHeadingTwo, 
     mdupsFinalConclusionHeadingSubHeadingTwoPointOne, 
     mdupsFinalConclusionHeadingSubHeadingThree, 
     mdupsFinalConclusionHeadingSubHeadingThreePointOne, 
     mdupsFinalConclusionHeadingSubHeadingFour, 
     mdupsFinalConclusionHeadingSubHeadingFourPointOne
      } 
  = 
  filterHomeMDUPSLogoIntroductionData.data;
  const navigate = useNavigate();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1650,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }, 
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }, 
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }, 
                    {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:false
            }
          }, 
                              {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
      };

      const onNavigateNewsAndArticle = () => {
        navigate('/news-&-articles');
      }
      const navigateAboutUsPage = () => {
        navigate('/about-us')
      }

      const navigateToOurTeamPage = () => {
        navigate('/our-team')
      }
      const onClickHomeAboutUsImage = (img) => {
        setPassImage(img)
      }

      const navigateToDonateNow = () => {
        navigate('/donation');
      }

      const navigateToJoinOurTeam = () => {
        navigate("/join-our-team");
      }
    return(
        <HomeContainer>
            <Header/> 
            <ViewInFullSize imagePass={imagePass} setPassImage={setPassImage} />
            <Banner/>
            {/* MDUPS logo ka parichye */}
            <HomeMDUPSLogoMeaningContainer data-aos="zoom-in">
              <HomeMDUPSLogoContainer onClick={()=>{(onClickHomeAboutUsImage('https://res.cloudinary.com/dflmaiwxo/image/upload/v1748690253/MDUPS_LOGO_HD_tgrqxx.webp'))}}>
                <HomeMDUPSLogo src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1748690253/MDUPS_LOGO_HD_tgrqxx.webp' alt='mdups-logo-detailed-introduction-with-their-meaning' />
              </HomeMDUPSLogoContainer>
              <HomeMDUPSLogoContentContainer>
                <MDUPSHeading>{mdupsTopLogoIntroduction}</MDUPSHeading>
                <HomeMDUPSLogoDescription>
                  {mdupsTopLogoMsg}
                </HomeMDUPSLogoDescription>
                <MDUPSsubHeading>{mdupsLogoMountainHandsHeading}</MDUPSsubHeading>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsLogoMountainSubHeading}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointOne}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointTwo}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointThree}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointFour}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsLogoMountainSubHeadingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingTwoPointTwo}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeading>{mdupsOuterCircleHeading}</MDUPSsubHeading>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsOuterCircleSubHeading}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsOuterCircleSubHeadingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsOuterCircleSubHeadingThree}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingThreePointOne}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingThreePointTwo}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeading>{mdupsBlueColorHeding}</MDUPSsubHeading>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHeding}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHedingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHedingThree}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingThreePointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHedingFour}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingFourPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeading>{mdupsFinalConclusionHeading}</MDUPSsubHeading>
                <HomeMDUPSLogoSubDescription>
                  {mdupsFinalConclusionMsg}
                </HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeading}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeadingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeadingThree}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingThreePointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeadingFour}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingFourPointOne}</HomeMDUPSLogoSubDescription>
              </HomeMDUPSLogoContentContainer>
            </HomeMDUPSLogoMeaningContainer>
            <SmallHomeMDUPSLogoContentContainer data-aos="zoom-in">
                <MDUPSHeading>{mdupsTopLogoIntroduction}</MDUPSHeading>
                <HomeMDUPSLogoDescription>
                  {mdupsTopLogoMsg}
                </HomeMDUPSLogoDescription>
                <MDUPSsubHeading>{mdupsLogoMountainHandsHeading}</MDUPSsubHeading>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsLogoMountainSubHeading}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointOne}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointTwo}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointThree}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingPointFour}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsLogoMountainSubHeadingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsLogoMountainSubHeadingTwoPointTwo}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeading>{mdupsOuterCircleHeading}</MDUPSsubHeading>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsOuterCircleSubHeading}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsOuterCircleSubHeadingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsOuterCircleSubHeadingThree}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingThreePointOne}</HomeMDUPSLogoSubDescription>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsOuterCircleSubHeadingThreePointTwo}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeading>{mdupsBlueColorHeding}</MDUPSsubHeading>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHeding}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHedingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHedingThree}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingThreePointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsBlueColorSubHedingFour}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsBlueColorSubHedingFourPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeading>{mdupsFinalConclusionHeading}</MDUPSsubHeading>
                <HomeMDUPSLogoSubDescription>
                  {mdupsFinalConclusionMsg}
                </HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeading}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeadingTwo}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingTwoPointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeadingThree}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingThreePointOne}</HomeMDUPSLogoSubDescription>
                <MDUPSsubHeadingTwo><ArrowIcon /> {mdupsFinalConclusionHeadingSubHeadingFour}</MDUPSsubHeadingTwo>
                <HomeMDUPSLogoSubDescription><BoldArrowLine>-</BoldArrowLine> {mdupsFinalConclusionHeadingSubHeadingFourPointOne}</HomeMDUPSLogoSubDescription>
            </SmallHomeMDUPSLogoContentContainer>

            {/* About us MDUPS */}
            <HomeCardContainer data-aos="zoom-in">
                <HomeAboutUsCollargeContainer>
                  {
                    CarausalImage.map(({id, img})=>(
                      <HomeAboutUsCollargeImg src={img} alt={`images-${id}`} onClick={()=>{(onClickHomeAboutUsImage(img))}} />
                    ))
                  }
                </HomeAboutUsCollargeContainer>
                <HomeHeadingDesContainer>
                  {
                    filterHomeAboutUsData.languageId !== 'ENGLISH' ? 
                    (
                    <HomeAboutUsHeading>
                      <Bold>{filterHomeAboutUsData.mainHeading}</Bold> <br/>
                      <BoldUnderline>{filterHomeAboutUsData.mdups}</BoldUnderline> {filterHomeAboutUsData.subHeading}
                    </HomeAboutUsHeading>
                    )
                    :
                    (
                    <HomeAboutUsHeading>
                      <Bold>{filterHomeAboutUsData.mainHeading}</Bold> <br/> 
                      {filterHomeAboutUsData.subHeading} <BoldUnderline>{filterHomeAboutUsData.mdups}</BoldUnderline>
                    </HomeAboutUsHeading>
                    )
                  }

                <HomeCardDescription>
                  {filterHomeAboutUsData.msg}
                </HomeCardDescription>
                <Button onClick={navigateAboutUsPage}>{filterHomeAboutUsData.buttonText} <RightArrowIcon/></Button>
                </HomeHeadingDesContainer>
            </HomeCardContainer>
            <HomeHeadingAboutUsDesContainer data-aos="zoom-in">
                                {
                    filterHomeAboutUsData.languageId !== 'ENGLISH' ? 
                    (
                    <HomeAboutUsHeading>
                      <Bold>{filterHomeAboutUsData.mainHeading}</Bold> <br/>
                      <BoldUnderline>{filterHomeAboutUsData.mdups}</BoldUnderline> {filterHomeAboutUsData.subHeading}
                    </HomeAboutUsHeading>
                    )
                    :
                    (
                    <HomeAboutUsHeading>
                      <Bold>{filterHomeAboutUsData.mainHeading}</Bold> <br/> 
                      {filterHomeAboutUsData.subHeading} <BoldUnderline>{filterHomeAboutUsData.mdups}</BoldUnderline>
                    </HomeAboutUsHeading>
                    )
                  }

                <HomeCardDescription>
                  {filterHomeAboutUsData.msg}
                </HomeCardDescription>
                <Button onClick={navigateAboutUsPage}>{filterHomeAboutUsData.buttonText} <RightArrowIcon/></Button>

            </HomeHeadingAboutUsDesContainer>

           {/* Mission */}
           <HomeCarausalCardContainer data-aos="zoom-in">
            <HomeCarausalDesCardContainer>
            <Heading>
            {heading}
            </Heading>
            <HomeCardDescription>
              {msg}
            </HomeCardDescription>
            </HomeCarausalDesCardContainer>
            <OurMissionCarausalContainer>
            <Slider {...settings}>
              {
                filterMissionData.data.map(({ id,heading,description,icon:Icon,color})=>(
                  <HomeCarausalContainer key={id}>
                    <OurMissionCarausalCardContainer color={color}>
                      <CarausalCardHeading>{heading}</CarausalCardHeading>
                      <CarausalCardDescription>{description}</CarausalCardDescription>
                      <IconWrapper color={color}>
                        <Icon />
                      </IconWrapper>
                    </OurMissionCarausalCardContainer>
                  </HomeCarausalContainer>
                ))
              }
            </Slider> 
            </OurMissionCarausalContainer>
           </HomeCarausalCardContainer>
           <AnotherOurMissionCarausalContainer data-aos="zoom-in">
            <Slider {...settings}>
              {
                filterMissionData.data.map(({ id,heading,description,icon:Icon,color})=>(
                  <HomeCarausalContainer key={id}>
                    <OurMissionCarausalCardContainer color={color}>
                      <CarausalCardHeading>{heading}</CarausalCardHeading>
                      <CarausalCardDescription>{description}</CarausalCardDescription>
                      <IconWrapper color={color}>
                        <Icon />
                      </IconWrapper>
                    </OurMissionCarausalCardContainer>
                  </HomeCarausalContainer>
                ))
              }
            </Slider> 
           </AnotherOurMissionCarausalContainer>

            {/* Vision and Mission  */}
            <HomeVisionMissionHeadingCardContainer data-aos="zoom-in">
              <Heading>{filterVisionMissionHeading.heading}</Heading>
              <HomeVisionAndMissionContainer>
  {
    filterHomeVisionMissionData.data.map(({ id, img, heading, content, buttonText }) => (
      <VisionMissionWrapper key={id}>
        <VisionMissionBackCardContainer/>
        <VisionMissionCardContainer>
          <VisionMissionImageContainer>
            <VisionMissionImg src={img} />
          </VisionMissionImageContainer>
          <VisionMissionDescriptionContainer>
            <VisionMissionHeading>{heading}</VisionMissionHeading>
            <VisionMissionDescription>{content}</VisionMissionDescription>
            <VissionMissionButton onClick={navigateAboutUsPage}>{buttonText}</VissionMissionButton>
          </VisionMissionDescriptionContainer>
        </VisionMissionCardContainer>
      </VisionMissionWrapper>
    ))
  }
</HomeVisionAndMissionContainer>
            </HomeVisionMissionHeadingCardContainer> 
           {/* Latest News and article */}
           <CarausalContainer data-aos="zoom-in">
            <Heading>{filterNewsAndArticleHeading.heading}</Heading>
            <Slider {...settings}>
                {data.map(item => (
                    <HomeCarausalContainer key={item.id}>
                        <ImgContainer onClick={onNavigateNewsAndArticle}>
                            <CarausalImg src={item.img} alt={`Slide ${item.id}`} className="carousel-image" />
                        </ImgContainer>
                    </HomeCarausalContainer>
                  ))}
            </Slider>
           </CarausalContainer> 
            {/* Our Team  */}
             <HomeOurTeamBgContainer data-aos="zoom-in">
              <HomeOurTeamCollargeContainer>
                <HomeOurTeamImageOneContainer onClick={()=>{(onClickHomeAboutUsImage('https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439727/WhatsApp_Image_2025-04-07_at_15.26.13_da79a4d3_yy9w0j.jpg'))}}>
                  <HomeOurTeamImageOne alt='our-team-img-1' src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439727/WhatsApp_Image_2025-04-07_at_15.26.13_da79a4d3_yy9w0j.jpg' />
                </HomeOurTeamImageOneContainer>
                <HomeOurTeamImageTwoContainer onClick={()=>{(onClickHomeAboutUsImage('https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439728/WhatsApp_Image_2025-05-03_at_17.24.25_9e821b99_ig3stu.jpg'))}}>
                  <HomeOurTeamImageTwo alt='our-team-img-2' src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439728/WhatsApp_Image_2025-05-03_at_17.24.25_9e821b99_ig3stu.jpg' />
                </HomeOurTeamImageTwoContainer>
              </HomeOurTeamCollargeContainer>
              <HomeOurTeamContentContainer>
              <Heading>{filterHomeMsgFromUs.heading}</Heading>
              <HomeCardDescription>
                {filterHomeMsgFromUs.msg}
              </HomeCardDescription>
              <Button onClick={navigateToOurTeamPage}>{filterHomeMsgFromUs.button} <RightArrowIcon/></Button>
              </HomeOurTeamContentContainer>
            </HomeOurTeamBgContainer> 
            <SmallScreenHomeOurTeamContentContainer data-aos="zoom-in">
                            <Heading>{filterHomeMsgFromUs.heading}</Heading>
              <HomeCardDescription>
                {filterHomeMsgFromUs.msg}
              </HomeCardDescription>
              <Button onClick={navigateToOurTeamPage}>{filterHomeMsgFromUs.button} <RightArrowIcon/></Button>


            </SmallScreenHomeOurTeamContentContainer>

              {/* Feedback */}
               <HomeCarausalCardContainer data-aos="zoom-in">
            <HomeCarausalDesCardContainer>
            <Heading>
            {filterHomeTestimonialData.heading}
            </Heading>
            <HomeCardDescription>
              {filterHomeTestimonialData.msg}
            </HomeCardDescription>
            </HomeCarausalDesCardContainer>
            <TestimonialCarausalContainer>
            <Slider {...settings}>
              {
                filterTestimonialData.testimonials.map(({id,name,description, rating, color})=>{
                  let starRating;
                  if (rating === 5) {
                    starRating = (
                      <TestimonialStarContainer>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </TestimonialStarContainer>
                    );
                  }
                  if (rating === 4) {
                    starRating = (
                      <TestimonialStarContainer>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <OutlineStar />
                      </TestimonialStarContainer>
                    );
                  }
                  if (rating === 3) {
                    starRating = (
                      <TestimonialStarContainer>
                        <Star />
                        <Star />
                        <Star />
                        <OutlineStar />
                        <OutlineStar />
                      </TestimonialStarContainer>
                    );
                  }
                  return(
                  <HomeCarausalContainer key={id}>
                    <TestimonialCarausalCardContainer>
                      <TestimonialProfileIconNameContainer>
                      <TestimonialProfileIcon color={color} />
                      <TestimonialProfileUserName>{name}</TestimonialProfileUserName>
                      </TestimonialProfileIconNameContainer>
                      <TestimonialContentContainer>
                        <TestimonialMessage>{description}</TestimonialMessage>
                        <TestimonialCommaContainer color={color}>
                        <TopComma /><TopComma />
                        </TestimonialCommaContainer>
                      </TestimonialContentContainer>
                      {starRating}
                    </TestimonialCarausalCardContainer>
                  </HomeCarausalContainer>
                  )
                })
              }
            </Slider> 
            </TestimonialCarausalContainer>
            </HomeCarausalCardContainer> 
            <AnotherTestimonialCarausalContainer data-aos="zoom-in">
                          <Slider {...settings}>
              {
                filterTestimonialData.testimonials.map(({id,name,description, rating, color})=>{
                  let starRating;
                  if (rating === 5) {
                    starRating = (
                      <TestimonialStarContainer>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </TestimonialStarContainer>
                    );
                  }
                  if (rating === 4) {
                    starRating = (
                      <TestimonialStarContainer>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <OutlineStar />
                      </TestimonialStarContainer>
                    );
                  }
                  if (rating === 3) {
                    starRating = (
                      <TestimonialStarContainer>
                        <Star />
                        <Star />
                        <Star />
                        <OutlineStar />
                        <OutlineStar />
                      </TestimonialStarContainer>
                    );
                  }
                  return(
                  <HomeCarausalContainer key={id}>
                    <TestimonialCarausalCardContainer>
                      <TestimonialProfileIconNameContainer>
                      <TestimonialProfileIcon color={color} />
                      <TestimonialProfileUserName>{name}</TestimonialProfileUserName>
                      </TestimonialProfileIconNameContainer>
                      <TestimonialContentContainer>
                        <TestimonialMessage>{description}</TestimonialMessage>
                        <TestimonialCommaContainer color={color}>
                        <TopComma /><TopComma />
                        </TestimonialCommaContainer>
                      </TestimonialContentContainer>
                      {starRating}
                    </TestimonialCarausalCardContainer>
                  </HomeCarausalContainer>
                  )
                })
              }
            </Slider> 
            </AnotherTestimonialCarausalContainer>
            {/* Join Our Team */}
             <HomeDonationContainer data-aos="zoom-in">
            <HomeJoinUsImageContainer>
              <JoinUsImage src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747479924/WhatsApp_Image_2025-05-17_at_16.32.46_3aaf7343_bsecas.jpg' alt='join-our-team-img' />
            </HomeJoinUsImageContainer>
            <HomeJoinUsContentContainer>
            <Heading>{filterHomeJoinUsData.joinUsHeading}</Heading>
            <HomeCardDescription>
              {filterHomeJoinUsData.joinUsMsg}
            </HomeCardDescription>
            <Button onClick={navigateToJoinOurTeam}>{filterHomeJoinUsData.buttonName} <RightArrowIcon/></Button>
            </HomeJoinUsContentContainer>
           </HomeDonationContainer> 
           <SmallScreenHomeJoinUsContentContainer data-aos="zoom-in">
                        <Heading>{filterHomeJoinUsData.joinUsHeading}</Heading>
            <HomeCardDescription>
              {filterHomeJoinUsData.joinUsMsg}
            </HomeCardDescription>
            <Button onClick={navigateToJoinOurTeam}>{filterHomeJoinUsData.buttonName} <RightArrowIcon/></Button>

            </SmallScreenHomeJoinUsContentContainer> 

           {/* Dontaion */}
            <HomeDonationContainer data-aos="zoom-in">
            <HomeDonationImageContainer>
              <DonationImage src='https://res.cloudinary.com/da52fiag8/image/upload/v1744111622/ChatGPT_Image_Apr_8_2025_04_54_00_PM_f91xxs.jpg' alt='donation-img' />
            </HomeDonationImageContainer>
            <HomeDonationContentContainer>
            <Heading>{donationHeading}</Heading>
            <HomeCardDescription>
            {donationMsg}      
            </HomeCardDescription>
            <Button onClick={navigateToDonateNow}>{buttonName}<HeartIcon/></Button>
            </HomeDonationContentContainer>
           </HomeDonationContainer>  
           <SmallScreenHomeDonationContentContainer data-aos="zoom-in">
            <Heading>{donationHeading}</Heading>
            <HomeCardDescription>
            {donationMsg}      
            </HomeCardDescription>
            <Button onClick={navigateToDonateNow}>{buttonName}<HeartIcon/></Button>
           </SmallScreenHomeDonationContentContainer>
           <WhatsApp />
           <ScrollToTopButton/>
           <Footer/>
        </HomeContainer>
    )
}

export default Home
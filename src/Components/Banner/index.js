import {useContext} from 'react';
import {displayBannerHeadingText} from '../Data';
import {CreateLanguageContext} from '../Context';
import {
    BannerWrapper, 
    BannerContainer, 
    BannerDisplayTextContainer, 
    BannerTextHeading, 
    BannerMdupsLogoContainer, 
    BannerMdupsLogoImg, 
    BannerMdupsHeadingContainer
 } from './styledComponents';
const Banner = () => {
  const {languageId} = useContext(CreateLanguageContext);
  const filterBannerData = displayBannerHeadingText.find((item)=>item.languageId ===  languageId);
  const {data} = filterBannerData;
    return (
        <BannerWrapper>
        <BannerContainer autoPlay muted loop playsInline>
            <source 
                src='https://res.cloudinary.com/dflmaiwxo/video/upload/v1747309866/WEBSITE_HEADER_1_1_pbimrr.mp4' 
                type='video/mp4' 
                poster='https://res.cloudinary.com/dflmaiwxo/image/upload/v1746519911/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_aigqsp.jpg'
            />
            Your browser does not support the video tag.
        </BannerContainer>
        <BannerDisplayTextContainer>
            <BannerMdupsLogoContainer>
                <BannerMdupsLogoImg src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747033857/Logo_uttrakhand_1_ahrajl.png' alt='mdups-logo'/>
            </BannerMdupsLogoContainer>
<BannerMdupsHeadingContainer>
  {data.map((currentWord, index) => (
    <BannerTextHeading key={index} index={index}>
      <span>{currentWord}</span>
    </BannerTextHeading>
  ))}
</BannerMdupsHeadingContainer>

        </BannerDisplayTextContainer>
        </BannerWrapper>
    );
};
export default Banner;

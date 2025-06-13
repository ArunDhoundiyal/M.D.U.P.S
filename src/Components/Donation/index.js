import {
    DonationBgContainer, 
    DonationTopImageContainer, 
    DonationImage, 
    DonationCardDesContainer, 
    DonationHeading, 
    DonationMessage, 
    EducationIcon, 
    HealthIcon, 
    SocialIcon, 
    SelfRelianceIcon, 
    DonationDispalyIconContainer, 
    DonationIcon, 
    DonationIconHeading
    
} from './styledComponents';
import DonationForm from '../DonationForm';
import Footer from '../Footer';
import ScrollToTopButton from '../ScrollToTopButton';
import WhatsApp from '../WhatsApp';
import Header from '../Header';

const Donation = () => {
    
    return(
        <DonationBgContainer>
            <Header />
            <DonationForm />
            <DonationTopImageContainer>
                <DonationImage src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747120481/20944629_k3siyy.jpg' alt='donation-img' />
            </DonationTopImageContainer>
            <DonationCardDesContainer>
                <DonationHeading>
                    दान क्यों करें? – आपका सहयोग, बच्चों का भविष्य
                </DonationHeading>
                <DonationMessage>
                    आपका छोटा-सा योगदान भी एम.डी.यू.पी.एस.  (महानगर दिल्ली उत्तराखंड प्रवासी संगठन) 
                    के बड़े उद्देश्य में अमूल्य भूमिका निभा सकता है। हम समाज के सबसे हाशिए पर खड़े बच्चों 
                    और जरूरतमंद प्रवासी परिवारों के जीवन को बेहतर बनाने के लिए कार्यरत हैं – ताकि हर बच्चा 
                    शिक्षा, पोषण, स्वास्थ्य और सुरक्षा के अपने मौलिक अधिकारों को प्राप्त कर सके।
                    </DonationMessage>
                    <DonationMessage>
                    हर वह बच्चा जो स्कूल जाने से वंचित है, हर वह परिवार जो इलाज नहीं करा पा रहा, और हर 
                    वह बच्चा जो कुपोषण या शोषण का शिकार हो रहा है – हमारी प्राथमिक जिम्मेदारी है। पर यह 
                    कार्य केवल संगठन के बूते नहीं हो सकता। इसके लिए आपका साथ और सहयोग अनिवार्य है।
                    </DonationMessage>
                    <DonationMessage>
                    जब आप MDUPS को दान करते हैं, आप केवल आर्थिक सहायता नहीं दे रहे होते – आप एक 
                    मुस्कान, एक उम्मीद और एक उज्जवल भविष्य का निर्माण कर रहे होते हैं। आपका योगदान बच्चों 
                    को शिक्षा दिलाने, महिला कल्याण योजनाओं को लागू करने, और कमजोर तबकों को कानूनी व 
                    सामाजिक सुरक्षा प्रदान करने में सीधे उपयोग किया जाता है।
                    </DonationMessage>
                    <DonationMessage>
                    हमारा विश्वास है – "जब हम मिलकर प्रयास करते हैं, तब असली बदलाव होता है।" हम आपसे 
                    अनुरोध करते हैं कि आगे बढ़ें, सहयोग करें और उस बदलाव का हिस्सा बनें, जिसकी इस समाज 
                    को ज़रूरत है। एक बेहतर, सुरक्षित और समान भविष्य के निर्माण में आपकी भागीदारी ही हमारी 
                    सबसे बड़ी ताकत है
                    </DonationMessage>
                <DonationHeading>
                    महानगर दिल्ली उत्तराखंड प्रवासी संगठन प्रोजेक्ट्स में आपके सहयोग से हमने यह प्रभाव डाला है।
                </DonationHeading>
                <DonationDispalyIconContainer>
                    <DonationIcon color=' #0077be'>
                        <EducationIcon />
                        <DonationIconHeading>
                            शिक्षा
                        </DonationIconHeading>
                    </DonationIcon>
                    <DonationIcon color=' #009900'>
                        <HealthIcon /> 
                        <DonationIconHeading>
                            स्वास्थ्य
                        </DonationIconHeading>
                    </DonationIcon >
                    <DonationIcon color=' #ff8f00'>
                        <SocialIcon />
                        <DonationIconHeading>
                            सामाजिक
                        </DonationIconHeading>
                    </DonationIcon>
                    <DonationIcon color=' #dc143c'>
                        <SelfRelianceIcon />
                        <DonationIconHeading>
                            आत्मनिर्भरता
                        </DonationIconHeading>
                    </DonationIcon>
                </DonationDispalyIconContainer>
                
            </DonationCardDesContainer>
            <WhatsApp/>
            <ScrollToTopButton />
            <Footer/>
        </DonationBgContainer>

    )
}

export default Donation
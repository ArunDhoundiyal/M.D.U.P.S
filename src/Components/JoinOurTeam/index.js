import {
    DonationBgContainer, 
    DonationTopImageContainer, 
    DonationImage, 
    DonationCardDesContainer, 
    DonationHeading, 
    DonationMessage, 
    BoldArrow
    
} from './styledComponents';
import DonationForm from '../DonationForm';
import Footer from '../Footer';
import ScrollToTopButton from '../ScrollToTopButton';
import WhatsApp from '../WhatsApp';
import Header from '../Header';

const JoinOurTeam = () => {
    
    return(
        <DonationBgContainer>
            <Header />
            <DonationForm />
            <DonationTopImageContainer>
                <DonationImage src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747479924/WhatsApp_Image_2025-05-17_at_16.32.46_3aaf7343_bsecas.jpg' alt='donation-img' />
            </DonationTopImageContainer>
            <DonationCardDesContainer>
                <DonationHeading>
                    सेवा क्यों करें? – एम.डी.यू.पी.एस. के साथ जुड़ने का उद्देश्य
                </DonationHeading>
                <DonationMessage>
                    भगवान बुद्ध ने कहा है — "यदि आप किसी और के लिए दीपक जलाते हैं, 
                    तो वह आपके मार्ग को भी प्रकाशित करता है।"
                    </DonationMessage>
                    <DonationMessage>
                        महानगर दिल्ली उत्तराखंड प्रवासी संगठन (एम.डी.यू.पी.एस.) के साथ स्वयंसेवक 
                        के रूप में जुड़कर आप न केवल समाज के वंचित और ज़रूरतमंद प्रवासी भाई-बहनों के 
                        जीवन में सकारात्मक परिवर्तन ला सकते हैं, बल्कि अपने जीवन को भी सेवा, संवेदना और 
                        उद्देश्य की भावना से भर सकते हैं।
                    </DonationMessage>
                    <DonationMessage>
                        हमारा संगठन शिक्षा, स्वास्थ्य, सामाजिक कल्याण, महिला सशक्तिकरण और 
                        सांस्कृतिक विरासत के संरक्षण जैसे क्षेत्रों में निरंतर सक्रिय है। आपके सहयोग 
                        से हम इन प्रयासों को और अधिक प्रभावशाली बना सकते हैं। यह एक ऐसा 
                        मंच है जहाँ सेवा केवल कर्तव्य नहीं, बल्कि ईश्वर सेवा के समकक्ष मानी जाती है।
                    </DonationMessage>
                    <DonationMessage>
                        हम अपने सभी स्वयंसेवकों को दिल से धन्यवाद देते हैं और उन्हें इस सामाजिक 
                        आंदोलन का अभिन्न अंग मानते हैं। हमें विश्वास है कि आपका यह अनुभव न 
                        केवल उपयोगी, बल्कि आपके जीवन में भी एक सार्थक मोड़ साबित होगा।
                    </DonationMessage>
                    <DonationHeading>
                        🤝 एम.डी.यू.पी.एस. सदस्यता विकल्प (वार्षिक)
                    </DonationHeading>
                    <DonationMessage>
                        आप हमारे संगठन से औपचारिक रूप से जुड़कर सामाजिक परिवर्तन के इस मिशन 
                        को और मजबूत बना सकते हैं। नीचे दो प्रकार की सदस्यता विकल्प उपलब्ध हैं:
                    </DonationMessage>
                    <DonationHeading>
                        सामान्य सदस्यता
                    </DonationHeading>  
                    <DonationMessage><BoldArrow>➤</BoldArrow> योगदान राशि: ₹100 प्रति वर्ष</DonationMessage> 
                    <DonationMessage><BoldArrow>➤</BoldArrow> लाभ: संगठन की सभी सार्वजनिक गतिविधियों में सहभागिता, सूचना और सांस्कृतिक आयोजनों में प्राथमिकता।</DonationMessage> 
                    <DonationMessage><BoldArrow>➤</BoldArrow> उपयुक्त: वे सदस्य जो सामाजिक उद्देश्य का समर्थन करना चाहते हैं और कभी-कभार भागीदारी देना चाहते हैं।</DonationMessage>

                    <DonationHeading>
                    सक्रिय सदस्यता
                    </DonationHeading>  
                    <DonationMessage><BoldArrow>➤</BoldArrow> योगदान राशि: ₹1000 प्रति वर्ष</DonationMessage> 
                    <DonationMessage><BoldArrow>➤</BoldArrow> लाभ: संगठन के निर्णयात्मक कार्यक्रमों में सक्रिय भूमिका, विशेष बैठकों में आमंत्रण, नेतृत्व अवसर, और स्थानीय/राज्य स्तर पर प्रतिनिधित्व का अवसर।</DonationMessage> 
                    <DonationMessage><BoldArrow>➤</BoldArrow> उपयुक्त: वे सदस्य जो सेवा कार्यों में निरंतर भाग लेना चाहते हैं और नेतृत्व की भूमिका निभाना चाहते हैं।</DonationMessage>

                                     
            </DonationCardDesContainer>
            <WhatsApp/>
            <ScrollToTopButton />
            <Footer/>
        </DonationBgContainer>

    )
}

export default JoinOurTeam
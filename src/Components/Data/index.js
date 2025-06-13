import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { MdWorkspacePremium } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { VscLaw } from "react-icons/vsc";

export const mdupsName = [
    {
        languageId:'HINDI', 
        heading:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन'
    }, 
    {
        languageId:'ENGLISH', 
        heading:'Mahanagar Delhi Uttarakhand Pravasi Sangathan'
    }, 
    {
        languageId:'GARHWALI', 
        heading:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन'
    }
]


export const NavItems = [
    {languageId:"HINDI", navData:[
        {id:1, name:'होम', link:'/'}, 
        {id:2, name:'हमारे बारे में',link:'/about-us'},
        {id:3, name:'समाचार और लेख', link:'/news-&-articles'},
        {id:4, name:"हमारी टीम", link:'/our-team'},  
        {id:5, name:"गैलरी", link:'/gallery'},
        {id:6,  name:"संपर्क करें", link:'#contact-us'}
    ]}, 
    {languageId:"ENGLISH", navData:[
        {id:1, name:'HOME', link:'/'}, 
        {id:2, name:'ABOUT US',link:'/about-us'},
        {id:3, name:'NEWS & ARTICLES', link:'/news-&-articles'},
        {id:4, name:"OUR TEAM", link:'/our-team'},  
        {id:5, name:"GALLERY", link:'/gallery'},
        {id:6,  name:"CONTACT US", link:'#contact-us'}
    ]}, 
{languageId: "GARHWALI", navData: [
    { id: 1, name: "मुख पृष्ठ", link: "/" },
    { id: 2, name: "हमार परिचय", link: "/about-us" },
    { id: 3, name: "समाचार अ लेख", link: "/news-&-articles" },
    { id: 4, name: "हमरी टीम", link: "/our-team" },
    { id: 5, name: "गैलरी", link: "/gallery" },
    { id: 6, name: "संपर्क करि", link: "#contact-us" }
  ]
}
]; 

export const SelectLanguageData = [
    {id:"HINDI", language:'हिन्दी'}, 
    {id:"ENGLISH", language:"English"},
    {id:"GARHWALI", language:'गढ़वाली'}
]




export const NavOurTeamData = [
    {id:1, name:"अध्यक्ष की तरफ से संदेश"}, 
    {id:2, name:"कार्यकारिणी संदेश"}, 
    {id:3, name:"सक्रिय सदस्य"}, 
    {id:4, name:"सामान्य सदस्य"}
]

export const NavActivitiesData = [
    {id:1, name:"सामुदायिक केन्द्र (बारातघर)"}, 
    {id:2, name:"छात्रों के लिए सहायता"}, 
    {id:3, name:"ब्याज मुक्त लोन"}, 
    {id:4, name:"सामूहिक विवाह"}
]

export const NavEventsData = [
    {id:1, name:'सांस्कृतिक कार्यक्रम'}, 
    {id:2, name:"वार्षिक कार्यक्रम"}, 
    {id:3, name:'आगामी कार्यक्रम'}
];

export const homeMDUPSLogoIntroductionData = [
    {
        languageId:'HINDI', 
        data:
            {
                mdupsTopLogoIntroduction:'लोगो का परिचय', 
                mdupsTopLogoMsg:'यह लोगो महानगर दिल्ली उत्तराखंड प्रवासी संगठन का प्रतिनिधित्व करता है। यह संगठन दिल्ली में रहने वाले उत्तराखंड के प्रवासी लोगों को एकजुट करने के उद्देश्य से बना है। लोगो का डिज़ाइन एकता, संस्कृति की रक्षा और सहयोग की भावना को दर्शाता है।',

                mdupsLogoMountainHandsHeading:'1. बीच का चित्रण: चार हाथ और पर्वत', 

                mdupsLogoMountainSubHeading:' प्रतीकात्मक अर्थ: चार हाथ (दो ऊपर से, दो नीचे से):',

                mdupsLogoMountainSubHeadingPointOne:'एकता, सुरक्षा, सहयोग, और संरक्षण का प्रतीक हैं।', 
                mdupsLogoMountainSubHeadingPointTwo:'ऊपर के दो हाथ आशीर्वाद और मार्गदर्शन को दर्शाते हैं – यह वरिष्ठों, नेतृत्व या ईश्वर का प्रतीक हैं', 
                mdupsLogoMountainSubHeadingPointThree:'नीचे के दो हाथ मज़बूती, सहारा, और नींव को दर्शाते हैं – यह युवाओं या समुदाय के समर्थन को दर्शाते हैं।', 
                mdupsLogoMountainSubHeadingPointFour:'हाथों का गोल आकार बनाना संपूर्णता, संरक्षण, और सांझेदारी का संकेत है।',

                mdupsLogoMountainSubHeadingTwo:' हाथों के बीच में पर्वत:',
                
                mdupsLogoMountainSubHeadingTwoPointOne:'यह हिमालय और उत्तराखंड की प्राकृतिक विरासत का प्रतीक हैं।', 
                mdupsLogoMountainSubHeadingTwoPointTwo:'यह दर्शाता है कि संगठन अपनी संस्कृति, परंपराओं, और मूल पहचान को सहेज कर रखे हुए है।', 

                mdupsOuterCircleHeading:'2. बाहरी वृत्त और पाठ', 

                mdupsOuterCircleSubHeading:' ऊपरी भाग: महानगर दिल्ली उत्तराखंड प्रवासी संगठन', 
                mdupsOuterCircleSubHeadingPointOne:'संगठन का नाम, जो उद्देश्य और पहचान को दर्शाता है।',

                mdupsOuterCircleSubHeadingTwo:' निचला भाग: एकजुट एकमुट', 
                mdupsOuterCircleSubHeadingTwoPointOne:'संगठन का स्लोगन, जिसका अर्थ है साथ मिलकर, एक स्वर में – यह एकता और संगठन की शक्ति को दर्शाता है।', 

                mdupsOuterCircleSubHeadingThree:' लिखावट और शैली:', 
                mdupsOuterCircleSubHeadingThreePointOne:'देवनागरी लिपि का प्रयोग भारतीयता और सांस्कृतिक पहचान को दर्शाता है।', 
                mdupsOuterCircleSubHeadingThreePointTwo:'वृत्ताकार शैली एक समग्र समुदाय की भावना को दिखाता है।', 

                mdupsBlueColorHeding:'3. नीला रंग – महत्व और चयन का कारण - प्रतीकात्मक अर्थ:', 

                mdupsBlueColorSubHeding:'विश्वास और निष्ठा:', 
                mdupsBlueColorSubHedingPointOne:'नीला रंग भरोसे और ईमानदारी का प्रतीक है। यह संगठन की पारदर्शिता और समर्पण को दर्शाता है।', 

                mdupsBlueColorSubHedingTwo:'शांति और सौहार्द:', 
                mdupsBlueColorSubHedingTwoPointOne:'यह शांत वातावरण और सद्भाव को प्रकट करता है, जो समुदाय के बीच संबंधों में आवश्यक है।', 

                mdupsBlueColorSubHedingThree:'आध्यात्मिकता और गहराई:', 
                mdupsBlueColorSubHedingThreePointOne:'उत्तराखंड एक आध्यात्मिक भूमि है, नीला रंग चिंतन, ध्यान और आत्मिक संबंध का प्रतीक है।', 

                mdupsBlueColorSubHedingFour:'प्रकृति से जुड़ाव:', 
                mdupsBlueColorSubHedingFourPointOne:'नीला रंग नदी, आकाश और हिमालयी परिवेश का प्रतिनिधित्व करता है।', 

                mdupsFinalConclusionHeading:'4. निष्कर्ष:', 
                mdupsFinalConclusionMsg:'यह लोगो एक सोच-समझकर बनाया गया प्रतीक है, जो दिल्ली में बसे उत्तराखंडी लोगों की भावनाओं, संस्कृति और एकता को दर्शाता है।', 

                mdupsFinalConclusionHeadingSubHeading:'हाथ:', 
                mdupsFinalConclusionHeadingSubHeadingPointOne:'सुरक्षा, समर्थन और सहयोग के प्रतीक हैं।', 

                mdupsFinalConclusionHeadingSubHeadingTwo:'पर्वत:',
                mdupsFinalConclusionHeadingSubHeadingTwoPointOne:'उत्तराखंड की जड़ों और गौरव का प्रतिनिधित्व करते हैं।', 

                mdupsFinalConclusionHeadingSubHeadingThree:' नीला रंग:', 
                mdupsFinalConclusionHeadingSubHeadingThreePointOne:'शांति, गहराई और सांस्कृतिक जुड़ाव को दर्शाता है।', 

                mdupsFinalConclusionHeadingSubHeadingFour:'पाठ और संरचना:', 
                mdupsFinalConclusionHeadingSubHeadingFourPointOne:'संगठन की पहचान, उद्देश्य और मूल भावना को सटीकता से दर्शाते हैं।'
            }
        
    },
    {
        languageId: 'ENGLISH',
        data: 
            {
            mdupsTopLogoIntroduction: 'Logo Introduction',
            mdupsTopLogoMsg: 'This logo represents the Mahanagar Delhi Uttarakhand Pravasi Sangathan. The organization aims to unite the Uttarakhand diaspora living in Delhi. The design of the logo symbolizes unity, cultural preservation, and the spirit of cooperation.',

            mdupsLogoMountainHandsHeading: '1. Central Illustration: Four Hands and a Mountain',

            mdupsLogoMountainSubHeading: 'Symbolic Meaning: Four Hands (Two from Above, Two from Below):',

            mdupsLogoMountainSubHeadingPointOne: 'They symbolize unity, safety, cooperation, and protection.',
            mdupsLogoMountainSubHeadingPointTwo: 'The two upper hands represent blessings and guidance – symbolizing elders, leadership, or divinity.',
            mdupsLogoMountainSubHeadingPointThree: 'The two lower hands signify strength, support, and foundation – representing the youth or the community’s backing.',
            mdupsLogoMountainSubHeadingPointFour: 'The circular formation of the hands indicates wholeness, protection, and partnership.',

            mdupsLogoMountainSubHeadingTwo: 'Mountain Between the Hands:',

            mdupsLogoMountainSubHeadingTwoPointOne: 'It symbolizes the Himalayas and the natural heritage of Uttarakhand.',
            mdupsLogoMountainSubHeadingTwoPointTwo: 'It signifies that the organization preserves its culture, traditions, and original identity.',

            mdupsOuterCircleHeading: '2. Outer Circle and Text',

            mdupsOuterCircleSubHeading: 'Top Portion: Mahanagar Delhi Uttarakhand Pravasi Sangathan',
            mdupsOuterCircleSubHeadingPointOne: 'The name of the organization, which reflects its purpose and identity.',

            mdupsOuterCircleSubHeadingTwo: 'Bottom Portion: Ekjut Ekmut',
            mdupsOuterCircleSubHeadingTwoPointOne: 'The slogan of the organization, which means united in one voice – representing unity and collective strength.',

            mdupsOuterCircleSubHeadingThree: 'Script and Style:',
            mdupsOuterCircleSubHeadingThreePointOne: 'Use of Devanagari script symbolizes Indian cultural identity.',
            mdupsOuterCircleSubHeadingThreePointTwo: 'Circular style reflects a sense of holistic community.',

            mdupsBlueColorHeding: '3. Blue Color – Significance and Reason for Selection – Symbolic Meaning:',

            mdupsBlueColorSubHeding: 'Trust and Loyalty:',
            mdupsBlueColorSubHedingPointOne: 'Blue symbolizes trust and honesty. It reflects the transparency and dedication of the organization.',

            mdupsBlueColorSubHedingTwo: 'Peace and Harmony:',
            mdupsBlueColorSubHedingTwoPointOne: 'It conveys a peaceful atmosphere and harmony, essential for relationships within the community.',

            mdupsBlueColorSubHedingThree: 'Spirituality and Depth:',
            mdupsBlueColorSubHedingThreePointOne: 'Uttarakhand is a land of spirituality. Blue symbolizes contemplation, meditation, and spiritual connection.',

            mdupsBlueColorSubHedingFour: 'Connection with Nature:',
            mdupsBlueColorSubHedingFourPointOne: 'Blue represents rivers, sky, and the Himalayan environment.',

            mdupsFinalConclusionHeading: '4. Conclusion:',
            mdupsFinalConclusionMsg: 'This logo is a thoughtfully crafted symbol that reflects the emotions, culture, and unity of the Uttarakhandi people residing in Delhi.',

            mdupsFinalConclusionHeadingSubHeading: 'Hands:',
            mdupsFinalConclusionHeadingSubHeadingPointOne: 'They symbolize protection, support, and cooperation.',

            mdupsFinalConclusionHeadingSubHeadingTwo: 'Mountain:',
            mdupsFinalConclusionHeadingSubHeadingTwoPointOne: 'Represents the roots and pride of Uttarakhand.',

            mdupsFinalConclusionHeadingSubHeadingThree: 'Blue Color:',
            mdupsFinalConclusionHeadingSubHeadingThreePointOne: 'Reflects peace, depth, and cultural connection.',

            mdupsFinalConclusionHeadingSubHeadingFour: 'Text and Structure:',
            mdupsFinalConclusionHeadingSubHeadingFourPointOne: 'Accurately conveys the identity, purpose, and core spirit of the organization.'
        }
}, 
{
    languageId: 'GARHWALI',
    data: 
        {
            mdupsTopLogoIntroduction: 'लोगो क परिचय',
            mdupsTopLogoMsg: 'ई लोगो महानगर दिल्ली उत्तराखंड प्रवासी संगठन क प्रतीक छै। ई संगठन दिल्ली मं रहणा वाला उत्तराखंड वासीयों क एकठा करणा क उदेश्य सैं। लोगो को डिजाइन एकता, संस्कृति बचै राखण और सहयोग क भावना दिखा रैल छै।',

            mdupsLogoMountainHandsHeading: '1. बीच मं चित्र: चार हाथ और पहाड़',

            mdupsLogoMountainSubHeading: 'प्रतीकात्मक मतलब: चार हाथ (दो ऊपर सैं, दो नीचे सैं):',

            mdupsLogoMountainSubHeadingPointOne: 'ई एकता, सुरक्षा, सहयोग अरु संरक्षण क प्रतीक सैं।',
            mdupsLogoMountainSubHeadingPointTwo: 'ऊपर वाले दो हाथ आशीर्वाद अरु मार्गदर्शन दिखा रैल सैं – ई बुजुर्ग, नेतागिरी या भगवान क प्रतीक सैं।',
            mdupsLogoMountainSubHeadingPointThree: 'नीचे वाले दो हाथ मज़बूती, सहारा अरु नींव दिखा रैल सैं – ई युवाओं या समाज क समर्थन सैं।',
            mdupsLogoMountainSubHeadingPointFour: 'हाथों क गोल आकृति पूर्णता, संरक्षण अरु साझेदारी क संकेत सैं।',

            mdupsLogoMountainSubHeadingTwo: 'हाथों क बीच मं पहाड़:',

            mdupsLogoMountainSubHeadingTwoPointOne: 'ई हिमालय और उत्तराखंड क प्राकृतिक धरोहर क प्रतीक सैं।',
            mdupsLogoMountainSubHeadingTwoPointTwo: 'ई देखांल छै कि संगठन अपनी संस्कृति, रीत-रिवाज और पहचाण बचै राखण मं लाग रैल सैं।',

            mdupsOuterCircleHeading: '2. बाहरी गोलाई अरु लेख',

            mdupsOuterCircleSubHeading: 'ऊपरी हिस्सा: महानगर दिल्ली उत्तराखंड प्रवासी संगठन',
            mdupsOuterCircleSubHeadingPointOne: 'संगठन को नाम, जिण मं उद्देश्य अरु पहचाण झलके छै।',

            mdupsOuterCircleSubHeadingTwo: 'निचला हिस्सा: एकजुट एकमुट',
            mdupsOuterCircleSubHeadingTwoPointOne: 'संगठन क नारा, जिण को मतलब होई – एक साथ, एक आवाज मं – ई एकता अरु संगठन क ताकत दिखा रैल सैं।',

            mdupsOuterCircleSubHeadingThree: 'लिखाई अरु शैली:',
            mdupsOuterCircleSubHeadingThreePointOne: 'देवनागरी लिपि क प्रयोग भारतीयता अरु सांस्कृतिक पहचाण क प्रतीक सैं।',
            mdupsOuterCircleSubHeadingThreePointTwo: 'गोल आकृति समूचे समुदाय क भावना दिखा रैल सैं।',

            mdupsBlueColorHeding: '3. नील रंग – महत्त्व अरु चुन्ने क कारण – प्रतीकात्मक मतलब:',

            mdupsBlueColorSubHeding: 'भरोसा अरु निष्ठा:',
            mdupsBlueColorSubHedingPointOne: 'नील रंग भरोसे अरु सच्चाई क प्रतीक सैं। ई संगठन क पारदर्शिता अरु समर्पण दिखा रैल सैं।',

            mdupsBlueColorSubHedingTwo: 'शांति अरु मेलजोल:',
            mdupsBlueColorSubHedingTwoPointOne: 'ई शांत वातावरण अरु मेलजोल क प्रतीक सैं, जिण क समाज मं बड़ा जरूरत होई।',

            mdupsBlueColorSubHedingThree: 'आध्यात्मिकता अरु गहराई:',
            mdupsBlueColorSubHedingThreePointOne: 'उत्तराखंड एक आध्यात्मिक भूमि छै, नील रंग ध्यान, साधना अरु आत्मिक जुड़ाव क प्रतीक सैं।',

            mdupsBlueColorSubHedingFour: 'प्रकृति सैं जुड़ाव:',
            mdupsBlueColorSubHedingFourPointOne: 'नील रंग नदी, आकाश अरु हिमालयी माहौल क प्रतीक सैं।',

            mdupsFinalConclusionHeading: '4. निष्कर्ष:',
            mdupsFinalConclusionMsg: 'ई लोगो एक सोच-समझ के बनाया गया प्रतीक सैं, जिण मं दिल्ली मं रहणा वाला उत्तराखंडी लोक क भावना, संस्कृति अरु एकता झलकै छै।',

            mdupsFinalConclusionHeadingSubHeading: 'हाथ:',
            mdupsFinalConclusionHeadingSubHeadingPointOne: 'ई सुरक्षा, समर्थन अरु सहयोग क प्रतीक सैं।',

            mdupsFinalConclusionHeadingSubHeadingTwo: 'पहाड़:',
            mdupsFinalConclusionHeadingSubHeadingTwoPointOne: 'उत्तराखंड क जड़ें अरु गौरव क प्रतीक सैं।',

            mdupsFinalConclusionHeadingSubHeadingThree: 'नील रंग:',
            mdupsFinalConclusionHeadingSubHeadingThreePointOne: 'शांति, गहराई अरु सांस्कृतिक जुड़ाव दिखा रैल सैं।',

            mdupsFinalConclusionHeadingSubHeadingFour: 'लेख अरु ढांचा:',
            mdupsFinalConclusionHeadingSubHeadingFourPointOne: 'संगठन क पहचाण, उद्देश्य अरु मूल भावना सटीक रूप मं दिखा रैल सैं।'
        }

}
];

export const MissionData = [
    {
        languageId:'HINDI', 
        data:[
                {
                    id:1, 
                    heading:'उत्तराखंड के मूलनिवासियों की एकता और सामूहिकता:', 
                    description:'हमारा प्रमुख उद्देश्य उत्तराखंड के सभी मूलनिवासियों को एकजुट करना है ताकि हम सभी मिलकर अपने समाज के कल्याण के लिए काम कर सकें। संगठन के माध्यम से हम आपसी सहयोग और भाईचारे को बढ़ावा देते हुए एक बहुत ही मजबूत और स्थिर समुदाय का निर्माण कर रहे हैं, जो कि शायद इससे पहले किसी भी संस्था या संघटन द्वारा नहीं किया है।',
                    icon:FaUsers,
                    color:' #ff8c00' 
                }, 
                {
                    id:2, 
                    heading:'आर्थिक सुरक्षा और सामाजिक सुरक्षा समुदायिक भवनो की स्थापनाः', 
                    description:'हमने उत्तराखंड के गरीब और जरूरतमंद परिवारों के लिए समुदायिक भवनो की स्थापना के अंतर्गत पांच बारात घरों का निर्माण करना है. जहाँ पर वे मामूली शुल्क पर अपने बच्चों की शादी का आयोजन कर सकते हैं। इस पहल का उद्देश्य हर परिवार को बिना किसी आर्थिक दबाव के अपने बच्चों की शादी कर पाने में मदद करना है।', 
                    icon:GiMoneyStack,
                    color:' #4cbb17'
                }, 
                {
                    id:3, 
                    heading:'शिक्षा के क्षेत्र में योगदान - मूलनिवासी बच्चों के लिये छात्रावास और उच्चशिक्षा के लिये सहायताः', 
                    description:'हमारे संगठन का एक महत्वपूर्ण कार्य है मेधावी छात्रों को प्रोत्साहन देना और उनके लिए मुफ्त छात्रावास की व्यवस्था करना। हम उन छात्रों के लिए उच्च शिक्षा और प्रशिक्षण के अवसर उपलब्ध कराएंगे, ताकि वे अपने जीवन में सफलता प्राप्त कर सकें और समाज में एक सकारात्मक बदलाव ला सकें।', 
                    icon:MdCastForEducation, 
                    color:' #ff4500'
                }, 
                {
                    id:4, 
                    heading:'सामाजिक उत्तरदायित्व गरीब परिवारों की बेटियों की शादी:', 
                    description:'हम हर साल करीब-क़रीब 12 गरीब मूलनिवासी परिवारों की बेटियों की शादी का आयोजन भी करेंगे, इस आयोजन का पूरा खर्च संगठन द्वारा उठाया जायेगा, ताकि कोई भी परिवार आर्थिक तंगी के कारण अपने बच्चों की शादी करने में असमर्थ न हों।', 
                    icon:GiLinkedRings,
                    color:' #1e90ff'
                }, 
                {
                    id:5, 
                    heading:'शहीद परिवारों की सहायता- उत्तराखंड आंदोलन के शहीद परिवारों के पुनर्वास की योजना:', 
                    description:'उत्तराखंड राज्य आंदोलन में अपने प्राणों की आहुति देने वाले 42 अमर शहीदों के परिवारों के पुनर्वास और उनकी आर्थिक सहायता हमारे संघटन की जिम्मेदारी है। हम इन परिवारों को हर संभव मदद प्रदान करेंगे, ताकि वे सम्मानपूर्वक जीवन जी सकें।', 
                    icon:MdWorkspacePremium, 
                    color:' #ba55d3'
                },  
                {
                    id:6, 
                    heading:'स्थायी आवास की व्यवस्था- किराये के मकान से अपने मकान तक की योजनाः',
                    description:'दिल्ली एनसीआर में रहने वाले उत्तराखंड के गरीब या किराए के मकानों में रहने वाले प्रवासी भाई-बहनों के लिए हम स्थायी आवास की व्यवस्था भी करेंगे, इससे उनके जीवन में स्थिरता आएगी, और वे अपने परिवार के साथ एक सम्मानजनक जीवन जी सकते हैं', 
                    icon:FaHome, 
                    color:' #ff8c00'
                }, 
                {
                    id:7, 
                    heading:'रोजगार की व्यवस्था और प्रशिक्षण:', 
                    description:'हम बेरोजगार युवाओं को रोजगार के अवसर उपलब्ध कराएंगे, और उन्हें आर्थिक रूप से आत्मनिर्भर बनाने के लिए स्किल डेवलपमेंट एवं आवश्यक प्रशिक्षण प्रदान करेंगे, यह पहल उन्हें समाज में अपनी जगह बनाने और खुद को स्थापित करने में मदद करेगी।', 
                    icon:BsPersonWorkspace, 
                    color:' #ff4500'
                }, 
                {
                    id:8, 
                    heading:'कानूनी सहायता और सुरक्षाः', 
                    description:'हमारे संगठन का उद्देश्य यह भी है कि अगर किसी मूलनिवासी भाई-बहनों को पुलिस या किसी कानूनी समस्या का सामना करना पड़े, तो संगठन उनका डटकर साथ देगा, हम झूठे मुकदमों और गुंडागर्दी का मुकाबला करेंगे, ताकि हमारे हर प्रवासी नागरिक को न्याय मिल सके, और वे अपनी समस्याओं से उबर सकें।', 
                    icon:VscLaw, 
                    color:' #1e90ff'
                }
        ]
    },
    {
    languageId: 'ENGLISH',
    data: [
        {
            id: 1,
            heading: 'Unity and Togetherness of Native Uttarakhandis:',
            description: 'Our main goal is to unite all native Uttarakhandis so that together we can work for the welfare of our society. Through the organization, we promote mutual cooperation and brotherhood, building a very strong and stable community which perhaps no other institution or organization has done before.',
            icon: FaUsers,
            color: ' #ff8c00'
        },
        {
            id: 2,
            heading: 'Economic and Social Security - Establishment of Community Halls:',
            description: 'We plan to build five community halls under the establishment of community buildings for the poor and needy families of Uttarakhand. Here, they can organize their children’s weddings at a minimal cost. The aim of this initiative is to help every family arrange their children’s weddings without financial pressure.',
            icon: GiMoneyStack,
            color: ' #4cbb17'
        },
        {
            id: 3,
            heading: 'Contribution in Education - Hostels for Native Children and Support for Higher Education:',
            description: 'An important work of our organization is to encourage meritorious students and provide free hostel facilities for them. We will provide opportunities for higher education and training to these students so they can succeed in life and bring positive change to society.',
            icon: MdCastForEducation,
            color: ' #ff4500'
        },
        {
            id: 4,
            heading: 'Social Responsibility - Marriage of Daughters from Poor Families:',
            description: 'Every year, we will organize weddings for about 12 daughters of poor native families. The entire cost of these weddings will be borne by the organization so that no family is unable to marry off their children due to financial hardship.',
            icon: GiLinkedRings,
            color: ' #1e90ff'
        },
        {
            id: 5,
            heading: 'Support for Martyr Families - Rehabilitation Scheme for Families of Martyrs of Uttarakhand Movement:',
            description: 'It is our organization’s responsibility to rehabilitate and provide financial assistance to the families of 42 immortal martyrs who sacrificed their lives in the Uttarakhand state movement. We will provide every possible help to these families so that they can live with dignity.',
            icon: MdWorkspacePremium,
            color: ' #ba55d3'
        },
        {
            id: 6,
            heading: 'Provision of Permanent Housing - From Rental Houses to Own Homes:',
            description: 'For poor Uttarakhand migrants living in rental houses in Delhi NCR, we will arrange permanent housing. This will bring stability in their lives and they can live a respectful life with their families.',
            icon: FaHome,
            color: ' #ff8c00'
        },
        {
            id: 7,
            heading: 'Employment and Training:',
            description: 'We will provide employment opportunities to unemployed youth and offer skill development and necessary training to make them financially independent. This initiative will help them establish their place in society and build their future.',
            icon: BsPersonWorkspace,
            color: ' #ff4500'
        },
        {
            id: 8,
            heading: 'Legal Assistance and Protection:',
            description: 'Our organization also aims to firmly support any native brothers and sisters facing police or legal issues. We will fight false cases and hooliganism so that every migrant citizen gets justice and can overcome their problems.',
            icon: VscLaw,
            color: ' #1e90ff'
        }
    ]
}, 
{
    languageId: 'GARHWALI',
    data: [
        {
            id: 1,
            heading: 'उत्तराखंड दे मुलनिवासियू की एकता अर समुहता:',
            description: 'हमरो मुख्य उदेश्य ये छ कि सारे उत्तराखंडी मुलनिवासी एकठ्ठे हों जांण ता जो हम सबै मिलि के आपणी समाज को भला कर सकां। संगठन रा माध्यम तें हम आपसी सहयोग अर भाईचारा बढ़ावण लाग्या एक बलवान अर मजबूत समुदाय बनाण लाग्या, जको संभवतः कोई भी संस्था या संघटन पहिलां कद अपणे करिया हुया न्हीं।',
            icon: FaUsers,
            color: ' #ff8c00'
        },
        {
            id: 2,
            heading: 'आर्थिक सुरक्षा अर सामाजिक सुरक्षा - समुदायिक भवनां की स्थापनाः',
            description: 'हम उत्तराखंड के गरीब अर जरूरतमंद परिवारां खातिर समुदायिक भवनां की स्थापना करणा छ। जिथे उ मामूली खर्चे पर आपणा बच्च्यां री शादी कर सकां। इस पहल को मकसद ये छ कि हर परिवार बिना आर्थिक दबाव क बिना आपणा बच्च्यां री शादी करा सके।',
            icon: GiMoneyStack,
            color: ' #4cbb17'
        },
        {
            id: 3,
            heading: 'सिक्षा रा क्षेत्र में योगदान - मुलनिवासियू बच्च्यां खातिर छात्रावास अर उच्च सिक्षा खातिर मदद:',
            description: 'हमरो संगठन रा एक जरूरी काम छ मेधावी छात्रां नै प्रोत्साहन देण अर उनतें मुफ्त छात्रावास की व्यवस्था करणा। हम उन छात्रां नै उच्च सिक्षा अर प्रशिक्षण के अवसर देणा, ताकि वो आपणी जिंदगी में कामयाबी पा सकैं अर समाज में सकारातमक बदलाव ल्यावैं।',
            icon: MdCastForEducation,
            color: ' #ff4500'
        },
        {
            id: 4,
            heading: 'सामाजिक जिम्मेदारी - गरीब परिवारां की छोरियन री शादी:',
            description: 'हम हर साल करीब 12 गरीब मुलनिवासी परिवारां की छोरियन री शादी का आयोजन करां। इस आयोजन रो पूरा खर्च संगठन उठावै, ताकि कोई परिवार आर्थिक तंगी की वजह तें आपणा बच्च्यां री शादी करण में असमर्थ न होवैं।',
            icon: GiLinkedRings,
            color: ' #1e90ff'
        },
        {
            id: 5,
            heading: 'शहीद परिवारां की मदद - उत्तराखंड आंदोलन के शहीद परिवारां की पुनर्वास योजना:',
            description: 'उत्तराखंड आंदोलन में प्राण देन वाला 42 अमर शहीदां के परिवारां को पुनर्वास अर आर्थिक मदद देण हमारो संगठन की जिम्मेदारी छ। हम ये परिवारां नै पूरी मदद करां, ता कि वो सम्मान रा जीवन जिऊ सकैं।',
            icon: MdWorkspacePremium,
            color: ' #ba55d3'
        },
        {
            id: 6,
            heading: 'स्थायी आवास की व्यवस्था - किराया मकान तें आपणा मकान तक:',
            description: 'दिल्ली एनसीआर में रहण वाला गरीब अर किराया मकान में रहण वाला उत्तराखंडी प्रवासी भाई-बहिनी खातिर हम स्थायी आवास की व्यवस्था करां। इससे उनकें जिंदगी में स्थिरता आवै अर वो आपणा परिवार संग सम्मान रा जीवन जी सकैं।',
            icon: FaHome,
            color: ' #ff8c00'
        },
        {
            id: 7,
            heading: 'रोजगार अर प्रशिक्षण:',
            description: 'हम बेरोजगार युवां नै रोजगार देण के अवसर देणां अर उनतें स्किल डेवलपमेंट अर जरूरी प्रशिक्षण भी देणां, ताकि वो आर्थिक रूप तें आत्मनिर्भर बन सकैं। इस पहल तें उनकें समाज में आपणी जगह बनाण में मदद मिलै।',
            icon: BsPersonWorkspace,
            color: ' #ff4500'
        },
        {
            id: 8,
            heading: 'कानूनी मदद अर सुरक्षा:',
            description: 'हमरो संगठन ये भी चावणा छ कि जद कोई मुलनिवासी भाई-बहिनी पुलिस या कानूनी मसले में फंस जावैं, तो हम उनकू पूरा साथ देवैं। हम झूठा मुकदमा अर गुंडागर्दी से लड़ां, ताकि हर प्रवासी नागरिक न्याय पावै अर आपणी समस्यां तें उबर सकैं।',
            icon: VscLaw,
            color: ' #1e90ff'
        }
    ]
}
]


export const feedbackData = [
    {
        id:1, 
        name:'श्री भुवन चंद्र जोशी', 
        feedback:"एम.डी.यू.पी.एस ने जो प्रयास किया है, वह केवल एक संगठन नहीं बल्कि पूरे उत्तराखंडी समाज को एक सूत्र में बांधने की मिसाल है। यहाँ हर जरूरतमंद को सहारा, और हर प्रवासी को अपनापन मिलता है।"
    }, 
    {
        id:2, 
        name:'डॉ. कविता रौतेला', 
        feedback:"जब मैंने देखा कि यह संगठन शिक्षा के क्षेत्र में बच्चों की मदद कर रहा है, तो दिल से आशीर्वाद निकला। एम.डी.यू.पी.एस वास्तव में उम्मीद की एक किरण है उन लोगों के लिए जिन्हें समाज ने पीछे छोड़ दिया है।"
    }, 
    {
        id:3, 
        name:'नवीन सिंह बिष्ट', 
        feedback:"एक युवा के तौर पर मैं इस संगठन के साथ जुड़कर गर्व महसूस करता हूँ। यह न केवल हमारे सामाजिक और सांस्कृतिक मूल्यों को सहेज रहा है, बल्कि नई पीढ़ी को सही दिशा भी दे रहा है।"
    }, 
    {
        id:4, 
        name:'हरिकृष्ण नेगी', 
        feedback:"उत्तराखंड में जब भी कोई आपदा आती है, एम.डी.यू.पी.एस सबसे पहले मदद के लिए आगे आता है। फंडरेज़िंग अभियान से सैकड़ों परिवारों को सहारा मिला है। यह संगठन एक उम्मीद का नाम है।"
    }
]

export const OurTeamData = [
    {ourTeamTopBannerHeading:[
        {
            languageId:'HINDI', 
            bannerHeading:'एक टीम, एक लक्ष्य'
        }, 
        {
            languageId:'ENGLISH', 
            bannerHeading:"One Team, One Goal"


        }, 
        {
            languageId:'GARHWALI', 
            bannerHeading:'एक टीम, एक लक्ष्य'
        }
    ]},
    {
        ourTeamTopMainHeading:[
            {
            languageId:'HINDI', 
            mainHeading:"हमारी ओर से एक संदेश"
            }, 
            {
            languageId:'ENGLISH', 
            mainHeading:"A Message from Us"
            }, 
            {
            languageId:'GARHWALI', 
            mainHeading:"हमारि ओर स एक संदेश"
            }
        ]
    },
    {
        ourTeamMsg:[
            {
                languageId:'HINDI',
                data:[
                    {
                        id:1,
                        messanger:'अध्यक्षीय संदेश',     
                        greetingMsg:'आपका शुभचिंतक', 
                        name:'श्री कमल ध्यानी', 
                        designation:'अध्यक्ष, महानगर दिल्ली उत्तराखंड प्रवासी संगठ', 
                        organization:'',
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744121963/WhatsApp_Image_2025-04-08_at_19.07.55_3f450489_urla4k.jpg',
                        msg:`प्रिय उत्तराखंड प्रवासी भाई-बहनों, महानगर दिल्ली उत्तराखंड प्रवासी संगठन 
                        की ओर से आप सभी को हार्दिक शुभकामनाएँ। यह संगठन उत्तराखंड के मूल निवासियों 
                        को एकजुट करने, उनके अधिकारों की रक्षा करने और उनके सामाजिक, आर्थिक 
                        और शैक्षिक विकास के लिए कार्य करने के उद्देश्य से स्थापित किया गया है। 
                        हमारा संगठन केवल एक सामाजिक मंच नहीं है, बल्कि यह एक ऐसी प्रेरणा है 
                        जो प्रवासियों को आत्मनिर्भर बनाने, उनकी संस्कृति को संरक्षित रखने और उनकी आने 
                        वाली पीढ़ियों के लिए एक उज्जवल भविष्य सुनिश्चित करने का कार्य करता है। 
                        हमने शिक्षा, स्वास्थ्य, रोजगार, आवास और सामाजिक उत्थान के क्षेत्र में कई 
                        महत्वपूर्ण पहल की हैं, जो न केवल प्रवासियों को सशक्त बना रही हैं 
                        बल्कि उत्तराखंड की समृद्ध परंपराओं को भी जीवित रखे हुए हैं। मुझे गर्व है 
                        कि हमारी टीम पूरी निष्ठा और समर्पण के साथ समाज की सेवा में कार्यरत है। 
                        हमने पांच बारात घरों का निर्माण कर आर्थिक रूप से कमजोर परिवारों की सहायता की है, 
                        मेधावी छात्रों के लिए मुफ्त छात्रावास और शिक्षा सहायता प्रदान की है, 
                        और हर वर्ष 12 जरूरतमंद परिवारों की बेटियों के विवाह का आयोजन कर रहे हैं। 
                        इसके साथ ही, शहीद परिवारों की सहायता, कानूनी परामर्श और प्रवासियों के लिए 
                        स्थायी आवास की सुविधा जैसी पहल भी हमारी प्राथमिकताओं में शामिल हैं। 
                        हमारा मानना है कि जब तक हम संगठित रहेंगे और एक-दूसरे का सहयोग करेंगे, 
                        तब तक कोई भी बाधा हमें आगे बढ़ने से रोक नहीं सकती। यह संगठन केवल 
                        वर्तमान के लिए नहीं, बल्कि हमारी आने वाली पीढ़ियों के लिए भी काम कर रहा है, 
                        ताकि वे अपनी जड़ों से जुड़कर एक बेहतर भविष्य की ओर अग्रसर हो सकें। 
                        मैं आप सभी से अपील करता हूँ कि इस मिशन में हमारा साथ दें, 
                        संगठन की गतिविधियों में सक्रिय भाग लें और उत्तराखंड के प्रवासी समाज को एक 
                        नई ऊँचाई तक पहुँचाने में योगदान दें। आपका समर्थन और सहयोग ही हमारी सबसे बड़ी ताकत है।`
                    }, 
                    {
                        id:2,
                        messanger:'', 
                        greetingMsg:'', 
                        name:'महावीर फर्शवान', 
                        designation:'कानूनी सलाहकार', 
                        organization:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन', 
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744121964/WhatsApp_Image_2025-04-08_at_19.04.23_aba5fc33_hdfmir.jpg',
                        msg:`मैं, महावीर फर्शवान, महानगर दिल्ली उत्तराखंड प्रवासी संगठन (रजि.) का कानूनी सलाहकार, 
                        संगठन की मूल भावनाओं और उद्देश्यों के प्रति अपनी प्रतिबद्धता व्यक्त करता हूँ। हमारा संगठन 
                        उत्तराखंड के मूल निवासियों के अधिकारों, सम्मान और कल्याण के लिए समर्पित है। हम दिल्ली 
                        में रह रहे उत्तराखंडी प्रवासियों को न केवल सामाजिक और सांस्कृतिक रूप से संगठित करने का कार्य कर रहे हैं, 
                        बल्कि उनके कानूनी अधिकारों की रक्षा और प्रशासनिक सहायता प्रदान करने के लिए भी तत्पर हैं। हमारा उद्देश्य 
                        प्रवासी समाज को शिक्षा, रोजगार, स्वास्थ्य सेवाओं और सामाजिक कल्याण से जुड़ी योजनाओं का लाभ दिलाना है। 
                        संगठन यह विश्वास रखता है कि एकता ही हमारी सबसे बड़ी शक्ति है, और जब तक हम संगठित नहीं होंगे, 
                        तब तक हम अपने अधिकारों की रक्षा प्रभावी रूप से नहीं कर पाएंगे। मैं, अपने कानूनी सलाहकार के रूप में, 
                        यह सुनिश्चित करने के लिए प्रतिबद्ध हूँ कि प्रत्येक उत्तराखंडी प्रवासी को न्याय और उनके अधिकारों की सुरक्षा मिले। 
                        संगठन के सभी सदस्यों से अनुरोध है कि वे अपने अधिकारों के प्रति जागरूक रहें और किसी भी कानूनी सहायता 
                        की आवश्यकता होने पर हमसे संपर्क करें। हम सब मिलकर उत्तराखंडी प्रवासियों के उज्जवल भविष्य और उनके 
                        अधिकारों की रक्षा के लिए निरंतर कार्य करते रहेंगे।
                        ` 
                    }, 
                    {
                        id:3, 
                        messanger:'जय हिंद, जय उत्तराखंड', 
                        greetingMsg:'आपका शुभाकांक्षी', 
                        name:'हरेंद्र सिंह रावत', 
                        designation:'',
                        organization:'', 
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744121964/WhatsApp_Image_2025-04-08_at_19.04.23_236dc1c6_jvgkhj.jpg',
                        msg:`मेरे प्यारे देवभूमि उत्तराखंड वासियों मै हरेंद्र सिंह रावत मूलरूप से उत्तराखंड के धुमाकोट, 
                        पौड़ी गढ़वाल मै मेरा जन्म हुआ, ओर इस समय मै पहलादपुर, बदरपुर दिल्ली मै मेरा निवास है, 
                        मै विगत 25 वर्षों से अकाउंट के क्षेत्र मै कार्यरत हु, आप सभी को अत्यंत हर्षिल मन से यह कहते 
                        हुए बड़े ही हर्ष की अनुभूति हो रही है कि देवभूमि उत्तराखंड के मूल निवासियों के जन कल्याण 
                        हेतु समर्पित व समर्थित महानगर दिल्ली उत्तराखंड प्रवासी संगठन (रजि.)अपनी संस्कृति, सभ्यता 
                        और विरासत को संजोए व समेटे हुए निरंतर जन जाग्रति - जन सेवार्थ आप हम सभी के अभूतपूर्व 
                        प्रयासों से एकजुट - एकमुट के तहत अपने उत्तराखंडी समाज / समुदाय के विकास, विस्तार और 
                        सहायता के लिए उत्तराखंड के मूल निवासियों के सामाजिक सुरक्षा, आर्थिक सुरक्षा और शैक्षिक 
                        उत्थान हेतु कार्य कर रहा है| संगठन उत्तराखंड के प्रत्येक नागरिक को समृद्ध और खुशहाल बनाने 
                        के लिए विभिन्न योजनाओं का संचालन कर रहा है, संगठन की मुख्य प्राथमिकता है उत्तराखंड के 
                        प्रवासियों को एक मंच पर लाकर एक मजबूत और सशक्त समाज बनाना हैं। मुझे संगठन द्वारा 
                        कोषाध्यक्ष का कार्यभार संभालने की जिम्मेदारी दी गई है, मै संगठन का बहुत आभार प्रकट करते हुए 
                        अपने दायित्वों को पूरा करने के लिए बचनबद्ध हूं, ओर मै कोषाध्यक्ष के पद पर होने के नाते संगठन 
                        के खातों का वित्त पारदर्शिता बनाए रखना ओर अपने कर्तव्यों का निर्वाहन कुशलता पूर्वक करने का 
                        प्रयास करता रहूंगा`
                    }, 
                    {
                        id:4, 
                        messanger:'प्रधान का संदेश',
                        greetingMsg:'आपका सेवक',
                        name:'हरपाल सिंह मनराल, प्रधान',
                        designation:'',
                        organization:'',
                        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1749463120/WhatsApp_Image_2025-04-09_at_14.42.04_b8877d8e_aiq1ml.jpg',
                        msg:`प्रिय प्रवासी उत्तराखंडी भाई-बहनों, उत्तराखंड की मिट्टी से जुड़ाव और हमारी सांस्कृतिक विरासत को जीवंत बनाए 
                        रखने के उद्देश्य से महानगर दिल्ल उत्तराखंड प्रवासी संगठन लगातार कार्य कर रहा है। एक प्रधान के रूप में मेरा यह विश्वास 
                        है कि जब प्रवासी मूलनिवासी संगठित होते हैं, तो वे सिर्फ अपने हक के लिए आवाज़ नहीं उठाते, बल्कि एक दूसरे 
                        के लिए भी ताकत बनते हैं। हमने सामूहिक प्रयासों से जो उपलब्धियाँ हासिल की हैं — चाहे वह बारात घरों का निर्माण 
                        हो या शिक्षा में सहयोग — ये हमारे एकजुट प्रयास का परिणाम हैं। आइए, हम सब मिलकर उत्तराखंड की पहचान को 
                        और सशक्त बनाएं और आने वाली पीढ़ियों को एक गौरवशाली धरोहर सौंपें।`
                    }, 
                    {
                        id:5,
                        messanger:'महासचिव का संदेश', 
                        greetingMsg:'आपका साथी', 
                        name:'मुकेश खंडेलवाल, महासचिव',
                        designation:'',
                        organization:'',
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.40.48_d4c0aa5a_ltbn3z.jpg',
                        msg:`नमस्कार, महानगर दिल्ल उत्तराखंड प्रवासी संगठन के महासचिव के रूप में, मेरा लक्ष्य है 
                        संगठन के उद्देश्यों को सुचारू रूप से कार्यान्वित करना और प्रवासी मूलनिवासियों के कल्याण के 
                        लिए नीतियाँ बनाना। हमारे संगठन ने जिन ठोस पहलों को अंजाम दिया है — जैसे कि शिक्षा सहायता, 
                        विवाह आयोजन, और स्वास्थ्य सेवाएं — वे सब समर्पण और संगठनात्मक प्रयास का परिणाम हैं। 
                        महासचिव होने के नाते मेरी ज़िम्मेदारी है कि आपकी आवाज़ संगठन तक पहुँचे और संगठन की 
                        शक्ति आप तक। आइए, संगठन को मजबूत बनाएं और हर उत्तराखंडी को उसका हक दिलाएं।`
                    }, 
                    {
                        id:6,
                        messanger:'मीडिया प्रभारी का संदेश', 
                        greetingMsg:'आपका संप्रेषक', 
                        name:'श्री विकास ढौंडियाल, मीडिया प्रभारी',
                        designation:'',
                        organization:'',
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.41.13_c1bde961_ytlikm.jpg',
                        msg:`प्रिय उत्तराखंडी साथियों, आज की डिजिटल दुनिया में हमारी पहचान, हमारी संस्कृति 
                        और हमारे सरोकारों को सही माध्यम से प्रस्तुत करना अत्यंत आवश्यक है। मीडिया प्रभारी 
                        के रूप में मेरा उद्देश्य है कि महानगर दिल्ल उत्तराखंड प्रवासी संगठन की गतिविधियाँ, 
                        योजनाएँ और सफलता की कहानियाँ हर प्रवासी मूलनिवासी तक पहुँचें। चाहे वह हमारे 
                        समाज सेवा कार्य हों या सांस्कृतिक आयोजन — मेरा प्रयास रहेगा कि हर पहल आपके 
                        दिल से जुड़े, और हमें एक दूसरे से जोड़ती रहे। हमारा संगठन एक आवाज़ नहीं, 
                        बल्कि एक गूंज बनकर उभरे — यही मेरा लक्ष्य है।`
                    }
                ]
            },
            {
                languageId: 'ENGLISH',
                data:[
                    {
                        id:1,
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744121963/WhatsApp_Image_2025-04-08_at_19.07.55_3f450489_urla4k.jpg',
                        messanger: 'President’s Message',
                        greetingMsg: 'Your Well-Wisher',
                        name: 'Shri Kamal Dhyani', 
                        designation: 'President, Mahanagar Delhi Uttarakhand Pravasi Sangathan', 
                        organization:'',
                        msg: `Dear Uttarakhand Pravasi brothers and sisters, 
                        Warm greetings from the Mahanagar Delhi Uttarakhand Pravasi Sangathan. 
                        This organization has been established with the aim of uniting the native 
                        residents of Uttarakhand, protecting their rights, and working for their 
                        social, economic, and educational development. Our organization is not just 
                        a social platform but an inspiration to make migrants self-reliant, 
                        preserve their culture, and ensure a bright future for their upcoming generations. 
                        We have taken several important initiatives in the fields of education, 
                        health, employment, housing, and social upliftment. These initiatives 
                        are not only empowering migrants but also keeping alive the rich 
                        traditions of Uttarakhand. I am proud that our team is serving society 
                        with full dedication and sincerity. We have constructed five community 
                        halls (baraat ghars) to support economically weaker families, provided 
                        free hostels and educational assistance to meritorious students, and 
                        organize weddings for the daughters of 12 needy families every year. 
                        In addition, supporting martyr families, providing legal advice, and 
                        facilitating permanent housing for migrants are also among our priorities. 
                        We believe that as long as we remain united and support each other, no obstacle 
                        can stop us from moving forward. This organization is working not just for the present, 
                        but also for the coming generations so that they can stay connected to their roots and 
                        move toward a better future. I appeal to all of you to join this mission, participate 
                        actively in the organization’s activities, and contribute to taking the migrant society 
                        of Uttarakhand to new heights. Your support and cooperation are our greatest strength.`
                    },
                    {
                        id: 2,
                        messanger: '', 
                        greetingMsg: '', 
                        name: 'Mahaveer Farshwan', 
                        designation: 'Legal Advisor', 
                        organization: 'Mahanagar Delhi Uttarakhand Pravasi Sangathan', 
                        img: 'https://res.cloudinary.com/da52fiag8/image/upload/v1744121964/WhatsApp_Image_2025-04-08_at_19.04.23_aba5fc33_hdfmir.jpg', 
                        msg: `I, Mahaveer Farshwan, Legal Advisor of the Mahanagar Delhi Uttarakhand Pravasi Sangathan (Regd.), 
                        express my commitment to the core values and objectives of the organization. Our organization is 
                        dedicated to the rights, dignity, and welfare of the natives of Uttarakhand. We are not only working 
                        to unite the Uttarakhandi migrants residing in Delhi socially and culturally, but are also committed 
                        to protecting their legal rights and providing administrative assistance. Our goal is to help the 
                        migrant community benefit from schemes related to education, employment, healthcare services, and 
                        social welfare. The organization believes that unity is our greatest strength, and unless we are 
                        united, we will not be able to effectively protect our rights. As a legal advisor, I am committed to 
                        ensuring that every Uttarakhandi migrant receives justice and protection of their rights. I request 
                        all members of the organization to stay aware of their rights and reach out to us for any legal 
                        assistance. Together, we will continue working tirelessly for the bright future and protection of the 
                        rights of Uttarakhandi migrants.`
                    },
                    {
                        id: 3, 
                        messanger: 'Jai Hind, Jai Uttarakhand', 
                        greetingMsg: 'Your Well-Wisher', 
                        name: 'Harendra Singh Rawat', 
                        designation: '', 
                        organization: '', 
                        img: 'https://res.cloudinary.com/da52fiag8/image/upload/v1744121964/WhatsApp_Image_2025-04-08_at_19.04.23_236dc1c6_jvgkhj.jpg', 
                        msg: `My dear residents of Devbhoomi Uttarakhand, I am Harendra Singh Rawat, originally from Dhumakot, 
                        Pauri Garhwal, Uttarakhand. I currently reside in Prahladpur, Badarpur, Delhi. I have been working in 
                        the field of accounting for the past 25 years. It gives me immense joy and pride to share that the 
                        Mahanagar Delhi Uttarakhand Pravasi Sangathan (Regd.), dedicated to the welfare of the native residents 
                        of Devbhoomi Uttarakhand, continues to preserve and uphold our culture, heritage, and values. 
                        Through our collective and extraordinary efforts, the organization is actively working toward the 
                        awareness and service of our people—focusing on the development, expansion, and support of our 
                        Uttarakhandi society/community. It is committed to ensuring social security, economic stability, and 
                        educational upliftment of the natives of Uttarakhand. The organization is running various programs 
                        aimed at making every citizen of Uttarakhand prosperous and happy. Its main priority is to bring 
                        all Uttarakhandi migrants onto one platform to build a strong and empowered society.I have been 
                        entrusted with the responsibility of Treasurer by the organization. I express my heartfelt 
                        gratitude to the organization and solemnly pledge to fulfill my duties. As the Treasurer, 
                        I will strive to maintain financial transparency and perform my responsibilities diligently 
                        and efficiently.`
                    }, 
                    {
                        id: 4, 
                        messanger: "Message from the Pradhan", 
                        greetingMsg: "Your Servant", 
                        name: "Harpal Singh Manral, Pradhan", 
                        designation: "", 
                        organization: "", 
                        img: "https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.42.04_093b5b5f_cuwca6.jpg",
                        msg: `Dear migrant brothers and sisters from Uttarakhand, With the aim of staying connected 
                        to the soil of Uttarakhand and keeping our cultural heritage alive, the Mahanagar Delhi 
                        Uttarakhand Pravasi Sangathan is continuously working. As a Pradhan (leader), I believe that 
                        when migrant natives come together, they not only raise their voices for their rights but also 
                        become a strength for one another. The achievements we have gained through collective efforts — 
                        whether it is the construction of community halls or support in education — are a result of our 
                        unity.Let us all come together to strengthen the identity of Uttarakhand and pass on a proud 
                        legacy to the generations to come.`
                    }, 
                    {
                        id: 5, 
                        messanger: "Message from the General Secretary", 
                        greetingMsg: "Your Companion", 
                        name: "Mukesh Khandelwal, General Secretary", 
                        designation: "", 
                        organization: "", 
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.40.48_d4c0aa5a_ltbn3z.jpg',
                        msg: `Greetings, As the General Secretary of the Mahanagar Delhi Uttarakhand Pravasi Sangathan, 
                        my goal is to smoothly implement the organization's objectives and formulate policies for the 
                        welfare of migrant natives. The concrete initiatives our organization has undertaken — 
                        such as educational assistance, wedding arrangements, and healthcare services — 
                        are all results of dedication and organizational effort. As General Secretary, it is my 
                        responsibility to ensure that your voice reaches the organization, and the strength of the 
                        organization reaches you. Let us strengthen the organization and secure the rights of every 
                        Uttarakhandi.`
                    }, 
                    {
                        id: 6,
                        messanger: "Message from the Media In-charge", 
                        greetingMsg: "Your Communicator", 
                        name: "Mr. Vikas Dhoundiyal, Media In-charge", 
                        designation: "", 
                        organization: "", 
                        img: "https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.41.13_c1bde961_ytlikm.jpg",
                        msg: `Dear Uttarakhandi companions, In today's digital world, it is extremely important 
                        to represent our identity, culture, and concerns through the right medium. As the Media 
                        In-charge, my objective is to ensure that the activities, initiatives, and success stories 
                        of the Mahanagar Delhi Uttarakhand Pravasi Sangathan reach every migrant native of Uttarakhand. 
                        Whether it is our community service work or cultural programs — my constant effort will be to 
                        connect each initiative to your heart and keep us all united. It is my goal that our organization does not just remain a voice, but emerges as a powerful echo.`
                    }
                ]
            },
            {
                languageId:'GARHWALI', 
                data:[
                    {
                        id:1,
                        messanger: 'अध्यक्ष कु संदेस',
                        greetingMsg: 'थुंकार शुभचिंतक',
                        img:'https://res.cloudinary.com/da52fiag8/image/upload/v1744121963/WhatsApp_Image_2025-04-08_at_19.07.55_3f450489_urla4k.jpg',
                        name: 'श्री कमल ध्यानी',
                        designation: 'अध्यक्ष, महानगर दिल्ली उत्तराखंड परवासी संगठन',
                        organization:'',
                        msg: `प्यारा उत्तराखंडी परवासी भाई-बहनौं, महानगर दिल्ली उत्तराखंड परवासी संगठन कु बटैं आपण सबकु दिल सै नमस्कार। 
                        ई संगठन उत्तराखंड के मुलनिवासी जनमनक एकठु करन, उनका अधिकारौं की रखवाली करन अर सामाजिक, आर्थिक अर 
                        शैक्षिक विकास लि बनायो गयोल छ। हमारो संगठन सिर्फ एक सामाजिक मंच नि, बल्कि एक प्रेरणा छ — जे परवासी जनमनक 
                        आत्मनिर्भर बनाण, आपणी संस्कृति बचाण अर आपणा बाळ-बच्चन का लि उज्याल भविष्य बणाण म लागलो छ।  
                        हम शिक्षा, स्वास्थ्य, रोजगार, आवास अर सामाजिक उन्नति म कई महत्वपूण पहल कर चुक्या छ, जे ना केवल परवासी जनमनक 
                        सशक्त बना रयां छ, बल्की उत्तराखंड की समृद्ध परंपराओं लि भी जिंदा राख रयां छ। म्यर गर्व छ कि हमार टीम पूरी निष्ठा 
                        अर समर्पण सै समाज की सेवा म लागी छ। हम पांज बारात घर बनायां, जे आर्थिक रूप स कमजोर परिवारौं की मदद करछं। 
                        मेधावी छात्र-छात्राओं लि मुफ्त हॉस्टल अर शिक्षा मदद भी दीन गयोल छ। हर साल १२ जरुरतमंद परिवारौं की बेट्यौं कु विवाह हम करावां। 
                        साथ ही, शहीद परिवारौं की मदद, कानूनी सलाह अर परवासी जनमानस लि स्थायी आवास की सुविधा भी हमार प्राथमिकता म छ। 
                        मारो बिस्वास छ — जब तक हम संगठित छौं, एक-दूजाक साथ दैत र्ह्यां, तब तक कोई भी बाधा हमैं अगाड़ी बढ़ण सै रोक नि सकदी। 
                        ई संगठन सिर्फ आज लि नि, बल्की हमार आऊंदा पीढ़ीन लि काम कर रयोल छ, जिंसै वे आपणा जड़ सै जुड़िक एक बेहतर भविष्य 
                        की ओर बढ़ सकां। मैं आप सब सै अपील करथौं — इस मिशन म हमार साथ दिउ, संगठन की गतिविधियन म सक्रिय भाग लियौं, 
                        अर उत्तराखंड के परवासी समाज लि एक नैं ऊँचाई तक ल्यान म मदद करौं। थुंकार साथ अर सहयोग हमार सबस बड़ी ताकत छ।`
                    }, 
                    {
                        id: 2,
                        messanger: '', 
                        greetingMsg: '', 
                        name: 'महावीर फर्शवान', 
                        designation: 'कानूनी सलाहकार', 
                        organization: 'महानगर दिल्ली उत्तराखंड प्रवासी संगठन', 
                        img: 'https://res.cloudinary.com/da52fiag8/image/upload/v1744121964/WhatsApp_Image_2025-04-08_at_19.04.23_aba5fc33_hdfmir.jpg',
                        msg: `म्यर नांव महावीर फर्शवान छन, और मै महानगर दिल्ली उत्तराखंड प्रवासी संगठन (रजि.) को कानूनी सलाहकार छुं। 
                        यो संगठन उत्तराखंड का मूल निवासीयूं का हक, सम्मान और भलाइ खातर समर्पित छन। दिल्ली मं बसण वाल्यां उत्तराखंडीयूं 
                        क संस्कृति बणाए राखण, एकजुट करण और उनक कानूनी हकां की रक्षा करण, साथ ही प्रशासनिक मदद देण हमार मुख्य 
                        उद्देश्य छन। हम चा र्यां कि हर प्रवासी भाई-बहिन शिक्षां, रोजगार, स्वास्थ्य और समाज कल्याण स जुड़ल योजनां स फाइदा 
                        लै पावैं। संगठन को विश्वास छन कि एकता हमार सबसे बड़ी ताकत छन। जब तक हम सब एकजुट नि ह्वैं, 
                        तब तक अपन हकां की रक्षा ढंग स नि कर पाउल। मै, कानूनी सलाहकार की हैसियत स, या भरोसा दिना छुं 
                        कि हर उत्तराखंडी प्रवासी नै न्याय मिलौं और उनक अधिकार सुरक्षित रौं। संगठन के सब सदस्य्यूं स अनुरोध छन कि आपणा 
                        हकां के प्रति जागरूक रैण और जदि कखणी भी कानूनी मदद की जरूरत पैल, त हमन स जरूर संपर्क करण। 
                        हम सब मिलकै उत्तराखंडी प्रवासीयूं का उज्ज्वल भविष्य और हकां की रक्षा खातर लगातार काम करद रूल।`
                    }, 
                    {
                        id: 3,
                        messanger: 'जय हिंद, जय उत्तराखंड', 
                        greetingMsg: 'आपका शुभाकांक्षी', 
                        name: 'हरेंद्र सिंह रावत', 
                        designation: '',
                        organization: '', 
                        img: 'https://res.cloudinary.com/da52fiag8/image/upload/v1744121964/WhatsApp_Image_2025-04-08_at_19.04.23_236dc1c6_jvgkhj.jpg',
                        msg: `म्यारा प्यारा देवभूमि उत्तराखंड वासीयों, म्यर नांव हरेंद्र सिंह रावत छन। म्यर जन्म उत्तराखंड के धुमाकोट, 
                        पौड़ी गढ़वाल मं भैल, और इस बखत म्यर निवास स्थल पहलादपुर, बदरपुर दिल्ली मं छन। म्ये पछिल 25 बरस 
                        स अकाउंट के छेत्र मं काम कर रया छुं। अपण सब स या बात बणण मं म्ये गर्व महसूस करद छुं कि महानगर 
                        दिल्ली उत्तराखंड प्रवासी संगठन (रजि.) — जेकि देवभूमि उत्तराखंड के मूलनिवासीयों का भलाइ खातर समर्पित 
                        और समर्थित संगठन छन — अपनी संस्कृति, सभ्यता और विरासत नै संजोय राखण खातर निरंतर जन जागरूकता 
                        और जन सेवा मं जुटाल छन। अपण सब की एकता और योगदान स, यो संगठन उत्तराखंडी समाज के विकास, 
                        विस्तार और मदद खातर सामाजिक सुरक्षा, आर्थिक सुरक्षा और शैक्षिक विकास मं लागल छन। संगठन का मुख्य 
                        उद्देश्य ये छन कि प्रवासी उत्तराखंडीयों नै एक मंच मं लै आइकै एक मजबूत और सशक्त समाज तैआर करौं। म्ये 
                        संगठन स कोषाध्यक्ष को दायित्व मिलल छन, और म्ये संगठन को आभार प्रकट करद छुं। म्ये बचन दिंछुं कि म्ये 
                        आपणा दायित्व निष्ठा और पारदर्शिता स निभाउल और संगठन के खातों मं वित्तीय ईमानदारी और व्यवस्था बनाए 
                        राखन मं निरंतर प्रयास करद रुल।`
                    }, 
                    {
                        id: 4, 
                        messanger: 'प्रधान का संदेश',
                        greetingMsg: 'आपका सेवक',
                        name: 'हरपाल सिंह मनराल, प्रधान',
                        designation: '',
                        organization: '',
                        img: 'https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.42.04_093b5b5f_cuwca6.jpg',
                        msg: `प्यारे प्रवासी उत्तराखंडी भुला-बैणो, उत्तराखंड की माटी स जुड़ाव और अपनी सांस्कृतिक विरासत नै 
                        जिंदा राखण खातर महानगर दिल्ली उत्तराखंड प्रवासी संगठन निरंतर काम कर राल छन। प्रधान होण की नाते, 
                        म्यर यो विश्वास छन कि जां प्रवासी मूलनिवासी संगठित होलां, तां उ केवल अपन हक खातर आवाज़ नै उठौंद, 
                        बल्कि एक-दूजे का खातर भी बल बणिजां। सामूहिक प्रयासों स हम जि उपलब्धियाँ पाई छन — जैंमा बारात घरों 
                        को निर्माण हो या शिक्षा मं सहयोग — या सब हमारी एकजुटता को परिणाम छन। आओ, हम सब मिलकै उत्तराखंड की 
                        पहचान नै और मजबूत बणौला, और अगली पीढ़ी खातर एक गौरवशाली विरासत छोड़ौं।`
                    },
                    {
                        id: 5, 
                        messanger: 'महासचिव को संदेश', 
                        greetingMsg: 'आपक साथी', 
                        name: 'मुकेश खंडेलवाल, महासचिव', 
                        designation: '', 
                        organization: '', 
                        img: 'https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.40.48_d4c0aa5a_ltbn3z.jpg', 
                        msg: `जय देवभूमि, महानगर दिल्ली उत्तराखंड प्रवासी संगठन के महासचिव की रूप मं, म्यर मुख्य मकसद इ 
                        छन कि संगठन का उद्देश्यां नै ठीक ढंग स लागू करौं और प्रवासी मूलनिवासियों का भलाइ खातर ठोस नीति बनौं। 
                        संगठन जि-जि ठोस पहल करी — जैमां शिक्षा मं मदद, ब्या-शादी का आयोजन, और स्वास्थ्य सेवाएं — 
                        वा सब समर्पण और संगठन की मेहनत का नतीजा छन। महासचिव होण की नाते, म्यर ये जिम्मेदारी छन कि आप 
                        सबकी आवाज़ संगठन तलक पहुँचे और संगठन की ताकत आप तलक। आओ, हम सब मिलकै संगठन नै और मजबूत 
                        बनौला और हर एक उत्तराखंडी भुला-बैण नै उनक हक दिलौला।`
                    }, 
                    {
                        id: 6,
                        messanger: 'मीडिया प्रभारी को संदेश',
                        greetingMsg: 'आपक संप्रेषक',
                        name: 'श्री विकास ढौंडियाल, मीडिया प्रभारी',
                        designation: '',
                        organization: '',
                        img: 'https://res.cloudinary.com/da52fiag8/image/upload/v1744190596/WhatsApp_Image_2025-04-09_at_14.41.13_c1bde961_ytlikm.jpg',
                        msg: `प्यारे उत्तराखंडी भुला-बैणो, आजुक डिजिटल दुनिया मं हमार पहचान, हमार संस्कृति और हमार सरोकार 
                        सही ढंग स देखाण जरूरी छन। मीडिया प्रभारी की रूप मं, म्यर ई मकसद छन कि महानगर दिल्ली उत्तराखंड 
                        प्रवासी संगठन की गतिविधि, योजना और सफलता की बात हर एक प्रवासी मूलनिवासी तक पहुँचे। चै ब्यो समाज 
                        सेवा का काम हो या हमार सांस्कृतिक आयोजन — म्यर कोसिस यै रहेली कि हरेक पहल आपक मन स जुड़ि रौल्यू 
                        और हम सब एक-दूजा स जोड़ि रौल्यू। हमार संगठन एक भर आवाज ना, बल कि एक गूंज बनिकै उभरन — 
                        यै म्यर असल उद्देश्य छन।`
                    }
                ]
            }
        ]
    },
    {
        KaryeKariniSadasaye:[
            {
                languageId:'HINDI',
                mainHeading:'कार्यकारिणी सदस्य',
                data:[
                    {id:1, designation:'अध्यक्ष', name:'श्री कमल ध्यानी', color:' #32338b'}, 
                    {id:2,designation:'अध्यक्ष के विशेष सलाहकार', name:'श्री धीरेन्द्र सिंह रावत', color:' #ff0000'}, 
                    {id:3, designation:'लीगल एडवाइज़र (ऐडवोकेट)', name:'श्री महावीर सिंह फर्शवान', color:' #ff4500'}, 
                    {id:4, designation:'संरक्षक', name:  'श्री बालम सिँह गुंसाई', color:' #32cd32'}, 
                    {id:5, designation:' संयोजक', name:'श्री रघुबीर सिंह पटवाल', color:' #ffa500'}, 
                    {id:6, designation:'प्रधान', name:'श्री हरपाल सिंह मनराल', color:' #008080'}, 
                    {id:7,designation:'उपप्रधान', name:'श्री सुभाष चंद्र खंशूली', color:' #007fff'}, 
                    {id:8, designation:'महासचिव', name:'श्री मुकेश खंतवाल', color:' #ffa500'}, 
                    {id:9, designation:'सचिव', name:'श्री बीरेंद्र पटवाल', color:' #ba55d3'}, 
                    {id:10, designation:'सहसचिव', name:'श्रीमति लक्ष्मी नेगी', color:' #757575'}, 
                    {id:11, designation:'कोषाध्यक्ष', name:'श्री हरेंद्र रावत', color:' #800000'}, 
                    {id:12, designation:'सह कोषाध्यक्ष', name:'श्री हरीश भट्ट', color:' #32338b'}
                ]           
            }, 
            {
                languageId:'ENGLISH', 
                mainHeading:'Executive Member',
                data:[
                    { id: 1, designation: 'President', name: 'Shri Kamal Dhyani', color: '#32338b' },
                    { id: 2, designation: 'Special Advisor to President', name: 'Shri Dhirendra Singh Rawat', color: '#ff0000' },
                    { id: 3, designation: 'Legal Advisor (Advocate)', name: 'Shri Mahavir Singh Farshwan', color: '#ff4500' },
                    { id: 4, designation: 'Patron', name: 'Shri Balam Singh Gunsai', color: '#32cd32' },
                    { id: 5, designation: 'Coordinator', name: 'Shri Raghubeer Singh Patwal', color: '#ffa500' },
                    { id: 6, designation: 'Chief', name: 'Shri Harpal Singh Manral', color: '#008080' },
                    { id: 7, designation: 'Vice Chief', name: 'Shri Subhash Chandra Khanshuli', color: '#007fff' },
                    { id: 8, designation: 'General Secretary', name: 'Shri Mukesh Khantwal', color: '#ffa500' },
                    { id: 9, designation: 'Secretary', name: 'Shri Birendra Patwal', color: '#ba55d3' },
                    { id: 10, designation: 'Joint Secretary', name: 'Shrimati Laxmi Negi', color: '#757575' },
                    { id: 11, designation: 'Treasurer', name: 'Shri Harendra Rawat', color: '#800000' },
                    { id: 12, designation: 'Joint Treasurer', name: 'Shri Harish Bhatt', color: '#32338b' }
            ]
            }, 
            {
                languageId:'GARHWALI', 
                mainHeading:'कार्यकारिणी सदस्य',
                data:[
                    {id:1, designation:'अध्यक्ष', name:'श्री कमल ध्यानी', color:' #32338b'}, 
                    {id:2,designation:'अध्यक्ष के विशेष सलाहकार', name:'श्री धीरेन्द्र सिंह रावत', color:' #ff0000'}, 
                    {id:3, designation:'लीगल एडवाइज़र (ऐडवोकेट)', name:'श्री महावीर सिंह फर्शवान', color:' #ff4500'}, 
                    {id:4, designation:'संरक्षक', name:  'श्री बालम सिँह गुंसाई', color:' #32cd32'}, 
                    {id:5, designation:' संयोजक', name:'श्री रघुबीर सिंह पटवाल', color:' #ffa500'}, 
                    {id:6, designation:'प्रधान', name:'श्री हरपाल सिंह मनराल', color:' #008080'}, 
                    {id:7,designation:'उपप्रधान', name:'श्री सुभाष चंद्र खंशूली', color:' #007fff'}, 
                    {id:8, designation:'महासचिव', name:'श्री मुकेश खंतवाल', color:' #ffa500'}, 
                    {id:9, designation:'सचिव', name:'श्री बीरेंद्र पटवाल', color:' #ba55d3'}, 
                    {id:10, designation:'सहसचिव', name:'श्रीमति लक्ष्मी नेगी', color:' #757575'}, 
                    {id:11, designation:'कोषाध्यक्ष', name:'श्री हरेंद्र रावत', color:' #800000'}, 
                    {id:12, designation:'सह कोषाध्यक्ष', name:'श्री हरीश भट्ट', color:' #32338b'}
                ]        
            }
        ]
},
    {
        OrganizationMember:[
        {
            languageId:'HINDI', 
            mainHeading:'संगठन मंत्री',
            data:[
                {id:1, name:'श्रीमति भारती जोशी', color:' #ba55d3'}, 
                {id:2, name:'श्री बसंत पटवाल', color:' #32338b'}, 
                {id:3, name:'श्री आनंद सिंह बिष्ट', color:' #ffa500'}, 
                {id:4, name:'श्री सरिश ढौंडियाल', color:' #800000'}, 
                {id:5, name:'श्री मनोज गौड़',  color:' #757575'}, 
                {id:6, name:'श्री सुरजीत नेगी', color:' #32cd32'}, 
                {id:7, name:'सह संगठन मंत्री - श्री नवीन धुलिया', color:' #ff0000'}  
            ]
        }, 
        {
            languageId:'ENGLISH', 
            mainHeading:'Organization Minister',
            data: [
                { id: 1, name: 'Mrs. Bharti Joshi', color: '#ba55d3' },
                { id: 2, name: 'Mr. Basant Patwal', color: '#32338b' },
                { id: 3, name: 'Mr. Anand Singh Bisht', color: '#ffa500' },
                { id: 4, name: 'Mr. Sarish Dhoundiyal', color: '#800000' },
                { id: 5, name: 'Mr. Manoj Gaur', color: '#757575' },
                { id: 6, name: 'Mr. Surjeet Negi', color: '#32cd32' },
                { id: 7, name: 'Deputy Organization Minister - Mr. Naveen Dhulia', color: '#ff0000' }
            ]
        }, 
        {
            languageId:'GARHWALI', 
            mainHeading:'संगठन मंत्री',
            data:[
                {id:1, name:'श्रीमति भारती जोशी', color:' #ba55d3'}, 
                {id:2, name:'श्री बसंत पटवाल', color:' #32338b'}, 
                {id:3, name:'श्री आनंद सिंह बिष्ट', color:' #ffa500'}, 
                {id:4, name:'श्री सरिश ढौंडियाल', color:' #800000'}, 
                {id:5, name:'श्री मनोज गौड़',  color:' #757575'}, 
                {id:6, name:'श्री सुरजीत नेगी', color:' #32cd32'}, 
                {id:7, name:'सह संगठन मंत्री - श्री नवीन धुलिया', color:' #ff0000'}  
            ]
        }
    ]
},
    {
        Pracharak:[
        {
            languageId:'HINDI', 
            mainHeading:'प्रचारक',
            data:[
                {id:1, name:'श्री एल जी गोस्वामी',  color:' #32cd32'},
                {id:2, name: 'श्री धर्मेंद्र रावत', color:' #ff0000'},
                {id:3, name: ' श्री शिव चरण ध्यानी', color:' #32338b'},
                {id:4, name: 'सांस्कृतिक मंत्री - श्री मनोज गौड़', color:' #ffa500'},
                {id:5, name: 'प्रवक्ता - श्री रविंद्र रावत', color:' #ba55d3'},
                {id:6, name: 'खेल सचिव - श्री दारबान सिंह रावत', color:' #757575'},
            ]
        },
        {
            languageId:'ENGLISH', 
            mainHeading:'Promoter',
            data: [
                { id: 1, name: 'Mr. L. G. Goswami', color: ' #32cd32' },
                { id: 2, name: 'Mr. Dharmendra Rawat', color: ' #ff0000' },
                { id: 3, name: 'Mr. Shiv Charan Dhyani', color: ' #32338b' },
                { id: 4, name: 'Cultural Minister - Mr. Manoj Gaur', color: ' #ffa500' },
                { id: 5, name: 'Spokesperson - Mr. Ravindra Rawat', color: ' #ba55d3' },
                { id: 6, name: 'Sports Secretary - Mr. Darban Singh Rawat', color: ' #757575' }
            ]
        }, 
        {
            languageId:'GARHWALI', 
            mainHeading:'प्रचारक',
            data:[
                {id:1, name:'श्री एल जी गोस्वामी',  color:' #32cd32'},
                {id:2, name: 'श्री धर्मेंद्र रावत', color:' #ff0000'},
                {id:3, name: ' श्री शिव चरण ध्यानी', color:' #32338b'},
                {id:4, name: 'सांस्कृतिक मंत्री - श्री मनोज गौड़', color:' #ffa500'},
                {id:5, name: 'प्रवक्ता - श्री रविंद्र रावत', color:' #ba55d3'},
                {id:6, name: 'खेल सचिव - श्री दारबान सिंह रावत', color:' #757575'},
            ]
        }
        ] 
    },
    {

        Salahkaar:[
            {
                languageId:'HINDI', 
                mainHeading:'सलाहकार',
                data:[
                    {id:1, name:'श्रीमति रेखा भट्ट', color:' #ff0000'},
                    {id:2, name: 'श्री दिनेश चंद्र बहुखंडी', color:' #757575'},
                    {id:3, name: 'श्री सुनील जोशी', color:' #32cd32'},
                    {id:4, name: 'श्री जगबीर नेगी', color:' #ffa500'},
                    {id:5, name: 'श्री अशोक कुमार (एडवोकेट)', color:' #ba55d3'}
                ]
            }, 
            {
                languageId:'GARHWALI', 
                mainHeading:'सलाहकार',
                data:[
                    {id:1, name:'श्रीमति रेखा भट्ट', color:' #ff0000'},
                    {id:2, name: 'श्री दिनेश चंद्र बहुखंडी', color:' #757575'},
                    {id:3, name: 'श्री सुनील जोशी', color:' #32cd32'},
                    {id:4, name: 'श्री जगबीर नेगी', color:' #ffa500'},
                    {id:5, name: 'श्री अशोक कुमार (एडवोकेट)', color:' #ba55d3'}                    
                ]
            }, 
            {
                languageId:'ENGLISH', 
                mainHeading:'Advisor',
                data: [
                    { id: 1, name: 'Mrs. Rekha Bhatt', color: '#ff0000' },
                    { id: 2, name: 'Mr. Dinesh Chandra Bahukhundi', color: '#757575' },
                    { id: 3, name: 'Mr. Sunil Joshi', color: '#32cd32' },
                    { id: 4, name: 'Mr. Jagbir Negi', color: '#ffa500' },
                    { id: 5, name: 'Mr. Ashok Kumar (Advocate)', color: '#ba55d3' }
                ]
            }
    ]}, 
    {
        MediaPrabhari:[
            {
                languageId:'HINDI', 
                mainHeading:'मीडिया प्रभारी',
                data:[
                    {id:1, name:'श्री विकास ढौंडियाल', color:' #007fff'}, 
                    {id:2, name:'श्री दीपक रावत', color:' #ffa500'}, 
                    {id:3, name:'श्री रोहित रावत', color:' #ff0000'}
                ]
            }, 
            {
                languageId:'GARHWALI', 
                mainHeading:'मीडिया प्रभारी',
                data:[
                    {id:1, name:'श्री विकास ढौंडियाल', color:' #007fff'}, 
                    {id:2, name:'श्री दीपक रावत', color:' #ffa500'}, 
                    {id:3, name:'श्री रोहित रावत', color:' #ff0000'}
                ]
            }, 
            {
                languageId:'ENGLISH', 
                mainHeading:'Media Incharge',
                data: [
                    { id: 1, name: 'Mr. Vikas Dhauliyal', color: ' #007fff' },
                    { id: 2, name: 'Mr. Deepak Rawat', color: ' #ffa500' },
                    { id: 3, name: 'Mr. Rohit Rawat', color: ' #ff0000' }
                ]
            }

        ]
    }
]

export const TestimonialData = [
    {
        languageId:'HINDI', 
        testimonials:[
            {
                id:1, 
                name:'श्री सरिश ढौंडियाल', 
                description:"एम.डी.यू.पी.एस. ने ज़मीनी स्तर पर जो बदलाव लाए हैं, वो सराहनीय हैं। यह संगठन वास्तव में उत्तराखंड की असली ज़रूरतों को समझता है।",
                rating:5,
                color:' #ff8c00' 
            }, 
            {
                id:2, 
                name:'श्री हरपाल सिंह मनराल', 
                description:"ऐसा समर्पित और जमीनी संगठन बहुत कम देखने को मिलता है। एम.डी.यू.पी.एस. उत्तराखंड के लिए उम्मीद की एक किरण है।",
                rating:4, 
                color:' #4cbb17'
            }, 
            {
                id:3, 
                name:'श्रीमति लक्ष्मी नेगी', 
                description:"एम.डी.यू.पी.एस. ने युवाओं को जो मंच दिया है, उससे उनके जीवन की दिशा ही बदल गई है। यह एक सशक्तिकरण की असली मिसाल है।",
                rating:3, 
                color:' #ff4500'
            }, 
            {
                id:4, 
                name:'श्री हरेंद्र रावत', 
                description:"उत्तराखंड की जड़ों से जुड़कर काम करना और समाधान देना ही एम.डी.यू.पी.एस. की असली ताकत है। हम इनसे जुड़कर गर्व महसूस करते हैं।",
                rating:5, 
                color:' #1e90ff'
            }, 
            {
                id:5, 
                name:'श्रीमति रेखा भट्ट', 
                description:"जब कोई संस्था बिना दिखावे के काम करे और असल में बदलाव लाए, तो वो एम.डी.यू.पी.एस. जैसी लगती है।", 
                rating:5, 
                color:' #ba55d3'
            }, 
            {
                id:6, 
                name:'श्री जगबीर नेगी', 
                description:"उत्तराखंड के दूरदराज़ इलाकों तक पहुंच बनाना आसान नहीं होता, लेकिन एम.डी.यू.पी.एस. ने ये कर दिखाया है।", 
                rating:3, 
                color:' #ff4500'
            }, 
            {
                id:7, 
                name:'श्री नवीन धुलिया', 
                description:'संगठन ने मेरे छोटे व्यवसाय को बढ़ावा देने में बहुत मदद की है। आज मैं आत्मनिर्भर हूँ।',
                rating:4, 
                color:' #4cbb17'
            }, 
            {
                id:8, 
                name:'श्री महावीर सिंह फर्शवान', 
                description:"इनके प्रोजेक्ट्स में भाग लेकर हमें न केवल जानकारी मिली, बल्कि एक नया आत्मविश्वास भी मिला।", 
                rating:5, 
                color:' #ff8c00'
            }, 
            {
                id:9, 
                name:'श्री विकास ढौंडियाल', 
                description:"एम.डी.यू.पी.एस. ने जिन मुद्दों को उठाया है, वो वास्तव में आम लोगों की आवाज़ हैं। इनका काम दिल से जुड़ा हुआ है।",
                rating:4, 
                color:' #1e90ff'
            }, 
            {
                id:10, 
                name:'श्री धीरेन्द्र सिंह रावत', 
                description:"एम.डी.यू.पी.एस. एक ऐसा संगठन है जो वाकई में उत्तराखंड को समझता है – उसकी प्रकृति, लोग और ज़रूरतें।", 
                rating:4, 
                color:' #ba55d3'
            }
        ]
    }, 
    {
        languageId:'ENGLISH', 
        testimonials:[
            {
                id: 1,
                name: "Shri Sarish Dhoundiyal",
                description: "The ground-level changes brought by M.D.U.P.S. are commendable. This organization truly understands the real needs of Uttarakhand.",
                rating: 5,
                color: " #ff8c00"
            },
            {
                id: 2,
                name: "Shri Harpal Singh Manral",
                description: "Such dedicated and grassroots-level organizations are rare. M.D.U.P.S. is a ray of hope for Uttarakhand.",
                rating: 4,
                color: " #4cbb17"
            },
            {
                id: 3,
                name: "Shrimati Laxmi Negi",
                description: "The platform given to youth by M.D.U.P.S. has changed their lives. It is a true example of empowerment.",
                rating: 3,
                color: "#ff4500"
            },
            {
                id: 4,
                name: "Shri Harendra Rawat",
                description: "Working by staying rooted in Uttarakhand and offering real solutions is M.D.U.P.S.'s true strength. We are proud to be associated.",
                rating: 5,
                color: "#1e90ff"
            },
            {
                id: 5,
                name: "Shrimati Rekha Bhatt",
                description: "When an organization works without show-off and truly brings change, it feels like M.D.U.P.S.",
                rating: 5,
                color: "#ba55d3"
            },
            {
                id: 6,
                name: "Shri Jagbir Negi",
                description: "Reaching remote areas of Uttarakhand is not easy, but M.D.U.P.S. has made it happen.",
                rating: 3,
                color: "#ff4500"
            },
            {
                id: 7,
                name: "Shri Naveen Dhulia",
                description: "The organization has greatly helped in promoting my small business. Today I am self-reliant.",
                rating: 4,
                color: "#4cbb17"
            },
            {
                id: 8,
                name: "Shri Mahavir Singh Farshwan",
                description: "By participating in their projects, we not only gained knowledge but also newfound confidence.",
                rating: 5,
                color: "#ff8c00"
            },
            {
                id: 9,
                name: "Shri Vikas Dhoundiyal",
                description: "The issues raised by M.D.U.P.S. are truly the voice of common people. Their work comes from the heart.",
                rating: 4,
                color: "#1e90ff"
            },
            {
                id: 10,
                name: "Shri Dhirendra Singh Rawat",
                description: "M.D.U.P.S. is an organization that truly understands Uttarakhand – its nature, its people, and their needs.",
                rating: 4,
                color: "#ba55d3"
            }
        ]
    },
    {
        languageId:'GARHWALI', 
        testimonials:[
            {
                id: 1,
                name: "श्री सरिश ढौंडियाल",
                description: "एम.डी.यू.पी.एस. ऐ ज़मीनी स्तर पै जिक ब्यवस्था ल्याई, उ बहुत सराहणीय छन। ई संस्था सच्ची मं उत्तराखंड की असली ज़रूरतूं कू समझणारी छ।",
                rating: 5,
                color: " #ff8c00"
            },
            {
                id: 2,
                name: "श्री हरपाल सिंह मनराल",
                description: "ऐसो समर्पित अर ज़मीनी संस्था बिरळै मिलदा। एम.डी.यू.पी.एस. उत्तराखंड खातर एक आस की किरन छन।",
                rating: 4,
                color: " #4cbb17"
            },
            {
                id: 3,
                name: "श्रीमति लक्ष्मी नेगी",
                description: "एम.डी.यू.पी.एस. जौन मंच नौजवानूं कू दिउ, उकां जीवन की दिशा बदळ गी। ई सशक्तिकरण को एक सच्चो उदाहरन छन।",
                rating: 3,
                color: " #ff4500"
            },
            {
                id: 4,
                name: "श्रीमति लक्ष्मी नेगी",
                description: "उत्तराखंड की जड़ूं स्यूं जुड़िक काम करण अर समाधान दिउ, उ एम.डी.यू.पी.एस. की असली ताकद छन। हम इनस्यूं जुड़िक गर्व महसूस करणा।",
                rating: 5,
                color: " #1e90ff"
            },
            {
                id: 5,
                name: "श्रीमति रेखा भट्ट",
                description: "जब कुनि संस्था बिना दिखावा के सच्चा काम करि अर बदलाव ल्यावै, तव उ एम.डी.यू.पी.एस. बणि लागण।",
                rating: 5,
                color: "#ba55d3"
            },
            {
                id: 6,
                name: "श्री जगबीर नेगी",
                description: "उत्तराखंड के दूर-दराज इलाकां तक पहुंचण आसान नईं, पर एम.डी.यू.पी.एस. ई काम करि देखायो।",
                rating: 3,
                color: "#ff4500"
            },
            {
                id: 7,
                name: "श्री नवीन धुलिया",
                description: "संस्था नि म्यारा नान्हुं व्यवसाय कू बढ़ावण मं बड्ड मदद करी। आज म्यै आत्मनिर्भर छुं।",
                rating: 4,
                color: " #4cbb17"
            },
            {
                id: 8,
                name: "श्री महावीर सिंह फर्शवान",
                description: "इनका परियोजनां मं भाग लैक हमन केवल जानकरी ना पायिन, बल्कि एक नव आत्मबिस्वास बी पायो।",
                rating: 5,
                color: "#ff8c00"
            },
            {
                id: 9,
                name: "श्री विकास ढौंडियाल",
                description: "एम.डी.यू.पी.एस. जे बात उठै, उ सच्चि मं जनता की आवाज छन। इनको काम दिल स्यूं होण।",
                rating: 4,
                color: " #1e90ff"
            },
            {
                id: 10,
                name: "श्री धीरेन्द्र सिंह रावत",
                description: "एम.डी.यू.पी.एस. इक ऐसो संस्था छन जिक उत्तराखंड की प्रकृति, जनता अर ज़रूरत्यूं कू सच्चा मं समझदा।",
                rating: 4,
                color: " #ba55d3"
            }
        ]
    }
];

export const LatestNewsData = [
     {
        languageId:'HINDI', 
        topHeading:'समाचार और लेख',
        data:[    {
        id:1, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_85fda74d_uwskqj.jpg',
        mainHeading:' "दिल्ली-एनसीआर उत्तराखंड प्रवासी संगठन" की ऐतिहासिक पहली औपचारिक सभा संपन्न |',
        mainHeadingMsgOne:'"महानगर दिल्ली-एनसीआर उत्तराखंड प्रवासी" संगठन की पहली औपचारिक बैठक, चंद्रकुंज स्थित हिल्स स्वागत मंच पर गरिमामयी वातावरण में संपन्न हुई। एमबीएमधामपुर के अध्यक्ष और संगठन प्रभारी की विशेष उपस्थिति में यह सभा न केवल विचार-विमर्श का केंद्र बनी, बल्कि कार्यकारिणी का चुनाव भी अत्यंत सफलतापूर्वक पूर्ण किया गया।',
        mainHeadingMsgTwo:'इस बैठक का मुख्य उद्देश्य संगठन के सामाजिक सरोकारों को नई दिशा देना रहा। इसी क्रम में उत्तराखंड के "महान लोकगायक स्व. हीरा सिंह राणा जी" को श्रद्धांजलि स्वरूप उनके परिवार को आर्थिक सहायता प्रदान की गई। यह सहायता उनकी धर्मपत्नी को सौंपते हुए संगठन ने यह स्पष्ट किया कि हम अपने सांस्कृतिक धरोहरों के प्रति न केवल भावनात्मक रूप से जुड़े हैं, बल्कि उनके परिवार की ज़िम्मेदारी को भी साझा करते हैं।',
        mainHeadingMsgThree:'सभा में एक और महत्वपूर्ण विषय पर चर्चा हुई — उत्तराखंड के प्रसिद्ध कवि और पत्रकार की बदायूं में हुई हत्या। इस संवेदनशील मुद्दे पर "श्रीमती कविता आर्य" जी ने संगठन और एमबीएमधामपुर के संयुक्त तत्वावधान में एक विरोध दिवस मनाने और व्यापक आंदोलन की आवश्यकता पर बल दिया, जिसे उपस्थित सभी सदस्यों ने समर्थन प्रदान किया।',
        mainHeadingMsgFour:'संगठन ने यह स्पष्ट किया कि "हमारी सच्ची श्रद्धांजलि तब होगी, जब हम "स्व. राणा जी" के परिवार के साथ निरंतर खड़े रहें और उन्हें हर प्रकार की सहायता प्रदान करें।"',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
    {
        id:2, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_64bbd80e_eauvxy.jpg',
        mainHeading:'एक जिम्मेदारी, एक संकल्प',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'दिव्यांग बच्चों के लिए आशा की एक किरण',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'जब कोई उम्मीद छोड़ देता है, तब कोई अपना हाथ थाम ले — यही है हमारी पहचान।',
        subHeadingThreeMsgOne:'"महानगर दिल्ली उत्तराखंड प्रवासी संगठन (MDUPS)" न केवल सामाजिक एकता का प्रतीक है, बल्कि संवेदनशीलता और सेवा का वास्तविक परिचय भी है। हाल ही में संगठन ने दिल्ली के एक प्रवासी उत्तराखंडी परिवार के 12 वर्षीय दिव्यांग बच्चे के लिए जो सहायता की, वह इस मिशन की एक प्रेरणादायक मिसाल है।'
    }, 
    {
        id:3, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_fca272b7_z5okcl.jpg',
        mainHeading:'होली मिलन समारोह 2025 | संस्कृति, उल्लास और सौहार्द्र का रंगीन संगम', 
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'जहाँ प्रेम के रंग हों, वहाँ पर्व सिर्फ उत्सव नहीं — एक अनुभव बन जाता है।',
        subHeadingOneMsgOne:'"महानगर दिल्ली उत्तराखंड प्रवासी संगठन" द्वारा आयोजित होली मिलन समारोह 2025 एक अद्भुत संगम रहा – जहाँ उत्तराखंडी संस्कृति, परंपरा, और भाईचारे की सुगंध ने हर दिल को रंग दिया।',
        subHeadingOneMsgTwo:'इस भव्य आयोजन में न केवल रंगों की बौछार हुई, बल्कि उल्लास, उमंग और अपनों का साथ भी देखने को मिला। कार्यक्रम में प्रवासी उत्तराखंडी परिवारों ने पारंपरिक परिधानों में सहभागिता की और लोक गीतों, नृत्यों, व सांस्कृतिक प्रस्तुतियों से माहौल को संगीतमय बना दिया।',
        subHeadingOneMsgThree:'इस उत्सव ने हमें हमारी जड़ों से फिर जोड़ दिया — यह याद दिलाया कि चाहे हम कहीं भी रहें, हमारी संस्कृति और एकता हमें हमेशा जोड़कर रखती है।',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    },
    {
        id:4, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926737/WhatsApp_Image_2025-04-29_at_16.17.46_bb604791_jdyt1t.jpg',
        mainHeading:'प्रतीकात्मक विरोध शवयात्रा समारोह 2025',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'आत्मसम्मान की अग्नि में जलता अन्याय का पुतला',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'हम उत्तराखंडी हैं, और अपने सम्मान पर कोई आंच नहीं सहेंगे!',
        subHeadingTwoMsgOne:'"महानगर दिल्ली-एनसीआर उत्तराखंड प्रवासी संगठन (MDUPS)" द्वारा आयोजित प्रतीकात्मक शवयात्रा समारोह एक सशक्त विरोध प्रदर्शन है, जो उस अमर्यादित भाषा और व्यवहार के खिलाफ है जो उत्तराखंड सरकार के एक कैबिनेट मंत्री द्वारा मूल निवासियों के लिए प्रयोग किया गया।',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
     {
        id:5, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926737/WhatsApp_Image_2025-04-29_at_16.16.33_b0a9966e_lmxs6u.jpg',
        mainHeading:'एक कदम मानवता की ओर | दिव्यांग बालक की सहायता का प्रेरणादायक प्रयास',
        mainHeadingMsgOne:'दिल्ली-एनसीआर "उत्तराखंड प्रवासी संगठन" ने एक बार फिर यह सिद्ध किया है कि समाज सेवा केवल शब्द नहीं, एक जिम्मेदारी है। हाल ही में संगठन ने एक प्रवासी परिवार के दिव्यांग बालक की मदद कर मानवता की मिसाल पेश की।',
        mainHeadingMsgTwo:'यह एक वर्ष का मासूम बच्चा, दुर्भाग्यवश शारीरिक अक्षमता (डिसएबिलिटी) से जूझ रहा है। परिवार द्वारा डिसएबिलिटी कार्ड के लिए आवेदन तो किया गया था, लेकिन जानकारी के अभाव में वे यह नहीं जान पाए कि कार्ड पहले ही बन चुका था और हमारे सदस्य ने वेबसाइट से उसे डाउनलोड भी कर लिया था।',
        mainHeadingMsgThree:'हमारे संगठन के एक संवेदनशील सदस्य ने न केवल उन्हें इस सूचना से अवगत कराया, बल्कि बच्चे की जरूरतों को समझते हुए, व्यक्तिगत खर्च पर लगभग ₹20,000 मूल्य का आवश्यक चिकित्सकीय और सहायक सामान भी उपलब्ध करवाया।',
        mainHeadingMsgFour:'दुर्भाग्यवश, समय पर इलाज न मिलने से बालक की हड्डियाँ विकृत हो चुकी हैं। यह हमें याद दिलाता है कि समय पर जानकारी, उपचार और सहायता कितनी महत्वपूर्ण होती है।',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
        },
    {
        id:6,
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746016423/WhatsApp_Image_2025-04-29_at_15.00.52_2910aa32_wgou9w.jpg',
        mainHeading:'दिल्ली में "उत्तराखंड प्रवासी संगठन" की पहल – मूल निवासियों के लिए बनाई गई विभिन्न योजनाए',
        mainHeadingMsgOne:'"नई दिल्ली" – "महानगर दिल्ली उत्तराखंड प्रवासी संगठन (MDUPS)" ने उत्तराखंड के मूल निवासियों के जीवन को समृद्ध, सुरक्षित और उज्ज्वल बनाने के लिए कई नवाचारी योजनाओं की घोषणा की है। "संगठन के संस्थापक एवं अध्यक्ष श्री कमल ध्यानी" और "महासचिव मुकेश खंडवाल" के नेतृत्व में दिल्ली के हरी नगर स्थित प्रताप नगर गुरुद्वारा में एक विशेष कार्यक्रम आयोजित किया गया। इस कार्यक्रम में "दिल्ली विधानसभा के डिप्टी स्पीकर श्री मोहिंदर सिंह रैरा" और "एनपीयूबी के पूर्व चेयरमैन श्री आर.के. कोटियाल" मुख्य अतिथि के रूप में उपस्थित रहे। इस अवसर पर उत्तराखंड से जुड़े "सामाजिक", "आर्थिक", "शैक्षिक" और "स्वास्थ्य संबंधी" मुद्दों पर विस्तार से चर्चा हुई।',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
    {
        id:7, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746016423/WhatsApp_Image_2025-04-29_at_15.00.52_f30f209f_fwzuv1.jpg',
        mainHeading:'दिल्ली में "हित दगड़िया" कार्यक्रम का भव्य आयोजन सम्पन्न',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'उत्तराखंडी प्रवासी समाज को समर्पित ऐतिहासिक पहल',
        subHeadingTwoMsgOne:'दिल्ली में उत्तराखंड की संस्कृति, परंपरा और सामाजिक एकता को बढ़ावा देने हेतु "हित दगड़िया" कार्यक्रम का भव्य आयोजन सफलतापूर्वक संपन्न हुआ। इस समारोह की "अध्यक्षता संगठन के संस्थापक श्री कमल ध्यानी" ने की और कार्यक्रम का संचालन "श्री मुकेश खंडवाल (महासचिव)" द्वारा किया गया।',
        subHeadingThree:'उद्देश्य और संकल्प',
        subHeadingThreeMsgOne:'इस आयोजन का मुख्य उद्देश्य उत्तराखंड के मूल निवासियों को एकजुट करना, उनके हितों की रक्षा करना और "सामाजिक", "आर्थिक" व "शैक्षिक" विकास में सहायता करना रहा। "हित दगड़िया" कार्यक्रम केवल एक मिलन नहीं, बल्कि एक मिशन है — उत्तराखंड की जड़ों से जुड़ने और उन्हें मजबूत करने का।'
    }, ]
},
    {
        languageId:'GARHWALI', 
        topHeading:'समाचार अ लेख',
        data:[    
            {
        id:1, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_85fda74d_uwskqj.jpg',
        mainHeading:' "दिल्ली-एनसीआर उत्तराखंड प्रवासी संगठन" की ऐतिहासिक पहली औपचारिक सभा संपन्न |',
        mainHeadingMsgOne:'महानगर दिल्ली-एनसीआर उत्तराखंड प्रवासी संगठन की पहली औपचारिक बैठक, चंद्रकुंज मं हिल्स स्वागत मंच पर गरिमामयी माहौल म संपन्न भई। एमबीएमधामपुर के अध्यक्ष अऊ संगठन के प्रभारी की खास उपस्थिति म, ई सभा केवल विचार-विमर्श को केंद्र नै बनी, बल्की कार्यकारिणी का चुनाव भी बहुत सफलतापूर्वक पूरा कियौं।',
        mainHeadingMsgTwo:'इस बैठक रो मुख्या उद्देश्य संगठन रो सामाजिक सरोकारन ने नई दिशा दिना रह्या। इसी क्रम में उत्तराखंड के महान लोकगायक स्व. "हीरा सिंह राणा जी" को श्रद्धांजलि स्वरूप उनकरे परिवार ने आर्थिक सहायता प्रदान की गी। या सहायता उनकरे धर्मपत्नी ने सौंपते हुए संगठन ने यो स्पष्ट किया कि हम अपने सांस्कृतिक धरोहरन ने ना केवल भावनात्मक रूप से जुड़े छौं, बल्की उनकरे परिवार की जिम्मेदारी भी साझा करछौं।',
        mainHeadingMsgThree:'सभा में एक महत्त्वपूर्ण विषय पर गप्प लागी — उत्तराखंड का प्रसिद्ध कवि अरु पत्रकार की बदायूं में भई हत्या। इस संवेदनशील मुद्दे पर "श्रीमती कविता आर्य" जी ने संगठन अरु एमबीएमधामपुर के संयुक्त तत्वाधान में एक विरोध दिवस मनाणु अरु व्यापक आंदोलन की जरुरत पर बल दिया, जिंको उपस्थित सभी सदस्यों ने समर्थन दीयो।',
        mainHeadingMsgFour:'संघठनन ऐ ये साफ़ किहा कि "हामरी सच्ची श्रद्धांजलि तब होगी, जब हाम स्व. राणा जी के परिवार संग निरन्तर खड़े रहां और उनन हर प्रकार की मदद दें।"',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
    {
        id:2, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_64bbd80e_eauvxy.jpg',
        mainHeading:'एक जिम्मेदारी, एक निश्चय',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'दिव्यांग बालकाण खातिर आशा को एक किरण',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'जब कोई आस त्याग दिनु, त तब कोई अपन हाथ थाम ले — यै ब हामारी पहचान।',
        subHeadingThreeMsgOne:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन (MDUPS) स्यां खुद एक मात्र सामाजिक एकता को चिन्ह न छै, बलकि यि सम्वेदनशीलता अरू सेवा को सच्चो परिचय भी छै। हाल सैं हाल मं, संगठन दिल्ली मं रहणा वाला एक प्रवासी उत्तराखंडी कुटुंब के 12 बर्स का दिव्यांग बालक खातर जि सहायता करी, वि इस संगठन रा उद्देश्य अरू भावनात्मक जुड़ाव की एक बड़़ी प्रेरणादायक मिसाल छै।'
    }, 
    {
        id:3, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_fca272b7_z5okcl.jpg',
        mainHeading:'होळी मिलण समारो 2025 | संस्कृति, हँसिक अर सौहार्द्र को रँग-बिरँगो संगम', 
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'ज्यां प्यार का रँग हुण, त्यां त्योहार सिरफ खुसियाळ न — एक जिणो अनुभव बणि जाल।',
        subHeadingOneMsgOne:'“महानगर दिल्ली उत्तराखंड प्रवासी संगठन रि आयोजित होळी मिलण समारो 2025 इक अद्भुत संगम छ — ज्यां गढ़वाळी संस्कृति, रिवाज अर भाईचारे री सुगंध हरेक मन् रंगाइद्यो।',
        subHeadingOneMsgTwo:'"इस भव्य समारो मं सिरफ रँग्यां री बौछार नि भई, बलकि हँसिक, उमंग अर अपण्यां रो साथ भी देखण मं आॅयो। कार्यक्रम मं प्रवासी उत्तराखंडी परिवार्यां पारंपरिक पोशाक मं भाग लीन, अरू लोक गीत, नृत्य अरू सांस्कृतिक झलक्यां सैं माहौल नै सुर-ताल सैं भर दिओ।"',
        subHeadingOneMsgThree:'इस उत्सव नै हमै फेरि अपनी जड़्यां स्यूँ जोड़ दिण — यि याद दिलायो कि हम कतै भी रयूं, पण हमारी संस्कृति अरू एकता हमै हमेशा जोड़िके रैख्या।',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    },
    {
        id:4, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926737/WhatsApp_Image_2025-04-29_at_16.17.46_bb604791_jdyt1t.jpg',
        mainHeading:'प्रतीकात्मक विरोध शवयात्रा समारोह 2025',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'आत्मसम्मान की अग्नि मं सड़द ऐँस्याण को पुतलो',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'हम गढ़वाळी हां, अर अपणा मान-सम्मान पै कदे भी आंच नईं सहूंगा!',
        subHeadingTwoMsgOne:'"महानगर दिल्ली-एनसीआर उत्तराखंड प्रवासी संगठन (MDUPS)" द्वारा आयोजित चिन्हात्मक मय्यत यात्रा समारो इक मजबूत बिरोध प्रदर्शन छै, जिको मकसद ओ अमर्यादित भाषा अर बर्ताव के खिलाफ आवाज उठाणो छै, जिको उत्तराखंड सरकार के इक कैबिनेट मंत्री मूल बासिंड्यां के खिलाफ बरतो।',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
     {
        id:5, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926737/WhatsApp_Image_2025-04-29_at_16.16.33_b0a9966e_lmxs6u.jpg',
        mainHeading:'एक कदम मानवीयता री ओर | दिव्यांग बालक की मदद रो प्रेरणादायक प्रयास',
        mainHeadingMsgOne:'दिल्ली-एनसीआर "उत्तराखंड प्रवासी संगठन" फेरि एक बार ये साबित करद्यो कि समाज सेवा सिरफ बात न छै, बल्कि इक भारी जिम्मेदारी छै। हाल ही मं संगठन एक प्रवासी परिवार के दिव्यांग बालक की मदद करि के मानवता री बड़ि मिसाल कायम करदी।',
        mainHeadingMsgTwo:'यो इक बरस को मासूम छोरो छै, जिकु बदकिस्मती सैं शरीरिक अक्षमता (डिसएबिलिटी) स्यूं जूझ रयो छै। परिवार डिसएबिलिटी कार्ड खातर अरजी जरूर दियो, पण जानकारी को अभाव मं उंयां नै पता नीं लाग्यो कि कार्ड पहले ही बन चुक्यो छै अर हमारे सदस्य नै वेबसाइट स्यूं वोकै डाउनलोड भी कर लियो।',
        mainHeadingMsgThree:'हमारे संगठन के इक संवेदनशील सदस्य न सिरफ उनै इस खबर स्यूँ अवगत करायो, बल्कि बालक री जरूरत समझिके, अपने खर्च पै करीब ₹20,000 का जरूरी इलाज अर सहायक सामान भी मुहैया करादियो।',
        mainHeadingMsgFour:'बदकिस्मती सैं, वखत पै इलाज न मिलण कारण बालक की हड्ड्यां विकृत हो चुक्यां हैं। यो हमै याद दिलावै छ कि सही वखत पै जानकारी, उपचार अर मदद कितणी जरूरी छ।',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
        },
    {
        id:6,
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746016423/WhatsApp_Image_2025-04-29_at_15.00.52_2910aa32_wgou9w.jpg',
        mainHeading:'दिल्ली मं "उत्तराखंड प्रवासी संगठन" री पहल — मूल बासिंड्यां खातर बनाई गई अलग-अलग योजनां।',
        mainHeadingMsgOne:'"नई दिल्ली" — "महानगर दिल्ली उत्तराखंड प्रवासी संगठन (MDUPS)" नै उत्तराखंड के मूल बासिंड्यां री जिणगी समृद्ध, सुरखित अर उज्जवल बनाण खातर कई नवाचारी योजनां री घोषणा करी छ। "संगठन रा संस्थापक अर अध्यक्ष श्री कमल ध्यानी" अर "महासचिव मुकेश खंडवाल" के नेतृत्त्व मं दिल्ली के हरी नगर मं प्रताप नगर गुरुद्वारा मं इक खास कार्यक्रम राख्यो गयो। इस कार्यक्रम मं "दिल्ली विधानसभा के डिप्टी स्पीकर श्री मोहिंदर सिंह रैरा" अर "एनपीयूबी के पूर्व चेयरमैन श्री आर.के. कोटियाल" मुख्य मेहमान के रूप मं मौजूद रै। इस मौके पै उत्तराखंड स्यूं जुड़्या सामाजिक, आर्थिक, शैक्षिक अर स्वास्थ्य संबंधी मुद्द्यां पै बिस्तार स्यूं चर्चा करी गई।',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
    {
        id:7, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746016423/WhatsApp_Image_2025-04-29_at_15.00.52_f30f209f_fwzuv1.jpg',
        mainHeading:'दिल्ली मं "हित दगड़िया" कार्यक्रम रो भव्य आयोजन पूरा भई।',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'उत्तराखंडी प्रवासी समाज खातर समर्पित ऐतिहासिक पहल',
        subHeadingTwoMsgOne:'दिल्ली मं उत्तराखंड री संस्कृति, परंपरा अर सामाजिक एकता नै बढ़ावा देण खातर "हित दगड़िया" कार्यक्रम रो भव्य आयोजन सफ़लतापूर्वक पूरा भई। इस समारो री अध्यक्षता संगठन रा संस्थापक श्री कमल ध्यानी नै करी अर कार्यक्रम रो संचालन श्री मुकेश खंडवाल (महासचिव) नै करयो।',
        subHeadingThree:'उद्देश्य अर संकल्प',
        subHeadingThreeMsgOne:'इस आयोजन को मुख्य उद्देश्य उत्तराखंड के मूल बासिंड्यां नै एकठ्ठा करणा, उनकरे हितां की रक्षा करणा अर सामाजिक, आर्थिक अर शैक्षिक विकास मं मदद करणा रह्यो। "हित दगड़िया" कार्यक्रम सिरफ इक मिलण नैं, बलकि इक मिशन छ — उत्तराखंड री जड़्यां स्यूं जुड़ण अर उन नै मजबूत करणा खातर।'
    }, ]
}, 
     {
        languageId:'ENGLISH', 
        topHeading:'News & Articles',
        data:[    {
        id:1, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_85fda74d_uwskqj.jpg',
        mainHeading:"The historic first formal meeting of the 'Mahanagar Delhi-NCR Uttarakhand Pravasi Sangathan' concluded successfully.",
        mainHeadingMsgOne:'The first formal meeting of the "Mahanagar Delhi-NCR Uttarakhand Pravasi Sangathan" Organization was held in a dignified atmosphere at the Hills Swagat Manch located in Chandrakunj. In the special presence of the President of MBM Dhamapur and the organization in-charge, the gathering became not only a center for discussion but also successfully concluded the election of the executive committee.',
        mainHeadingMsgTwo:"The main objective of this meeting was to give a new direction to the organization's social commitments. In this spirit, financial assistance was provided to the family of the great folk singer of Uttarakhand, Late Shri Heera Singh Rana Ji, as a tribute to his legacy. While handing over the assistance to his wife, the organization made it clear that they are not only emotionally connected to their cultural heritage but also share the responsibility of supporting the families who uphold it.",
        mainHeadingMsgThree:'Another important issue discussed during the meeting was the murder of a renowned poet and journalist from Uttarakhand in Badaun. On this sensitive matter, Mrs. Kavita Arya emphasized the need to observe a protest day and initiate a widespread movement under the joint leadership of the organization and MBM Dhamapur. All the members present extended their full support to this proposal.',
        mainHeadingMsgFour:'The organization made it clear that "Our true tribute will be when we continue to stand by Late Rana Ji’s family and provide them with every possible support."',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
    {
        id:2, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_64bbd80e_eauvxy.jpg',
        mainHeading:'One Responsibility, One Resolution',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'A Ray of Hope for Differently-Abled Children',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'When someone loses all hope, and someone reaches out and holds their hand — that is our true identity.',
        subHeadingThreeMsgOne:'The "Mahanagar Delhi Uttarakhand Pravasi Sangathan (MDUPS)" is not only a symbol of social unity but also a true embodiment of compassion and service. Recently, the organization extended support to a 12-year-old differently-abled child from a migrant Uttarakhandi family in Delhi, setting an inspiring example of its mission in action.'
    }, 
    {
        id:3, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926738/WhatsApp_Image_2025-04-29_at_16.16.33_fca272b7_z5okcl.jpg',
        mainHeading:'Holi Milan Celebration 2025 | A Colorful Confluence of Culture, Joy, and Harmony', 
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'Where the colors of love flow, a festival is not just a celebration — it becomes a heartfelt experience.',
        subHeadingOneMsgOne:'The Holi Milan Celebration 2025, organized by the "Mahanagar Delhi Uttarakhand Pravasi Sangathan," was a magnificent confluence — where the fragrance of Uttarakhandi culture, tradition, and brotherhood touched every heart with vibrant colors.',
        subHeadingOneMsgTwo:'This grand event was not only a splash of colors but also a celebration of joy, enthusiasm, and togetherness. Migrant Uttarakhandi families participated in traditional attire, filling the atmosphere with music through folk songs, dances, and vibrant cultural performances.',
        subHeadingOneMsgThree:'This celebration reconnected us with our roots — reminding us that no matter where we are, our culture and unity always keep us bound together.',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    },
    {
        id:4, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926737/WhatsApp_Image_2025-04-29_at_16.17.46_bb604791_jdyt1t.jpg',
        mainHeading:'Symbolic Protest Funeral Procession Ceremony 2025',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'An Effigy of Injustice Burning in the Fire of Self-Respect',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'We are Uttarakhandis, and we will not tolerate any compromise on our dignity!',
        subHeadingTwoMsgOne:'The symbolic funeral procession ceremony organized by the "Mahanagar Delhi-NCR Uttarakhand Pravasi Sangathan (MDUPS)" is a powerful protest against the derogatory language and behavior used by a cabinet minister of the Uttarakhand government towards the indigenous residents.',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
     {
        id:5, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1745926737/WhatsApp_Image_2025-04-29_at_16.16.33_b0a9966e_lmxs6u.jpg',
        mainHeading:'A Step Towards Humanity | An Inspiring Effort to Support a Differently-Abled Child',
        mainHeadingMsgOne:'The Delhi-NCR "Uttarakhand Pravasi Sangathan" has once again proven that social service is not just a word but a responsibility. Recently, the organization set an example of humanity by helping a differently-abled child from a migrant family.',
        mainHeadingMsgTwo:'This one-year-old innocent child is unfortunately struggling with a physical disability. Although the family had applied for a disability card, due to a lack of information, they were unaware that the card had already been issued. One of our members had even downloaded it from the website.',
        mainHeadingMsgThree:'A compassionate member of our organization not only informed them about this but also, understanding the child’s needs, personally arranged essential medical and supportive equipment worth approximately ₹20,000 at their own expense.',
        mainHeadingMsgFour:"Unfortunately, due to delayed treatment, the child's bones have become deformed. This reminds us how crucial timely information, medical care, and support truly are.",
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
        },
    {
        id:6,
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746016423/WhatsApp_Image_2025-04-29_at_15.00.52_2910aa32_wgou9w.jpg',
        mainHeading:'Initiative by the "Uttarakhand Pravasi Sangathan" in Delhi – Various Schemes Designed for Native Residents',
        mainHeadingMsgOne:`New Delhi – The "Mahanagar Delhi Uttarakhand Pravasi Sangathan (MDUPS)" has announced several innovative schemes aimed at enriching, securing, and brightening the lives of native residents of Uttarakhand. Under the leadership of the organization’s Founder and President Mr. Kamal Dhyani and General Secretary Mr. Mukesh Khandwal, a special program was organized at Pratap Nagar Gurudwara, Hari Nagar, Delhi.Mr. Mohinder Singh Raira, Deputy Speaker of the Delhi Legislative Assembly, and Mr. R.K. Kotiyal, former Chairman of NPUB, graced the event as chief guests. The occasion saw in-depth discussions on various social, economic, educational, and health-related issues connected to Uttarakhand.`,
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'',
        subHeadingTwoMsgOne:'',
        subHeadingThree:'',
        subHeadingThreeMsgOne:''
    }, 
    {
        id:7, 
        img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746016423/WhatsApp_Image_2025-04-29_at_15.00.52_f30f209f_fwzuv1.jpg',
        mainHeading:'Grand "Hit Dagdiya" Program Successfully Held in Delhi',
        mainHeadingMsgOne:'',
        mainHeadingMsgTwo:'',
        mainHeadingMsgThree:'',
        mainHeadingMsgFour:'',
        subHeadingOne:'',
        subHeadingOneMsgOne:'',
        subHeadingOneMsgTwo:'',
        subHeadingOneMsgThree:'',
        subHeadingTwo:'A Historic Initiative Dedicated to the Uttarakhandi Migrant Community',
        subHeadingTwoMsgOne:`To promote the culture, traditions, and social unity of Uttarakhand in Delhi, the grand "Hit Dagdiya" program was successfully organized. The event was presided over by the organization's founder, Mr. Kamal Dhyani, and hosted by Mr. Mukesh Khandwal (General Secretary).`,
        subHeadingThree:'Purpose and Resolve',
        subHeadingThreeMsgOne:'The primary objective of this event was to unite the native residents of Uttarakhand, safeguard their interests, and support their social, economic, and educational development. The "Hit Dagdiya" program is not just a gathering — it is a mission to reconnect with the roots of Uttarakhand and strengthen them.'
    } ]
},
];


export const CarausalImage = [
    {id:1, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439729/WhatsApp_Image_2025-05-03_at_17.26.08_6c050a55_bwswxi.jpg'},
    {id:2, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439729/WhatsApp_Image_2025-05-03_at_17.25.04_d9477976_d26bdh.jpg'},
    {id:3, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439729/WhatsApp_Image_2025-05-03_at_17.25.23_645f1959_en3ykm.jpg'},
    {id:4, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439728/WhatsApp_Image_2025-05-03_at_17.23.54_a8fbb68e_uxkowm.jpg'},
    {id:5, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439728/WhatsApp_Image_2025-05-03_at_17.24.25_9e821b99_ig3stu.jpg'},
    {id:6, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439728/WhatsApp_Image_2025-04-07_at_15.26.14_8bffbb1e_nmwspt.jpg'},
    {id:7, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439727/WhatsApp_Image_2025-04-07_at_15.26.13_4c875ac2_g5dvpm.jpg'},
    {id:8, img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746439727/WhatsApp_Image_2025-04-07_at_15.26.13_50d6fc56_tfmqzp.jpg'},

];

export const VisionMissionHeadingData = [
    {
        languageId:'HINDI', 
        heading:'हमारा मिशन और विज़न'
    }, 
    {
        languageId:'ENGLISH', 
        heading:'Our Mission & Vision'
    }, 
    {
        languageId:'GARHWALI', 
        heading:'हमारो उद्देश्य अर दृष्ट्रिकोण'
    }
];

export const HomeAboutUsData = [
    {
        languageId:'HINDI', 
        mainHeading:"हमारे बारे में", 
        subHeading:'में आपका स्वागत है',
        mdups:'एम.डी.यू.पी.एस', 
        msg:'महानगर दिल्ली-एनसीआर उत्तराखण्ड प्रवासी संगठन उत्तराखंड के मूल निवासियों का एक संगठित मंच है, जो दिल्ली-एनसीआर में रहने वाले प्रवासी भाई-बहनों के अधिकारों, स्वाभिमान और कल्याण के लिए समर्पित है। यह संगठन दिल्ली में उत्तराखंड के मूल निवासियों को एकजुट करने, उनके सामाजिक और सांस्कृतिक पहचान को संरक्षित रखने और उनकी समस्याओं के समाधान के लिए काम करता है।', 
        buttonText:'और जाने'
    }, 
    {
        languageId:'ENGLISH', 
        mainHeading:'About Us', 
        subHeading:'Welcome to',
        mdups:'M.D.U.P.S', 
        msg:'Mahanagar Delhi-NCR Uttarakhand Pravasi Sangathan is a united platform for the native residents of Uttarakhand, dedicated to the rights, dignity, and welfare of migrant brothers and sisters living in Delhi-NCR. This organization works to unite the native people of Uttarakhand in Delhi, preserve their social and cultural identity, and address their problems.', 
        buttonText:'Know More'
    }, 
    {
        languageId:'GARHWALI', 
        mainHeading:'हमारै बारे मं', 
        subHeading:'मं थौं स्वागत छ',
        mdups:'एम.डी.यू.पी.एस', 
        msg:'महानगर दिल्ली-एनसीआर उत्तराखण्ड प्रवासी संगठन दिल्ली-एनसीआर मं बसण्या उत्तराखंडी मूल निवासीयन क एकता बठाण, उनक अधिकार, आत्मगौरव अर भलाइ बरे समर्पित एक मंच छ। यो संगठन उत्तराखंडिक लोकौं की सांस्कृतिक-पारंपरिक पहचान बचै राखण अर उनक समस्या समाधान बरे काम करंद छ।', 
        buttonText:'थोड़िक और जाणू'
    }
]


export const HomeVisionMissionData = [
    {
        languageId:'HINDI', 
        data:
        [
            {
                id:1, 
                img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746510200/20943958_limewm.jpg',
                heading:'हमारा मिशन',
                content:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन का उद्देश्य दिल्ली में बसे उत्तराखंडी प्रवासियों को संगठित, सशक्त और आत्मनिर्भर बनाना है। हम शिक्षा, स्वास्थ्य, रोजगार और कानूनी सहायता के साथ सामाजिक व प्रशासनिक सहयोग प्रदान कर, एक सम्मानजनक जीवन सुनिश्चित करना चाहते हैं।', 
                buttonText:'और पढ़ें'
            },
            {
                id:2, 
                img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746515948/6137734_bjmlnf.jpg', 
                heading:'हमारा विज़न',
                content:'एक सशक्त और समावेशी उत्तराखंडी प्रवासी समुदाय का निर्माण, जो अपनी सांस्कृतिक विरासत से जुड़ा रहे और सामाजिक, आर्थिक व शैक्षिक क्षेत्रों में अग्रणी भूमिका निभाए। हम चाहते हैं कि नई पीढ़ियाँ अपनी जड़ों को पहचानें और आधुनिक चुनौतियों का आत्मविश्वास से सामना करें।', 
                buttonText:'और पढ़ें'
            }
        ]
    },
    {
        languageId:'ENGLISH', 
        data:
        [
            {
                id:1, 
                img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746510200/20943958_limewm.jpg',
                heading:'Our Mission',
                content:'The goal of the Mahanagar Delhi Uttarakhand Pravasi Sangathan is to organize, empower, and make the Uttarakhand migrants living in Delhi self-reliant. We aim to ensure a dignified life by providing support in education, health, employment, legal aid, and both social and administrative assistance.', 
                buttonText:'Read more'
            },
            {
                id:2, 
                img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746515948/6137734_bjmlnf.jpg', 
                heading: 'Our Vision',
                content:'To build a strong and inclusive Uttarakhandi migrant community that remains connected to its cultural heritage and plays a leading role in social, economic, and educational spheres. We envision that the new generation recognizes its roots and confidently faces modern challenges.', 
                buttonText:'Read more'

            }
        ]
    },

    {
        languageId:'GARHWALI', 
        data:
        [
            {
                id:1, 
                img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746510200/20943958_limewm.jpg',
                heading: 'हमारो उदेश्य',
                content: 'महानगर दिल्ली उत्तराखण्ड प्रवासी संगठन को उद्देश्य दिल्ली मा बस्या उत्तराखण्डी प्रवासियन क संगठित, सशक्त आ आत्मनिर्भर बनोणु छ। हम शिक्षा, स्वास्थ्य, रोजगार आ कानूनी सहायता सँग-सँग सामाजिक आ प्रशासनिक सहयोग दैके, एक सम्मानजनक जिणगी सुनिश्चित करणा चाहनां।', 
                buttonText:"बढ़ि पढ़ि" 
            }, 
            {
                id:2, 
                img:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1746515948/6137734_bjmlnf.jpg', 
                heading: 'हमारो दृष्टिकोण',
                content: 'एक बलशाली आ समावेशी उत्तराखण्डी प्रवासी समुदायक निर्माण करणा, जिण माणुख आपणी सांस्कृतिक विरासत स जुङ्या रहन् आ सामाजिक, आर्थिक आ शैक्षिक क्षेत्र म अगुवा भूमिका निभाउं। हम चाहनां कि नव पीढ़ी आपणा मूल स पहचान करै आ आजकाल का चुनौतीण का आत्मविश्वास स सामना करैं।', 
                buttonText:'बढ़ि पढ़ि'
            }
        ]
  
    }   
];


export const footerData = [
    {
        languageId:'HINDI',
        footerKnowAboutUsHeading:'हमारे बारे में जानें',
        footerOurIntitiative:'हमारी पहल',
        footerJoinUs:'हमसे जुड़ें', 
        footerContactUs:'संपर्क करें',
        mdups:'महानगर दिल्ली उत्तराखण्ड प्रवासी संगठन', 
         location:'487, शाखा कार्यालय, पहला तल, हनुमान मंदिर के पास', 
         breakLocation:'चिराग दिल्ली, नई दिल्ली – 110020', 
        followUs:'हमें फॉलो करें',
        knowAboutUs:[
            {id:1, name:'हमारी यात्रा', path:''},
            {id:2, name:'हमारे साझेदार', path:''},
            {id:3, name:' गैलरी', path:'/gallery'},
            {id:4, name:'समाचार', path:''},
            {id:5, name:'कार्यक्रम', path:''},
            {id:6, name:'प्रशंसापत्र', path:''},
            {id:7, name:'संपर्क करें', path:''}
        ], 
        ourInitiative:[
            {id:1, name:'बाल देखभाल', path:''},
            {id:2, name:'शिक्षा', path:''},
            {id:3, name:'स्वास्थ्य', path:''},
            {id:4, name:'सशक्तिकरण', path:''},
            {id:5, name:'सामाजिक', path:''},
            {id:6, name:'आपदा प्रतिक्रिया', path:''},
            {id:7, name:'चिकित्सा शिविर', path:''},
            {id:8, name:'दिव्यांग बच्चों के कार्य', path:''}
        ], 
        getInvolved:[
            {id:1, name:'स्वयंसेवक बनें', path:''}, 
            {id:2, name:'धन दान करें', path:''}, 
            {id:3, name:'सामग्री का दान करें', path:''}, 
            {id:4, name:'कौशल का दान करें', path:''}
        ]
    }, 
      {
    languageId: 'ENGLISH', 
    footerKnowAboutUsHeading:'Know About Us',
    footerOurIntitiative:'Our Initiative',
    footerJoinUs:'Join Us', 
    footerContactUs:'Contact Us',   
    mdups: 'Mahanagar Delhi Uttarakhand Pravasi Sangathan',
    location: '487, Branch Office, First Floor, Near Hanuman Temple',
    breakLocation: 'Chirag Delhi, New Delhi – 110020',
    followUs: 'Follow Us',
    knowAboutUs: [
      { id: 1, name: 'Our Journey', path:''},
      { id: 2, name: 'Our Partners', path:''},
      { id: 3, name: 'Gallery', path:''},
      { id: 4, name: 'News', path:''},
      { id: 5, name: 'Events', path:''},
      { id: 6, name: 'Testimonials', path:''},
      { id: 7, name: 'Contact Us', path:''}
    ],
    ourInitiative: [
      { id: 1, name: 'Child Care', path:''},
      { id: 2, name: 'Education', path:''},
      { id: 3, name: 'Health', path:''},
      { id: 4, name: 'Empowerment', path:''},
      { id: 5, name: 'Social Welfare', path:''},
      { id: 6, name: 'Disaster Response', path:''},
      { id: 7, name: 'Medical Camps', path:''},
      { id: 8, name: 'Work for Specially-abled Children', path:''}
    ],
    getInvolved: [
      { id: 1, name: 'Become a Volunteer', path:''},
      { id: 2, name: 'Donate Money', path:''},
      { id: 3, name: 'Donate Materials', path:''},
      { id: 4, name: 'Donate Skills', path:''}
    ]
  },
  {
    languageId: 'GARHWALI',
    footerKnowAboutUsHeading:'हमार बारे मा जाणो',
    footerOurIntitiative:'हमार पहलक',
    footerJoinUs:'हम स्यौं जुड़ि जि', 
    footerContactUs:'हम स्यूँ संपर्क करि',
    mdups:'महानगर दिल्ली उत्तराखण्ड प्रवासी संगठन', 
    location:'487, शाखा कार्यालय, पहला तल, हनुमान मंदिर के पास', 
    breakLocation:'चिराग दिल्ली, नई दिल्ली – 110020', 
    followUs:'हमकू फॉलो करा',
    knowAboutUs: [
      { id: 1, name: 'हमारी यात्रा', path:''},
      { id: 2, name: 'हमर संगी साथी', path:''},
      { id: 3, name: 'गैलरी', path:''},
      { id: 4, name: 'समाचार', path:''},
      { id: 5, name: 'कार्यक्रम', path:''},
      { id: 6, name: 'सराहणा', path:''},
      { id: 7, name: 'संपर्क करौ', path:''}
    ],
    ourInitiative: [
      { id: 1, name: 'बाल देखभाल', path:''},
      { id: 2, name: 'पढ़ाई', path:''},
      { id: 3, name: 'स्वास्थ्य', path:''},
      { id: 4, name: 'सशक्तिकरण', path:''},
      { id: 5, name: 'सामाजिक सेवा', path:''},
      { id: 6, name: 'आपदा में मदद', path:''},
      { id: 7, name: 'चिकित्सा शिविर', path:''},
      { id: 8, name: 'दिव्यांग बालकां खातिर काम', path:''}
    ],
    getInvolved: [
      { id: 1, name: 'स्वयंसेवक बनौ', path:''},
      { id: 2, name: 'धन दान करौ', path:''},
      { id: 3, name: 'सामग्री दान करौ', path:''},
      { id: 4, name: 'हुनर दान करौ', path:''}
    ]
  }

]; 

export const galleryImage = [
    {id:1, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374733/IMG_6164_hetckp.jpg'},
    {id:2, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374733/WhatsApp_Image_2025-05-14_at_19.38.11_9ff99a95_iptrae.jpg'},
    {id:3, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374732/WhatsApp_Image_2025-05-14_at_19.35.17_931ff424_embilj.jpg'}, 
    {id:4, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374732/WhatsApp_Image_2025-05-14_at_19.35.15_5b97eeb3_g9yefm.jpg'},
    {id:5, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374732/WhatsApp_Image_2025-05-14_at_19.35.16_bd0216be_hzsqre.jpg'},
    {id:6, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374732/WhatsApp_Image_2025-05-14_at_19.35.16_de7d492b_cr66gf.jpg'},
    {id:7, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374731/WhatsApp_Image_2025-05-14_at_19.35.15_9d2cd5ea_ec17ju.jpg'},
    {id:8, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374730/IMG_6154_hwssm4.jpg'},
    {id:9, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374730/IMG_6678_kmavxp.jpg'}, 
    {id:10, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374729/IMG_6151_efc8rt.jpg'},
    {id:11, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374729/WhatsApp_Image_2025-05-03_at_17.41.57_73fd6d0e_gat5tw.jpg'},
    {id:12, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374729/WhatsApp_Image_2025-05-03_at_17.26.08_6c050a55_qx098v.jpg'},
    {id:13, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374727/IMG_6142_b3p6n8.jpg'}, 
    {id:14, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374727/WhatsApp_Image_2025-05-03_at_17.25.23_645f1959_ioqau2.jpg'},
    {id:15, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374725/WhatsApp_Image_2025-05-03_at_17.25.04_d9477976_awlswr.jpg'},
    {id:16, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374723/WhatsApp_Image_2025-05-03_at_17.24.25_9e821b99_ayjoat.jpg'},
    {id:17, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374721/WhatsApp_Image_2025-05-03_at_17.23.54_a8fbb68e_i1hli3.jpg'},
    {id:18, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374719/WhatsApp_Image_2025-04-07_at_15.26.14_8bffbb1e_ugshas.jpg'},
    {id:19, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374718/WhatsApp_Image_2025-04-07_at_15.26.13_da79a4d3_tc0bfc.jpg'},
    {id:20, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374718/WhatsApp_Image_2025-04-07_at_15.26.13_50d6fc56_az7y00.jpg'},
    {id:21, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374716/IMG_6675_cvdrnw.jpg'},
    {id:22, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374716/IMG_6675_cvdrnw.jpg'},
    {id:23, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374713/WhatsApp_Image_2025-04-07_at_15.26.13_4c875ac2_astrhz.jpg'},
    {id:24, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374712/IMG_6498_zu477t.jpg'}, 
    {id:25, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374711/IMG_6040_n9e0e6.jpg'},
    {id:26, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374710/IMG_6096_hcet9x.jpg'}, 
    {id:27, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374709/IMG_6015_fq0i81.jpg'}, 
    {id:28, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374709/IMG_6011_gm6jut.jpg'},
    {id:29, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374693/IMG_6484_ufshud.jpg'},
    {id:30, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374692/IMG_6478_dh9cka.jpg'},
    {id:31, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374690/IMG_6473_pvoh4g.jpg'}, 
    {id:32, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374690/IMG_5992_lfipij.jpg'}, 
    {id:33, galleryImg:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1747374690/IMG_5977_ezsoyq.jpg'}
]; 

export const displayBannerHeadingText = [
    {
        languageId:'HINDI',  
        data:[
            'एक कदम आगे, कई कदम प्रगति की ओर',
            'सशक्त संगठन, सशक्त समाज', 
            'हम साथ हैं, विकास के लिए',
            'MDUPS – जनसेवा से राष्ट्र सेवा तक',
            'संगठन नहीं, संकल्प है बदलाव का', 
            'समाज सेवा के लिए समर्पित',
            'जनसेवा से राष्ट्र सेवा तक',
            'एक टीम, एक लक्ष्य',
            'एकता की शक्ति, उत्तराखंड की भक्ति!',
            'हमारी संस्कृति, हमारी पहचान',
            'जहाँ उत्तराखंडी, वहाँ उन्नति तय!',
            'हम हैं साथ, इसलिए मजबूत है बात!',
            'संस्कृति से जुड़ें, समाज में आगे बढ़ें!',
            'अपनेपन की छांव – हर उत्तराखंडी के नाम!',
            'प्रवास नहीं, यह हमारा प्रयास है!',
            'जहाँ सहयोग हो, वहाँ समाधान निश्चित हो!',
            'शिक्षा, स्वास्थ्य और स्वाभिमान की ओर',
            'हमारी जड़ें पहाड़ में, पर पंख दिल्ली में!',
            'संघर्ष से सफलता की उड़ान',
            'गर्व से कहो – हम उत्तराखंडी हैं!',
            'संस्कृति और सम्मान का संगम',
            'सशक्त समाज का सपना अब साकार'
        ]
    },
    {
        languageId:'ENGLISH', 
        data: [
            "One Step Forward, Many Toward Progress",
            'Empowered Organization, Empowered Society',
            'Together for Progress',
            'MDUPS – From Public Service to Nation Building',
            'Not just an Organization, a Resolve for Change',
            'Dedicated to Social Service',
            'From Public Service to Nation Service',
            'One Team, One Goal',
            'Power of Unity, Devotion to Uttarakhand',
            'Our Culture, Our Identity',    
            'Where there’s Uttarakhandis, Progress is Guaranteed',
            'We Stand Together, So Our Voice is Strong',
            'Connect with Culture, Advance in Society',
            'A Shade of Belonging – For Every Uttarakhandi',
            'Not Just Migration – It’s Our Determined Effort',
            'Where There’s Cooperation, Solutions Follow',
            'Towards Education, Health, and Self-Respect',
            'Roots in the Hills, Wings in Delhi',
            'Soaring from Struggles to Success',
            'Say with Pride – We are Uttarakhandis',
            'A Union of Culture and Dignity',
            'The Dream of a Strong Society is Now Reality'
        ]
    }, 
    {
        languageId:'GARHWALI', 
        data: [
            "एक पग आगें, कई पग उन्नती की ओर",
            'बलदार संगठन, बलदार समाज',
            'हम सब साथ, विकास खातर',
            'MDUPS – जन सेवा बटि राष्ट्र सेवा',
            'संगठन नइ, बदलाव को संकल्प छ',
            'समाज सेवा खातर समर्पित',
            'जन सेवा बटि राष्ट्र सेवा',
            'एक टीम, एक लक्ष',
            'एकता को बल, उत्तराखंड को भक्ती!',
            'हमारी संस्कृति, हमारी पहिचान',
            'ज्याँ उत्तराखंडी, त्याँ उन्नति पक्की!',
            'हम छाँ साथ, बात छाँ मजबूत!',
            'संस्कृति स जुड़ो, समाज म अगै बढ़ो!',
            'अपनेपन को छाँव – हर उत्तराखंडी खातर!',
            'यो प्रवास नइ, यो प्रयास छ!',
            'ज्याँ मेल छ, त्याँ हल जरूरि छ!',
            'शिक्षा, स्वास्थ्य अर स्वाभिमान की ओर',
            'जड़ पहाड़ म, पंख दिल्ली म!',
            'संघर्ष बटि सफलता की उड़ान',
            'गर्व स बोलो – हम उत्तराखंडी च!',
            'संस्कृति अर सम्मान को संगम',
            'बलदार समाज को सपना अब साकार होणू छ'
        ]
    }
];


export const aboutUsData = [

    {
        ourMissionData:[
                {
                    languageId:'ENGLISH', 
                    heading:'Our Mission',
                    ourMission:'The mission of the Mahanagar Delhi Uttarakhand Pravasi Sangathan is to establish the Uttarakhandi migrants settled in Delhi as a strong, organized, and self-reliant community. We are committed not only to providing social support, but also to making migrants aware of their rights, offering administrative assistance, and empowering them in every sphere of life. Our primary objective is to build a social system that supports migrants in living a life of dignity. By providing support in critical areas such as education, healthcare, employment, and legal aid, we aim to create a network where every migrant can thrive with respect and security.'
                }, 
                {
                    languageId: 'HINDI', 
                    heading:'हमारा मिशन',
                    ourMission:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन का मिशन है – दिल्ली में बसे उत्तराखंडी प्रवासियों को एक सशक्त, संगठित और आत्मनिर्भर समुदाय के रूप में स्थापित करना। हम न केवल सामाजिक सहायता प्रदान करने के लिए प्रतिबद्ध हैं, बल्कि प्रवासियों को उनके अधिकारों के प्रति जागरूक बनाना, प्रशासनिक सहयोग देना और जीवन के प्रत्येक क्षेत्र में उन्हें सशक्त बनाना हमारा मुख्य उद्देश्य है। शिक्षा, स्वास्थ्य, रोजगार, और कानूनी सहायता जैसे महत्वपूर्ण पहलुओं में सहयोग प्रदान कर हम एक ऐसा सामाजिक तंत्र विकसित करना चाहते हैं जहाँ प्रत्येक प्रवासी सम्मानपूर्वक जीवन यापन कर सके।'
                }, 
                {
                    languageId:'GARHWALI', 
                    heading:'हमारा मिशन',
                    ourMission:'दिल्ली म बस्या गे उत्तराखंडी प्रवासियन क एक मज़बूत, सगठित अर आत्मनिर्भर समुदायक रूप म स्थापित करनु हमारा मुख्य उद्देश्य च। हम सिरफ सामाजिक मदद देण म ही न्हैं, बलकि प्रवासियन क उनक अधिकारों की जानकारी देण, प्रशासनिक सहारा देण अर हर क्षेत्र म उन्को सशक्त बनाण म लाग्या छुं। शिक्षा, स्वास्थ्य, रोजगार अर कानूनी मदद जैं महत्वपूर्ण बिंदुव म हम सहयोग देण चांहूं, जणि कि एक एणु सामाजिक ढांचा बनि सकै जां म हर प्रवासी सम्मान स जिंदगी बिता सकै।'
                }
        ]
    }, 
    {
        ourVisionData:[
            {
                languageId:'GARHWALI', 
                heading:'हमारा विज़न',
                ourVision:'एणु समावेशी अर सशक्त उत्तराखंडी प्रवासी समुदायक निर्माण करनु, जौं सिरफ आपणी सांस्कृतिक विरासत क संजो के न राखै, बलकि सामाजिक, आर्थिक अर शैक्षिक क्षेत्र म भी अगुवा भूमिका निभै। हम चाहणु छुं कि आण वाली पीढ़ियाँ आपणी जड़ौं स जुड़ी रहन, आपण गौरवशाली इतिहास अर परंपराव क जाणण, अर साथे ही बर्तमाण समय की चुनौतियन क सामना करणा म सक्षम ह्वैन। हमारो लक्ष्य च कि दिल्ली अर उणकै आस-पास वास करणा वाला हर उत्तराखंडी मूल को ब्यक्ति क अवसर मिलण, पहचान मिलण अर एक मजबूत समुदायक ढांचा मिलण।'
            },
            {
                languageId:'ENGLISH', 
                heading:'Our Vision',
                ourVision:'To build an inclusive and empowered community of Uttarakhandi migrants that not only preserves its rich cultural heritage but also takes a leading role in social, economic, and educational fields. We envision future generations staying connected to their roots, understanding their proud history and traditions, and being well-equipped to face the challenges of modern times. Our goal is to ensure that every individual of Uttarakhandi origin living in Delhi and surrounding areas receives opportunities, recognition, and a strong community structure.'
            }, 
            {
                languageId:'HINDI',
                heading:'हमारा विज़न',
                ourVision:'हमारा विज़न है – एक ऐसा समावेशी और सशक्त उत्तराखंडी प्रवासी समुदाय का निर्माण करना, जो न केवल अपनी सांस्कृतिक विरासत को संजोए रखे, बल्कि सामाजिक, आर्थिक और शैक्षिक क्षेत्रों में भी अग्रणी भूमिका निभाए। हम चाहते हैं कि आने वाली पीढ़ियाँ अपनी जड़ों से जुड़ी रहें, अपने गौरवशाली इतिहास और परंपराओं को जानें, और साथ ही आधुनिक समय की चुनौतियों का सामना करने में भी सक्षम हों। हमारा लक्ष्य है कि दिल्ली और आसपास के क्षेत्रों में रहने वाले उत्तराखंडी मूल के प्रत्येक व्यक्ति को अवसर मिले, पहचान मिले, और एक मजबूत सामुदायिक संरचना मिले।'
            }
        ]

    }, 
    {
        aboutUsOne:[
            {
                languageId:'ENGLISH', 
                aboutusDes:'Mahanagar Delhi Uttarakhand Pravasi Sangathan (Regd.) is an organized, active, and dedicated platform for Uttarakhandi migrants settled in Delhi. The organization works to bring together all individuals of Uttarakhandi origin who, for various reasons, reside in Delhi and its surrounding areas. This platform not only safeguards their rights but is also continuously working towards empowering them socially, culturally, and legally.'
            },
            {
                languageId:'GARHWALI', 
                aboutusDes:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन (रजि.) दिल्ली म बस्या गे उत्तराखंडी प्रवासियन क एक सगठित, सक्रीय अर समर्पित मंच च। या संगठन उन समस्त उत्तराखंडी मूल क जण्यां क एकठै ल्याण को कम करूं च, जौं विभिन्न कारणन स दिल्ली अर उंका आसपास का ठैं म रहण। या मंच सिरफ उनक अधिकारन क रक्षा न करूं च, बलकि सामाजिक, सांस्कृतिक अर कानूनी रूप म भी उन्को सशक्त करणा का दिशा म लगातार काम करूं च।'
            }, 
            {
                languageId:'HINDI', 
                aboutusDes:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन (रजि.) दिल्ली में बसे उत्तराखंडी प्रवासियों का एक संगठित, सक्रिय और समर्पित मंच है। यह संगठन उन सभी उत्तराखंडी मूल के लोगों को एक साथ लाने का कार्य करता है, जो विभिन्न कारणों से दिल्ली और इसके आसपास के क्षेत्रों में निवास कर रहे हैं। यह मंच न केवल उनके अधिकारों की रक्षा करता है, बल्कि सामाजिक, सांस्कृतिक और कानूनी रूप से भी उन्हें सशक्त करने की दिशा में निरंतर कार्यरत है।'
            }

        ], 
        aboutUsTwo:[
            {
                languageId:'ENGLISH',
                aboutusDes:'Our objective is not just to be a community organization, but to become a true force that brings real change to the lives of Uttarakhandi migrants. The organization actively plays a role in crucial areas such as education, healthcare, employment, and legal support. Along with this, we also provide administrative assistance, information about social security schemes, and proper guidance — so that our migrant brothers and sisters can become self-reliant and aware.'
            },
            {
                languageId:'GARHWALI', 
                aboutusDes:'हमारो उद्देश्य सिरफ एक समुदायक संगठन बनणु न्हैं, बलकि एणु शक्ति बनणु च, जौं उत्तराखंडी प्रवासियन की जिंदगी म असली बदलाव ल्याण सकै।संगठन शिक्षा, स्वास्थ्य, रोजगार अर कानूनी मदद जैं जरूरी क्षेत्रन म सक्रीय भूमिका निभाई रौ च। या संगठने प्रशासनिक सहारा, सामाजिक सुरक्षा योजनाव क जानकारी अर सटीक मार्गदर्शन भी देण च, जंणसैं हमारा प्रवासी भाई-बैण आत्मनिर्भर अर जागरूक बन सकण।'
            },
            {
                languageId:'HINDI', 
                aboutusDes:'हमारा उद्देश्य केवल एक सामुदायिक संगठन बनना नहीं है, बल्कि एक ऐसी शक्ति बनना है जो उत्तराखंडी प्रवासियों के जीवन में वास्तविक बदलाव ला सके। संगठन शिक्षा, स्वास्थ्य, रोजगार, और कानूनी सहायता जैसे महत्वपूर्ण क्षेत्रों में सक्रिय भूमिका निभा रहा है। इसके साथ ही हम प्रशासनिक सहायता, सामाजिक सुरक्षा योजनाओं की जानकारी और मार्गदर्शन भी प्रदान करते हैं, जिससे हमारे प्रवासी भाई-बहन आत्मनिर्भर और जागरूक बन सकें।'
            }
        ], 
        aboutUsThree:[
            {
                languageId:'HINDI', 
                aboutusDes:'यह संगठन उत्तराखंड की समृद्ध संस्कृति, परंपराओं और मूल्यों को जीवित रखने के लिए भी प्रतिबद्ध है। विभिन्न सांस्कृतिक कार्यक्रम, पारंपरिक त्योहारों का आयोजन, लोक कला को बढ़ावा देने वाली गतिविधियाँ, और सामूहिक मेल-मिलाप हमारे सामाजिक एकता के प्रतीक हैं। हम चाहते हैं कि नई पीढ़ी अपनी सांस्कृतिक जड़ों से जुड़ी रहे और उन्हें गर्व के साथ आगे बढ़ाए।'
            },
            {
                languageId:'ENGLISH', 
                aboutusDes:'This organization is also committed to preserving the rich culture, traditions, and values of Uttarakhand. Various cultural programs, celebrations of traditional festivals, activities that promote folk art, and community gatherings are symbols of our social unity. We want the new generation to stay connected to their cultural roots and carry them forward with pride.'
            },
            {
                languageId:'GARHWALI', 
                aboutusDes:'या संगठन उत्तराखंड की समृद्ध संस्कृति, परंपराव अर मूल्यान क जिंदा रखण खातर भी प्रतिबद्ध च। विभिन्न सांस्कृतिक कार्यक्रम, पारंपरिक त्यौंहारन क आयोजन, लोककला क बढ़ावा देण वाली गतिविधियाँ अर सामूहिक मेल-मिलाप — या सब हमारी सामाजिक एकता का प्रतीक च। हम चाहणु छां कि नव पीढ़ी आपणी सांस्कृतिक जड़न स जुड़ी रै अर उनक गर्व स आगू बढ़ै।'
            }
        ], 
        aboutUsFour:[
            {
                languageId:'HINDI',
                aboutusDes:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन का दृष्टिकोण दीर्घकालिक और समावेशी है। हम केवल वर्तमान जरूरतों पर नहीं, बल्कि भविष्य की पीढ़ियों के लिए एक मजबूत आधार तैयार करने पर ध्यान केंद्रित कर रहे हैं। एकजुटता, आत्मसम्मान और सामूहिक भागीदारी के मूलमंत्र पर आधारित यह संगठन, दिल्ली में रह रहे प्रत्येक उत्तराखंडी के लिए एक भरोसेमंद छांव की तरह कार्य कर रहा है – जहां उसे समझा भी जाता है, और साथ भी दिया जाता है।'
            }, 
            {
                languageId:'ENGLISH',
                aboutusDes:'The vision of the Metropolitan Delhi Uttarakhand Migrant Organization is long-term and inclusive. We are not only focused on present needs but are also working toward building a strong foundation for future generations. Rooted in the principles of unity, self-respect, and collective participation, this organization serves as a trusted shelter for every Uttarakhandi living in Delhi — a place where they are both understood and supported.'
            }, 
            {
                languageId:'GARHWALI', 
                aboutusDes:'महानगर दिल्ली उत्तराखंड प्रवासी संगठन को दृष्टिकोण दीर्घकालिक अर समावेशी च। हम सिरफ वर्तमान जरूरतन प न्हैं, बलकि भविष्या की पीढ़्यां खातर एक मजबूत आधार तैयार करणा प ध्यान द्यां रयां च। एकजुटता, आत्मसम्मान अर सामूहिक भागीदारी का मूलमंत्र प आधारति या संगठन दिल्ली म रहणा वाला हरेक उत्तराखंडी खातर एक भरोस्यान छांव जस काम करूं च – जिथैं उसन समज्यू भी जांद च, अर साथ भी दिउं च।'
            }
        ]
    }
]


export const donationButtonData = [
    {
        languageId:'GARHWALI', 
        buttonName:'दान करि'
    }, 
    {
        languageId:'ENGLISH',
        buttonName:'DONATE'
    }, 
    {
        languageId:'HINDI', 
        buttonName:'दान करें'
    }
]

export const joinOurTeamButtonData = [
    {
        languageId:'HINDI',
        buttonName:'टीम से जुड़ें'
    }, 
    {
        languageId:'ENGLISH',
        buttonName:'JOIN TEAM'
    }, 
    {
        languageId:'GARHWALI',
        buttonName:'टीम स जुड़ि ज्या'
    }
]; 


export const HomeDonationData = [
    {
        languageId:'HINDI', 
        Heading:'धन संग्रह - एक छोटी मदद, बड़ी उम्मीद',
        donationMsg:''
    }
]

export const notFoundHeading = [
    {
        languageId:'HINDI', 
        heading:"अरे नहीं! अनुरोधित पृष्ठ नहीं मिला..!"
    }, 
    {
        languageId:'ENGLISH',
        heading:'OPPS! The Requested Page is Not Found..!'
    }, 
    {
        languageId:'GARHWALI',
        heading:"हाय! जौं थ्यौं आप मंग्यू, वौ नि मिल पायो।"
    }
]; 

export const notFoundMsg = [
    {
        languageId:'HINDI',
        msg:"आप जिस पृष्ठ को ढूंढ़ रहे हैं वह हटाया जा चुका है, उसका नाम बदला गया है, URL में वर्तनी की त्रुटि है, या फिर वह अस्थायी रूप से अनुपलब्ध है।"
    }, 
    {
        languageId:'ENGLISH',
        msg:'The page you are looking for might have been removed, renamed, spelling error in the URL or is temporarily unavailable.'
    }, 
    {
        languageId:'GARHWALI', 
        msg:"जौं पृष्ठ आप खोज रयां, उ हटि सक्दो, नाम बदलि गयलो होलु, URL मं कुछ वर्तनी की गलती होली या उ अस्थायी रूप मं उपलब्ध नि होलो।"
    }
]

export const notFoundButton = [
    {
        languageId:'HINDI',
        buttonName:"मुखपृष्ठ पर वापस जाएं"
    }, 
    {
        languageId:'GARHWALI', 
        buttonName:"मुख पृष्ठ पर फिरी जाओ"
    }, 
    {
        languageId:'ENGLISH', 
        buttonName:'BACK TO HOMEPAGE'
    }
]; 


export const homeDonationData = [
    {
        languageId:'HINDI',
        donationHeading:'धन संग्रह - एक छोटी मदद, बड़ी उम्मीद', 
        donationMsg:'एम.डी.यू.पी.एस (महानगर दिल्ली-एनसीआर उत्तराखण्ड प्रवासी संगठन) एक सामूहिक प्रयास है, जो जरूरतमंद उत्तराखंडी प्रवासियों के जीवन में सकारात्मक बदलाव लाने हेतु प्रतिबद्ध है। हम सभी वर्गों के लोगों—बुज़ुर्गों, महिलाओं, बच्चों, छात्रों और आपदा से प्रभावित परिवारों—की सहायता के लिए धन एकत्र करते हैं।', 
        buttonName:'दान करें'
    }, 
    {
        languageId:'ENGLISH',
        donationHeading:"Fundraising – A Small Help, A Big Hope", 
        donationMsg:'M.D.U.P.S (Mahanagar Delhi-NCR Uttarakhand Pravasi Sangathan) is a collective initiative dedicated to bringing positive change in the lives of needy Uttarakhandi migrants. We raise funds to support people from all walks of life—elders, women, children, students, and families affected by disasters.', 
        buttonName:'Donate'

    },
    {
        languageId:'GARHWALI',
        donationHeading:"धन बटोर – इक छोटी सहायत, बड़ी आस", 
        donationMsg:'एम.डी.यू.पी.एस (महानगर दिल्ली-एनसीआर उत्तराखण्ड प्रवासी संगठन) एक सगांठित प्रयास छन, जौं जरूरतमंद उत्तराखंडी प्रवासियन क जिंदगि मं सकारात्मक बदलाव ल्याण खातर समर्पित छन। हम सब वर्गक मानुख — बुढ़्यां, मैल्यों, बच्चां, छत्रां अर आपदा स पीड़ित परिवार — की मदद खातर धन बटोरन।', 
        buttonName:'दान करी'
    }
];

export const homeJoinUsData = [
    {
        languageId:'HINDI', 
        joinUsHeading:'एम.डी.यू.पी.एस. से जुड़िए', 
        joinUsMsg:'जब आप किसी और के लिए दीप जलाते हैं, तो वह आपके मार्ग को भी रोशन करता है। महानगर दिल्ली उत्तराखंड प्रवासी संगठन (एम.डी.यू.पी.एस.) से जुड़कर आप वंचित प्रवासियों के जीवन में बदलाव लाने के साथ-साथ अपने जीवन को भी उद्देश्यपूर्ण बना सकते हैं। हम शिक्षा, स्वास्थ्य, महिला सशक्तिकरण, सामाजिक कल्याण और सांस्कृतिक विरासत के क्षेत्रों में कार्यरत हैं। आपकी भागीदारी हमारे प्रयासों को नई दिशा दे सकती है।', 
        buttonName:'टीम से जुड़ें'
    }, 
    {
        languageId:'ENGLISH', 
        joinUsHeading:'Join M.D.U.P.S.',
        joinUsMsg:'When you light a lamp for someone else, it also brightens your own path. By joining the Metropolitan Delhi Uttarakhand Pravasi Organization (M.D.U.P.S.), you can bring positive change in the lives of underprivileged migrants and give a meaningful purpose to your own life. We work in the fields of education, healthcare, women empowerment, social welfare, and preservation of cultural heritage. Your participation can give new direction to our collective efforts.', 
        buttonName:'Join Team'

    }, 
    {
        languageId:'GARHWALI',
        joinUsHeading:'एम.डी.यू.पी.एस. सै जुड़ि जाओ',
        joinUsMsg:'जब तैं कोई दूसराक खातर दीप जलौंछ, तवौ रौशनी तेरो बाटौं भी चमकौंछ। महानगर दिल्ली उत्तराखंड प्रवासी संगठन (एम.डी.यू.पी.एस.) सै जुड़िके तूँ वंचित प्रवासियन क जिंदगि मं बदलाव ल्याण सँग-सँग, आपणी जिंदगि कू भी एक उद्देश्य दे सकछ। हम शिक्षण, स्वास्थ्य, म्यलि सशक्तिकरण, सामाजिक कल्याण अर सांस्कृतिक विरासत का खेतर मं काम करां। तेरी भागीदारी हमार प्रयासन कू इक नव दिशा दे सकछ।', 
        buttonName:'टीम सै जुड़ि'
    }
]; 

export const homeTestimonialData = [
    {
        languageId:'HINDI',
        heading:'हमारे संरक्षक और शुभचिंतकों के शब्द',
        msg:'एम.डी.यू.पी.एस की सफलता की यात्रा में हमें अपने संरक्षकों, अभिभावकों, और शुभचिंतकों का निरंतर सहयोग और आशीर्वाद प्राप्त हुआ है। इन महान व्यक्तियों द्वारा दिए गए शब्द केवल प्रशंसा नहीं, बल्कि हमारे लिए प्रेरणा, मार्गदर्शन और विश्वास का प्रतीक हैं। जब कोई हमारे कार्यों की सराहना करता है, तो वह हमारे प्रयासों को नई ऊर्जा और संकल्प प्रदान करता है। उनके विचार हमें यह यकीन दिलाते हैं कि हम एक सकारात्मक दिशा में कार्य कर रहे हैं और समाज में एक सशक्त भूमिका निभा रहे हैं। हर शब्द, हर भावना हमारे लिए अनमोल है, जो हमारे संस्थान के मूल्यों और लक्ष्यों को और भी दृढ़ बनाती है। यह शुभकामनाएँ न केवल हमारे बीते कल का सम्मान हैं, बल्कि आने वाले कल के लिए एक आशा और प्रेरणा भी हैं'
    }, 
    {
        languageId:'ENGLISH',
        heading:'Messages from Our Guides and Well-wishers',
        msg:'In the journey of success of M.D.U.P.S., we have continuously received the support and blessings of our patrons, guardians, and well-wishers. The words spoken by these great individuals are not merely praises, but symbols of inspiration,guidance, and trust for us. When someone appreciates our efforts, it gives us new energy and determination. Their thoughts assure us that we are working in a positive direction and playing a meaningful role in society. Every word, every emotion is precious to us, strengthening the values and goals of our organization. These blessings are not only an honor to our past, but also a source of hope and inspiration for the future.'
    },
    {
        languageId:'GARHWALI',
        heading:'हमार संरक्षक अर शुभचिंतकूं का बात',
        msg:'एम.डी.यू.पी.एस. की सफळता की यात्रा मं हमकूं अपने संरक्षक, अभिभावक अर शुभचिंतक्यूँ को लगातार साथ, स्नेह अर आशीर्वाद मिलद रौ। इन महान ब्यक्त्युन का बोले ग्या बात हामर खातर सिर्फ सराहना नईं, बल्कि प्रेरणा, दिशा अर भरोसे को प्रतीक छन। जब कोई हामर काम को सराहना करद, तौ उ बात हमकूं नव जौंस अर दृढ़ निश्चय देल करद। उक्युन विचार हमकूं ई बिस्वास दिलाउंद कि हम एक सकारात्म दिशा मं चालि रयां छन अर समाज मं एक मजबूत भूमिका निभां रयां छन। हर शब्द, हर भावना हमार खातर अनमोल छन, जिकां हमार संस्था का मूल्यमान अर लक्ष्य अर बी दृढ़ करद। इ शुभकामना सिर्फ हमार बीता कल को सम्मान नईं, बल्कि आउंदा काल खातर एक आशा अर प्रेरणा बी छन।'
    }
];


export const homeMsgfromUs = [
    {
        languageId:'GARHWALI', 
        heading:'हामरी तरफ स्यूं एक संदेस',
        msg:'हम सब जाणदा कि हामरी संस्कृति अर विरासत हमन अपनी जड़ूं स्यूं जोड़दा। दिल्ली जे महानगर मं बस्याला उत्तराखंडी प्रवासीयूं कू एक मजबुत अर सशक्त समुदाय बणाण खातर, हमन एकता, सहयोग अर संस्कृति कू आदर्श देखाणो पड़ी। "आवा मिलिक एक ऐसो प्रवासी उत्तराखंडी समुदाय बणावां, जिक एकता, संस्कृति अर सहयोग को प्रतीक होय। हम सब एक परिबार छन – एक टीम, एक लक्ष।"', 
        button:"थोड़िक और जाणू"
    }, 
    {
        languageId:'ENGLISH', 
        heading:'A Message from Us', 
        msg: 'We all know that our culture and heritage connect us to our roots. To build a strong and empowered community of Uttarakhandi migrants in the metropolis of Delhi, we must set an example of unity, cooperation, and culture. "Let us come together to build a Uttarakhandi migrant community that stands as an example of unity, culture, and cooperation. We are all one family – one team, one goal."', 
        button:'Know More'
    }, 
    {
        languageId:'HINDI', 
        heading:'हमारी ओर से एक संदेश', 
        msg:'हम सभी जानते हैं कि हमारी संस्कृति और विरासत हमें अपनी जड़ों से जोड़ती है। महानगर दिल्ली में बसे उत्तराखंडी प्रवासियों का एक मजबूत और सशक्त समुदाय बनाने के लिए, हमें एकता, सहयोग और संस्कृति की मिसाल पेश करनी होगी। "आइए मिलकर एक ऐसा उत्तराखंडी प्रवासी समुदाय बनाएं, जो एकता, संस्कृति और सहयोग की मिसाल बने। हम सब एक परिवार हैं – एक टीम, एक लक्ष्य।', 
        button:'और जाने'
    }
]

export const homeNewsArticleHeadingData = [
    {
        languageId:'HINDI', 
        heading:'समाचार और लेख'
    }, 
    {
        languageId:'ENGLISH', 
        heading:'News and Articles'
    }, 
    {
        languageId:'GARHWALI', 
        heading:'समचार अर लेख'
    }
];


export const homeTownData = [
{
languageId:'HINDI',
heading:'उत्तराखंड के मूलनिवासियों के कल्याण हेतु समर्पित',
msg:'हमारा संगठन उत्तराखंड के मूलनिवासियों के सामाजिक सुरक्षा, आर्थिक सुरक्षा और शैक्षिक उत्थान हेतु कार्य करेगा, यह संगठन उत्तराखंड के प्रत्येक नागरिक को समृद्ध और खुशहाल बनाने के लिए विभिन्न योजनाओं का संचालन करता है। हमारी मुख्य प्राथमिकता है उत्तराखंड के प्रवासियों को एक मंच पर लाकर एक मजबूत और सशक्त समाज बनाना हैं' 
},
{
languageId:'ENGLISH', 
heading: 'Dedicated to the Welfare of the Native Residents of Uttarakhand',
msg: 'Our organization works for the social security, economic security, and educational upliftment of the native residents of Uttarakhand. This organization implements various schemes to make every citizen of Uttarakhand prosperous and happy. Our primary focus is to unite the migrants of Uttarakhand on one platform to build a strong and empowered community.'
},
{
languageId:'GARHWALI', 
heading: 'उत्तराखंड के ठूल गाम वासीयां की भलाई खातर समर्पित',
msg: 'हमारो संगठन उत्तराखंड के ठूल गाम वासीयां की सामाजिक सुरक्षा, आर्थिक सुरक्षा आ पढ़ाई-लिखाई के विकास खातर काम करणा। ई संगठन उत्तराखंड के हर माणख्ये ने समृद्ध आ खुशहाल बनावण खातर कई योजना चलावणा। हमारो मुख प्राथमिकता छ कि उत्तराखंड के प्रवासी ने एक जगह बठाय के मजबूत आ सशक्त समाज बनावणा।'
}
];

export const galleryDataHeading = [
    {
        languageId:'GARHWALI',
        heading:"गैलरी - हर फोटो मं एक कहानी छिपी छ"


    }, 
    {
        languageId:'ENGLISH', 
        heading:'Gallery – Every picture tells a story'

    }, 
    {languageId:'HINDI', 
        heading:'गैलरी - हर तस्वीर एक कहानी कहती है'
    }
]; 

export const joinOurTeamData = [
    {
        languageId:'HINDI', 
        data:[
            {
                heading:'सेवा क्यों करें? – एम.डी.यू.पी.एस. के साथ जुड़ने का उद्देश्य', 
                msg:`भगवान बुद्ध ने कहा है — यदि आप किसी और के लिए दीपक जलाते हैं, 
                तो वह आपके मार्ग को भी प्रकाशित करता है। महानगर दिल्ली उत्तराखंड प्रवासी 
                संगठन (एम.डी.यू.पी.एस.) के साथ स्वयंसेवक के रूप में जुड़कर आप न केवल 
                समाज के वंचित और ज़रूरतमंद प्रवासी भाई-बहनों के जीवन में सकारात्मक परिवर्तन 
                ला सकते हैं, बल्कि अपने जीवन को भी सेवा, संवेदना और उद्देश्य की भावना से भर 
                सकते हैं। हमारा संगठन शिक्षा, स्वास्थ्य, सामाजिक कल्याण, महिला सशक्तिकरण और 
                सांस्कृतिक विरासत के संरक्षण जैसे क्षेत्रों में निरंतर सक्रिय है। आपके सहयोग से हम इन 
                प्रयासों को और अधिक प्रभावशाली बना सकते हैं। यह एक ऐसा मंच है जहाँ सेवा केवल 
                कर्तव्य नहीं, बल्कि ईश्वर सेवा के समकक्ष मानी जाती है। हम अपने सभी स्वयंसेवकों को 
                दिल से धन्यवाद देते हैं और उन्हें इस सामाजिक आंदोलन का अभिन्न अंग मानते हैं। हमें 
                विश्वास है कि आपका यह अनुभव न केवल उपयोगी, बल्कि आपके जीवन में भी एक 
                सार्थक मोड़ साबित होगा।`, 
                headingTwo:`🤝 एम.डी.यू.पी.एस. सदस्यता विकल्प (वार्षिक)`, 
                msgTwo:`आप हमारे संगठन से औपचारिक रूप से जुड़कर सामाजिक परिवर्तन के इस मिशन 
                को और मजबूत बना सकते हैं। नीचे दो प्रकार की सदस्यता विकल्प उपलब्ध हैं:`, 
                generalMembership:'सामान्य सदस्यता', 
                generalMembershipData:{
                    pointOne:'योगदान राशि: ₹100 प्रति वर्ष', 
                    pointTwo:'लाभ: संगठन की सभी सार्वजनिक गतिविधियों में सहभागिता, सूचना और सांस्कृतिक आयोजनों में प्राथमिकता।', 
                    pointThree:'उपयुक्त: वे सदस्य जो सामाजिक उद्देश्य का समर्थन करना चाहते हैं और कभी-कभार भागीदारी देना चाहते हैं।'
                }, 
                activeMembership:'सक्रिय सदस्यता', 
                activeMembershipData:{
                    pointOne:'योगदान राशि: ₹1000 प्रति वर्ष', 
                    pointTwo:'लाभ: संगठन के निर्णयात्मक कार्यक्रमों में सक्रिय भूमिका, विशेष बैठकों में आमंत्रण, नेतृत्व अवसर, और स्थानीय/राज्य स्तर पर प्रतिनिधित्व का अवसर।', 
                    pointThree:'उपयुक्त: वे सदस्य जो सेवा कार्यों में निरंतर भाग लेना चाहते हैं और नेतृत्व की भूमिका निभाना चाहते हैं।'
                }
                 
            }
        ]
    }, 
    {
  languageId: "GARHWALI",
  data: [
    {
      heading: "सेवा क्ये करूं? – एम.डी.यू.पी.एस. स्यं जुड़ण को मतलब",
      msg: "भगवान बुद्ध कैंद — जौं तैं कसी दूसर खाती दीपक बालूं, तौ ऊ तोरो रौशनी भी करल। महानगर दिल्ली उत्तराखंड प्रवासी संगठन (एम.डी.यू.पी.एस.) स्यं स्वयंसेवक बणिक जुड़िक, तैं ना केवल समाज मं बंचित आ ज़रूरतमंद प्रवासी भाई-बैण्यूं की जिंदगी मं साकारात्मक बदलाव ल्ये सकद, बलकि तोरि खुद की जिंदगी मं सेवा, संवेदना आ उद्देश्य की भावना भर सकद। हमार संगठन शिक्षा, स्वास्थ्य, सामाजिक भलाई, महिला सशक्तिकरण आ सांस्कृतिक धरोहर की सुरक्षा मं लगातार सक्रीय च। तोर सहयोग स्यं हम यी प्रयास और भी प्रभावशाली बण सकद। ई एक ऐस मंच च जं सेवा केवल कर्तव्य ना, बलकि भगवान सेवा की बराबरी मं मानि जांद। हम अपने सब स्वयंसेवक्यूं कू दिल स्यं धन्यवाद दिना चा और यीं सामाजिक आंदोलन कू अभिन्न अंग मानणा चा। हमूं बिस्वास च कि तोरो ई अनुभव केवल उपयोगी ना, बलकि तोरि जिंदगी मं एक सार्थक मोड़ भी ल्याल।",
      headingTwo: "🤝 एम.डी.यू.पी.एस. सदस्यता विकल्प (सालाना)",
      msgTwo: "तैं हमार संगठन स्यं औपचारिक रूप मं जुड़िक सामाजिक बदलाव को ई मिशन और मजबूत बण सकद। नीच्यां द्यो गय सदस्यता विकल्प उपलब्ध चैं:",
      generalMembership: "सामान्य सदस्यता",
      generalMembershipData: {
        pointOne: "योगदान राशि: ₹100 प्रति साल",
        pointTwo: "लाभ: संगठन की सब सार्वजनिक गतिविधिमं भागीदारी, सूचना आ सांस्कृतिक आयोजनों मं प्राथमिकता।",
        pointThree: "उपयुक्त: व सदस्य जौं सामाजिक उद्देश्य कू समर्थन करणा चां और कब-कब भाग लेणा चां।"
      },
      activeMembership: "सक्रिय सदस्यता",
      activeMembershipData: {
        pointOne: "योगदान राशि: ₹1000 प्रति साल",
        pointTwo: "लाभ: संगठन के निर्णयात्मक कार्यक्रम्यूं मं सक्रीय भूमिका, विशेष बैठकों मं निमंत्रण, नेतृत्व के अवसर आ स्थानीय/राज्य स्तर पर प्रतिनिधित्व।",
        pointThree: "उपयुक्त: व सदस्य जौं निरंतर सेवा कार्य मं भाग लेणा चां और नेतृत्व निभाणां चां।"
      }
    }
  ]
}, 
{
  languageId: 'ENGLISH',
  data: [
    {
      heading: 'Why Serve? – Purpose of Joining M.D.U.P.S.',
      msg: `Lord Buddha once said — If you light a lamp for someone else, it will also brighten your path. 
      By joining the Metropolitan Delhi Uttarakhand Pravasi Sangathan (M.D.U.P.S.) as a volunteer, you not only bring 
      positive change to the lives of underprivileged and needy migrant brothers and sisters, but you also enrich your 
      own life with the spirit of service, compassion, and purpose. Our organization is actively working in areas such as 
      education, health, social welfare, women empowerment, and preservation of cultural heritage. With your support, 
      we can make these efforts even more impactful. This is a platform where service is not merely a duty, but is 
      considered equivalent to service to God. We wholeheartedly thank all our volunteers and consider them an integral 
      part of this social movement. We believe that this experience will not only be valuable, but also prove to be a 
      meaningful turning point in your life.`,
      
      headingTwo: '🤝 M.D.U.P.S. Membership Options (Annual)',
      msgTwo: `You can formally join our organization and strengthen this mission of social change. 
      Below are two types of membership options available:`,

      generalMembership: 'General Membership',
      generalMembershipData: {
        pointOne: 'Contribution: ₹100 per year',
        pointTwo: 'Benefits: Participation in all public activities of the organization, updates and priority in cultural events.',
        pointThree: 'Ideal for: Members who wish to support the social cause and participate occasionally.'
      },

      activeMembership: 'Active Membership',
      activeMembershipData: {
        pointOne: 'Contribution: ₹1000 per year',
        pointTwo: 'Benefits: Active role in the organization’s core programs, invitations to special meetings, leadership opportunities, and representation at local/state levels.',
        pointThree: 'Ideal for: Members who wish to actively participate in service work and take up leadership roles.'
      }
    }
  ]
}
];

export const donateData = [
    {
        languageId:'HINDI', 
        data:{
            heading:'दान क्यों करें? – आपका सहयोग, बच्चों का भविष्य', 
            msgOne:`आपका छोटा-सा योगदान भी एम.डी.यू.पी.एस. (महानगर दिल्ली उत्तराखंड प्रवासी संगठन) 
            के बड़े उद्देश्य में अमूल्य भूमिका निभा सकता है। हम समाज के सबसे हाशिए पर खड़े बच्चों और 
            जरूरतमंद प्रवासी परिवारों के जीवन को बेहतर बनाने के लिए कार्यरत हैं – ताकि हर बच्चा शिक्षा, 
            पोषण, स्वास्थ्य और सुरक्षा के अपने मौलिक अधिकारों को प्राप्त कर सके।`, 
            msgTwo:`हर वह बच्चा जो स्कूल जाने से वंचित है, हर वह परिवार जो इलाज नहीं करा पा रहा, 
            और हर वह बच्चा जो कुपोषण या शोषण का शिकार हो रहा है – हमारी प्राथमिक जिम्मेदारी है। 
            पर यह कार्य केवल संगठन के बूते नहीं हो सकता। इसके लिए आपका साथ और सहयोग अनिवार्य है।`, 
            msgThree:`जब आप MDUPS को दान करते हैं, आप केवल आर्थिक सहायता नहीं दे रहे होते – 
            आप एक मुस्कान, एक उम्मीद और एक उज्जवल भविष्य का निर्माण कर रहे होते हैं। आपका 
            योगदान बच्चों को शिक्षा दिलाने, महिला कल्याण योजनाओं को लागू करने, और कमजोर तबकों 
            को कानूनी व सामाजिक सुरक्षा प्रदान करने में सीधे उपयोग किया जाता है।`, 
            msgFour:`हमारा विश्वास है – "जब हम मिलकर प्रयास करते हैं, तब असली बदलाव होता है।" 
            हम आपसे अनुरोध करते हैं कि आगे बढ़ें, सहयोग करें और उस बदलाव का हिस्सा बनें, जिसकी 
            इस समाज को ज़रूरत है। एक बेहतर, सुरक्षित और समान भविष्य के निर्माण में आपकी 
            भागीदारी ही हमारी सबसे बड़ी ताकत है`, 
            headingTwo:`महानगर दिल्ली उत्तराखंड प्रवासी संगठन प्रोजेक्ट्स में आपके सहयोग से हमने यह प्रभाव डाला है।`, 
            arrayData:[
                {
                    id:1, 
                    logo:'', 
                    name:'शिक्षा'
                }, 
                {
                    id:2, 
                    logo:'', 
                    name:'स्वास्थ्य'
                }, 
                {
                    id:3, 
                    logo:'', 
                    name:'सामाजिक'
                }, 
                {
                    id:4, 
                    logo:'', 
                    name:'आत्मनिर्भरता'
                }
            ]
        }
    }, 
    {
  languageId: 'ENGLISH',
  data: {
    heading: 'Why Donate? – Your Support, Their Future',
    msgOne: `Even your small contribution can play a valuable role in the bigger mission of M.D.U.P.S. 
    (Metropolitan Delhi Uttarakhand Pravasi Sangathan). We are working to improve the lives of 
    marginalized children and needy migrant families – so that every child can access their fundamental 
    rights to education, nutrition, health, and safety.`,

    msgTwo: `Every child deprived of education, every family unable to afford treatment, and every child 
    suffering from malnutrition or exploitation – is our primary responsibility. But this task cannot be 
    accomplished by the organization alone. Your support and cooperation are essential.`,

    msgThree: `When you donate to MDUPS, you are not just offering financial help – you are creating 
    a smile, a hope, and a brighter future. Your contribution is directly used for educating children, 
    implementing women welfare programs, and providing legal and social protection to vulnerable sections.`,

    msgFour: `We believe – "Real change happens when we work together." We request you to come 
    forward, support us, and become part of the change this society needs. Your participation is our 
    greatest strength in building a better, safer, and more equal future.`,

    headingTwo: `With your support, here’s the impact we’ve created through Metropolitan Delhi Uttarakhand Pravasi Sangathan projects.`,
    
    arrayData: [
      {
        id: 1,
        logo: '',
        name: 'Education'
      },
      {
        id: 2,
        logo: '',
        name: 'Health'
      },
      {
        id: 3,
        logo: '',
        name: 'Social Welfare'
      },
      {
        id: 4,
        logo: '',
        name: 'Self-Reliance'
      }
    ]
  }
}, 
{
  languageId: 'GARHWALI',
  data: {
    heading: 'दान क्ये करूं? – तेरो सहयोग, बालक्यां कु भविष्य',
    msgOne: `तेरो थोड़को सहयोग भी एम.डी.यू.पी.एस. (महानगर दिल्ली उत्तराखंड प्रवासी संगठन) 
    क बड़े उद्देश्य मं अमूल्य योगदान दे सकद। हम उन बालक्यां और जरूरतमंद प्रवासी परवारन 
    खातर कम करणा छन जो समाज क किनार मं छां – ताकि हर बालक पढ़ाई, पोषण, स्वास्थ्य 
    और सुरक्षा जैसे मूल अधिकार पावै।`,

    msgTwo: `हर वो बालक जिण स्कूल जाण नै मिलर, हर वो परवार जिकु इलाज नै हो पावण, 
    और हर वो बालक जिकु कुपोषण या शोषण सहण पड़र – हमार पहिल जिम्मेदारी छन। 
    पै ई काम हम अकेल नै कर सकां। तुमार साथ जरूरी छन।`,

    msgThree: `जब तैं एम.डी.यू.पी.एस. मं दान करछ, तब तैं खाली पइसा नै दे रय – 
    तैं एक मुस्कान, एक उम्मीद और एक उज्जवल भविष्य बनौंद। तेरो दान सी बालक्यां नै 
    पढ़ाई मिलछ, महिलन खातर योजना चलन छ, और कमजोर लोगन नै कानून व समाजिक 
    सुरक्षा मिलछ।`,

    msgFour: `हमार बिश्वास छन – "जब हम मिलकै काम करां, तभे सच्चो बदलाव आछ।" 
    हम तैं बिनती करां कि आगूं आ, सहयोग कर और उस बदलाव को हिस्सा बन जो समाज 
    खातर जरूरी छन। एक बेहतर, सुरक्षित और समान भविष्य बणाण मं तेरो साथ हमार 
    सबस बड़ी ताकत छन।`,

    headingTwo: `महानगर दिल्ली उत्तराखंड प्रवासी संगठन क प्रोजेक्ट मं तेरो सहयोग सी हम ई असर दिखाए।`,
    
    arrayData: [
      {
        id: 1,
        logo: '',
        name: 'पढ़ाई'
      },
      {
        id: 2,
        logo: '',
        name: 'स्वास्थ्य'
      },
      {
        id: 3,
        logo: '',
        name: 'समाजिक'
      },
      {
        id: 4,
        logo: '',
        name: 'आत्मनिर्भरता'
      }
    ]
  }
}
]; 


export const NavSideBarFollowUsIconData = [
    {
        id:1, 
        icon:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1749646087/social_16033412_pqlgqn.png', 
        name:'linkedin', 
        link:'https://www.linkedin.com/in/%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%97%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80-%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BE%E0%A4%96%E0%A4%82%E0%A4%A1-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%80-%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%A0%E0%A4%A8-407821352/'
    }, 
    {
        id:2, 
        icon:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1749646087/facebook_3670124_cjjmkf.png', 
        name:'facebook', 
        link:'https://www.facebook.com/people/%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%97%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80-%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BE%E0%A4%96%E0%A4%82%E0%A4%A1-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%80-%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%A0%E0%A4%A8/61572831061564/'
    }, 
    {
        id:3, 
        icon:'https://res.cloudinary.com/dflmaiwxo/image/upload/v1749646087/youtube_3670163_q5hm66.png', 
        name:'youtube', 
        link:'https://www.youtube.com/@mdups'
    }
];


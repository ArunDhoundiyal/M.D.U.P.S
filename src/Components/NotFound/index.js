import {useContext} from 'react';
import {CreateLanguageContext} from '../Context';
import {useNavigate} from 'react-router-dom';
import {
    NotFoundPageBgContainer,
    NotFoundPageContainer, 
    NoteFoundImgContainer, 
    NotFoundImg, 
    NotFoundMsgButtonContainer, 
    ImgContainer, 
    Heading, 
    Msg, 
    BackButton, 
    BackIcon
} from './styledComponents';
import Header from '../Header';
import Footer from '../Footer';
import WhatsApp from '../WhatsApp';
import ScrollToTopButton from '../ScrollToTopButton';
import {
    notFoundHeading, 
    notFoundMsg, 
    notFoundButton
} from '../Data';
const NotFound = () => {
    const {languageId} = useContext(CreateLanguageContext);
    const navigate = useNavigate();
    const backToHomePage = () => {
        navigate('/');
    }
    const filterNotFoundHeading = notFoundHeading.find((item)=>item.languageId === languageId); 
    const filterNotFoundMsg = notFoundMsg.find((item)=>item.languageId === languageId);
    const filterNotFoundButtonText = notFoundButton.find((item)=>item.languageId === languageId);
    const {heading} = filterNotFoundHeading;
    const {msg} = filterNotFoundMsg;
    const {buttonName} = filterNotFoundButtonText;
    return(
        <>
        <NotFoundPageBgContainer>
            <Header/>
            <NotFoundPageContainer>
                <NoteFoundImgContainer>
                    <ImgContainer>
                    <NotFoundImg src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747142368/3828537_b5gili.jpg' alt='not-found-img' />
                    </ImgContainer>

                    <NotFoundMsgButtonContainer>
                        <Heading>{heading}</Heading>
                         <Msg>{msg}</Msg>
                        <BackButton onClick={backToHomePage}><BackIcon /> {buttonName}</BackButton>
                    </NotFoundMsgButtonContainer>
                </NoteFoundImgContainer>
            </NotFoundPageContainer>
        </NotFoundPageBgContainer>
        <ScrollToTopButton/>
        <WhatsApp />
        <Footer/>
        </>


    )
}


export default NotFound;
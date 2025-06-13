import {useState, useContext} from 'react';
import {CreateLanguageContext} from '../Context';
import ScrollToTopButton from '../ScrollToTopButton'
import Header from '../Header';
import ViewInFullSize from '../ViewInFullSize';
import WhatsApp from '../WhatsApp';
import DisplayCurrentPathCardName from '../DisplayCurrentPathCardName';
import Footer from '../Footer';
import {
    OurTeamBgContainer,  
    ArticleContainer, 
    TeamPersonPhotoContainer, 
    NewsArticlesImg, 
    TeamMessageContainer,
    TeamPersonTwoPhotoContainer, 
    TeamTwoMessageContainer, 
    MainHeading, 
    SubHeadingOne, 
    SubHeadingTwo, 
    SubHeadingThree, 
    Message, 
    BackgroundImageContainer, 
    BackgroundContentContent, 
    Heading, 
    SmallScreenOurTeamMsgContainer, 
    ArticleBgContainer
    } from './styledComponents';

import {LatestNewsData} from '../Data';

const NewsArticles = () => {
    const [passImage, setPassImage] = useState(null);
    const {languageId}  = useContext(CreateLanguageContext);
    const onClickViewInFullSize = (img) => {
        setPassImage(img);
    }
        const filterNewArticle = LatestNewsData.find((eachNavItem) => eachNavItem.languageId === languageId);
        const {data, topHeading} = filterNewArticle;
    
    return(
        <OurTeamBgContainer>
            <Header/>
            <ViewInFullSize setPassImage={setPassImage} imagePass={passImage} />
            <BackgroundImageContainer>
                <BackgroundContentContent data-aos="zoom-in">
                    <Heading>
                        {topHeading}
                    </Heading>
                    <DisplayCurrentPathCardName />
                </BackgroundContentContent>
            </BackgroundImageContainer>
            <ArticleBgContainer>
            {
                data.map((
                    {
                        id, 
                        img,
                        mainHeading,
                        mainHeadingMsgOne,
                        mainHeadingMsgTwo,
                        mainHeadingMsgThree,
                        mainHeadingMsgFour,
                        subHeadingOne,
                        subHeadingOneMsgOne,
                        subHeadingOneMsgTwo,
                        subHeadingOneMsgThree,
                        subHeadingTwo,
                        subHeadingTwoMsgOne,
                        subHeadingThree,
                        subHeadingThreeMsgOne
                    }
                )=>{
                    if ((id%2)!==0){

                        return(
                            <>
                            <ArticleContainer key={id} data-aos="zoom-in">
                                <TeamPersonPhotoContainer onClick={()=>{onClickViewInFullSize(img)}}>
                                    <NewsArticlesImg src={img} />
                                    </TeamPersonPhotoContainer>
                                    <TeamMessageContainer>
                                        <MainHeading>
                                            {mainHeading || ''}
                                        </MainHeading>
                                        <Message>
                                            {mainHeadingMsgOne || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgTwo || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgThree || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgFour || ''}
                                        </Message>
                                        <SubHeadingOne>
                                            {subHeadingOne || ''}
                                        </SubHeadingOne>
                                        <Message>
                                            {subHeadingOneMsgOne || ''}
                                        </Message>
                                        <Message>
                                            {subHeadingOneMsgTwo || ''}
                                        </Message>
                                        <Message>
                                            {subHeadingOneMsgThree || ''}
                                        </Message>
                                        <SubHeadingTwo>
                                            {subHeadingTwo || ''}
                                        </SubHeadingTwo>
                                        <Message>
                                            {subHeadingTwoMsgOne || ''}
                                        </Message>
                                        <SubHeadingThree>
                                            {subHeadingThree || ''}
                                        </SubHeadingThree>
                                        <Message>
                                            {subHeadingThreeMsgOne || ''}
                                        </Message>
                                    </TeamMessageContainer>
                                    </ArticleContainer>
                                    <SmallScreenOurTeamMsgContainer data-aos="zoom-in">
                                        <MainHeading>
                                            {mainHeading || ''}
                                        </MainHeading>
                                        <Message>
                                            {mainHeadingMsgOne || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgTwo || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgThree || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgFour || ''}
                                        </Message>
                                        <SubHeadingOne>
                                            {subHeadingOne || ''}
                                        </SubHeadingOne>
                                        <Message>
                                            {subHeadingOneMsgOne || ''}
                                        </Message>
                                        <Message>
                                            {subHeadingOneMsgTwo || ''}
                                        </Message>
                                        <Message>
                                            {subHeadingOneMsgThree || ''}
                                        </Message>
                                        <SubHeadingTwo>
                                            {subHeadingTwo || ''}
                                        </SubHeadingTwo>
                                        <Message>
                                            {subHeadingTwoMsgOne || ''}
                                        </Message>
                                        <SubHeadingThree>
                                            {subHeadingThree || ''}
                                        </SubHeadingThree>
                                        <Message>
                                            {subHeadingThreeMsgOne || ''}
                                        </Message>

                                    </SmallScreenOurTeamMsgContainer>

                            </>
                        )

                    }
                    return(
                        <>
                    <ArticleContainer key={id} data-aos="zoom-in">
                        <TeamPersonTwoPhotoContainer onClick={()=>{onClickViewInFullSize(img)}}>
                            <NewsArticlesImg src={img} />
                            </TeamPersonTwoPhotoContainer>
                            <TeamTwoMessageContainer>
                                <MainHeading>
                                    {mainHeading || ''}
                                </MainHeading>
                                <Message>
                                    {mainHeadingMsgOne || ''}
                                </Message>
                                <Message>
                                    {mainHeadingMsgTwo || ''}
                                </Message>
                                <Message>
                                    {mainHeadingMsgThree || ''}
                                </Message>
                                <Message>
                                    {mainHeadingMsgFour || ''}
                                </Message>
                                <SubHeadingOne>
                                    {subHeadingOne || ''}
                                </SubHeadingOne>
                                <Message>
                                    {subHeadingOneMsgOne || ''}
                                </Message>
                                <Message>
                                    {subHeadingOneMsgTwo || ''}
                                </Message>
                                <Message>
                                    {subHeadingOneMsgThree || ''}
                                </Message>
                                <SubHeadingTwo>
                                    {subHeadingTwo || ''}
                                </SubHeadingTwo>
                                <Message>
                                    {subHeadingTwoMsgOne || ''}
                                </Message>
                                <SubHeadingThree>
                                    {subHeadingThree || ''}
                                </SubHeadingThree>
                                <Message>
                                    {subHeadingThreeMsgOne || ''}
                                </Message>
                        </TeamTwoMessageContainer>
                        </ArticleContainer>
                        <SmallScreenOurTeamMsgContainer data-aos="zoom-in">
                                        <MainHeading>
                                            {mainHeading || ''}
                                        </MainHeading>
                                        <Message>
                                            {mainHeadingMsgOne || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgTwo || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgThree || ''}
                                        </Message>
                                        <Message>
                                            {mainHeadingMsgFour || ''}
                                        </Message>
                                        <SubHeadingOne>
                                            {subHeadingOne || ''}
                                        </SubHeadingOne>
                                        <Message>
                                            {subHeadingOneMsgOne || ''}
                                        </Message>
                                        <Message>
                                            {subHeadingOneMsgTwo || ''}
                                        </Message>
                                        <Message>
                                            {subHeadingOneMsgThree || ''}
                                        </Message>
                                        <SubHeadingTwo>
                                            {subHeadingTwo || ''}
                                        </SubHeadingTwo>
                                        <Message>
                                            {subHeadingTwoMsgOne || ''}
                                        </Message>
                                        <SubHeadingThree>
                                            {subHeadingThree || ''}
                                        </SubHeadingThree>
                                        <Message>
                                            {subHeadingThreeMsgOne || ''}
                                        </Message>

                        </SmallScreenOurTeamMsgContainer>
                        </>

                    )
                })
            } 
            </ArticleBgContainer> 
            <WhatsApp />
            <ScrollToTopButton />  
                     <Footer />                       
        </OurTeamBgContainer>
    )
}

export default NewsArticles
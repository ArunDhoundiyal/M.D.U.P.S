import {useContext} from 'react';
import {CreateLanguageContext} from '../Context';
import Header from '../Header';
import ScrollToTopButton from '../ScrollToTopButton';
import DisplayCurrentPathCardName from '../DisplayCurrentPathCardName';
import WhatsApp from '../WhatsApp';
import Footer from '../Footer';
import {
    OurTeamBgContainer, 
    OurTeamHeading, 
    OurTeamHeadingContainer, 
    OurTeamContainer, 
    TeamPersonPhotoContainer, 
    PersonPhoto, 
    TeamMessageContainer, 
    Message, 
    BoldContent, 
    TeamPersonTwoPhotoContainer, 
    TeamTwoMessageContainer, 
    DisplayOurTeamContainer, 
    KaryeKariniMembersNameContainer, 
    Name, 
    UserIcon, 
    StyleDesignation, 
    KaryeKariniMembers, 
    BackgroundImageContainer, 
    BackgroundContentContent, 
    BannerHeading, 
    SmallScreenTeamMessageContainer
} from './styledComponents';
import {OurTeamData} from '../Data';
const OurTeam = () => {
    const {languageId} = useContext(CreateLanguageContext);
    const filterBannerHeading = OurTeamData[0]?.ourTeamTopBannerHeading?.find((eachItem)=> eachItem.languageId === languageId);
    const filterMainHeading = OurTeamData[1]?.ourTeamTopMainHeading?.find((eachItem)=>eachItem.languageId === languageId);
    const filterOurTeamMsg = OurTeamData[2]?.ourTeamMsg?.find((eachItem)=> eachItem.languageId === languageId);
    const filterKaryeKariniSadasaye = OurTeamData[3]?.KaryeKariniSadasaye?.find((eachItem)=> eachItem.languageId === languageId);
    const filterOrganizationMember = OurTeamData[4]?.OrganizationMember?.find((eachItem)=> eachItem.languageId === languageId);
    const filterPracharak = OurTeamData[5]?.Pracharak?.find((eachItem)=> eachItem.languageId === languageId);
    const filterSalahkaar = OurTeamData[6]?.Salahkaar?.find((eachItem)=> eachItem.languageId === languageId);
    const filterMediaPrabhari = OurTeamData[7]?.MediaPrabhari?.find((eachItem) => eachItem.languageId === languageId);

    return(
        <OurTeamBgContainer>
            <Header/>
            <BackgroundImageContainer>
                <BackgroundContentContent data-aos="zoom-in">
                    <BannerHeading>
                        {filterBannerHeading.bannerHeading}
                    </BannerHeading> 
                <DisplayCurrentPathCardName />
                </BackgroundContentContent>
            </BackgroundImageContainer>
            <OurTeamHeadingContainer>
            <OurTeamHeading data-aos="zoom-in">
                {filterMainHeading.mainHeading}
            </OurTeamHeading>
            </OurTeamHeadingContainer>
            {
                filterOurTeamMsg.data.map(({
                    id,
                    messanger, 
                    greetingMsg, 
                    name, 
                    designation,
                    organization,
                    msg, 
                    img
                })=> {
                    if (id % 2 !== 0){
                        return(
                            <>
                        <OurTeamContainer key={id} data-aos="zoom-in">
                            <TeamPersonPhotoContainer>
                                <PersonPhoto src= {img} />
                            </TeamPersonPhotoContainer>
                            <TeamMessageContainer>
                                <BoldContent>
                                    {messanger}
                                </BoldContent>
                                <Message>
                                    {msg}
                                </Message>
                                    <BoldContent>
                                        {greetingMsg}
                                    </BoldContent>
                                    <BoldContent>
                                        {name}
                                    </BoldContent>
                                    <BoldContent>
                                        {designation}
                                    </BoldContent>
                                    <BoldContent>
                                        {organization}
                                    </BoldContent>
                            </TeamMessageContainer>
                        </OurTeamContainer>
                        <SmallScreenTeamMessageContainer data-aos="zoom-in">
                                <BoldContent>
                                    {messanger}
                                </BoldContent>
                                <Message>
                                    {msg}
                                </Message>
                                    <BoldContent>
                                        {greetingMsg}
                                    </BoldContent>
                                    <BoldContent>
                                        {name}
                                    </BoldContent>
                                    <BoldContent>
                                        {designation}
                                    </BoldContent>
                                    <BoldContent>
                                        {organization}
                                    </BoldContent>
                        </SmallScreenTeamMessageContainer>
                        </>
                        )
                    }
                    return(
                        <>
                    <OurTeamContainer key={id} data-aos="zoom-in">
                        <TeamPersonTwoPhotoContainer>
                            <PersonPhoto src= {img} />
                        </TeamPersonTwoPhotoContainer>
                        <TeamTwoMessageContainer>
                              <BoldContent>
                                    {messanger}
                                </BoldContent>
                                <Message>
                                    {msg}
                                </Message>
                                    <BoldContent>
                                        {greetingMsg}
                                    </BoldContent>
                                    <BoldContent>
                                        {name}
                                    </BoldContent>
                                    <BoldContent>
                                        {designation}
                                    </BoldContent>
                                    <BoldContent>
                                        {organization}
                                    </BoldContent>                            
                        </TeamTwoMessageContainer>
                        </OurTeamContainer>
                        <SmallScreenTeamMessageContainer data-aos="zoom-in">
                                <BoldContent>
                                    {messanger}
                                </BoldContent>
                                <Message>
                                    {msg}
                                </Message>
                                    <BoldContent>
                                        {greetingMsg}
                                    </BoldContent>
                                    <BoldContent>
                                        {name}
                                    </BoldContent>
                                    <BoldContent>
                                        {designation}
                                    </BoldContent>
                                    <BoldContent>
                                        {organization}
                                    </BoldContent>                            
                        </SmallScreenTeamMessageContainer>
                        </>

                    )
                })
            }   
                {/*  */}
                <OurTeamHeadingContainer data-aos="zoom-in">
                    <OurTeamHeading>
                        {filterKaryeKariniSadasaye.mainHeading}
                </OurTeamHeading>
            </OurTeamHeadingContainer>
            {/*  */}
            <DisplayOurTeamContainer>
                {
                    filterKaryeKariniSadasaye.data.map(({id,designation, name, color})=>(
                        <KaryeKariniMembersNameContainer color={color} key={id} data-aos="zoom-in">
                            <KaryeKariniMembers>
                            <UserIcon color={color}/>
                            <Name>
                                <StyleDesignation>{designation}</StyleDesignation>
                                <br/>
                                {name}
                            </Name>
                            </KaryeKariniMembers>
                        </KaryeKariniMembersNameContainer>
                    ))
                }
            </DisplayOurTeamContainer>
            {/*  */}
            <OurTeamHeadingContainer>
                    <OurTeamHeading data-aos="zoom-in">
                    {filterOrganizationMember.mainHeading}
                </OurTeamHeading>
            </OurTeamHeadingContainer>
            {/*  */}
            <DisplayOurTeamContainer>
                {
                    filterOrganizationMember.data.map(({id, name, color})=>(
                        <KaryeKariniMembersNameContainer color={color} key={id} data-aos="zoom-in">
                            <KaryeKariniMembers>
                            <UserIcon color={color}/>
                            <Name>
                                <br/>
                                {name}
                            </Name>
                            </KaryeKariniMembers>
                        </KaryeKariniMembersNameContainer>
                    ))
                }
            </DisplayOurTeamContainer>
            {/*  */}
            <OurTeamHeadingContainer>
                    <OurTeamHeading data-aos="zoom-in">
                    {filterPracharak.mainHeading}
                </OurTeamHeading>
            </OurTeamHeadingContainer>
            {/*  */}
            <DisplayOurTeamContainer>
                {
                    filterPracharak.data.map(({id, name, color})=>(
                        <KaryeKariniMembersNameContainer color={color} key={id} data-aos="zoom-in">
                            <KaryeKariniMembers>
                            <UserIcon color={color}/>
                            <Name>
                                <br/>
                                {name}
                            </Name>
                            </KaryeKariniMembers>
                        </KaryeKariniMembersNameContainer>
                    ))
                }
            </DisplayOurTeamContainer>
            {/*  */}
            <OurTeamHeadingContainer>
                    <OurTeamHeading data-aos="zoom-in">
                    {filterSalahkaar.mainHeading}
                </OurTeamHeading>
            </OurTeamHeadingContainer>
            {/*  */}
            <DisplayOurTeamContainer>
                {
                    filterSalahkaar.data.map(({id, name, color})=>(
                        <KaryeKariniMembersNameContainer color={color} key={id} data-aos="zoom-in">
                            <KaryeKariniMembers>
                            <UserIcon color={color}/>
                            <Name>
                                <br/>
                                {name}
                            </Name>
                            </KaryeKariniMembers>
                        </KaryeKariniMembersNameContainer>
                    ))
                }
            </DisplayOurTeamContainer>
            {/*  */}
            <OurTeamHeadingContainer>
                    <OurTeamHeading data-aos="zoom-in">
                    {filterMediaPrabhari.mainHeading}
                </OurTeamHeading>
            </OurTeamHeadingContainer>
            {/*  */}
            <DisplayOurTeamContainer>   
                {
                    filterMediaPrabhari.data.map(({id, name, color})=>(
                        <KaryeKariniMembersNameContainer color={color} key={id} data-aos="zoom-in">
                            <KaryeKariniMembers>
                            <UserIcon color={color}/>
                            <Name>
                                <br/>
                                {name}
                            </Name>
                            </KaryeKariniMembers>
                        </KaryeKariniMembersNameContainer>
                    ))
                }
            </DisplayOurTeamContainer>  
            <WhatsApp /> 
            <ScrollToTopButton/> 
                    <Footer />
        </OurTeamBgContainer>
    )
}

export default OurTeam
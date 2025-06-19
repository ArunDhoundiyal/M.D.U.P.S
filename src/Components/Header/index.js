import {useState,useContext} from 'react';
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import {useLocation} from 'react-router-dom';
import { IoLanguage } from "react-icons/io5";

import {
    HeaderContainer, 
    Nav, 
    ImageLogo, 
    NavItemsContainer, 
    ListItem, 
    DonationButton, 
    HeartIcon, 
    LinkNavItem, 
    AnchorTag, 
    NavbarCloseOpenButton, 
    NavSideBar, 
    NavSideBarListItemContainer, 
    NavSideBarItemContainer, 
    SideBarNavListItem, 
    NavSidebarMdupsFollowUsContainer, 
    NavSideBarFollowUsContainer, 
    NavSideBarFollowUsIconItem, 
    NavSideBarFollowUsIcon, 
    NavSideBarFollowUsHeading, 
    SideBarButton, 
    NavSideBarBlurBackgroundConatiner, 
    NavSideBarSelectLanguage, 
    SelectLanguageContainer, 
    SelectLanguageListItem, 
    SideBarSelectLanguage,
    ArrowIcon, 
    SideBarButtonContainer,  
    JoinTeamButton, 
    SideBarJoinTeamButton, 
    IconWrapper
} from './styledComponents'; 

import {CreateLanguageContext} from '../Context';
import SelectLanguage from '../SelectLanguage';
import {
    NavItems, 
    donationButtonData, 
    joinOurTeamButtonData, 
    NavSideBarFollowUsIconData, 
    SelectLanguageData, 
    footerData
} from '../Data';

const Header = () => {
    const [selectLanguage, setSelectLangauge] = useState(false);
    const [navMenuBar, setNavMenuBar] = useState(false);
    const {languageId, setLanguageId} = useContext(CreateLanguageContext);
    const {pathname} = useLocation();
    const filterFollowUs = footerData.find((eachNavItem) => eachNavItem.languageId === languageId);
    const filterNavItems = NavItems.find((eachNavItem) => eachNavItem.languageId === languageId) || {navData: []};
    const {navData} = filterNavItems;
    const filterDonationButtonLangauage = donationButtonData.find((item)=> item.languageId === languageId);
    const filterJoinusButtonLanguage = joinOurTeamButtonData.find((item)=> item.languageId === languageId);
    const onClickMenuBarIcon = () => {
        setNavMenuBar(preState=>!preState);
        if (selectLanguage){
            setSelectLangauge(preState => !preState);
        }
    }
    const onClickSelectLangauge = () => {
        setSelectLangauge(preState => !preState);
    }
    const onClickDonationButton = () => {
        setNavMenuBar(preState => !preState);
    }
    const onClickJoinUsButton = () => {
        setNavMenuBar(preState => !preState);
    }
    const onClickLanguage = (id) => {
        setLanguageId(id);
        setNavMenuBar(preState=>!preState);
        setSelectLangauge(preState => !preState);
    }
    return(
        <>
        <HeaderContainer>
            <Nav>
            <ImageLogo 
            src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747033857/Logo_uttrakhand_1_ahrajl.png' alt='devbhoomimdups-logo' 
            />
            <NavItemsContainer>
                {
                navData.map(({ id, name, link }) => {
                    if (id===6){
                        return(
                        <AnchorTag href={link} key={id}>
                            <ListItem >{name}</ListItem>  
                        </AnchorTag>

                        )
                    }
                    return (
                    <LinkNavItem to={link} key={id}>
                        <ListItem isactive={pathname === link}>{name}</ListItem>
                    </LinkNavItem>
                    )
                }
            )
                }
                <SelectLanguage />
                <JoinTeamButton>{filterJoinusButtonLanguage.buttonName}</JoinTeamButton>
                <DonationButton>{filterDonationButtonLangauage.buttonName}<HeartIcon/></DonationButton>
            </NavItemsContainer>
            <NavbarCloseOpenButton rotate={navMenuBar} onClick={onClickMenuBarIcon}>
                {navMenuBar?<IoMdClose/>:<TfiMenu />}
            </NavbarCloseOpenButton>
            </Nav>
        </HeaderContainer>
        <NavSideBarBlurBackgroundConatiner isactive={navMenuBar}>
        </NavSideBarBlurBackgroundConatiner>
        <NavSideBar isactive={navMenuBar}>
            <NavSideBarListItemContainer isactive={navMenuBar}>
                <NavSideBarItemContainer>
                    {
                        navData.map(({ id, name, link, icon:Icon })=>{
                    if (id===6){
                        return(
                        <AnchorTag href={link} key={id}>
                            <SideBarNavListItem>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>
                                     {name} 
                            </SideBarNavListItem>
                        </AnchorTag>
                        )
                    }
                    return (
                    <LinkNavItem to={link} key={id}>
                        <SideBarNavListItem isactive={pathname === link}>
                            <IconWrapper>
                                <Icon />
                            </IconWrapper>
                                 {name}
                        </SideBarNavListItem>    
                    </LinkNavItem>
                    )
                })
                    }
                    <NavSideBarSelectLanguage>
                        <SideBarSelectLanguage onClick={onClickSelectLangauge}>
                            <IconWrapper>
                                <IoLanguage />
                            </IconWrapper>
                        SELECT LANGUAGE <ArrowIcon isactive={selectLanguage}/> 
                        </SideBarSelectLanguage>
                        <SelectLanguageContainer isactive={selectLanguage}>
                            {
                                SelectLanguageData.map(({id, language})=>(
                                    <SelectLanguageListItem key={id} onClick={()=>{onClickLanguage(id)}} isactive={id===languageId}>{language}</SelectLanguageListItem>
                                ))
                            }
                        </SelectLanguageContainer>
                    </NavSideBarSelectLanguage>
                </NavSideBarItemContainer>
                <SideBarButtonContainer>
                    <SideBarJoinTeamButton onClick={onClickDonationButton}>{filterJoinusButtonLanguage.buttonName}</SideBarJoinTeamButton>
                    <SideBarButton onClick={onClickJoinUsButton}>{filterDonationButtonLangauage.buttonName}</SideBarButton>
                </SideBarButtonContainer>
                <NavSidebarMdupsFollowUsContainer>
                    <NavSideBarFollowUsHeading>{filterFollowUs.followUs}:</NavSideBarFollowUsHeading>
                    <NavSideBarFollowUsContainer>
                        {
                            NavSideBarFollowUsIconData.map(({id, icon, name, link})=> (
                                <AnchorTag 
                                href={link} 
                                target='blank' 
                                rel="noopener noreferrer" 
                                arial-label={name}
                                >
                                <NavSideBarFollowUsIconItem key={id} onClick={onClickMenuBarIcon}>
                                    <NavSideBarFollowUsIcon src={icon} alt={`${name}-${id}`} />
                                </NavSideBarFollowUsIconItem>
                                </AnchorTag>
                            ))
                        }
                    </NavSideBarFollowUsContainer>
                </NavSidebarMdupsFollowUsContainer>
            </NavSideBarListItemContainer>
        </NavSideBar>
        </>
    )
}

export default Header
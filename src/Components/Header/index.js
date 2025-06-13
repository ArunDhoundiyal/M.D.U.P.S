import {useState,useContext} from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import {useLocation} from 'react-router-dom';

import {
    HeaderContainer, 
    Nav, 
    ImageLogo, 
    NavItemsContainer, 
    ListItem, 
    Button, 
    HeartIcon, 
    LinkNavItem, 
    AnchorTag, 
    NavbarCloseOpenButton, 
    NavSideBar, 
    NavSideBarListItemContainer, 
    NavSideBarItemContainer, 
    SideBarNavListItem, 
    MdupsLogo, 
    NavSidebarMdupsFollowUsContainer, 
    NavSideBarFollowUsContainer, 
    NavSideBarFollowUsIconItem, 
    NavSideBarFollowUsIcon, 
    NavSideBarFollowUsHeading, 
    SideBarNavListItemContainer, 
    LinkIcon, 
    SideBarButton, 
    NavSideBarBlurBackgroundConatiner, 
    NavSideBarSelectLanguage, 
    SelectLanguageContainer, 
    SelectLanguageListItem, 
    SideBarSelectLanguage,
    ArrowIcon
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
                <Button>{filterJoinusButtonLanguage.buttonName}</Button>
                <Button>{filterDonationButtonLangauage.buttonName}<HeartIcon/></Button>
            </NavItemsContainer>
            <NavbarCloseOpenButton rotate={navMenuBar} onClick={onClickMenuBarIcon}>
                {navMenuBar?<IoMdClose/>:<RiMenu3Line />}
            </NavbarCloseOpenButton>
            </Nav>
            
        </HeaderContainer>
        <NavSideBarBlurBackgroundConatiner isactive={navMenuBar}>
        </NavSideBarBlurBackgroundConatiner>
        <NavSideBar isactive={navMenuBar}>
            <NavSideBarListItemContainer isactive={navMenuBar}>
                <NavSideBarItemContainer>
                    {
                        navData.map(({ id, name, link })=>{
                    if (id===6){
                        return(
                        <AnchorTag href={link} key={id}>
                            <SideBarNavListItem>
                                <SideBarNavListItemContainer>
                                    {name} 
                                    <LinkIcon isactive={pathname === link} />
                                </SideBarNavListItemContainer>
                            </SideBarNavListItem>
                        </AnchorTag>
                        )
                    }
                    return (
                    <LinkNavItem to={link} key={id}>
                        <SideBarNavListItem isactive={pathname === link}>
                            <SideBarNavListItemContainer>
                                {name}
                                <LinkIcon isactive={pathname === link} />
                            </SideBarNavListItemContainer>
                        </SideBarNavListItem>    
                    </LinkNavItem>
                    )
                })
                    }
                    <NavSideBarSelectLanguage>
                        <SideBarSelectLanguage onClick={onClickSelectLangauge}>
                        SELECT LANGUAGE <ArrowIcon isactive={selectLanguage}/> 
                        </SideBarSelectLanguage>
                        <SelectLanguageContainer isactive={selectLanguage}>
                            {
                                SelectLanguageData.map(({id, language})=>(
                                    <SelectLanguageListItem key={id} onClick={()=>{onClickLanguage(id)}}>{language}</SelectLanguageListItem>
                                ))
                            }
                        </SelectLanguageContainer>
                    </NavSideBarSelectLanguage>
                </NavSideBarItemContainer>
                <SideBarButton onClick={onClickJoinUsButton}>{filterJoinusButtonLanguage.buttonName}</SideBarButton>
                <SideBarButton onClick={onClickDonationButton}>{filterDonationButtonLangauage.buttonName} <HeartIcon/></SideBarButton>
                <NavSidebarMdupsFollowUsContainer>
                    <MdupsLogo src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747033857/Logo_uttrakhand_1_ahrajl.png' alt='mdups-logo' />
                    <>
                    <NavSideBarFollowUsHeading>{filterFollowUs.followUs}</NavSideBarFollowUsHeading>
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
                    </>
                </NavSidebarMdupsFollowUsContainer>
            </NavSideBarListItemContainer>
        </NavSideBar>
        </>
    )
}

export default Header
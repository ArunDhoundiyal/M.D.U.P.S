import {useContext} from 'react';
import {CreateLanguageContext} from '../Context';

import {
    FooterBgContainer,
    FooterContainer,
    FooterItemContainer, 
     FooterHeading, 
     MDUPSlogo, 
     FooterItem, 
     FooterContactUsContainer, 
     FooterNameHeading, 
     FooterAddressContainer, 
     LocationIcon, 
     MailIcon, 
     PhoneNumberIcon, 
     Detail, 
     FollowUsContainer, 
     FollowUsLogoContainer,
     FacebookIcon, 
     LinkedinIcon, 
     YoutubeIcon, 
     AnchorTag, 
     FooterFollowUsHeading, 
     HrLine, 
     CopyRightMsg, 
     FooterCopyRightContainer, 
     PrivacyContainer, 
     PrivacyPolicyMsg, 
     TermsConditionMsg, 
     FollowUsIconButton
} from './styledComponents';

import {footerData} from '../Data';

const Footer = () => {
    const {languageId} = useContext(CreateLanguageContext);
    const findFooterData = footerData.find((eachItem)=>eachItem.languageId === languageId);
    const {
        knowAboutUs, 
        ourInitiative, 
        getInvolved, 
        footerKnowAboutUsHeading, 
        footerOurIntitiative, 
        footerJoinUs, 
        footerContactUs,
        mdups, 
        location, 
        breakLocation, 
        followUs
    } = findFooterData;


    return(
        <FooterBgContainer id="contact-us" >
        <FooterContainer>
            <MDUPSlogo src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747033857/Logo_uttrakhand_1_ahrajl.png' alt='mdups-logo'/>
            <FooterItemContainer>
                <FooterHeading>{footerKnowAboutUsHeading}</FooterHeading>
                {
                    knowAboutUs.map(({id, name})=> (
                        <FooterItem key={id}>{name}</FooterItem>
                    ))
                }
            </FooterItemContainer>
            <FooterItemContainer>
                <FooterHeading>{footerOurIntitiative}</FooterHeading>
                {
                    ourInitiative.map(({id, name})=> (
                        <FooterItem key={id}>{name}</FooterItem>
                    ))
                }
            </FooterItemContainer>
            <FooterItemContainer>
                <FooterHeading>{footerJoinUs}</FooterHeading>
                {
                    getInvolved.map(({id, name})=> (
                        <FooterItem key={id}>{name}</FooterItem>
                    ))
                }
            </FooterItemContainer>
            <FooterContactUsContainer>
                <FooterHeading>{footerContactUs}</FooterHeading>
                    <FooterNameHeading>{mdups}</FooterNameHeading>
                <FooterAddressContainer>
                <LocationIcon/>
                <Detail>{location}, <br/> {breakLocation}</Detail>
                </FooterAddressContainer>
                <FooterAddressContainer>
                    <MailIcon /><Detail>mdups2025@gmail.com</Detail>
                </FooterAddressContainer>
                <FooterAddressContainer>
                <PhoneNumberIcon />
                <Detail>+911145051545, 8178298679</Detail>
                </FooterAddressContainer>
                <FollowUsContainer>
                    <FooterHeading>{followUs}</FooterHeading>
                    <FollowUsLogoContainer>
                        <FollowUsIconButton>
                        <AnchorTag
                        href="https://www.linkedin.com/in/%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%97%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80-%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BE%E0%A4%96%E0%A4%82%E0%A4%A1-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%80-%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%A0%E0%A4%A8-407821352/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn"
                         >
                        <LinkedinIcon/>
                        </AnchorTag>
                        </FollowUsIconButton>
                        <FollowUsIconButton>
                        <AnchorTag 
                        href="https://www.facebook.com/people/%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%A8%E0%A4%97%E0%A4%B0-%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B2%E0%A5%80-%E0%A4%89%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A4%B0%E0%A4%BE%E0%A4%96%E0%A4%82%E0%A4%A1-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%80-%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%A0%E0%A4%A8/61572831061564/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Facebook"
                        >
                        <FacebookIcon />
                        </AnchorTag>
                        </FollowUsIconButton>

                        <FollowUsIconButton>
                        <AnchorTag 
                        href="https://www.youtube.com/@mdups" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="YouTube"                  
                        >
                        <YoutubeIcon />
                        </AnchorTag>
                        </FollowUsIconButton>

                    </FollowUsLogoContainer>
                </FollowUsContainer>
            </FooterContactUsContainer>
        </FooterContainer>
        <HrLine />
        <FooterCopyRightContainer>
            <CopyRightMsg>Copyright © 2025 by MDUPS, all rights reserved. Developed by Dezyn Edge</CopyRightMsg>
            <PrivacyContainer>
                <PrivacyPolicyMsg>Privacy Policy</PrivacyPolicyMsg>
                <TermsConditionMsg>Terms & Conditions</TermsConditionMsg>
            </PrivacyContainer>
        </FooterCopyRightContainer>

        </FooterBgContainer>

    )
}

export default Footer

// 
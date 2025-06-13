import {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {NavItems} from '../Data';
import {CreateLanguageContext} from '../Context';
import {
    DisplayCurrentPathContainer,
    PathPageName
} from './styledComponents';
const DisplayCurrentPathCardName = () => {
    const {languageId} = useContext(CreateLanguageContext);
    const {pathname} = useLocation();
    const filterItems = NavItems.find((eachNavItem) => eachNavItem.languageId === languageId);
    const {navData} = filterItems;
    const filterCurrentPathName = navData.find((eachNavItem)=> eachNavItem.link === pathname);
    
    return(
        <DisplayCurrentPathContainer>
            <PathPageName>{filterCurrentPathName.name}</PathPageName>
        </DisplayCurrentPathContainer>
    )
}
export default DisplayCurrentPathCardName
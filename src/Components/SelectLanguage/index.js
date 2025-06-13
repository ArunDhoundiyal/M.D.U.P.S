import { useContext, useState } from 'react';
import {CreateLanguageContext} from '../Context';
import { SelectLanguageData } from '../Data';
import {
    SelectLanguageContainer,
    LanguageCard,
    LanguageItem, 
    DropDownArrow, 
    CloseCrossIcon, 
    CloseButton, 
    CloseButtonContainer, 
    LanguageSpan
} from './styledComponents';

const SelectLanguage = () => {
    const {languageId, setLanguageId} = useContext(CreateLanguageContext);
    const [displayLanguageCard, setDisplayLanguageCard] = useState(false);
    const language = SelectLanguageData.find(({ id }) => id === languageId);
    const onClickSelectLangugeBar = () => {
        setDisplayLanguageCard((preState)=> !preState);
    }

    const onClickLanguage = (event, id) => {
        event.stopPropagation();
        setLanguageId(id); 
        setDisplayLanguageCard(false);
    }

    const  onClickCloseButton = (event) => {
        event.stopPropagation();
        setDisplayLanguageCard(false);
    }

    return (
        <SelectLanguageContainer onClick={onClickSelectLangugeBar}>
            SELECT LANGUAGE: <LanguageSpan>{language?.language}</LanguageSpan>
            <DropDownArrow isActive={displayLanguageCard} /> 
            {
                displayLanguageCard && 
                <LanguageCard>
                <CloseButtonContainer>
                <CloseButton onClick={onClickCloseButton}>
                <CloseCrossIcon  />
                </CloseButton>
                </CloseButtonContainer>
                {
                    SelectLanguageData.map(({ id, language }) => (
                        <LanguageItem isActive={languageId===id}
                            key={id}
                            onClick={(event) => onClickLanguage(event, id)}
                        >
                            {language}
                        </LanguageItem>
                    ))
                }
            </LanguageCard>
            }
        </SelectLanguageContainer>
    );
};

export default SelectLanguage;

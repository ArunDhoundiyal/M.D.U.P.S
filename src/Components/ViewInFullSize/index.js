import {useLocation} from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import {galleryImage} from '../Data';
import {
    ViewInFullSizeContainer, 
    CrossIcon, 
    CloseButton,
    Img, 
    LeftButton, 
    RightButton
} from './styledComponents';
const ViewInFullSize = ({imagePass, setPassImage}) => {
        const {pathname} = useLocation();

    let findGalleryImg;
    if (pathname === '/gallery'){
            findGalleryImg = galleryImage.find((eachImg) => eachImg.id === imagePass);
    }
    else{
        findGalleryImg = imagePass;
    }
    const onClickCloseButton = () => {
        setPassImage(null);
    }
    const onClickLeftArrow = () => {
        setPassImage((preState)=>Math.max(1, (preState-1)));
    }
    const onClickRightArrow = () => {
        setPassImage((preState)=> Math.min(galleryImage.length, (preState+1)));
    }
    return(
        <>
        {
        imagePass 
        && 
        <ViewInFullSizeContainer data-aos="zoom-in">
            <CloseButton onClick={onClickCloseButton}>
            <CrossIcon />
            </CloseButton>
            <Img 
            src={pathname === '/gallery' ? findGalleryImg.galleryImg : findGalleryImg} 
            alt={`gallery-image`} 
            />
            {
                pathname === '/gallery' ? 
                <>
                <LeftButton onClick={onClickLeftArrow}><MdOutlineArrowBackIosNew /></LeftButton>
                <RightButton onClick={onClickRightArrow}><MdOutlineArrowForwardIos /></RightButton>
                </>
                :
                ''
            }
        </ViewInFullSizeContainer>
        }
        </>
    )
}
export default ViewInFullSize
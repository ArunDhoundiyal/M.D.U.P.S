import {useContext, useState} from 'react';
import {CreateLanguageContext} from '../Context';
import Header from '../Header';
import ScrollToTopButton from '../ScrollToTopButton';
import WhatsApp from '../WhatsApp';
import Footer from '../Footer';
import ViewInFullSize from '../ViewInFullSize';

import {
    GalleryBgContainer, 
    DisplayGalleryContainer, 
    GalleryImageContainer, 
    GalleryImage, 
    GalleryHeading
} from './styledComponents';
import {galleryImage, galleryDataHeading} from '../Data';

const Gallery = () => {
    const [imageId, setImageId] = useState(null);
    const {languageId} = useContext(CreateLanguageContext);
    const galleryHeading = galleryDataHeading.find((eachItem)=> eachItem.languageId === languageId);
    const onClickGalleryImg = (id) => {
        setImageId(id)
    }
    return(
        <GalleryBgContainer>
        <Header/>
        <ViewInFullSize imagePass={imageId} setPassImage={setImageId} />
        <GalleryHeading>{galleryHeading.heading}</GalleryHeading>
        <DisplayGalleryContainer >
        {galleryImage.map(({ id, galleryImg }) => {
            const gridRow = id % 2 === 0 ? 10 : 15;
            return (
            <GalleryImageContainer key={id} gridrow={gridRow} onClick={()=>{onClickGalleryImg(id)}} data-aos="zoom-in">
                <GalleryImage src={galleryImg} alt={`gallery-img-${id}`} />
            </GalleryImageContainer>
            );
        })}
        </DisplayGalleryContainer>
        <WhatsApp />
        <ScrollToTopButton/>
        <Footer/>
        </GalleryBgContainer>
    )
}

export default Gallery
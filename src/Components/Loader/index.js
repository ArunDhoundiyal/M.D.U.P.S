import {LoaderContainer, Img, LoadingMsg} from './styledComponents';
const Loader = () => {
    return(
        <LoaderContainer>
            <Img alt='mdups-logo' src='https://res.cloudinary.com/dflmaiwxo/image/upload/v1747033857/Logo_uttrakhand_1_ahrajl.png' />
            <LoadingMsg>Loading...</LoadingMsg>
        </LoaderContainer>

    )
}

export default Loader
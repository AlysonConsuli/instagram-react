import { HeaderPost } from './HeaderPost';
import { InfosPost } from './InfosPost';

export const Post = ({ usrImg, usr, img, firstLikeImg, firstLikeUsr, likesNumber,
    usrComment1, comment1, usrComment2, comment2 }) => {

    const renderImg = <img className="imgPost" src={img} alt={img} />
    const renderVideo = (
        <video className="imgPost" autoPlay muted>
            <source src={img} alt={img} />
        </video>
    )
    return (
        <div className="post">
            <HeaderPost usrImg={usrImg} usr={usr} />
            {(img.substring(0, 3) === 'img') ? renderImg : renderVideo}
            <InfosPost firstLikeImg={firstLikeImg} firstLikeUsr={firstLikeUsr} likesNumber={likesNumber}
                usrComment1={usrComment1} comment1={comment1} usrComment2={usrComment2}
                comment2={comment2} />
        </div>
    )
}
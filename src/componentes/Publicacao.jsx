import { TopPost } from './TopPost';
import { BotPost } from './BotPost';

export const Publicacao = (props) => {
    const { usrImg, usr, img, curtidoImg, curtido, numero,
        usrComment1, comment1, usrComment2, comment2 } = props
    const imgVar = <img className="img-principal" src={img} />
    const videoVar = (
        <div>
            <video className="img-principal" autoPlay muted>
                <source src={img} />
            </video>
        </div>
    )
    return (
        <div className="publicacao">
            <TopPost usrImg={usrImg} usr={usr} />
            {(img.substring(0, 3) === 'img') ? imgVar : videoVar}
            <BotPost curtidoImg={curtidoImg} curtido={curtido} numero={numero}
                usrComment1={usrComment1} comment1={comment1} usrComment2={usrComment2}
                comment2={comment2} />
        </div>
    )
}
import { Publicacao } from './Publicacao';

export const Publicacoes = () => {
    const posts = [
        {
            usrImg: "img/nasa.png", usr: "Nasa", img: "video/video.mp4", curtidoImg: "img/ai.png",
            curtido: "respondeai", numero: "101.523", usrComment1: "Space Today ",
            comment1: " Volta pro espaço", usrComment2: "Biologia Total ", comment2: " Terra wins!"
        },
    
        {
            usrImg: "img/9gag.png", usr: "9gag", img: "img/neto.jpeg", curtidoImg: "img/ai.png",
            curtido: "respondeai", numero: "54.937", usrComment1: "Cássio ",
            comment1: " Fica quieto Neto!", usrComment2: "Neymar Jr ", comment2: " Disputinha de falta, bora?"
        },
    
        {
            usrImg: "img/marvel.jpg", usr: "Marvel", img: "img/aranha.jpeg", curtidoImg: "img/ai.png",
            curtido: "respondeai", numero: "240.408", usrComment1: "DC ",
            comment1: " Batman >>>>", usrComment2: "Flash ", comment2: " Fake news"
        }
    ]
    return (
        <div>
            {posts.map(post => {
                const { usrImg, usr, img, curtidoImg, curtido, numero,
                    usrComment1, comment1, usrComment2, comment2 } = post
                return (<Publicacao usrImg={usrImg} usr={usr} img={img} curtidoImg={curtidoImg}
                    curtido={curtido} numero={numero} usrComment1={usrComment1}
                    comment1={comment1} usrComment2={usrComment2} comment2={comment2} />)
            })}
        </div>
    )
}
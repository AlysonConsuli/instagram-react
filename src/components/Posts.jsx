import { Post } from './Post';

export const Posts = () => {
    const posts = [
        {
            usrImg: "img/nasa.png", usr: "Nasa", img: "video/video.mp4", firstLikeImg: "img/ai.png",
            firstLikeUsr: "respondeai", likesNumber: "101.523", usrComment1: "Space Today ",
            comment1: " Volta pro espaço", usrComment2: "Biologia Total ", comment2: " Terra wins!"
        },

        {
            usrImg: "img/9gag.png", usr: "9gag", img: "img/neto.jpeg", firstLikeImg: "img/ai.png",
            firstLikeUsr: "respondeai", likesNumber: "54.937", usrComment1: "Cássio ",
            comment1: " Fica quieto Neto!", usrComment2: "Neymar Jr ", comment2: " Disputinha de falta, bora?"
        },

        {
            usrImg: "img/marvel.jpg", usr: "Marvel", img: "img/aranha.jpeg", firstLikeImg: "img/ai.png",
            firstLikeUsr: "respondeai", likesNumber: "240.408", usrComment1: "DC ",
            comment1: " Batman >>>>", usrComment2: "Flash ", comment2: " Fake news"
        }
    ]
    return (
        <div className="posts">
            {posts.map(post => <Post {...post} />)}
        </div>
    )
}
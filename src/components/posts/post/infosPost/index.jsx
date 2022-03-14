import './style.css'

export const InfosPost = ({ firstLikeImg, firstLikeUsr, likesNumber,
    usrComment1, comment1, usrComment2, comment2 }) => {
    return (
        <div className="infosPost">
            <div className="containerInfosIcons">
                <div className="boxInfosIcons">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div className="likes">
                <img src={firstLikeImg} alt={firstLikeUsr} />
                <h2>Curtido por <strong>{firstLikeUsr}</strong> e <strong>outras {likesNumber} pessoas</strong> </h2>
            </div>
            <div className="comments">
                <h2><strong>{usrComment1} </strong> {comment1}</h2>
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
            <div className="comments">
                <h2><strong>{usrComment2} </strong> {comment2}</h2>
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
            <div className="commentInput">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentario..." />
                <div className="publish">
                    <h2>Publicar</h2>
                </div>
            </div>
        </div>
    )
}
export const BotPost = (props) => {
    const {curtidoImg, curtido, numero, usrComment1, comment1, usrComment2, comment2} = props
    return (
        <div className="fundo">
            <div className="borda">
                <div className="icones-3">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div className="curtido">
                <img src={curtidoImg} />
                <h2>Curtido por <strong>{curtido}</strong> e <strong>outras {numero} pessoas</strong> </h2>
            </div>
            <div className="comentarios">
                <h2><strong>{usrComment1} </strong> {comment1}</h2>
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
            <div className="comentarios">
                <h2><strong>{usrComment2} </strong> {comment2}</h2>
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
            </div>
            <div className="digite-aqui">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentario..." />
                <div className="publicar">
                    <h2>Publicar</h2>
                </div>
            </div>
        </div>
    )
}
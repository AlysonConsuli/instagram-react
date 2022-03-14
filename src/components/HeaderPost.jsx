export const HeaderPost = ({ usrImg, usr }) => {
    return (
        <div className="headerPost">
            <div className="logoUser">
                <img src={usrImg} alt={usr} />
                <h2>{usr}</h2>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}
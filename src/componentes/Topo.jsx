export const Topo = () => {
    return(
        <div className="topo-total">
            <div className="topo">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separacao"></div>
                    <img className="logo-desk" src="img/logo.png"/>
                </div>
                <img className="logo-mobile" src="img/logo.png"/>
                <input className="pesquisar" type="text" placeholder="Pesquisar"/>
                <div className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
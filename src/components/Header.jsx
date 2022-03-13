export const Header = () => {
    return (
        <header>
            <div className="boxHeader">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="bar"></div>
                    <img className="logoDesktop" src="img/logo.png" alt="logoDesktop" />
                </div>
                <img className="logoMobile" src="img/logo.png" alt="logoMobile" />
                <input className="search" type="text" placeholder="Pesquisar" />
                <div className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}
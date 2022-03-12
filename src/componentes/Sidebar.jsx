import { User } from "./User"
import { Sugestao } from "./Sugestao"

export const Sidebar = () => {
    const user = { img: "img/eu.jpeg", nickname: "alysonconsuli", name: "Alyson" }
    const { img: imgUser, nickname, name: nameUser } = user
    const sugestoes = [
        { img: "img/pior.jpg", name: "seficarputoepior" },
        { img: "img/xbox.png", name: "Xbox" },
        { img: "img/neymar.png", name: "Neymar" },
        { img: "img/nasa.png", name: "Nasa" },
        { img: "img/marvel.jpg", name: "Marvel" }
    ]

    return (
        <div className="sidebar">
            <User img={imgUser} nickname={nickname} name={nameUser} />
            <div className="sep">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div className="sugestoes">
                {sugestoes.map(sugestao => {
                    const { img, name } = sugestao
                    return <Sugestao img={img} name={name} />
                })}
                <div className="direitos">
                    <h4>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma</h4>
                    <h4>© 2021 INSTAGRAM DO FACEBOOK</h4>
                </div>
            </div>
        </div>
    )
}


/*< div className = "sugestao margin-33" >
    <div className="flex">
        <img src="img/marvel.jpg" />
        <div className="seguidores">
            <h2>Marvel</h2>
            <p>Novo no Instagram</p>
        </div>
    </div>
    <h3>Seguir</h3>
</div >*/
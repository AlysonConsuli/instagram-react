import { User } from "./User"
import { Suggestion } from "./Suggestion"

export const Sidebar = () => {
    const user = { img: "img/eu.jpeg", nickname: "alysonconsuli", name: "Alyson" }
    const { img: imgUser, nickname, name: nameUser } = user
    const suggestions = [
        { img: "img/pior.jpg", name: "seficarputoepior" },
        { img: "img/xbox.png", name: "Xbox" },
        { img: "img/neymar.png", name: "Neymar" },
        { img: "img/nasa.png", name: "Nasa" },
        { img: "img/marvel.jpg", name: "Marvel" }
    ]

    return (
        <aside>
            <User img={imgUser} nickname={nickname} name={nameUser} />
            <div className="titleSuggestions">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div className="suggestions">
                {suggestions.map(suggestion => {
                    const { img, name } = suggestion
                    return <Suggestion img={img} name={name} />
                })}
                <div className="copyright">
                    <h4>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma</h4>
                    <h4>© 2021 INSTAGRAM DO FACEBOOK</h4>
                </div>
            </div>
        </aside>
    )
}
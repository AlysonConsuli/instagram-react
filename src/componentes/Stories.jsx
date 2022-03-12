import { Storie } from './Storie';

const stories = [{ link: "img/9gag.png", name: "9gag" }, { link: "img/dota2.jpg", name: "Dota 2" },
{ link: "img/valorant.png", name: "Valorant" }, { link: "img/driven.png", name: "Driven" },
{ link: "img/ai.png", name: "Responde aí" }, { link: "img/vasco.png", name: "Vasco" },
{ link: "img/barked.png", name: "Barked" }, { link: "img/nike.png", name: "Nike" }]

export const Stories = () => {
    return (
        <div className="container-stories">

            {stories.map(storie => {
                const { link, name } = storie
                return <Storie link={link} name={name} />
            })
            }
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}
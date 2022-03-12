export const Sugestao = (props) => {
    const {img, name} = props
    return (
        <div className="sugestao">
            <div className="flex">
                <img src={img} />
                <div className="seguidores">
                    <h2>{name}</h2>
                    <p>Segue você</p>
                </div>
            </div>
            <h3>Seguir</h3>
        </div>
    )
}
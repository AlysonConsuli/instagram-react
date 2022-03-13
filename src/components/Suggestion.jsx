export const Suggestion = (props) => {
    const { img, name } = props
    return (
        <div className="suggestion">
            <div className="displayFlex">
                <img src={img} alt={name} />
                <div className="followers">
                    <h2>{name}</h2>
                    <p>Segue você</p>
                </div>
            </div>
            <h3>Seguir</h3>
        </div>
    )
}
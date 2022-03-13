export const Storie = (props) => {
    const { img, name } = props
    return (
        <div className="boxStorie">
            <div className="imgStorie">
                <img src={img} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    )
}
export const Storie = ({ img, name }) => {
    return (
        <div className="boxStorie">
            <div className="imgStorie">
                <img src={img} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    )
}
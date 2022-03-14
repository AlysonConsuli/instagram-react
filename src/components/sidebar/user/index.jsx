import './style.css'

export const User = ({ img, nickname, name }) => {
    return (
        <div className="user">
            <img src={img} alt={nickname} />
            <div className="margin-17">
                <h2>{nickname}</h2>
                <h2 className="weight-300">{name}</h2>
            </div>
        </div>
    )
}
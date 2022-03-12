export const User = (props) => {
    const {img, nickname, name} = props
    return (
        <div className="primeiro-sidebar">
            <img src={img} />
            <div className="margin-17">
                <h2>{nickname}</h2>
                <h2 className="weight-300">{name}</h2>
            </div>
        </div>
    )
}
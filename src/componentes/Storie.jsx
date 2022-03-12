export const Storie = (props) => {
    const {link, name} = props
    return (
        <div className="box-stories">
            <div className="sobrescrever">
                <img src={link} />
            </div>
            <p>{name}</p>
        </div>
    )
}
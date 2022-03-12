export const TopPost = (props) => {
    const {usrImg, usr} = props
    return (
        <div className="topo-publi">
            <div className="logo-publi">
                <img src={usrImg} />
                <h2>{usr}</h2>
            </div>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    )
}
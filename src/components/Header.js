export const Header = (props)=>{
    return(
        <div className="card header d-flex flex-row justify-content-between mb-3">
            <div className="logo">
                <a href="/">
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" width="80px" height="50px" alt="logo"></img>
                </a>
            </div>
            <div className="nav d-flex flex-row justify-content-around align-items-center">
                <li className="m-1">
                    <a href="/">Dashboard</a>
                </li>
                <li className="m-1">
                    <a href="/">About Us</a>
                </li>
                <li className="m-1">
                    <a href="/">Contact Us</a>
                </li>
                <li className="m-1">
                    <button className="btn" onClick={props.toggleCart}>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-442-1151214.png?f=webp" alt="cart-link" width="80px" height="50px"></img>
                    </button>
                </li>
            </div>
        </div>
    )
}
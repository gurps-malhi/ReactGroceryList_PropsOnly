const Header = (props) => {
    return(   
        <header>
            <h1>{props.title}</h1>
            <span className="total-items">Items:{props.itemTotal}</span>
            {/* <span className="total-items">Items:{props.itemTotal(5)}</span> */}
        </header>
    )
}

export default Header

const Header = props => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.brand??"NoName"}</a>
            </div>
        </nav>
    );
}

export default Header;
import '../styles/Header.css';

const Header = props => {
    return (
        <section className="Header">
            {props.banner??"My First React JS App"}
        </section>
    );
}

export default Header;
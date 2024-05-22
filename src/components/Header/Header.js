import "./Header.css";



const Header = ()=>{
    const design = (
        <>
        <div>
            <nav className="navbar">
            <div className="logo">LOGO</div>
                <ul className="nav-links">
                    <li><a href="#" className='login'>Login</a></li>
                    <li><a href="#" className="btn signup"><span>Signup</span></a></li>
                </ul>
            </nav>
            <div className="alumnibar">
                <ul className="alumni-link">
                    <li><a href="#" className="active">Overview</a></li>
                    <li><a href="#">Curriculam</a></li>
                    <li><a href="#">Refund</a></li>
                    <li><a href="#">Testimmonials</a></li>
                </ul>
            </div>
        </div>
        </>
    );
    return design;
}

export default Header;
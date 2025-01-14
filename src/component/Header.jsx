import '../styles/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import mlogo from '../assets/site/musiclogo.png'

function Header() {
    return (
        <>
            <div className="header1">
                <div className="header1-1">
                    <Link to="/" className="logo">
                       <img src={mlogo} className="logo-image"></img>
                    </Link>
                    <Link to="/kballad">국내발라드</Link>
                    <Link to="/wpop">해외팝</Link>
                    <Link to="/kdanelec">국내 댄스/일렉</Link>
                    <Link to="/kindi">국내 인디</Link>
                    <Link to="/khiphop">국내 힙합</Link>
                    <Link to="/whiphop">해외 힙합</Link>
                    <Link to="/addmusic">노래 넣기</Link>
                    <Link to="/playlist">플레이리스트</Link>
                </div>
            </div>
        </>
    )
}

export default Header;
import '../styles/Home.css';
import Slider from "react-slick";
import { Link, useNavigate } from 'react-router-dom';
import { genres } from '../component/Musicgenre';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const NextArrow = (props) => {
        return <div onClick={props.onClick}>〈</div>;
    };
    
    const PrevArrow = (props) => {
        return <div onClick={props.onClick}>〉</div>;
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "30px",
        arrows: true,
        nextArrow: <NextArrow />, // 커스텀 화살표
        prevArrow: <PrevArrow />, // 커스텀 화살표
    };

    return (
        <>
        <div className="home-container1">
        </div>
        <div className="home-container2">
            <div className="genre-container">
                장르별 음악
            </div>
            <div className="slider-container1">
                <Slider {...settings}>
                    {genres.map((genre, index) => (
                        <div key={index} className="genre-item">
                            <Link to={`/${genre.name}`} className="genre-link">
                            <img src={genre.image} className="genre-image"/>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    )
}

export default Home;
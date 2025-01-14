import '../styles/Home.css';
import Slider from "react-slick";
import { Link, useNavigate } from 'react-router-dom';
import { genres } from '../component/Musicgenre';
import { situations } from '../component/Musicsituation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const NextArrow = (props) => {
        return <div className="arrow next" onClick={props.onClick}>❯</div>;
    };
    
    const PrevArrow = (props) => {
        return <div className="arrow prev" onClick={props.onClick}>❮</div>;
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "30px",
        arrows: true,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />, 
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
        <div className="home-container3">
            <div className="situation-container">
                상황별 음악
            </div>
            <div className="slider-container1">
                <Slider {...settings}>
                    {situations.map((situation, index) => (
                        <div key={index} className="genre-item">
                            <Link to={`/${situation.name}`} className="genre-link">
                            <img src={situation.image} className="genre-image"/>
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
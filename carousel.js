import Carousel from 'react-bootstrap/Carousel';
import FIRSTIMAGE from "../images/362619.jpg"
import SECONDIMAGE from "../images/best-hotels-travel-thailand-tourism-wallpaper-preview.jpg"
import THIRDIMAGE from "../images/maldives-hotel-room-hd-wallpaper-5120x2160.jpg"
import FOURTIMAGE from "../images/spa-beach-hotel-infinity-pool-wallpaper-preview.jpg"



function Carousell() {
    return (
        <div id='snknskxbsndsiuig'>

            <Carousel fade>
                <Carousel.Item interval={1500}>
                    <img
                        height={570}
                        className="d-block w-100"
                        src={FIRSTIMAGE}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>Most Relaxing Place</h4>
                        <p>ENJOT YOUR WONDERFULL HLOIDAYS WITH A GREAT LUXURY EXPERIENCE!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        height={570}

                        src={SECONDIMAGE}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4>Rlaxaing Your Winderfull</h4>
                        <p>Hotel Are The Faseletees In Your Friendly Above And Then Wonderfull</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        height={570}

                        src={THIRDIMAGE}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h4>Luxury Hotel</h4>
                        <p>YOUR REST AND ENJOY IN HOTEL AND ARE THE ALL SERVICES</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        height={570}

                        src={FOURTIMAGE}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4>Most Pool Relaxing Hotel</h4>
                        <p>ENJOT YOUR WONDERFULL HLOIDAYS WITH A GREAT LUXURY EXPERIENCE!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousell;
import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Footbar from '.././Components/Footbar/Footbar'
import Toolbar from '.././Components/Toolbar/Toolbar'
class aboutUs extends React.Component {

    render() {
        return (
            <div>
                <Toolbar />
                <div class="coverPhoto">
                    <img class="w-100" src='img/aboutus_CoverPhoto.png' />
                </div>
                <div class="aboutUsPage">
                    <div class="contentPart container text-center">
                        <p><b>Siva Exports</b> is reliable and trustworthy export company in Tamilnadu.
                            It is situated in Chinna kattalai near India’s temple city
                        <a href="https://en.wikipedia.org/wiki/Madurai"> <b>Madurai</b> </a>.</p>
                        <p>Company is established with the sole aim of helping
                        the rural farmers and rural multi product manufacturers by purchasing /
                                sourcing Agri commodities,Farm products and other products .</p>
                        <p>As the result they become financially self sufficient and we provide
                                    positive hope to their future by doing so.</p>
                        <p>We aim to achieve customer satisfaction through hygienic
                        quality and timely supply of our products. Our customer’s
                        growing faith and confidence in us is our most valued asset.
                        We follow the international norms so we can able to give
                        our customer’s expected quality products with on time delivery.</p>
                        <p>Our company is situated about 20km of Madurai port, Around of 20 minutes travel.</p>
                    </div>
                </div>
                <Footbar />
            </div>
        );
    }
}

export default aboutUs;

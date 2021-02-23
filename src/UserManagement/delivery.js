import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Footbar from '.././Components/Footbar/Footbar'
import Toolbar from '.././Components/Toolbar/Toolbar'
class delivery extends React.Component {

    render() {
        return (
            <div class="deliveryPage">
                <Toolbar />
                <div class="deliveryContents">
                    <div class="position-relative">
                        <img class="col-sm-12 deliveryCoverImage p-0" src="img/delivery_coverphoto.png" />
                    </div>
                    <h1 class="text-center pt-3"><b>Delivery</b></h1>
                    <div class="d-flex text-center firstPart flex-wrap">
                        <div class="col-sm-6 p-5 text-left mobile_responsive">
                            <div class="deliveryDescripption">
                                <p>We are always prepared to offer advice about the goods including information about
                                health benefits, drawbacks, and product upgrades.
                                We know the general purpose for which you require our goods, and we will
                                 take reasonable care when giving you any advice.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <img src='img/delivery-isometric-landing-page-template-vector-26218423.png'
                                class="deliveryContentImage" />
                        </div>
                    </div>
                    <div class="d-flex text-center secondpart flex-wrap-reverse">
                        <div class="col-sm-6">
                            <img src='img/periodicDelivery.png'
                                class="periodicDeliveryImage" />
                        </div>
                        <div class="col-sm-6 p-5 text-left">
                            <h1>Periodic deliveries</h1>
                            <div class="deliveryDescripption">
                                <p>The delivery duration varies depending on the dispatch time for the type of
                                product you are ordering.
                                The time of file delivery can be customized on a per-feed basis.
                                Variation between delivery times should be relatively small from day to day.<br></br>
                                If you have any questions, please email us at:
                                <a href='mailto:sivamurugan30591@gmail.com'> sivamurugan30591@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footbar />
            </div>
        );
    }
}

export default delivery;

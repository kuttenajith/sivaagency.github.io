import React from "react";
import "./user_management.scss";
import Footbar from '.././Components/Footbar/Footbar'
import Toolbar from '.././Components/Toolbar/Toolbar'
import 'react-responsive-modal/styles.css';
import FilePreviewer from 'react-file-previewer';

class Export extends React.Component {

    render() {
        return (
            <div>
                <Toolbar />
                <div class="coverPhoto">
                    <img class="w-100" src='img/export_CoverPhoto.png' />
                </div>
                <div class="exportPage">
                    <h1 class="text-center pt-3"><b>Export Products</b></h1>
                    <div class="container-fluid contenedor exportPageContents text-center pt-4">
                        <div class=" container d-flex text-center export-responsive">
                            <div class="col-sm-3 container_foto">
                                <div class="ver_mas text-center">
                                    <span id="click" class="lnr lnr-eye">
                                        from organic cane or beet that has been grown according to the NOP standards. </span>
                                </div>
                                <article class="text-left">
                                    <h2>ORGANIC SUGAR</h2>
                                    <h4>Sugar produced from organically grown sugarcane.
                                    it has tons of health benefits.
                                    </h4>
                                </article>
                                <img src="img/organic_sugar.png" alt="aji" />
                            </div>
                            <div class="col-sm-3 container_foto">
                                <div class="ver_mas text-center">
                                    <span id="click" class="lnr lnr-eye">
                                        from rock crystals of salt that have been mined from areas close to the Himalayas.</span>
                                </div>
                                <article class="text-left">
                                    <h2>ORGANIC SALT</h2>
                                    <h4>The salt, which often has a pinkish tint due to mineral impurities.</h4>
                                </article>
                                <img src="img/salt.png" alt="aji" />
                            </div>
                            <div class="col-sm-3 container_foto">
                                <div class="ver_mas text-center">
                                    <span id="click" class="lnr lnr-eye">
                                        from cream skimming any impurities, then pouring, retaining the clear
                                        liquid fat. Spices can be added for flavor.</span>
                                </div>
                                <article class="text-left">
                                    <h2>PURE GHEE</h2>
                                    <h4>Cow Desi Ghee is made of cow's pure &
                                        fresh milk using the traditional standards.</h4>
                                </article>
                                <img src="img/ghee.png" alt="aji" />
                            </div>
                            <div class="col-sm-3 container_foto">
                                <div class="ver_mas text-center">
                                    <span id="click" class="lnr lnr-eye">
                                        It is eaten alone and in a great variety of soups.
                                        Asia had been pinpointed as the area where rice originated</span>
                                </div>
                                <article class="text-left">
                                    <h2>RICE</h2>
                                    <h4>Edible starchy cereal grain and the grass plant (family Poaceae) by which it is produced.</h4>
                                </article>
                                <img src="img/rice.png" alt="aji" />
                            </div>
                        </div>
                    </div>
                    <h1 class="text-center pt-3"><b>Here are our certificates!</b></h1>
                    <div class="d-flex flex-wrap container certificatePart p-4 col-12">
                        <FilePreviewer file={{
                            url: "img/doc1 (1).jpeg"
                        }}
                        />
                        <FilePreviewer file={{
                            url: "img/doc2 (2).jpeg"
                        }}
                        />
                        <FilePreviewer file={{
                            url: "img/doc3 (3).jpeg"
                        }}
                        />
                        <FilePreviewer file={{
                            url: "img/doc4 (4).jpeg"
                        }}
                        />
                    </div>
                </div>
                <Footbar />
            </div>
        );
    }
}

export default Export;

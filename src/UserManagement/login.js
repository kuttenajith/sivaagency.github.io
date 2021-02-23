import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Footbar from '.././Components/Footbar/Footbar'
import Toolbar from '.././Components/Toolbar/Toolbar'
const axios = require("axios").default;
class homePage extends React.Component {

  render() {

    return (
      <div className="deliveryPage">
        <Toolbar />
        <div class="coverPhoto">
          <img class="w-100" src='img/homepage_CoverPhoto.png' />
        </div>
        <div class="homePage">
          <div class="contentPart container text-center">
            <h1>Welcome! Here we celebrate the green and go through with it.</h1>
            <div class="container my-4">
              <hr class="my-4" />
              <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
                <div class="controls-top d-flex justify-content-around">
                  <a class="btn-floating prev_icon" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                  <a class="btn-floating next_icon" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
                </div>
                <ol class="carousel-indicators">
                  <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                  <li data-target="#multi-item-example" data-slide-to="1"></li>
                  <li data-target="#multi-item-example" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">

                    <div class="row">
                      <div class="col-md-4">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_sugar.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Organic Sugar</h4>
                            <p class="card-text">Organic cane sugar has the full-bodied
                            taste of sugarcane, retaining
                             a lot of the nutrients present in cane juice. </p>
                            <a class="btn btn-primary" href='/export'>Available</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4 clearfix d-none d-md-block">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_salt.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Indhu Salt(Himalayan)</h4>
                            <p class="card-text">The salt, which often has a pinkish tint due trace minerals,
                            is primarily used as a food additive to replace refined table salt</p>
                            <a class="btn btn-primary" href='/export'>Available</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4 clearfix d-none d-md-block">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_rice.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Rice</h4>
                            <p class="card-text"> Food crop with regard to human nutrition
                            and providing more than one-fifth of
                            the calories consumed worldwide by humans.</p>
                            <a class="btn btn-primary" href='/export'>Available</a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="carousel-item">

                    <div class="row">
                      <div class="col-md-4">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_ghee.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Ghee</h4>
                            <p class="card-text">Ghee is clarified butter, which is generally sprinkled over breads, cooked rice,
                            sweets to impart a tempting aroma.</p>
                            <a class="btn btn-primary" href='/export'>Available</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4 clearfix d-none d-md-block">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_oil.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Edible Oil</h4>
                            <p class="card-text"> Having lower amounts of saturated fats and higher
                            levels of unsaturated fats like olive oil, soy are generally healthier.</p>
                            <a class="btn btn-primary disabled">In progress</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4 clearfix d-none d-md-block">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_greenchilly.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Green Chilly</h4>
                            <p class="card-text"> Green chillies are a rich source of vitamin E and vitamin C which
                            make them a very good spice for a healthy skin.</p>
                            <a class="btn btn-primary disabled">In progress</a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="carousel-item">

                    <div class="row">
                      <div class="col-md-4">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_redchilly.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Red Chilly</h4>
                            <p class="card-text">Fights Inflammation and Pain. Capsaicin in red chillies is to
                            reduce inflammation and act as natural pain relief remedy.</p>
                            <a class="btn btn-primary disabled">In progress</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4 clearfix d-none d-md-block">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top" src="img/card_groundnut.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Ground Nut</h4>
                            <p class="card-text">Groundnuts are healthy fats, protein
                             lowers the risk of heart disease and regulates blood glucose levels.</p>
                            <a class="btn btn-primary disabled">In progress</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4 clearfix d-none d-md-block">
                        <div class="card mb-2 border-0">
                          <img class="card-img-top"
                            src="img/card_friuts.png"
                            alt="Card image cap" />
                          <div class="card-body">
                            <h4 class="card-title">Fresh Fruits</h4>
                            <p class="card-text">Eating a diet high in fruits and vegetables can reduce a person'
                              risk of developing heart disease, cancer, and diabetes.</p>
                            <a class="btn btn-primary disabled">In progress</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footbar />
      </div>
    );
  }
}

export default homePage;

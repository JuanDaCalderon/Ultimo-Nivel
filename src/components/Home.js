import React, { Component, Fragment } from 'react';
import image01 from '../assets/images/01.jpg';
import image02 from '../assets/images/02.jpg';
import image03 from '../assets/images/03.jpg';
import '../assets/styles/headers.css';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <h1>ULTIMO NIVEL</h1>

                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

                            <span className="fs-4">Ultimo NIVEL</span>
                        </a>

                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Home</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">Features</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">Pricing</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">FAQs</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                        </ul>
                    </header>
                </div>
                <div class="b-example-divider"></div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={image01} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image02} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image03} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </Fragment>
        );
    }

}

export default Home;
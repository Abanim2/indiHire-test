import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Section2.css';
import { BsArrowUpRight } from "react-icons/bs";
import { Navbar, Nav } from 'react-bootstrap';

const Section2 = () => {
    return (
        <div className="container-fluid bg-red">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6 d-flex align-items-center justify-content-center custom-div">
                    <div className="section text-center">
                        <h2 className='text-white'>Hire the right talent</h2>
                        <Nav.Link href="/what-we-do" className="nav-link"><p className='bg-warning rounded-pill'>Contact with us <BsArrowUpRight /> </p></Nav.Link>

                    </div>
                </div>
                <div className="col-lg-5 col-md-6 d-flex align-items-center justify-content-center custom-div">
                    <div className="section text-center">
                        <h2 className='text-white'>Make your next career move</h2>
                        <Nav.Link href="/what-we-do" className="nav-link"><p className='bg-warning rounded-pill'>Find Jobs <BsArrowUpRight /></p></Nav.Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;

import React from "react";
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="container-footer w-container">
      <div className="w-row">
        <div className="footer-column w-clearfix w-col w-col-4">
        <lord-icon
            src="https://cdn.lordicon.com/dxoycpzg.json"
            trigger="loop"
            delay="1000"
            colors="primary:#f24c00,secondary:#646e78,tertiary:#f4f19c,quaternary:#ebe6ef,quinary:#f9c9c0"
            style={{width:'80px', height:'80px'}}>
        </lord-icon>
        <div style={{color:'white', fontWeight:'600', fontFamily:'sans-serif'}}> CourseWorld </div>
          <p className="footer-description-failory">
            E-Commerce for selling and purchasing learnings
            <br />
          </p>
        </div>
        <div className="footer-column w-col w-col-8">
          <div className="w-row">
            <div className="w-col w-col-8">
              <div className="w-row">
                <div className="w-col w-col-7 w-col-small-6 w-col-tiny-7">
                  <h3 className="footer-titles">Learn</h3>
                  <p className="footer-links">
                    <div href="" target="_blank">
                      <span className="footer-link">
                        Premium Courses
                        <br />
                      </span>
                    </div>
                    <div href="">
                      <span className="footer-link">
                        Free Courses
                        <br />
                      </span>
                    </div>
                    <div href="">
                      <span className="footer-link">Blog</span>
                    </div>
                    <span>
                      <br />
                    </span>
                    <div href="">
                      <span className="footer-link">
                        Entrepreneurial Tools
                        <br />
                      </span>
                    </div>
                    <div href="">
                      <span className="footer-link">
                        Startup News
                        <br />
                      </span>
                    </div>
                    <div href="">
                      <span className="footer-link">Podcast</span>
                    </div>
                    <strong>
                      <br />
                    </strong>
                  </p>
                </div>
                <div className="w-col w-col-5 w-col-small-6 w-col-tiny-5">
                  <h3 className="footer-titles">Mentor?</h3>
                  <p className="footer-links">
                    <div href="">
                      <Link to="/sellerlogin" className="footer-link">
                        Mentor Login
                        <br />
                      </Link>
                    </div>
                    <div href="">
                      <Link to="/sellerregister" className="footer-link">
                        Mentor Register
                        <br />
                      </Link>
                    </div>
                    <div href="">
                      <span className="footer-link"></span>
                    </div>
                    <div href="">
                      <span className="footer-link">
                        Contribute
                        <br />
                      </span>
                    </div>
                    <div href="">
                      <span className="footer-link">FAQ</span>
                    </div>
                    <strong>
                      <br />
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="column-center-mobile w-col w-col-4">
              <h3 className="footer-titles">Follow Us!</h3>
              <div
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbf0a2f2b67e3b3ba079c_Twitter%20Icon.svg"
                  width="20"
                  alt="Twitter icon"
                />
              </div>
              <div
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbfe70fcf5a0514c5b1da_Instagram%20Icon.svg"
                  width="20"
                  alt="Instagram icon"
                />
              </div>
              <div
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbe42e1e6034fdaba46f6_Facebook%20Icon.svg"
                  width="20"
                  alt="Facebook Icon"
                />
              </div>
              <div
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0002f2b676eb4ba0869_LinkedIn%20Icon.svg"
                  width="20"
                  alt="LinkedIn Icon"
                />
              </div>
              <div
                href=""
                target="_blank"
                className="footer-social-network-icons w-inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dc0112f2b6739c9ba0871_Pinterest%20Icon.svg"
                  width="20"
                  alt="Pinterest Icon"
                  className=""
                />
              </div>
              <p className="footer-description">
                Email:{" "}
                <div href="">
                  <strong className="link-email-footer">
                    course.factory@gmail.com
                  </strong>
                </div>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import ContactInfo from "./contact-info";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./index.css";
import FormCard from "./form";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="mainWrapper mb-5">
        <div className="middleText">
          <h1 className="contactMainHead">Contact Us</h1>
        </div>
      </section>

      <section className="mb-5">
        <div className="container">
          <div className="row">
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="ContactForm mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <p className="mainHeadingContact">Contact Us</p>
                <h2 className="abtContactCourse">
                  Get 100% Free Course Contact With Us!
                </h2>
                <p className="abtContactDescription mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit massa
                  mi. Aliquam hendrerit urna pellentesque
                </p>
              </div>
              <hr className="mb-4" style={{ maxWidth: "500px" }} />
              <div>
                <p className="followSocialMedia">Follow Us here:</p>
              </div>
              <div className="social-Media">
                <FaFacebook className="iconsHandle" />
                <FaTwitter className="iconsHandle" />
                <FaLinkedin className="iconsHandle" />
                <FaYoutube className="iconsHandle" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <FormCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56055.592544313215!2d77.2402724216797!3d28.5855377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52dd3c61e33%3A0x9d4284dae84aa42!2sVDS!5e0!3m2!1sen!2sin!4v1724923274684!5m2!1sen!2sin"
              width="100%"
              height="500px"
              style={{
                border: "0",
                borderRadius: "10px",
                // allowfullscreen: "",
                // loading: "lazy",
                // referrerpolicy: "no-referrer-when-downgrade",
              }}
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

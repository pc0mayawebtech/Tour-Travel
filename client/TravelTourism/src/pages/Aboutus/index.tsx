import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { InNumber } from "../../constant/AboutInNumber";
import { AboutUsLittleMoreData1, AboutUsLittleMoreData2 } from "../../constant/aboutuslittlemore";

const About = () => {
  return (
    <div className="about">
      <Header />
      <section>
        <div className="aboutBanner">
          <video
            autoPlay
            muted
            loop
            id="videoBanner"
            src="/Video/agoda-video-banner.mp4"
          ></video>
          <h1>About</h1>
        </div>
      </section>
      <section className="aboutUsContent container">
        <div className="aboutContent">
          <h1 className="aboutContentHeading">See The World For Less</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ipsam explicabo error velit debitis odit, quidem adipisci mollitia
            cupiditate quo numquam nulla eius consectetur animi nobis repellat
            illo? Repellendus deserunt repudiandae quis, fugit ab dolorem
            incidunt ducimus quas aspernatur nam earum labore corrupti aliquam,
            deleniti maiores sint ut sapiente? Culpa, ipsa voluptatum dolorem
            delectus doloremque exercitationem repudiandae eum quis, aperiam,
            ullam hic itaque vitae? Error quaerat unde aliquam facere nobis ut
            beatae perferendis? Quas nesciunt, totam odio omnis at voluptatum
            minima illo labore quam maxime fuga incidunt qui voluptas architecto
            dolorem saepe facere harum beatae laborum animi iusto. Nemo, vero!
          </p>
          <h1 className="aboutContentHeading">Visitor Numbers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione sint in, reiciendis itaque fugiat dolores molestiae suscipit
            assumenda delectus illo maiores aliquid eligendi, rerum laborum
            sequi eius adipisci voluptate?{" "}
          </p>
          <p>
            {" "}
            Omnis ut nihil ipsam, dolore nemo praesentium at dolorum quasi
            deleniti eos consequuntur voluptates nisi harum reiciendis
            veritatis? At, quos vitae corporis voluptatibus voluptas ullam fuga
            labore, repellendus doloribus nisi consequatur itaque laborum
            dolorem! Provident, voluptate. Sunt eligendi quod nulla?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, blanditiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            molestiae laborum, ducimus minus sunt beatae nobis veritatis dolores
            necessitatibus optio?
          </p>
          <h1 className="aboutContentHeading">
            Agoda Platform-to-Business (P2B)
          </h1>
          <h1 className="aboutContentHeading">
            Complaint Handling Annual Report (EEA)
          </h1>
          <p className="aboutContentText">
            For the period: 1 January 2023 to 31 December 2023.
          </p>
          <p className="aboutContentText">
            Complaints received in the EEA: 14,539 from 3,231,276 partners.
          </p>
          <p className="aboutContentText">
            Complaints received were related to the following areas:
          </p>
          <ul className="aboutContentList">
            <li>59% receiving/charging payment.</li>
            <li>21% payment system logic.</li>
            <li>17% property inquiry/update request.</li>
            <li>2% system issues/bug related.</li>
            <li>1% property content related.</li>
          </ul>
          <p className="aboutContentText">
            We resolved 100% of the complaints in 2023, of which:
          </p>
          <ul className="aboutContentList">
            <li>50% of the cases were resolved within 3 days.</li>
            <li>25% of the cases were resolved within 4-7 days.</li>
            <li>25% of the cases required 7 days or more for resolution.</li>
          </ul>
        </div>
      </section>
      <section className="inNumber container">
        <div className="inNumberHeading">
          <p>Agoda in numbers</p>
        </div>
        <Swiper
          className="swiper"
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}
        >
          {InNumber.map((item, id) => {
            return (
              <SwiperSlide>
                <div className="inNumberTile" key={id}>
                  <h1>{item.number}</h1>
                  <div className="breakLine"></div>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="aboutLittleMore container">
        <div className="abboutLittleMoreLeft">
          <div className="aboutLittleMoreHeading">
            <h2>
              A bit more <br /> about us...
            </h2>
          </div>
          {
            AboutUsLittleMoreData1.map((item)=>{
              return (
                <div className="aboutLittleMoreTile" key={item.id} style={{backgroundImage:`url(${item.image})`}}>
                <div className="aboutLittleMoreTileContent">
                  <p className="aboutLittleMoreTileQues">{item.question}</p>
                  <p className="aboutLittleMoreTileAnswer">
                    {item.answer}
                  </p>
                  <p className="aboutLittleMoreTileReadMore">Read More</p>
                </div>
              </div>
              )
            })
          }
          
        </div>
        <div className="abboutLittleMoreRight">
        {
            AboutUsLittleMoreData2.map((item)=>{
              return (
                <div className="aboutLittleMoreTile" key={item.id} style={{backgroundImage:`url(${item.image})`}}>
                <div className="aboutLittleMoreTileContent">
                  <p className="aboutLittleMoreTileQues">{item.question}</p>
                  <p className="aboutLittleMoreTileAnswer">
                    {item.answer}
                  </p>
                  <p className="aboutLittleMoreTileReadMore">Read More</p>
                </div>
              </div>
              )
            })
          }
                  </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

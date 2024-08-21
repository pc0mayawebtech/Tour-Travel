import './index.css';
import Header from '../../shared-components/header';
import SliderCarousal from './slick-carousal';
import Footer from '../../shared-components/footer';

const Home = () => {
   return (
      <>
         <Header />
         <section>
            <SliderCarousal />
         </section>
         <Footer />
      </>
   )
}

export default Home;
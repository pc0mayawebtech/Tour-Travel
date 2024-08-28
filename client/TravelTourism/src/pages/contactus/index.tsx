import Footer from '../../shared-components/footer';
import Header from '../../shared-components/header';
import ContactInfo from './contact-info';
import './index.css';

const Contact = () => {
    return (
        <>
            <Header />
            <section className='mainWrapper mb-5'>
                <div className='middleText'>
                    <h1 className='contactMainHead'>Contact Us</h1>
                </div>
            </section>

            <section className='mb-5'>
                <div className="container">
                    <div className="row">
                        <ContactInfo />
                    </div>
                </div>
            </section>

            <section className='mb-5'></section>
            <Footer />
        </>
    )
}

export default Contact;
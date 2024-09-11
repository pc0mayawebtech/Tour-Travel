import "./index.css";
import { FaUser } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuClock7 } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
const PaymentGateway = () => {
  const [accordionData, setAccordinData] = useState({
    one: false,
    two: false,
    activeFirst:false,
    activeSecond : false,

  });
  
  const [inputValue, setInputValue] = useState({
    cHName:"",
    cNumber: "",
    cvv:"",
    eDate:"",
    error:{
      cHName:"",
      cNumber: "",
      cvv:"",
      eDate:"",
      
    }    
  })
  const [inputData, setInputData]= useState({
    vpa:"",
    err :{ 
      vpa:""
    }
  })

  const handlePreview = (id: number) => {
    console.log(id);
    if (id === 1) {
      setAccordinData({
        ...accordionData,
        one: !accordionData.one,
        two: false,
        activeFirst: !accordionData.activeFirst,
        activeSecond : false
      })

    }
    if (id === 2) {
      setAccordinData({
        ...accordionData,
        two: !accordionData.two,
        one: false,
        activeFirst: false,
        activeSecond: !accordionData.activeSecond
      });
    
    }
  };
  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setInputValue(prevState => ({ ...prevState, [name]: value }));
    setInputData(prevState =>({...prevState, [name] : value}))
}

  const handleSubmit= (e:{preventDefault : ()=> void ;})=>{
    e.preventDefault();
    const {cHName, cNumber, cvv, eDate} = inputValue
    const {vpa} =inputData
    const errors= {
      cHName:"",
    cNumber: "",
    cvv:"",
    eDate:"",
    vpa:"",

    }
    let hasError= false;
 
    if(!cHName || cHName.trim()){
      errors.cHName ="Required";
      hasError= true;
    }
    else if (cHName.length < 3) {
      errors.cHName = "Card Holder Name must be at least 3 characters long";
      hasError = true;
  }
  if(!cNumber || cNumber.trim()){
    errors.cNumber ="Required";
    hasError= true;
  }
  else if (cNumber.length == 12) {
    errors.cNumber = "Card Number is Required";
    hasError = true;
}
if(!cvv || cvv.trim()){
  errors.cvv ="CVV is required";
  hasError= true;
}
else if (cvv.length == 3) {
  errors.cvv = "First Name must be at least 3 characters long";
  hasError = true;
}
if(!eDate || eDate.trim()){
  errors.eDate ="Date is required";
  hasError= true;
}
else if (eDate.length === 4) {
  errors.eDate = "First Name must be at least 4 characters long";
  hasError = true;
}
if (!vpa || vpa.trim()) {
  errors.vpa = "VPA is required";
}
else if (!vpa.includes('@')) {
  errors.vpa = "Invalid vpa";
  hasError = true;
  console.log("hloo")
}

if (!hasError) {
  console.log('data is submit successfully');
}

else {
  setInputValue(prevState => ({ ...prevState, error: errors }));
}
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-lg-7">
            <div className="payemntOuterBox mb-3">
              <p className="paymentDetail">Contact Details</p>
              <div className="detailOuter mb-2">
                <label>
                  <FaUser
                    color="grey"
                    size={15}
                    style={{ marginTop: "-8px" }}
                  />
                </label>
                <div>
                  <p className="userInfo">PAWAN KUMAR</p>
                  <p className="useraddInfo">pawan30jul@gmail.com</p>
                  <p className="useraddInfo">+91 8882939347</p>
                </div>
              </div>

              <p className="paymentDetail">Passengar Details</p>
              <div className="detailOuter">
                <label>
                  <FaUser
                    color="grey"
                    size={15}
                    style={{ marginTop: "-8px" }}
                  />
                </label>
                <div>
                  <p className="userInfo">PAWAN KUMAR</p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="d-flex align-items-center gap-1">
                <MdOutlineSecurity size={25} color="blue" />
                <span className="paymentText mb-0">Secure Payment</span>
              </div>
              <p>
                <small>
                  All card information is fully encrypted, secure and protected.
                </small>
              </p>
            </div>
            <div className="paymentCard">
              <p className="paymentMethod">
                We accept different payment methods for this booking.
              </p>

              <form method= "post" onSubmit={handleSubmit}>
              <div>
                <form method = "post" className="onlinePayment">
                  <div className="paymentCards"
                    onClick={() => handlePreview(1)}>
                    <div className="onlinePaymentMethod">
                        {accordionData.activeFirst &&
                      <div className="paymentActive">
                      </div>}
                    </div>
                    {/* <div className="paymentUsingCards"> */}
                    <div className="paymentWith">
                      <span>
                        CREDIT/DEBIT CARD
                        <p>(processing fee may apply)</p>
                      </span>
                    </div>
                    <div>
                      <ul className="cards">
                        <li>
                          <img
                            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725965896/ic_visa_2x_v3_uz2bbc.png"
                            alt="visa"
                          />
                        </li>
                        <li>
                          <img
                            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725965934/ic_master_2_hoqewe.png"
                            alt="master-card"
                          />
                        </li>
                        <li>
                          <img
                            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725965970/rupay_debit_zxprqm.png"
                            alt="rupay"
                          />
                        </li>
                      </ul>
                    </div>
                    </div>
                  {/* </div> */}
                  <div>
                    {accordionData.one && (
                      <>
                        <div>
                          <label className="selectMethod">
                            Select Payment Method
                            <strong className="compulsionSymbol">*</strong>
                          </label>
                          <br />
                          <div className="paymentsCredit">
                            <select className="creditCardPayments">
                              <option className="cardPay">
                                Visa / Mastercard
                              </option>
                              <option className="cardPay">Rupay</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="selectMethod">
                            Card Holder Name
                            <strong className="compulsionSymbol">*</strong>
                          </label>
                          <br />
                          <div className="paymentsCredit">
                            <input className="cardHolderName"
                            type="text"
                            name="cHName"
                            value={inputValue.cHName}
                            onChange={handleChange}  />
                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "0px", marginBottom: "0.5rem" }}>{inputValue.error.cHName}</p>

                          </div>
                        </div>
                        <div>
                          <label className="selectMethod">
                            Card Number
                            <strong className="compulsionSymbol">*</strong>
                          </label>
                          <br />
                          <div className="paymentsCredit">
                            <input
                              className="cardHolderName"
                              type="number"
                              name="cNumber"
                              value={inputValue.cNumber}
                            onChange={handleChange}
                              maxLength={12}
                            />
                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "0px", marginBottom: "0.5rem" }}>{inputValue.error.cNumber}</p>

                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <label className="selectMethod">
                              Expiry Date
                              <strong className="compulsionSymbol">*</strong>
                            </label>
                            <br />
                            <div className="paymentsCredit">
                              <input
                                className="cardHolderName"
                                name="eDate"
                                type="number"
                                value={inputValue.eDate}
                                onChange={handleChange}
                                maxLength={4}
                                min={4}
                                placeholder="MM/YY"
                              />
                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "0px", marginBottom: "0.5rem" }}>{inputValue.error.eDate}</p>

                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <label className="selectMethod">
                              CVV
                              <strong className="compulsionSymbol">*</strong>
                            </label>
                            <br />
                            <div className="paymentsCredit">
                              <input
                                className="cardHolderName"
                                name="cvv"
                                value={inputValue.cvv}
                                onChange={handleChange}
                                type="number"
                                maxLength={3}
                                placeholder="***"
                              />
                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "0px", marginBottom: "0.5rem" }}>{inputValue.error.cvv}</p>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-12 col-sm-12 col-12 ">
                            <div className="cvvImage">
                              <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725972336/cvv-icon_yrhnky.png" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </form>
                <form method = "post" className="onlinePayment">
                  <div className="paymentCards"  onClick={() => handlePreview(2)}>
                  <div className="onlinePaymentMethod">
                    {accordionData.activeSecond &&
                    <div className="paymentActive">
                    </div>}
                  </div>
                    <div className="paymentWith">
                      <span>
                        DIGITAL PAYMENT
                        <p>(processing fee may apply)</p>
                      </span>
                    </div>
                    <div>
                      <ul className="cards">
                        <li>
                          <img
                            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725973947/ic_UPI_2_u1auwb.png"
                            alt="upi"
                          />
                        </li>
                        <li>
                          <img
                            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725973992/ic_paypal_3_wbwmpq.png"
                            alt="paypal"
                          />
                        </li>
                        <li>
                          <img
                            src=" https://res.cloudinary.com/dixfg1bvv/image/upload/v1726047729/Google-Pay-India-Tez-new-icon_rdovvi.jpg"
                            alt="paypal"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>{ accordionData.two && <>
                    
                    <div>
                      <label className="selectMethod">
                        Select Payment Method
                        <strong className="compulsionSymbol">*</strong>
                      </label>
                      <br />
                      <div className="paymentsCredit">
                        <select className="creditCardPayments">
                          <option className="cardPay">UPI</option>
                          <option className="cardPay">PayPal</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="selectMethod">
                        Virtual Payment Address (VPA)
                        <strong className="compulsionSymbol">*</strong>
                      </label>
                      <br />
                      <div className="paymentsCredit">
                        <input
                          className="cardHolderName"
                          name="vpa"
                          value={inputData.vpa}
                          onChange={handleChange}
                          type="text"
                          placeholder="e.g. yourname@bankname"
                        />
                        <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "0px", marginBottom: "0.5rem" }}>{inputData.err.vpa}</p>

                      </div>
                      <div>
                        <ul className="paymentRedirect">
                          <li>
                            Clicking 'Book Now' will redirect you to the payment
                            instructions page
                          </li>
                          <li>The total amount you will be charged</li>
                        </ul>
                      </div>
                    </div>
                    </>}
                    </div>
                </form>
                <div className="payServices">
                  <span>
                    By clicking the button to submit this booking, I agree to
                    Agoda’s <Link className="" to={"/"}>Terms of Use</Link> and <Link className="" to={"/"}>Privacy Policy</Link> .
                   
                  </span>
                  <div className="payNow">
                    <button className="payNowBtn">Pay Now</button>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="mb-4">
              <div className="flightFullView">
                <div className="innerFlightDescription">
                  <span className="flightPlace">New Delhi and NCR</span>
                  <span>
                    <IoIosArrowRoundForward size={30} color="white" />
                  </span>
                  <span className="flightPlace">Varanasi</span>
                </div>
                <div>
                  <span className="flightPlaceInfo">
                    7 Oct · 1 Passenger · Economy
                  </span>
                </div>
              </div>

              <div className="InnerInfoPart">
                <div className="InnerDescriptionInfo">
                  <span className="flightInfoPlace">
                    New Delhi and NCR (DEL)
                  </span>
                  <span>
                    <IoAirplane size={20} color="grey" />
                  </span>
                  <span className="flightInfoPlace">Varanasi (VNS)</span>
                </div>
                <div className="mb-1">
                  <GiCommercialAirplane size={15} color="grey" />
                  <span className="flightInfo">IndiGo</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="flighttiming">
                    7 Oct · 19:10 - 20:25 ·
                    <LuClock7 style={{ marginTop: "-3px" }} /> 1h 15m
                  </span>
                </div>
              </div>
            </div>

            <div className="PriceBox">
              <p className="mb-2">Price breakdown</p>
              <div className="InnerFlightPriceContainer">
                <div>
                  <p className="InnerticktInfo mb-2">Adult</p>
                  <p className="addInfo mb-2">Base fare</p>
                  <p className="addInfo mb-0">Taxes and fees</p>
                </div>
                <div>
                  <p className="InnerticktInfo mb-2">Rs. 6,379.35 x 1</p>
                  <p className="addInfo mb-2 text-end">Rs. 5,339.60</p>
                  <p className="addInfo mb-0 text-end">Rs. 1,039.75</p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-item justify-content-between">
                <p className="InnerticktInfo mb-0">Discount</p>
                <p className="totalDiscount mb-0">- Rs. 210.73</p>
              </div>
              <hr />
              <div className="d-flex align-item justify-content-between">
                <p className="InnerticktInfo mb-2">Total</p>
                <p className="totalPrice mb-2">Rs. 6,168.62</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentGateway;

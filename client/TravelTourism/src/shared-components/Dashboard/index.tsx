import { CalendarDays,  MapPin, Search } from "lucide-react"
import { useState } from "react";
import DatePicker from "react-datepicker"
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchResult from "../../pages/home/result-filter";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [adultValue, setAdultValue] = useState(1);
    const [childValue, setChildValue] = useState(0);
    const [infantValue, setInfantValue] = useState(0);
    const [dropDown, setDropDown] = useState(false);
    const [toResults, setToResults] = useState([]);
    const [fromResults, setFromResults] = useState([]);

    let debounceTimer: number | undefined;

    const [isDropdownVisible, setIsDropdownVisible] = useState(true);
    const [submit, setSubmit] = useState({
      flyingfrom: "",
      flyingfromCode: "",
      flyingto: "",
      flyingtoCode: "",
      traveldate: "",
      error: { dataError: "" },
    });
    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const { flyingfromCode, flyingtoCode, traveldate } = submit;
      const errors = {
        dataError: "",
      };
      let hasErrors = false;
  
      if (!flyingfromCode || !flyingtoCode || traveldate) {
        errors.dataError = "All field are required";
        hasErrors = true;
      }
  
      if (hasErrors) {
        alert(errors.dataError);
      } else {
        navigate("/airlines", {
          state: {
            flyingform: submit.flyingfrom,
            flyingto: submit.flyingto,
            traveldate: JSON.stringify(startDate),
            flyingfromCode: submit.flyingfromCode,
            flyingtoCode: submit.flyingtoCode,
          },
        });
        setSubmit({
          flyingfrom: "",
          flyingfromCode: "",
          flyingto: "",
          flyingtoCode: "",
          traveldate: "",
          error: { dataError: "" },
        });
        alert("Data submitted successfully");
      }
    };

    const handleDropDown = () => {
      setDropDown(!dropDown);
    };
    const decrementAdult = () => {
    if(adultValue<=0){
     setAdultValue(0)
    }
    else{
     setAdultValue(adultValue - 1);
    }
    };
  
    const incrementAdult = () => {
     setAdultValue(adultValue + 1);
   };
    const decrementChild = () => {
     if(childValue<=0){
        setChildValue(0)
     }
     else{
        setChildValue(childValue - 1);
     }
     
   };
   const incrementChild = () => {
     setChildValue(childValue + 1);
   };
  
   const decrementInfants = () => {
     if(infantValue<=0){
        setInfantValue(0)
     }
     else{
        setInfantValue(infantValue - 1);
  
     }
   };
  
   const incrementInfants = () => {
     setInfantValue(infantValue + 1);
   };

   const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setSubmit((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
    setIsDropdownVisible(true);
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(async () => {
      if (name === "flyingfrom") {
        const results = await fetchSuggestions(value);
        setFromResults(results);
      } else if (name === "flyingto") {
        const results = await fetchSuggestions(value);
        setToResults(results);
      }
    }, 2000);
  };

  const fetchSuggestions = async (query: string) => {
    try {
      const result = await axios.get("http://localhost:3000/home");
      const filtered = result.data.users.filter((user: { code: string }) =>
        user.code.toLowerCase().includes(query.toLowerCase())
      );
      return filtered;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  return (
    <div>
        {/* <section className="HomeBanner mb-5">
        <div className="bannerBooking">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-9 col-xl-10 col-lg-11">
                <div className="bookingLayer">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="search-icon-bg">
                          <span className="locateIcon">
                            <MapPin />
                          </span>
                        </div>
                        <div className="banner-select">
                          <p className="innerTextInfo mb-0">Flying from</p>
                          <div className="nice-select">
                            <span onClick={() => setIsView(!isView)}>
                              Select Location{" "}
                              {isView === false ? (
                                <ChevronUp className="mx-2" />
                              ) : (
                                <ChevronDown className="mx-2" />
                              )}
                            </span>
                            {isView && (
                              <ul className="countryList">
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Australia
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Portugal
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Maldives
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    India
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="search-icon-bg">
                          <span className="locateIcon">
                            <MapPin />
                          </span>
                        </div>
                        <div className="banner-select">
                          <p className="innerTextInfo mb-0">Flying to</p>
                          <div className="nice-select">
                            <span onClick={() => setIsShow(!isShow)}>
                              Select Location{" "}
                              {isShow === false ? (
                                <ChevronUp className="mx-2" />
                              ) : (
                                <ChevronDown className="mx-2" />
                              )}
                            </span>
                            {isShow && (
                              <ul className="countryList">
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Australia
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Portugal
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Maldives
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    India
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="banner-select">
                          <p className="innerTextInfo mb-0">Duration</p>
                          <div className="date-picker-container">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              open={isOpen}
                              onInputClick={() => setIsOpen(!isOpen)}
                              className="date-input"
                            />
                            <CalendarDays className="calendar-icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <button type="submit" className="boxWrapper">
                        <Search
                          style={{
                            color: "#ffffff",
                            fontSize: "10px",
                            width: "20px",
                          }}
                        />
                        <span className="searchText">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="bannerBooking">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-9 col-xl-10 col-lg-11">
                <div className="bookingLayer">
                  <form
                    action="/action.php"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                          <div className="search-icon-bg">
                            <span className="locateIcon">
                              <MapPin />
                            </span>
                          </div>
                          <div className="banner-select">
                            <p className="innerTextInfo mb-2">Flying from</p>
                            <div className="nice-select">
                              <input
                                type="search"
                                name="flyingfrom"
                                placeholder="Flying from"
                                value={submit.flyingfrom}
                                onChange={handleChange}
                                id="flyingfrom"
                                className="border-0"
                              />
                              {fromResults.length > 0 && (
                                <SearchResult
                                  result={fromResults}
                                  setSubmit={setSubmit}
                                  fieldName="flyingfrom"
                                  setIsDropdownVisible={setIsDropdownVisible}
                                  isDropdownVisible={isDropdownVisible}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                          <div className="search-icon-bg">
                            <span className="locateIcon">
                              <MapPin />
                            </span>
                          </div>
                          <div className="banner-select">
                            <p className="innerTextInfo mb-2">Flying to</p>
                            <div className="nice-select">
                              <input
                                type="search"
                                name="flyingto"
                                placeholder="Flying to"
                                value={submit.flyingto}
                                onChange={handleChange}
                                id="flyingto"
                                className="border-0"
                              />
                              {toResults.length > 0 && (
                                <SearchResult
                                  result={toResults}
                                  setSubmit={setSubmit}
                                  fieldName="flyingto"
                                  setIsDropdownVisible={setIsDropdownVisible}
                                  isDropdownVisible={isDropdownVisible}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bookingLayerTwo">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center justify-content-center gap-3">
                            <div className="banner-select">
                              <p className="innerTextInfo calenderText mb-2">
                                Duration
                              </p>
                              <div className="date-picker-container">
                                <DatePicker
                                  selected={startDate}
                                  placeholderText="Enter Date"
                                  onChange={(date) => {
                                    setStartDate(date);
                                  }}
                                  open={isOpen}
                                  onInputClick={() => setIsOpen(!isOpen)}
                                  className="date-input p-2"
                                />
                                <CalendarDays className="calendar-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center justify-content-center gap-3">
                            <div className="banner-select">
                              <p className="innerTextInfo passengerText mb-2">
                                Passenger, Economy
                              </p>
                              <div
                                className="bookingDropdown"
                                onClick={handleDropDown}
                              >
                                <p> 4 Passenger, Economy </p>{" "}
                                <p>
                                  <FaAngleDown />
                                </p>
                              </div>
                              {dropDown && (
                                <div className="bookingDropdownItem">
                                  <div className="dropDownMenu">
                                    <span className="sign" onClick={decrementAdult}>
                                      -
                                    </span>
                                    <span className="dropDownMenuText">
                                      {/* <h4 className="totalPerson">{adultValue}</h4> */}
                                      <p>Adult(12years or above)</p>
                                    </span>
                                    <span className="sign" onClick={incrementAdult}>+</span>
                                  </div>
                                  <div className="dropDownMenu">
                                    <span className="sign" onClick={decrementChild}>-</span>
                                    <span className="dropDownMenuText">
                                      {/* <h4 className="totalPerson">{childValue}</h4> */}
                                      <p> Children (2-11 yrs)</p>
                                    </span>
                                    <span className="sign" onClick={incrementChild}>+</span>
                                  </div>
                                  <div className="dropDownMenu">
                                    <span className="sign" onClick={decrementInfants}>-</span>
                                    <span className="dropDownMenuText">
                                      {/* <h4 className="totalPerson">{infantValue}</h4>  */}
                                      <p>Infants (below 2yrs)</p>
                                    </span>
                                    <span className="sign" onClick={incrementInfants}>+</span>
                                  </div>
                                </div>
                              )}
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <button type="submit" className="boxWrapper">
                          <Search
                            style={{
                              color: "#ffffff",
                              fontSize: "10px",
                              width: "20px",
                            }}
                          />
                          <span className="searchText">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard

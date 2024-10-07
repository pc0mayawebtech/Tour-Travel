import { popularRoute } from '../../constant/trainpopularroutemain'
import Dashboard from '../../shared-components/Dashboard'
import Footer from '../../shared-components/footer'
import Header from '../../shared-components/header'
import Wheretogoprop from '../Train/wheretogoprop'
import './index.css'
const Buses = () => {
  return (
    <div>
      <Header/>
      <div className="busBanner">
      </div>
      <Dashboard/>
      <section className="whereToGo container">
        <div className="whereToGoHeading">
          <p>Where to go</p>
        </div>
        <div className="row">
          <Wheretogoprop
            image="\Images\Train\wheretogo\wheretogo1.jpg"
            place="Bangkok → Pattaya"
            price={405}
          />
          <Wheretogoprop
            image="\Images\Train\wheretogo\wheretogo2.jpg"
            place="Bangkok → Pattaya"
            price={405}
          />
          <Wheretogoprop
            image="\Images\Train\wheretogo\wheretogo3.jpg"
            place="Bangkok → Pattaya"
            price={405}
          />
          <Wheretogoprop
            image="\Images\Train\wheretogo\wheretogo4.jpg"
            place="Bangkok → Pattaya"
            price={405}
          />
        </div>
      </section>
      <section>
      {
        popularRoute.map((item)=>{
              return       <section className="popularRoutes container">
              <p>Popular Routes in {item.name}</p>
              <div className="underline"></div>
              <div className="popularRoutesContent">
                <ul>
                  {item.dataname.map((item) => {
                    return (
                      <li key={item.id} className="popularRoutesLi">
                        {item.routeName}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {item.dataname2.map((item) => {
                    return (
                      <li key={item.id} className="popularRoutesLi">
                        {item.routeName}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {item.dataname.map((item) => {
                    return (
                      <li key={item.id} className="popularRoutesLi">
                        {item.routeName}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {item.dataname2.map((item) => {
                    return (
                      <li key={item.id} className="popularRoutesLi">
                        {item.routeName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
        })
      }
      </section>
      <Footer/>
    </div>
  )
}

export default Buses

function Banner()
{
    return(
        <div className="py-3 banner">
          <div className="row banner-card container m-auto py-4 px-0">
            <div className="col">
                <div className="row p-4"><img className="banner-img" src="https://www.adroll.com/assets/img/homepage/logo-volcanica.png?format=png&auto=webp&width=150&dpr=1.5" alt="image" /></div>
                <div className="row p-4"><p>Since last year, our revenue has increased 191%, our attributed conversions 177%, and our engagement 33%. We’re reaching and converting customers higher in the funnel."</p></div>
            </div>
            <div className="col p-5 banner-content px-0"><p className="p-5">AdRoll customers make <br/><span>$165B</span><br/> in sales every year</p></div>
          </div>
          <div className="container d-flex justify-content-center p-5 icons">
               <img src="https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg" alt="img" />
               <img src="https://images.g2crowd.com/uploads/report_medal/image/1004327/medal.svg" alt="img" />
               <img src="https://images.g2crowd.com/uploads/report_medal/image/1004364/medal.svg" alt="img" />
               <img src="https://images.g2crowd.com/uploads/report_medal/image/1004321/medal.svg" alt="img" />
               <img src="https://images.g2crowd.com/uploads/report_medal/image/1004342/medal.svg" alt="img" />
          </div>
          <div className="banner-row p-5">
            <div className="d-flex justify-content-center p-3"><h3>Increase ROI. Learn from your data.<br/> Maximize sales.</h3></div>
            <div className="container-fluid d-flex justify-content-center p-3">
              <a className='badge badge-one py-3 px-4' href="https://www.adroll.com/pricing">GET STARTED</a>
              <a className='badge badge-two py-3 px-4' href="https://www.adroll.com/pricing">GET IN TOUCH</a>
            </div>
          </div>
        </div>
    )
}

export default Banner;
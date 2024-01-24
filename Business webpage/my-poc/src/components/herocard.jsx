function Herocard()
{
    return(
    <div className='cards row py-4 m-0 herocard'>   
        <div className="col-lg-6 p-5">
           <h3 className='card-title py-2'>Smaller budgets need smarter dollars</h3>
           <p className='card-desc py-2'>Create, manage, and analyze your display, Facebook, Instagram, Pinterest, TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>
           <a className='badge badge-one py-3 px-4' href="https://www.adroll.com/pricing">GET STARTED</a>
           <a className='badge badge-two py-3 px-4' href="https://www.adroll.com/pricing">GET IN TOUCH</a>
        </div>
        <div className="col-lg-6 d-flex justify-content-center cardimg-hero">
           <img className='card-img-hero p-3' src="https://www.adroll.com/assets/img/homepage/hero-machine.png?format=jpg&auto=webp&width=576&dpr=1.5" alt={"imageone"} />
        </div>
    </div>)
}



export default Herocard;
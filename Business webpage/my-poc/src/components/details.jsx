function Details(props)
{
    const id  = props.Id;
    console.log(id);
    return(
    <div className='cards row container-fluid p-4 m-auto'>
        <div className="col-lg-6 d-flex justify-content-center img-card">
           <img className='card-img p-3' src={props.imageUrl} alt={props.alt} />
        </div>   
        <div className="col-lg-6 p-5">
           <h3 className='card-title py-2'>{props.title}</h3>
           <p className='card-desc py-2'>{props.description}</p>
           <a className='card-txtlink py-2' href="#">{props.linkText}</a>
           {id===4 && <div><a className='card-txtlink py-2' href="#">{props.linkText1}</a></div>}
        </div>
        {id === 1 &&
        <div className="row container imagestrip">
              <div className="col-lg-2"><img src={props.strpimg1} alt="" /></div>
              <div className="col-lg-2"><img src={props.strpimg2} alt="" /></div>
              <div className="col-lg-2"><img src={props.strpimg3} alt="" /></div>
              <div className="col-lg-2"><img src={props.strpimg4} alt="" /></div>
              <div className="col-lg-2"><img src={props.strpimg5} alt="" /></div>
              <div className="col-lg-2"><img src={props.strpimg6} alt="" /></div>
        </div>
       }
    </div>)
}

export default Details;
import Details from './details';
import Data from './script.json'

function Card()
{
    return(
        <>
          {Data.map((x)=><Details key={x.id} Id={x.id} title={x.title} imageUrl={x.imageUrl} description={x.description} 
          linkText={x.linkText} linkText1={x.linkText1} alt={x.alt} strpimg1={x.strpimg1} strpimg2={x.strpimg2} strpimg3={x.strpimg3} 
          strpimg4={x.strpimg4} strpimg5={x.strpimg5} strpimg6={x.strpimg6}/>)}
        </>
    )
}

export default Card;
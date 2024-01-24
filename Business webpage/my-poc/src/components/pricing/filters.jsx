import React,{useEffect, useState} from 'react';
import {items} from './items';
import './styles.css'

function Multifilters()
{
    const [selectedFilters,setSelectedFilters] = useState([]);
    const [filteredItems,setFilteredItems] = useState(items);

    let filters = ["monthly" , "quarterly" , "half-yearly" ,"annually"];

    const handleFilterButtonClick = (selectedCategory)=>
    {
        if(selectedFilters.includes(selectedCategory))
        {
            let filters = selectedFilters.filter((el)=>el!== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters,selectedCategory]);
        }
    };

    
    useEffect(() => {
        const filterItems=() =>
    {
        if(selectedFilters.length>0){
          let tempItems = selectedFilters.map ((selectedCategory)=>{
            let temp = items.filter((item)=>item.category === selectedCategory);
            return temp;
          });
          setFilteredItems(tempItems.flat());
        }
        else{
            setFilteredItems([...items]);
        }
    };
    filterItems();
      }, [selectedFilters]);

    return(
        <div className='container-fluid container-filter'>
            <div className='buttons-container'>
                {filters.map((category,idx)=>(
                    <button onClick={()=>handleFilterButtonClick(category)} 
                    className={`button cst-btn ${selectedFilters?.includes(category)?"active":""}`}
                    key={`filters-${idx}`}>
                        {category}
                    </button>
                ))}
            </div>

            <div className='items-container'>
                {filteredItems.map((item,idx)=>(
                    <div key ={`items-${idx}`} className='item'>
                        <p className='item-name py-2'>{item.name}</p>
                        <p className='descriptions'>{item.titledesc}</p>
                        <p className='descriptions'>{item.description}</p>
                        <button className='btn'>{item.linktxt}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Multifilters;
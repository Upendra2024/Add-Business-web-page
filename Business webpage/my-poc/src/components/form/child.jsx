import React, { useState } from 'react';

function Child({ onformSubmit }) {
    const [formData, setFormData] = useState({ field1: '', field2: '', field3: '' ,field4: '' ,field5: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onformSubmit(formData);
        setFormData({ field1: '', field2: '', field3: '' ,field4: '' ,field5: ''});
    };

    return (
        <div className='container-fluid p-5'>
            <h2 className='text-center p-2'>Contact us</h2>
            <div className='m-auto w-75'>
            <div className='p-2'>
                <label>
                    First name:
                </label>
                <input
                    type="text"
                    name="field1"
                    value={formData.field1}
                    onChange={handleChange}
                    className='w-75'
                />
            </div>
            <div className='p-2'>
                <label>
                    Last name:
                </label>
                <input
                    type="text"
                    name="field2"
                    value={formData.field2}
                    onChange={handleChange}
                    className='w-75'
                />
            </div>
            <div className='p-2'>
                <label>
                    Date of birth:
                </label>
                <input
                    type="date"
                    name="field3"
                    value={formData.field3}
                    onChange={handleChange}
                    className='w-25'
                />
            </div>
            <div className='p-2'>
                <label>
                    Email:
                </label>
                <input
                    type="email"
                    name="field4"
                    value={formData.field4}
                    onChange={handleChange}
                    className='w-75'
                />
            </div>
            <div className='p-2'>
                <label>
                    Mobile no:
                </label>
                <input
                    type="tel"
                    name="field5"
                    value={formData.field5}
                    onChange={handleChange}
                    className='w-25'
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                />
            </div>
            <div className='p-2'>
            <button onClick={handleSubmit}>Submit</button>
            </div>
            </div>  
        </div>
    );
}

export default Child;
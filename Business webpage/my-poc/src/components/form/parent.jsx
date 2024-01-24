import React, { useState } from 'react';
import Child from './child';
import './fstyles.css'

function Parent() {
  const [tableData, setTableData] = useState([]);

  const handleFormData = (data) => {
    setTableData((prevData) => [...prevData, data]);
  };

  return (
    <div className='custom-form p-5'>
      <Child onformSubmit={handleFormData} />
      {tableData.length > 0 && (
        <div>
          <h2 className='head text-center'>Submitted Information</h2>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Date of birth</th>
                <th>Email</th>
                <th>Mobile no</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.field1}</td>
                  <td>{data.field2}</td>
                  <td>{data.field3}</td>
                  <td>{data.field4}</td>
                  <td>{data.field5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Parent;
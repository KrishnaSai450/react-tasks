

import React from 'react'

function TableComponent({rowData=[]}) {
  return (
    <table className="table table-striped">
    <thead>
      <tr>
        <th>UserName</th>
        <th>Password</th>
        
      </tr>
    </thead>
    <tbody>


      {
        rowData.map(eachRow=>{
            return(
                <tr>
        <td>{eachRow.data1}</td>
        <td>{eachRow.data2}</td>
      </tr>

            )
        })
      }
     
    </tbody>
  </table>
  
  )
}

export default TableComponent
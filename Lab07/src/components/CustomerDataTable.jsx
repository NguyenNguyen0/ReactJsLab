import { useState } from 'react'
import avatar from '../assets/imgs/Avatar 313.png'


import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
 
DataTable.use(DT);

function CustomerDataTable() {
  const [tableData, setTableData] = useState([
    [
      null,
      "Johny Sin",
      "Endivia",
      "123,12",
      Date.now().toLocaleString(),
      "new",
      null
    ]
  ])
  return (
    <DataTable data={tableData} className='display' >
      <thead>
        <tr>
          <th>
            {/* select button */}
            <input className='mx-auto block' type="checkbox" name="" id="" />
          </th>
          <th>Customer Name</th>
          <th>Company</th>
          <th>Order Value</th>
          <th>Order Date</th>
          <th>Status</th>
          <th>{/* edit customer info */}</th>
        </tr>
      </thead>
    </DataTable>
  )
}

export default CustomerDataTable

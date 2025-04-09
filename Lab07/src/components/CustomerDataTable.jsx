import { useEffect, useState } from 'react'
import avatar from '../assets/imgs/Avatar 313.png'
import { FiEdit2 } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const customersData = [
  { id: 1, avatar: avatar, name: 'John Doe', company: 'Acme Corp', orderValue: 100, orderDate: '2023-01-01', status: 'In-progress' },
  { id: 2, avatar: avatar, name: 'Jane Smith', company: 'Tech Inc', orderValue: 200, orderDate: '2023-02-01', status: 'New' },
  { id: 3, avatar: avatar, name: 'Bob Johnson', company: 'Web Solutions', orderValue: 150, orderDate: '2023-03-01', status: 'Completed' },
  { id: 4, avatar: avatar, name: 'Alice Brown', company: 'Design Studio', orderValue: 250, orderDate: '2023-04-01', status: 'New' },
  { id: 5, avatar: avatar, name: 'Charlie Green', company: 'Marketing Agency', orderValue: 300, orderDate: '2023-05-01', status: 'In-progress' },
  { id: 6, avatar: avatar, name: 'Diana Prince', company: 'Finance Co', orderValue: 400, orderDate: '2023-06-01', status: 'New' },
  { id: 7, avatar: avatar, name: 'Ethan Hunt', company: 'Security Services', orderValue: 350, orderDate: '2023-07-01', status: 'Completed' },
  { id: 8, avatar: avatar, name: 'Fiona Apple', company: 'Music Label', orderValue: 450, orderDate: '2023-08-01', status: 'New' },
  { id: 9, avatar: avatar, name: 'George Clooney', company: 'Film Production', orderValue: 500, orderDate: '2023-09-01', status: 'In-progress' },
  { id: 10, avatar: avatar, name: 'Hannah Montana', company: 'Entertainment Co', orderValue: 600, orderDate: '2023-10-01', status: 'New' }
]

const statuses = ['New', 'Completed', 'In-progress']

function CustomerDataTable() {
  const [customers, setCustomers] = useState(customersData);

  useEffect(() => {
    fetch('https://67e0fc4258cc6bf78523ac77.mockapi.io/book')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomers(data.map(customer => ({...customer, status: statuses[Math.floor(Math.random() * 3)]})))
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <table className="table table-striped table-bordered table-hover w-full text-center border-collapse rounded-xl overflow-hidden shadow shadow-slate-500/50">
        <thead>
          <tr className="bg-gray-300/20">
            <th className="p-3">
              <input className="w-5 h-5" type="checkbox" />
            </th>
            <th className="p-3 text-xl uppercase">Customer Name</th>
            <th className="p-3 text-xl uppercase">Company</th>
            <th className="p-3 text-xl uppercase">Order Value</th>
            <th className="p-3 text-xl uppercase">Order Date</th>
            <th className="p-3 text-xl uppercase">Status</th>
            <th className="p-3 text-xl uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td className="p-3">
                <input className="w-5 h-5" type="checkbox" />
              </td>
              <td className="p-3 flex items-center gap-2">
                <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full ml-14" />
                {customer.name}
              </td>
              <td className="p-3 text-left">{customer.company}</td>
              <td className="p-3">${customer.orderValue}</td>
              <td className="p-3">{customer.orderDate}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded-full ${
                  customer.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : customer.status === 'New'
                      ? 'bg-blue-100 text-blue-800'
                      : customer.status === 'In-progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : ''
                  }`}>
                  {customer.status}
                </span>
              </td>
              <td className="p-3">
                <button className='text-slate-600 cursor-pointer hover:text-slate-900 text-xl'>
                  <FiEdit2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='flex justify-between items-center mt-10'>
        <span className='text-slate-500'>{customers.length} results</span>

        <div className='flex gap-2'>
          <button className='hover:bg-slate-300 text-slate-600 hover:rounded-full p-2 px-3'>
            <FaAngleLeft />
          </button>
          {[1, 2, 3, 4].map(page => (
            <button key={page} className={`hover:bg-primary/50 text-slate-600 rounded-full py-2 px-4 ${1 === page ? 'bg-primary text-white' : ''}`}>
              {page}
            </button>
          ))}
          <span className='py-2 px-4'>...</span>
          {[10, 11].map(page => (
            <button key={page} className={`hover:bg-primary/50 text-slate-600 rounded-full py-2 px-4 ${1 === page ? 'bg-primary text-white' : ''}`}>
              {page}
            </button>
          ))}
          <button className='hover:bg-slate-300 text-slate-600 hover:rounded-full py-2 px-3'>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerDataTable

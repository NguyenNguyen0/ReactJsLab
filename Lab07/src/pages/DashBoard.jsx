import React from 'react'
import bell from '../assets/imgs/Bell 1.png'
import help from '../assets/imgs/Question 1.png'
import avatar from '../assets/imgs/Avatar 313.png'

import dashboard from '../assets/imgs/dashboard.png'
import cart from '../assets/imgs/Button 1509.png'
import purchase from '../assets/imgs/Button 1529.png'
import person from '../assets/imgs/Button 1530.png'
import fileText from '../assets/imgs/File text 1.png'

import CustomerDataTable from '../components/CustomerDataTable'

function DashBoard() {
  return (
    <main>
      <header className='flex items-center justify-between'>
        <h1 className='text-primary font-bold text-3xl'>Dashboard</h1>

        <div className='relative'>
          {/* <img className='absolute' src="" alt="" /> */}
          <input className='bg-gray-100 outline-0 h-full py-1 px-2 my-1 rounded-2xl' placeholder='Search...' type="text" />
        </div>

        <div className='flex items-center'>
          <button>
            <img src={bell} alt="" />
          </button>
          <button className='mx-4'>
            <img src={help} alt="" />
          </button>
          <img src={avatar} alt="" />
        </div>
      </header>

      <section className=''>
        <div>
          <h1 className='my-6 text-gray-900 font-bold text-2xl flex items-center'>
            <img className='mr-2' src={dashboard} alt="" />
            <span>Overview</span>
          </h1>

          {/* Statistic */}
          <div className='grid grid-cols-3 gap-4 items-center justify-between'>
            <div className='rounded bg-pink-100 px-5 py-4 relative'>
              <button className='absolute top-5 right-5'>
                <img src={cart} alt="" />
              </button>
              <h1 className='text-2xl text-gray-800 font-bold'>Turnover</h1>
              <h2 className='text-4xl text-gray-800 my-5 font-bold'>$92,405</h2>
              <p>
                <span className='text-green-700 font-bold mr-2'>5.39%</span>
                <span className='text-gray-800'>period of change</span>
              </p>
            </div>
            <div className='rounded bg-green-100 px-5 py-4 relative'>
              <button className='absolute top-5 right-5'>
                <img src={purchase} alt="" />
              </button>
              <h1 className='text-2xl text-gray-800 font-bold'>Profit</h1>
              <h2 className='text-4xl text-gray-800 my-5 font-bold'>$32,405</h2>
              <p>
                <span className='text-green-700 font-bold mr-2'>5.39%</span>
                <span className='text-gray-800'>period of change</span>
              </p>
            </div>
            <div className='rounded bg-green-100 px-5 py-4 relative'>
              <button className='absolute top-5 right-5'>
                <img src={person} alt="" />
              </button>
              <h1 className='text-2xl text-gray-800 font-bold'>New customer</h1>
              <h2 className='text-4xl text-gray-800 my-5 font-bold'>298</h2>
              <p>
                <span className='text-green-700 font-bold mr-2'>6.39%</span>
                <span className='text-gray-800'>period of change</span>
              </p>
            </div>
          </div>

          {/* Table */}
          <div className='mt-6'>
            <div className='flex items-center justify-between'>
              <h1 className='my-6 text-gray-900 font-bold text-2xl flex items-center'>
                <img className='mr-2' src={fileText} alt="" />
                <span>Detailed report</span>
              </h1>

              <div>
                <button className='p-2 border border-primary text-primary rounded mx-2' >Import</button>
                <button className='p-2 border border-primary text-primary rounded mx-2' >Export</button>
              </div>
            </div>

            <div>
              <CustomerDataTable />
            </div>

          </div>
        </div>
      </section>


    </main>
  )
}

export default DashBoard

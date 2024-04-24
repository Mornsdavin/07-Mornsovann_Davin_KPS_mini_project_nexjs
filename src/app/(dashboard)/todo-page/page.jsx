import React from 'react'
import Image from 'next/image'

const TodoPage = async () => {
    return (
        <div>
            <div className='bg-orange-300 h-42 p-3 m-5 rounded-xl flex'>
                <div className='w-32 h-32 bg-white rounded-xl '>
                    <div className='text-center'>
                        <p className='text-3xl font-bold text-red-600 pt-4'>Wed</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-5xl font-semibold'>17</p>
                    </div>
                </div>
                <div className='w-96 ml-10'>
                    <p className='text-2xl font-bold mt-3'>Slack Integration</p>
                    <p className='mt-2'>Add a field in the portal to let the user connect their Slack account.</p>
                </div>
                <button className='bg-white w-28 h-10 rounded-xl ml-24 mt-20'>Checking</button>
            </div>

        </div>
    )
}

export default TodoPage
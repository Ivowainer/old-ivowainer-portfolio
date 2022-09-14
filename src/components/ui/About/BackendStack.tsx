import React from 'react'
import CardStack from '../CardStack'

const BackendStack = () => {
  return (
    <div>
        <p className="py-3 bg-gray-200 text-gray-500 font-bold rounded-t-lg text-center">Back-End Stack</p>
        <div className="grid gap-2 mt-2 grid-cols-6 text-4xl">
            <CardStack icon={<i className="devicon-mongodb-plain colored"></i>} />
            <CardStack icon={<i className="devicon-nodejs-plain colored"></i>} />
            <CardStack className='col-start-3 col-end-5 text-6xl px-1 py-1' icon={<i className="devicon-express-original-wordmark colored"></i>} />
            <CardStack icon={<i className="devicon-firebase-plain colored"></i>} />
            <CardStack icon={<i className="devicon-mysql-plain colored"></i>} />
            <CardStack icon={<i className="devicon-php-plain colored"></i>} />
        </div>
    </div>
  )
}

export default BackendStack
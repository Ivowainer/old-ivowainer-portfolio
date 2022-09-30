import React from 'react'
import CardStack from './CardStack'

const BackendStack = () => {
  return (
    <div>
        <p className="py-3 dark:bg-gray-600 dark:text-gray-200 bg-gray-200 text-gray-500 font-bold rounded-t-lg text-center">Back-End Stack</p>
        <div className="grid gap-2 mt-2 grid-cols-2 lg:grid-cols-6 text-4xl">
            <CardStack icon={<i className="devicon-mongodb-plain colored"></i>} />
            <CardStack icon={<i className="devicon-nodejs-plain colored"></i>} />
            <CardStack className='dark:hidden col-start-1 col-end-2 lg:col-start-3 lg:col-end-5 text-6xl px-1 py-1' icon={<i className="devicon-express-original-wordmark colored"></i>} />
            <CardStack className='dark:grid hidden dark:col-start-1 dark:col-end-2 dark:lg:col-start-3 dark:lg:col-end-5 dark:text-6xl dark:px-1 dark:py-1' icon={<i className="devicon-express-original-wordmark "></i>} />
            <CardStack icon={<i className="devicon-firebase-plain colored"></i>} />
            <CardStack icon={<i className="devicon-mysql-plain colored"></i>} />
            <CardStack icon={<i className="devicon-php-plain colored"></i>} />
        </div>
    </div>
  )
}

export default BackendStack
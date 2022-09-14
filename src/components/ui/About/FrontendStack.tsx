import CardStack from '../CardStack'

const FrontendStack = () => {
  return (
    <div>
        <p className="py-3 bg-gray-200 text-gray-500 font-bold rounded-t-lg text-center">Front-End Stack</p>
        <div className="grid gap-2 mt-2 grid-cols-6 text-4xl">
            <CardStack icon={<i className="devicon-javascript-plain colored"></i>} />
            <CardStack icon={<i className="devicon-react-original colored"></i>} />
            <CardStack icon={<i className="devicon-tailwindcss-plain colored"></i>} />
            <CardStack icon={<i className="devicon-typescript-plain colored"></i>} />
            <CardStack icon={<i className="devicon-html5-plain colored"></i>} />
            <CardStack icon={<i className="devicon-sass-original colored"></i>} />
            <CardStack className="col-start-1 col-end-4" icon={<i className="devicon-nextjs-line colored"></i>} />
            <CardStack icon={<i className="devicon-css3-plain colored"></i>} />
            <CardStack icon={<i className="devicon-git-plain colored"></i>} />
        </div>
    </div>
  )
}

export default FrontendStack
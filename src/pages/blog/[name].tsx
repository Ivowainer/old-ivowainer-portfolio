import { GetServerSideProps } from "next"
import MainLayout from "../../components/layout/MainLayout"
import getBlog from "../../helpers/getBlog"
import { blogPropsUnique } from '../../types/BlogTypes';

import MarkdownIt from "markdown-it";

const NamePost = ({ post }: blogPropsUnique) => {

  const md = new MarkdownIt()
  const htmlContent = md.render(post.attributes.content)

  console.log(htmlContent)

  return (
    <MainLayout pageName={`${post.attributes.Title}`}>
      <div className="px-20 py-10 flex flex-col gap-3">
        <h1 className="text-4xl text-gray-200 font-bold">{post.attributes.Title}</h1>
        <section dangerouslySetInnerHTML={{__html: htmlContent}}></section>
      </div>
    </MainLayout>
  )
}

export default NamePost

export const getServerSideProps: GetServerSideProps  = async ({ params }) => {

  const { name } = params as { name: string }

  const { data: { data } } = await getBlog(`posts?filters[title][$eq]=${name}`)

  return {
    props: {
      post: data[0]
    }
  }
}
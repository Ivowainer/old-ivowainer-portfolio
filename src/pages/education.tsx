import MainLayout from "../components/layout/MainLayout"
import BookMark from "../components/ui/BookMark"

const education = () => {
  return (
    <MainLayout pageName="Education">
      <div className="flex">
        <div className="flex flex-col">
          <BookMark text="Sample"/>
          <BookMark text="text"/>
          <BookMark text="TEXT"/>
        </div>
      </div>
    </MainLayout>
  )
}

export default education
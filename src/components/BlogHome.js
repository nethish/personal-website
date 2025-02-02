import Search from '../components/Search'
import BlogList from '../components/BlogList'

export default function BlogHome(props) {

    return <div className="flex flex-col w-full">
        <div className="font-extrabold text-4xl text-center mb-10">All Posts</div>
        <Search/>
        <div className="border-b-4 border-gray-500 w-full"></div>
        <BlogList contents={props.contents}/>
    </div>
}
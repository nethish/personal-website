import BlogComponent from '../../components/Blog'

const markdown = "# Hello there"

export default function Blog(props) {
    let name = props.name

    return <div className="border-red-500 border-4 w-3/4 h-full justify-self-center"> 
        <BlogComponent content={markdown}/>
    </div>
}
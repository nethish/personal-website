import Markdown from 'react-markdown'


// A blog should have title, and content
export default function Blog(props) {
    return <div className="">
        <Markdown>{props.content}</Markdown>
    </div>
}
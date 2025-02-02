import BlogPanel from './BlogPanel'

export default function BlogList(props) {
    let body = []
    console.log("C", props, props.contents)
    props.contents.forEach(element => {
        body.push(<BlogPanel blog={element}></BlogPanel>)
    });

    return <div className="">{body}</div>
}
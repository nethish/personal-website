/**
 * The blog consists of below structure
 * {
 *      "title": "The title of the blog".
 *      "shortDesc": "A short description about the blog."
 * }
 */

export default function BlogPanel(props) {
    return <div className="flex flex-col m-16 ml-10">
        <div className="text-2xl font-extrabold mt-4">{props.blog.title}</div>
        <div>{props.blog.shortDesc}</div>        
    </div>
}
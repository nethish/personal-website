import BlogHomeComponent from '../../components/BlogHome'
import Contents from '../../data'

export default function BlogHome() {
    return <div className='flex h-full w-3/4 justify-self-center'>
            <BlogHomeComponent contents={ Contents } />
        </div>
}
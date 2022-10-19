import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataStore } from '@aws-amplify/datastore'

import { Post } from '../models'

export default function PostList () {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const models = await DataStore.query(Post)
      setPosts(models)
    }
    getData()
  }, [])

  return (
    <div className='tile is-ancestor'>
      {posts.map(post => (
        <div className='tile is-parent' key={post.id}>
          <section className='tile is-child notification box is-info'>
            <Link to={`/post/${post.id}`}>
              <h2 className='title is-4'>{post.title}</h2>
            </Link>
            <p className='content'>{post.content.substring(0, 300)}...</p>
          </section>
        </div>
      ))}
    </div>
  )
}

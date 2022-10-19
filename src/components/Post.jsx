import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataStore } from '@aws-amplify/datastore'
import MarkdownContainer from './MarkdownContainer'
import CreateComment from './CreateComment'
import { Comment, Post } from '../models'

export default function PostContainer () {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [post, setPost] = useState({})

  useEffect(() => {
    const getData = async () => {
      const pagePost = await DataStore.query(Post, c => c.id('eq', id))
      setPost(pagePost[0])
      const postComments = await DataStore.query(Comment, c => c.postID('eq', id))
      setComments(postComments)
    }
    getData()
  }, [id])

  return (
    <div>
      <section>
        <h1 className='title is-4'>{post.title}</h1>
        <MarkdownContainer markdown={post.content} />
      </section>

      {comments.length > 0 &&
        <div className='section'>
          <h3 className='title is-4'>Comments</h3>
          {comments.map(comment => (
            <div key={comment.id} style={{ marginTop: '10px' }}>
              <p>{comment.text}</p>
              <b>{comment.author}</b>
            </div>))}
        </div>}

      <CreateComment postId={post.id} />
    </div>
  )
}

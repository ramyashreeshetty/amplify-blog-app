import { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Comment } from '../models'

export default function CreatePost ({ postId }) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await DataStore.save(
        new Comment(
          {
            author,
            text,
            email,
            postID: postId
          }
        )
      )

      setAuthor('')
      setText('')
      setEmail('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='section'>
      <h2 className='title is-4'>Create a Comment</h2>
      <div className='field'>
        <label className='label'>Text</label>
        <textarea className='textarea' type='text' onChange={e => setText(e.target.value)} value={text} />
      </div>
      <div className='field'>
        <label className='label' htmlFor='author'>Name</label>
        <input className='input' type='text' name='author' onChange={e => setAuthor(e.target.value)} value={author} />
      </div>
      <div className='field'>
        <label className='label' htmlFor='email'>email</label>
        <input className='input' type='text' name='email' onChange={e => setEmail(e.target.value)} value={email} />
      </div>

      <input className='button is-link' type='submit' value='create' />
    </form>
  )
}

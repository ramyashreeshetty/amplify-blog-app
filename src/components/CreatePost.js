import { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Post } from '../models'
// import { useHistory } from 'react-router-dom'

export default function CreatePost () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await DataStore.save(
      new Post(
        {
          title,
          content,
          tags: []
        }
      )
    )
    setTitle('')
    setContent('')

    // const history = useHistory()
    // history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label' htmlFor='title'>Title</label>
        <input className='input' type='text' name='title' onChange={e => setTitle(e.target.value)} />
      </div>
      <div className='field'>
        <label className='label'>Content</label>
        <textarea className='textarea' type='text' onChange={e => setContent(e.target.value)} />
      </div>
      <input className='button is-link' type='submit' value='create' />
    </form>
  )
}

import { useState, useRef } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Post } from '../models'
import { Paper, Button, TextField, Box } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useStyles from './CreatePostStyles';
import JoditEditor, {Jodit} from 'jodit-react';
// import { useHistory } from 'react-router-dom'

export default function CreatePost () {

  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('');
  const editor = useRef(null);

  const handleSubmit = async e => {
  const createdAt= new Date().toISOString();
    e.preventDefault()
    if(title === '' && content === ''){
      setMessage("Required field is empty!");
    }
    else{
      await DataStore.save(
        new Post(
          {
            title,
            content,
            comments: [],
            createdAt,
          }))
      setTitle('');
      setContent('');
      setMessage("Post Created!");
    }
    // const history = useHistory()
    // history.push('/')
  }

  return (
    <div className={classes.form}>
      <Paper className={mergeClasses.paper}>
          <div className={classes.formHead}>
            <h2 className={classes.formTitle}>Creating a post</h2>
            <Button onClick={handleSubmit} variant="contained" disableElevation className={classes.submitBtn}>Submit</Button>
          </div>
          <Box className={classes.boxAlign}>
            <TextField variant="outlined" label={"Title"} required fullWidth className={classes.title} onChange={e => setTitle(e.target.value)}/>
            {/* <TextField variant="outlined" label={"Content"} required multiline rows={10} className={classes.content}/> */}
            {/* <Editor className={classes.textEditor} toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName" 
            wrapperStyle={{ width: 'auto', border: "1px solid grey", marginTop: "3%",marginBottom: "6%" }} onEditorStateChange={editorStateChange}/> */}
            <div className={classes.textEditor}>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={newContent => setContent(newContent)}
            /></div>
        </Box>
      </Paper>
      <div style={{color:"#ed7311",marginTop:"3%"}}>{message}</div>
    </div>
  );
}

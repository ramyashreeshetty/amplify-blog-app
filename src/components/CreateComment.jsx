import { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { Comment } from '../models'
import { Box, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const font = "'Poppins', sans-serif";

const useStyles = makeStyles((theme) => ({
  form: {
    fontFamily: font,
  },
  formTitle: {
    color: "#ed7311",
    textAlign: 'left',
    marginLeft: "5%",
  },
  boxAlign: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: "5%",
    marginLeft: "5%",
  },
  title: {
    fontFamily: font,
    marginTop: "1%",
  },
  submitBtn: {
    backgroundColor: "#ed7311",
    color: "white",
    width: "20%",
    marginTop:"2%",
    marginRight:"5%",
    fontFamily: font,
    cursor: "pointer",
    '&:hover': {
      background: "#f2f3f3",
      color: "#ed7311",
    },
  },
}));


export default function CreatePost ({ postId }) {

  const classes = useStyles();

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
          }))
      setAuthor('')
      setText('')
      setEmail('')
      window.location.reload(false);

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={classes.form}>
      <h3 className={classes.formTitle}>Create Comment</h3>
      <Box className={classes.boxAlign}>
        <TextField variant="outlined" label={"Comment"} required multiline rows={5} className={classes.content} onChange={e => setText(e.target.value)}/>
        <TextField variant="outlined" label={"Name"} required fullWidth className={classes.title} onChange={e => setAuthor(e.target.value)}/>
        <TextField variant="outlined" label={"Email"} required className={classes.title} onChange={e => setEmail(e.target.value)} />
        <Button onClick={handleSubmit} variant="contained" disableElevation className={classes.submitBtn}>Comment</Button>
      </Box>
    </div>
  )
}

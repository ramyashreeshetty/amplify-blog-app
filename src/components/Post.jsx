import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataStore } from '@aws-amplify/datastore'
import CreateComment from './CreateComment'
import { Comment, Post } from '../models'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import ReactHtmlParser from 'react-html-parser';

const font = "'Poppins', sans-serif";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor:'white',
    margin:"2% 5% 2% 5%",
    padding:"1%",
  },
  paperA: {
    backgroundColor:'white',
    margin:"2% 5% 5% 5%",
    padding:"1%",
    width:"50%",
  },
  postTitle: {
    textDecoration: "none",
    color: "#ed7311",
    fontFamily: font,
    margin: 0,
    padding: 0,
    marginLeft: "1%",
    marginTop: "1%",
  },
  postContent: {
    marginLeft: "1%",
  },
  postDate:{
    fontFamily:font,
    fontSize:"9px",
    margin: 0,
    padding: 0,
    marginLeft: "1%",
    color:"#4E4E4E",
  },
  comTitle: {
    color: "#ed7311",
    textAlign: 'left',
    marginLeft: "5%",
  },
  section:{
    fontFamily: font,
  },
  commentText:{
    marginLeft: "5%",
    margin: 0,
    padding: 0,
  },
  commentAuthor:{
    marginLeft: "5%",
    margin: 0,
    padding: 0,
    fontSize: "9px",
  },
  hrTag:{
    marginLeft: "5%",
    marginRight: "5%",
  }


}));

export default function PostContainer () {

  const classes = useStyles();

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
      <Paper className={classes.paper} elevation={1}>
        <section className='tile is-child notification box is-info'>
          <h1 className={classes.postTitle}>{post.title}</h1>
          <p className={classes.postDate}>{format(new Date(), '| MMMM dd, yyyy, h:mm aaa')}</p>
          <p className={classes.postContent}>{ReactHtmlParser(post.content)}</p>
        </section>
      </Paper>

      <Paper className={classes.paperA} elevation={1}>
      {comments.length > 0 &&
        <div className={classes.section}>
          <h3 className={classes.comTitle}>Comments</h3>
          {comments.map(comment => (
            <div key={comment.id} style={{ marginTop: '10px' }}>
              <p className={classes.commentText}>{comment.text}</p>
              <p className={classes.commentAuthor}>-By {comment.author}</p>
              <hr className={classes.hrTag}/>
            </div>))}
        </div>}
      <CreateComment postId={post.id} />
      </Paper>
    </div>
  )
}

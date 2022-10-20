import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataStore } from '@aws-amplify/datastore'
import { Post } from '../models'
import { CardContent, Paper, Button, CardActions, Card, Typography, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Welcome from '../components/Welcome';
import { ArrowForwardIos } from '@material-ui/icons'

const font = "'Poppins', sans-serif";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor:'white',
    margin:"2% 5% 2% 5%",
    padding:"1%"
  },
  postTitle: {
    textDecoration: "none",
    color: "#ed7311",
    fontFamily: font,
    marginLeft: "1%",
  },
  postContent: {
    marginLeft: "1%",
  },
  blogPart:{
    display:"flex",
  },
  blogs:{
    flex:1
  },
  aboutCard:{
    width:"280px",
    margin:"2% 4% 2% 1%",
  },
  aboutHead:{
    backgroundColor:"#C2C2C2",
    color:"white",
    fontFamily:font,
    fontSize:"10px",
  },
  navBtn: {
    fontFamily: font,
    textDecoration: "none",
  },
  readBtn:{
    color: "#ed7311",
    cursor: "pointer",
    fontSize: "12px",
    margin: "2% 1% 1% 0%",
    borderColor:"#ed7311",
    '&:hover': {
      background: "#ed7311",
      color: "white",
    },
    }
  
}));


export default function PostList () {

  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const models = await DataStore.query(Post)
      setPosts(models)
    }
    getData()
  }, [])

  return (
    <>
    <Welcome />
    <div className={classes.blogPart}>
      <div className={classes.blogs}>
        {posts.map(post => (
          <div className='tile is-parent' key={post.id}>
            <Paper className={classes.paper} elevation={1}>
            <section className='tile is-child notification box is-info'>
              <h2 className={classes.postTitle}>{post.title}</h2>
              <p className={classes.postContent}>{post.content.substring(0, 300)}...</p>
              <Link to={`/post/${post.id}`} className={classes.postTitle}>
                <Button variant="outlined" endIcon={ <ArrowForwardIos />} size="small" className={classes.readBtn}>Read More</Button>
              </Link>
            </section>
            </Paper>
          </div>))}
        </div>

        <div className={classes.aboutCard}>
          <Card sx={{ minWidth: 100 }}>
            <CardHeader className={classes.aboutHead} title={ <Typography variant="h6">About Us</Typography>} sx={{fontFamily:font, size:"12px",}} ></CardHeader>
            <CardContent>
              <Typography paragraph>
                This application is built using ReactJs and AWS Amplify. It consists of awesome blogs related AWS Amplify. You can check out repo for the more details!
              </Typography>
            </CardContent>
            <CardActions>
            <a href='https://github.com/ramyashreeshetty/amplify-blog-application' className={classes.navBtn}>
              <Button size="small">Learn More</Button>
            </a>
            </CardActions>
        </Card>
        </div>

      </div>
    </>
  );
}

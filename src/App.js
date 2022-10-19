import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreatePost from './components/CreatePost'
import PostContainer from './components/Post'
import NavBar from './components/Navbar'
import PostList from './components/PostList'


//import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App () {
  return (
    <div className='section'>
      <div className='container'>
        <Router>
          <NavBar />
            <div className='section'>
              <Routes>
                <Route path='/new' element={<CreatePost />} />
                <Route path='/post/:id' element={<PostContainer />} />
                <Route path='/' exact element={<PostList />} />
              </Routes>
            </div>
        </Router>
      </div>
    </div>
  
  )
}

//export default withAuthenticator(App);
export default App;
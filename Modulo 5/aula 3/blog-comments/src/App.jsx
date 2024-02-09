import './App.css'
import HeaderContainer from './components/headerContainer'
import BannerPost from './components/bannerPost'
import AsidePost from './components/asidePost'
import Post from './components/postContainer'
import ComentsComponent from './components/comentsPost'
import CommentForm from './components/commentsForm'

function App() {
  

  return (
    <>
      <HeaderContainer />
      <BannerPost />
      <section className = 'post-section'>
      <AsidePost />
      <Post />
      </section>
      <section className="comments-section">
      <h3 className="comments-section-title">Comments</h3>      
        <ComentsComponent commenterAvatarId="commentarist-img" commenterName="John Something" />
        <ComentsComponent commenterAvatarId="author-img" commenterName="Malcolm X" />
        <CommentForm />
      </section>
    </>
  )
}

export default App

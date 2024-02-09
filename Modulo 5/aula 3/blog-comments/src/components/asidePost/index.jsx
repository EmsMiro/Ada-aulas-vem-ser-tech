import '../asidePost/style.css'
import Icons from '../icones'

const AsidePost = () => {
    return (
        <aside className='aside-container'>           
            <div className='aside-itens'>
            <Icons id='person-icon' width="40px" height="40px" />
            <h3 className='aside-title'>Malcolm X</h3>                
            </div>
            <button className='btn-follow'>Follow</button>
            <hr></hr>
            <div className='aside-icons'>
                <Icons id='like-icon' width="40px" height="40px"/>
                <p>33 likes</p>
                <Icons id='response-icon' width="40px" height="40px" />
                <p>3 comments</p>
            </div>
            <div>
            <div className='aside-itens'>
            <Icons id='readmore-icon' width="40px" height="40px" />
            <h4 className='aside-title'>Other blogs by this author</h4>                         
            </div>
            <ul className='aside-list'>
                <li>Black People and Their Lives</li>
                <li>The importance of Jazz and Blues</li>
                <li>The End of White World Supremacy: Four Speeches by Malcolm X</li>
                <li>By Any Means Necessary</li>
                <li>Message to the Grass Roots</li>
            </ul>  
            </div>
        </aside>
    )
};

export default AsidePost;
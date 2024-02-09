import "../comentsPost/style.css";
import Avatar from "../avatar";
import Icons from "../icones";

const ComentsComponent = ({ commenterAvatarId, commenterName }) => {   
    const defaultAvatar = 'default-img';

  return (
    
      <div className="comments-container">
        <div className="commentarist-infos-container">
          <Avatar id={commenterAvatarId || defaultAvatar} />
          <h4 className="commentarist-name">
            {commenterName}, <time>Dec 12, 2023</time>
          </h4>
        </div>
        <div className="comment-p">
          <p>
            {" "}
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium repudiandae veniam quidem dolorem, deleniti quibusdam
            ullam doloribus magnam beatae, deserunt blanditiis impedit, facere
            eos eius animi debitis obcaecati excepturi minus.
          </p>
             
        </div>
        <div className="comments-icons">
          <Icons id='like-icon' width="30px" height="30px" />
          <p>1 person like this</p>
          <Icons id='response-icon' width="30px" height="30px" />
          <p>1 reply</p>
          </div>      
      </div>
    
    
  );
};

export default ComentsComponent;

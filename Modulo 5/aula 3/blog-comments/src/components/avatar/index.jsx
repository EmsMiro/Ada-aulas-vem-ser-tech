import '../avatar/style.css'
import Icons from '../icones';

const avatarData = [
    {
     id: 'default-img',
     src: 'https://img.icons8.com/ios/50/user-male-circle--v1.png'
    },
    
    {id: 'author-img',
     src: 'https://static.independent.co.uk/2023/03/10/18/Malcolm_X_Quote_Library_88670.jpg'  
    },

    {id: 'commentarist-img',
     src:'https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?w=740&t=st=1707340175~exp=1707340775~hmac=36d74a2ef462d6a266cab9f2b21b2c784920667e950cd290c6cccf0f37bc6b81'}
]

const Avatar = ({ id }) => {
    const avatar = avatarData.find(avatar => avatar.id === id);
      // Se o avatar não for encontrado ou se nenhum id for fornecido, utiliza o avatar padrão
  if (!avatar || !id) {
    return <Icons id="default-img" />;
  }
    return (
        <img className='avatar-image' src ={avatar.src} alt='author image'/>
    )
};

export default Avatar;
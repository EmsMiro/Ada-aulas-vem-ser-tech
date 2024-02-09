// importanto arquivo dos estilos dos icons
import '../icones/style.css';

// array com os src das imagens

 const iconsData = [
    { id: "datilograph-icon", 
      src: 'https://img.icons8.com/ios/100/typewriter-with-paper.png'
    },

    { id: 'menu-icon', 
      src: 'https://img.icons8.com/ios/100/menu--v1.png'
    },

    { id:'person-icon', 
      src: 'https://img.icons8.com/ios/100/user-male-circle--v1.png'
    },

    { id:'like-icon', 
      src: 'https://img.icons8.com/ios/100/thumb-up--v1.png'
    },

    { id:'response-icon', 
      src: 'https://img.icons8.com/ios/100/response.png'
    },
    
    { id: 'readmore-icon',
      src: 'https://img.icons8.com/ios/50/add-book.png'
    }
];

const Icons = ({ id, width, height }) => {
  const icon = iconsData.find(icon => icon.id === id);
  if(!icon) {console.log('Icon not found.');  return null};

  const style = {
    width: width || 'auto',
    height: height || 'auto',
  };
    return (
        <>
       <img className='icon' src={icon.src} alt={icon.alt} style={style} />
        </>
    );
};

export default Icons;
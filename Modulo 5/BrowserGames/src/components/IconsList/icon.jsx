export default function Icon ({name, src, alt, width, height}) {
 const arrIcons = [
    {
        name: 'logo',
        src: 'https://img.icons8.com/ios/50/bdfe2e/apple-arcade.png',
        alt: 'arcade-joystick',
        width: 50,
        height: 50
    },

    {
        name: 'arcade',
        src: 'https://img.icons8.com/ios-filled/50/FFFFFF/arcade-cabinet.png',
        alt: 'arcade-cabinet',
        width: 50,
        height: 50
    }
 ]

 const icon = arrIcons.find((icon) => icon.name === name);

 if (!icon) {
    return null; // caso o ícone não esteja no array 
  }

  // Usa as dimensões passadas como prop, se fornecidas, caso contrário, usa as dimensões padrão do ícone
  const iconSrc = src || icon.src;
  const iconAlt = alt || icon.alt;
  const iconWidth = width || icon.width;
  const iconHeight = height || icon.height;


    return (
        <img src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight}/>
    );
};
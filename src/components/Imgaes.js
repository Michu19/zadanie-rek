import React from 'react';


export const photos = [];
const images = ['./Luke.jpg', './C-3PO.png', './r2d2.jpg', './Darth_Vader.png', './Leia_Organa.png', './Owen.jpg', './Beru.jpg', './R5-D4.jpg', './Biggs.png', './obi.jpg'];


for(let i = 0; i < images.length; i++){
    photos.push(<img key={i} src={images[i]} alt="" />);
}


const Images = () => {
  return (
    <div>
    {photos}
    </div>
  );
}

export default Images;

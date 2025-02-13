interface img {
  imgone: string;
  imgtwo: string;
  imgfinal: string;
}

export function recipePicture(itemOne: string, itemTwo: string) {
  let img: img = {
    imgone: './assets/question.svg',
    imgtwo: './assets/question.svg',
    imgfinal: './assets/question.svg'
  };

  if(itemOne === ''){
    return img
  }
  else{
    img.imgone = itemOne
    if(itemTwo === ''){
        return img
    }
    else{
      img.imgtwo = itemTwo
        return img
    }
  }
}
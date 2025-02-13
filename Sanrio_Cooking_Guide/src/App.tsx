import { useState } from 'react'
import './App.css'
import apple from './assets/materials/apple.png'
import banan from './assets/materials/banan.png'
import strawberry from './assets/materials/strawberry.png'
import cactusCream from './assets/materials/cactus_cream.png'
import candyCloud from './assets/materials/candy_cloud.png'
import chocolateCoin from './assets/materials/chocolate_coin.png'
import cinnaBloom from './assets/materials/cinna_bloom.png'
import coralMilk from './assets/materials/coral_milk.png'
import egg from './assets/materials/egg.png'
import magmaBloom from './assets/materials/magma_bloom.png'
import moonCheese from './assets/materials/moon_cheese.png'
import pinapple from './assets/materials/pinapple.png'
import pumkin from './assets/materials/pumkin.png'
import sakura from './assets/materials/sakura.png'
import snowcicle from './assets/materials/snowcicle.png'
import spinip from './assets/materials/spinip.png'
import starfruit from './assets/materials/starfruit.png'
import sugarkelp from './assets/materials/sugarkelp.png'
import swampmallow from './assets/materials/swampmallow.png'
import toastedAlmod from './assets/materials/toasted_almod.png'
import tofu from './assets/materials/tofu.png'
import arrow from './assets/arrow.svg'
import dark from './assets/dark.svg'
import light from './assets/light.svg'
import plus from './assets/plus.svg'
import machine from './assets/dessert_machine.png'
import { Theme } from './themeChange'
import { recipePicture } from './assets/recipePicture'

function App() {
  const [itemOne, setItemOne] = useState('')
  const [itemTwo, setItemTwo] = useState('')
  const [theme, setTheme] = useState(0)
  const [clickOne, setClickOne] = useState(false)
  const [clickTwo, setClickTwo] = useState(false)

  interface img {
    imgone: string;
    imgtwo: string;
    imgfinal: string;
  }

  function themeChange() {
    setTheme(Theme(theme))
  }

  function itemSelect(value: string) {
    if(itemOne === ''){
      //1st img change
      if(clickOne === false){
        setClickOne(true)
        setItemOne(value)
      }
      else{
        setClickOne(false)
        setItemOne('')
      }
    }
    else{
      //2nd img change
      if(clickTwo === false){
        setClickTwo(true)
        setItemTwo(value)
      }
      else{
        setClickTwo(false)
        setItemOne('')
      }
    }
  }
  function load() {
    //load the default panels
    let img:img = recipePicture(itemOne, itemTwo)
  }

    if (theme === 0) {
      return(
      <>
      <div className='container light' onLoad={() => load()}>
        <div className='row'>
          <div className='row'>
            <img src="" alt="Hello Kitty Island adventure" />
            <button onClick={() => themeChange()}><img src={light} alt="" className='lightsvg'/></button>
          </div>
          <div className='row'>
            <div className='col-6'>
              <img src={machine} alt="Dessert Machine" />
              <p> Dessert Recipes</p>
            </div>
            <div className='col-6'>

            </div>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn--light'><img src={apple} alt="Apple"/></button>
          <button className='btn btn--light'><img src={banan} alt="Banan" /></button>
          <button className='btn btn--light'><img src={pinapple} alt="Pinapple" /></button>
          <button className='btn btn--light'><img src={strawberry} alt="Strawberry" /></button>

          <button className='btn btn--light'><img src={starfruit} alt="Strafruit" /></button>
          <button className='btn btn--light'><img src={spinip} alt="Spinip" /></button>
          <button className='btn btn--light'><img src={pumkin} alt="Pumkin" /></button>
          <button className='btn btn--light'><img src={egg} alt="Egg" /></button>

          <button className='btn btn--light'><img src={swampmallow} alt="Swampmallow" /></button>
          <button className='btn btn--light'><img src={candyCloud} alt="Candy Cloud" /></button>
          <button className='btn btn--light'><img src={sugarkelp} alt="Sugarkelp" /></button>
          <button className='btn btn--light'><img src={sakura} alt="Sakura" /></button>

          <button className='btn btn--light'><img src={coralMilk} alt="Coral Milk" /></button>
          <button className='btn btn--light'><img src={chocolateCoin} alt="Chocolate" /></button>
          <button className='btn btn--light'><img src={moonCheese} alt="Moon Cheese" /></button>
          <button className='btn btn--light'><img src={tofu} alt="Tofu" /></button>

          <button className='btn btn--light'><img src={cinnaBloom} alt="Cinna Bloom" /></button>
          <button className='btn btn--light'><img src={magmaBloom} alt="Magma Bloom" /></button>
          <button className='btn btn--light'><img src={toastedAlmod} alt="Toasted Almond" /></button>
          <button className='btn btn--light'><img src={snowcicle} alt="Snowcicle" /></button>
        </div>
      </div>
    </>)
    }
    else{
      return(
      <>
      <div className='container dark' onLoad={() => load()}>
        <div className='row'>
          <div className='row'>
            <img src="" alt="Hello Kitty Island adventure" />
            <button onClick={() => themeChange()}><img src={dark} alt="" className='darksvg'/></button>
          </div>
          <div className='row'>
            <div className='col-6'>
              <img src={machine} alt="Dessert Machine" />
              <p> Dessert Recipes</p>
            </div>
            <div className='col-6'>

            </div>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn--dark'><img src={apple} alt="Apple"/></button>
          <button className='btn btn--dark'><img src={banan} alt="Banan" /></button>
          <button className='btn btn--dark'><img src={pinapple} alt="Pinapple" /></button>
          <button className='btn btn--dark'><img src={strawberry} alt="Strawberry" /></button>

          <button className='btn btn--dark'><img src={starfruit} alt="Strafruit" /></button>
          <button className='btn btn--dark'><img src={spinip} alt="Spinip" /></button>
          <button className='btn btn--dark'><img src={pumkin} alt="Pumkin" /></button>
          <button className='btn btn--dark'><img src={egg} alt="Egg" /></button>

          <button className='btn btn--dark'><img src={swampmallow} alt="Swampmallow" /></button>
          <button className='btn btn--dark'><img src={candyCloud} alt="Candy Cloud" /></button>
          <button className='btn btn--dark'><img src={sugarkelp} alt="Sugarkelp" /></button>
          <button className='btn btn--dark'><img src={sakura} alt="Sakura" /></button>

          <button className='btn btn--dark'><img src={coralMilk} alt="Coral Milk" /></button>
          <button className='btn btn--dark'><img src={chocolateCoin} alt="Chocolate" /></button>
          <button className='btn btn--dark'><img src={moonCheese} alt="Moon Cheese" /></button>
          <button className='btn btn--dark'><img src={tofu} alt="Tofu" /></button>

          <button className='btn btn--dark'><img src={cinnaBloom} alt="Cinna Bloom" /></button>
          <button className='btn btn--dark'><img src={magmaBloom} alt="Magma Bloom" /></button>
          <button className='btn btn--dark'><img src={toastedAlmod} alt="Toasted Almond" /></button>
          <button className='btn btn--dark'><img src={snowcicle} alt="Snowcicle" /></button>
        </div>
      </div>
    </>)
    }
}

export default App

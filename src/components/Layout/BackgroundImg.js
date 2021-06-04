import classes from './BackgroundImg.module.scss'
import PerfumeImg from '../../material/2016613.jpg'
import PerfumeImgSmall from '../../material/2016612.jpg'
const BackgroundImg = function () {
  return (
    <div className={classes['sub-image']}>
      <picture>
        <source srcSet={PerfumeImgSmall} media='(max-width: 500px)' />
        <img
          className={classes['main-image']}
          srcSet={PerfumeImg}
          alt='Perfume'
        />
      </picture>
    </div>
  )
}
export default BackgroundImg

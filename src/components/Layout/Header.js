import classes from './Header.module.scss'
import React, { Fragment } from 'react'
import PerfumeImg from '../../material/2016613.jpg'
import PerfumeImgSmall from '../../material/2016612.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Made by Khoa</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
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
    </Fragment>
  )
}
export default Header

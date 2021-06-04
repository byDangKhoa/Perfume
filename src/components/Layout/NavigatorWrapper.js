import Navigator from './Navigator'
import { Fragment } from 'react'
const NavigatorWrapper = function (props) {
  return (
    <Fragment>
      <Navigator />
      <main>props.children</main>
    </Fragment>
  )
}
export default NavigatorWrapper

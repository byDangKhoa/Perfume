import React, { Fragment } from 'react'
import AvailablePerfume from './AvailablePerfume'
import PerfumeSummary from './PerfumeSummary'
const Perfume = () => {
  return (
    <Fragment>
      <PerfumeSummary />
      <AvailablePerfume />
    </Fragment>
  )
}
export default Perfume

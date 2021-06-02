import React, { useEffect, useState } from 'react'
import classes from './AvailablePerfume.module.scss'
import Card from '../UI/Card'
import PerFumeForm from './PerfumeForm'
// import AddPerfumeForm from './AddPerfumeForm'
const AvailablePerfume = (props) => {
  const [perfumeData, setPerfumeData] = useState([])
  const fetchPerfumeData = async function () {
    const res = await fetch(
      'https://react-http-request-9084f-default-rtdb.asia-southeast1.firebasedatabase.app/perfume.json'
    )
    if (!res.ok) {
      throw Error('request failed')
    }
    const dataPerfume = await res.json()
    const loadedData = []
    for (const perfumeKey in dataPerfume) {
      loadedData.push({
        id: perfumeKey,
        name: dataPerfume[perfumeKey].name,
        brand: dataPerfume[perfumeKey].brand,
        price: +dataPerfume[perfumeKey].price,
      })
    }
    setPerfumeData(loadedData)
  }
  useEffect(() => {
    fetchPerfumeData()
  }, [])
  return (
    <section className={classes.perfumes}>
      {/* <AddPerfumeForm
        fetchPerfumeData={fetchPerfumeData}
        setPerfumeData={setPerfumeData}
        perfumeData={perfumeData}
      /> */}
      <ul>
        {perfumeData.map(function (perf) {
          const price = `${perf.price}k VND`
          return (
            <Card key={perf.id}>
              <li className={classes.perfume}>
                <div>
                  <h3>{perf.name}</h3>
                  <div className={classes.brand}>{perf.brand}</div>
                  <div className={classes.price}>{price}</div>
                </div>
                <PerFumeForm id={perf.id} price={perf.price} name={perf.name} />
              </li>
            </Card>
          )
        })}
      </ul>
    </section>
  )
}
export default AvailablePerfume

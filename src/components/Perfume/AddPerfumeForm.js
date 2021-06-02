import useInput from '../hooks/useInput'

const AddPerfumeForm = function (props) {
  const [inputName, setInputName, onInputNameHandler] = useInput()
  const [inputBrand, setInputBrand, onInputBrandHandler] = useInput()
  const [inputPrice, setInputPrice, onInputPriceHandler] = useInput()
  const sendPerfumeData = async function (perfume) {
    const res = await fetch(
      'https://react-http-request-9084f-default-rtdb.asia-southeast1.firebasedatabase.app/perfume.json',
      {
        method: 'POST',
        body: JSON.stringify(perfume),
        header: {
          'Content-Type': 'application/json',
        },
      }
    )
    if (!res.ok) {
      throw Error('Request failed')
    }
  }
  const onSubmitHandler = function (e) {
    e.preventDefault()
    const loadedData = {
      name: inputName,
      brand: inputBrand,
      price: +inputPrice,
    }
    sendPerfumeData(loadedData)
    props.fetchPerfumeData()
    setInputName('')
    setInputBrand('')
    setInputPrice('')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          value={inputName}
          onChange={onInputNameHandler}
          id='name'
          type='text'
        />
      </div>
      <div>
        <label htmlFor='brand'>Brand</label>
        <input
          value={inputBrand}
          onChange={onInputBrandHandler}
          id='brand'
          type='text'
        />
      </div>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          value={inputPrice}
          onChange={onInputPriceHandler}
          id='price'
          type='number'
        />
      </div>
      <button>Add Task</button>
    </form>
  )
}
export default AddPerfumeForm

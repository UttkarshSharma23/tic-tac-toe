const Sqaure = ({value,onSqaureClick}) => {
  return (
    <button className='p-5 border-2 w-14 h-14 font-semibold hover:bg-blue-400 flex items-center justify-center' onClick={onSqaureClick}>
      {value}
    </button>
  )
}
export default Sqaure
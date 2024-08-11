
const Item = ({beneficiary}) => {
  return (
    <div className="beneficiary">
        <h4>{beneficiary.wallet_address}</h4>
        <p>Total Amount: {beneficiary.balance}</p>
    </div>
  )
}

export default Item
import Item from "./Item"

const ItemList = ({beneficiaries}) => {
  return (
    <div className="container"> 
        <h2 className="main-title">Beneficiaries of the Airdrop</h2>
        <div className="beneficiaries">
            {beneficiaries.map((ben) => <Item beneficiary={ben} key={ben.id}/>)}

        </div>
    </div>
  )
}

export default ItemList
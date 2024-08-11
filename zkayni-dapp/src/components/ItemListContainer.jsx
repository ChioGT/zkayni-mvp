import { useEffect, useState } from "react";
import { GetData } from "../helpers/GetData";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [beneficiaries, setBeneficiaries] = useState([]);
 
    useEffect(() => {
      GetData()
        .then((res) => {
            setBeneficiaries(res);
        })
    }, [])
    
  return (
    <div>
        <ItemList beneficiaries={beneficiaries}/>
    </div>
  )
}

export default ItemListContainer
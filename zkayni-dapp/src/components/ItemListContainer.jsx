import { useEffect, useState } from "react";
import { GetData } from "../helpers/GetData";

const ItemListContainer = () => {

    const [Beneficiaries, setBeneficiaries] = useState([]);
 
    useEffect(() => {
      GetData()
        .then((res) => {
            setBeneficiaries(res);
        })
    }, [])
    
  return (
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer
import axios from "axios";
import React, {useState} from "react";
import { useQuery, useQueryClient } from "react-query";
import { GetSemaphoreId } from "../helpers/GetSemaphoreId";
import EmitVocher from "../components/EmitVoucher";

const baseURL = "http://localhost:3001/beneficiarios";

function BenList() {
  const { data, error, isLoading } = useQuery(
    'beneficiarios', // key
    async () => {
      const response = await axios.get('http://localhost:3001/beneficiarios');
      return response.data;
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.grupo} ({data.monto})</li>
      ))}
    </ul>
  );
}


const User = ({beneficiaries}) => {

  /*  
  const [post, setPost] = React.useState(null);

    React.useEffect(()=> {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    },[]);

    if (!post) return null;
*/

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(null);

    const [semaphoreId, setSemaphoreId] = useState([]);
 
    return (
      <div className="container"> 
        <div>
          <h2 className="main-title">Beneficiario</h2>
        </div>
        <div>
        <br/><br/>
          <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder="Enter your code"/> <br/><br/>
          <button >Create semaphore Identity</button>
          <br/><br/><br/>
          <h1>Vouchers</h1>
          <br/>
          <EmitVocher/>

        </div>  
      </div>
    )
  }
  export default User

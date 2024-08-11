import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";

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
    return (
      <div className="container"> 
          <h2 className="main-title">Beneficiario</h2>
         
      </div>
    )
  }
  export default User

import axios from "axios";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";


export const ListaOrganizaciones = () => {

  const [post, setPost] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); //spinner

  const baseURL = "https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/organizacion";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      setLoading(false);
    });
  }, []);

  if (!post) return null;


  return (
   <div className="bg-white rounded-md">
    <h3 className="text-center font-extrabold text-indigo-600 py-3">Lista de Talleres</h3>
      {
        loading ? (
          <div className="flex justify-center">
             <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
          </div>
        ) :(
          <ul role="list" className="divide-y divide-gray-400 w-11/12 mx-auto pb-3 mb-3"> 
            {post.map((person) => (
              <Link to={`/user/listOrganizations/calendar/${person.id}`}  key={person.id} className="flex justify-between gap-x-6 py-5 hover:bg-gray-200 rounded-md">
                <div className="flex min-w-0 gap-x-4">
                  <img alt="" src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-black">Taller: {person.nombre}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">Razon social:  {person.razonSocial}</p>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        )
      }
   
   </div>
  )
}

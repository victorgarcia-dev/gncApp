//import { useEffect, useState } from "react";
//import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCircleUser } from "react-icons/fa6";


const LoginButton = () => {

 // const getToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRueE1SeFlFblJFb2F0S0VnbE9yZyJ9.eyJuaWNrbmFtZSI6InBhYmxvY2JhMDEwIiwibmFtZSI6InBhYmxvY2JhMDEwQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82ZTczYWQ3Njc1YWE2MDI4Nzc1NTg3YzI3NTA5MDRlNj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnBhLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI0LTA4LTEyVDIwOjE4OjA2Ljg4MFoiLCJlbWFpbCI6InBhYmxvY2JhMDEwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9kZXYtcW56a2k1dzJkZTZ2d2ZsYi51cy5hdXRoMC5jb20vIiwiYXVkIjoiSTd3aWtCaUt1QUZ6V1Z0MDVvZHhCeHZsWkpsd1JkamgiLCJpYXQiOjE3MjM1Nzc2NjksImV4cCI6MTcyMzYxMzY2OSwic3ViIjoiYXV0aDB8NjZiYTZkZmVjYTQ5ODNmMzQ2YzQ5ODFkIiwic2lkIjoiX0xELTNZVFNaX3A3NWJKdEh4aWdfalNySlRTenRiclEiLCJub25jZSI6IlRWaDBTRXhpTGpCTlozSXpWRzVhUTJjMmMzZHBTMWN3WXpSUGN6RmFVV04wUldJeFVtZFhWek5tWXc9PSJ9.hIMCG-7WGL2MgaQ-Hf0mnhBDxhx7ik90ZhlUajzIpSalhJnslWOlou4sLNpYqKMJ1lWNEsrZXMEMcQLjCU3LUJdYx3dWQs-8CG7go99W6jX_Qv7vsv6SWM_GWKM4gSVbPYIicPJCM_g28Z-652X-zHVzyeqYnZrgA3GkKfpNfmjiqznd5TLhsc08zhKyCZXF8iYLFD1lavqhfRmHbiKPxCyDeISAsxBMmVIb8XaAJe8fOf_8f4lQuetQNM4q8IxUu0pNBtVHNBFpD9J3jZJXNSFErQkSDDTUc4EGJsB14vZH_ewpUxBaiR5mmG2KoUmi9MtFZyVtO0yQ6DugsiOjUA';
  const { loginWithRedirect } = useAuth0();
 // const [post, setPost] = useState(null);

 /* useEffect(() => {
    axios.get('https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/organizacion/users/123', {
      headers: {
        'Authorization': `${getToken}`
      }
    }).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);*/


  return <button onClick={() => loginWithRedirect({appState:{returnTo:"/dashboard"}})}>
     <FaCircleUser className="text-3xl text-indigo-500"/>
  </button>;
};

export default LoginButton;
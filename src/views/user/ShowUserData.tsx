import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const ShowUserData = () => {

  const { userData } = useContext(UserContext);
  console.log(userData);
  const date = new Date("2024-06-03T12:00:00");
  console.log(date.getDay());
  return (
    <div className='mt-3 mr-2 ml-2 bg-white shadow-lg p-10 rounded-lg'>ShowUserData</div>
  )
}

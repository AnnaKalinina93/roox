import { Route, Routes } from 'react-router';
import ListUsers from '../list-users/list-users';
import User from '../user/user';

function App() {
  return (
   <Routes>
     <Route path='/' element={<ListUsers />}/>
     <Route path='/user/:id' element={<User />}/>
   </Routes>
  );
}

export default App;

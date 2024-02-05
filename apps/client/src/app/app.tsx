// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import AppBar from '../components/AppBar';
import Login from '../components/users/Login/Login'
import LoginField from '../components/users/Login/LoginField'
import Register from '../components/users/Register/Register'

export function App() {
  return (
    <div>
      {/* <NxWelcome title="client" /> */}
      <AppBar/>
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;

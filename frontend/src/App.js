import LoginPageComponent from './pages/LoginPage.Component';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5050/api';

function App() {
  return (
    <div className="container">
      <LoginPageComponent />
    </div>
  );
}

export default App;

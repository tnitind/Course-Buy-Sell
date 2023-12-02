import './App.css';
import Routes from './routes/RoutesPages';
import { AuthProvider } from '../../course-management/src/authentication/AuthContext';


function App() {
  return (
  <AuthProvider>
    <Routes/>
  </AuthProvider>);
}

export default App;

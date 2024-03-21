import { Route, Routes } from 'react-router-dom';
import './App.css';
import ImageForm from './components/ImageForm';
import { CallbackPage } from './pages/callback-page';
import { MainPage } from './pages/main-page';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/main" element = {<MainPage />} />
        <Route path="/" element = {<CallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;

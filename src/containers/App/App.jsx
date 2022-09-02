import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PeoplePage from '../PeoplePage/PeoplePage';
import HomePage from '../HomePage/HomePage';

import styles from './App.module.css';


const App = () => {
  return (
  <>    
    <BrowserRouter>
    <div className={styles.wrapper}>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/people' element={<PeoplePage />}></Route>
       
        </Routes>
    </div>    
    </BrowserRouter>
  </>
  )
}

export default App;



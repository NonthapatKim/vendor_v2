import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Sildebar from './components/sildebar';
import menus from './other/menus.json';
import { Home } from './pages/home';
import Layout from './layout';
import Amarica_stocks from './pages/amarica-stocks';

function App() {

  const [urlparth, setUrlparth] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const subpath = location.pathname.substring(1);
    setUrlparth(subpath);
  }, [location.pathname]);

  return (
    <>
      <div className="flex min-h-screen">
        <Sildebar Menus={menus} urlparth={urlparth} />
        <div className="flex-1 p-6">
          <Layout>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/amarica-stocks' element={<Amarica_stocks/>}></Route>
            </Routes>
          </Layout>
        </div>
      </div>
    </>
  )
}

export default App

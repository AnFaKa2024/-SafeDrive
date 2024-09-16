import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
/*import GlobalStyle from './global-styled.ts'*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/OqCadastrar/Login.tsx';
import Cadastro from './routes/OqCadastrar/PrimeiroAcesso.tsx';
import Home from './routes/Home/home.tsx';
import SafeDrive from './routes/SafeDrive/SafeDrive.tsx';
import Cliente from './routes/Cliente/Cliente.tsx';
import Recomendacao from './routes/Recomendacao/Recomendacao.tsx';

import CadUsuario from './routes/CadUsuario/CadUsuario.tsx';
import CadMecanico from './routes/CadMecanico/CadMecanico.tsx';
import CadVeiculo from './routes/CadVeiculo/CadVeiculo.tsx';

import HistoricoHome from './routes/Historico/HistoricoHome.tsx';
import ObsHome from './routes/Relatos/ObsHome.tsx';

import Error from './routes/Error/index.tsx';
import ReactDOM from 'react-dom';
import Diagnostico from './routes/Diagnostico/Diagnostico.tsx';



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error/>,

    children:[
      
      {path: '/', element: <Login/>},
     

      {path: '/home', element: <Home/>},
      {path: '/home/safedrive', element: <SafeDrive/>},
      {path: '/home/cliente', element: <Cliente/>},
      {path: '/home/recomendacao', element: <Recomendacao/>},

      {path: '/home/cadastrousuario', element: <CadUsuario/>},
      

      {path: '/home/cadastromecanico', element: <CadMecanico/>},
      

      {path: '/home/cadastroveiculo', element: <CadVeiculo/>},
      
      {path: '/home/diagnostico', element: <Diagnostico/>},
      

      {path: '/home/historico', element: <HistoricoHome/>},
      
      {path: '/home/relatos', element: <ObsHome/>},
      

      
      
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

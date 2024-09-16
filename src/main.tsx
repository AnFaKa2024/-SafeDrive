import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
/*import GlobalStyle from './global-styled.ts'*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './routes/Home/home.tsx';
import SafeDrive from './routes/SafeDrive/SafeDrive.tsx';
import Cliente from './routes/Cliente/Cliente.tsx';
import Recomendacao from './routes/Recomendacao/Recomendacao.tsx';
import Login from './routes/OqCadastrar/Login.tsx';

import CadMecanico from './routes/CadMecanico/CadMecanico.tsx';
import CadUsuario from './routes/CadUsuario/CadUsuario.tsx';
import CadVeiculo from './routes/CadVeiculo/CadVeiculo.tsx';

import NovoCondutor from './routes/OqCadastrar/NovoCondutor.tsx';
import NovoVeiculo from './routes/OqCadastrar/NovoVeiculo.tsx';
import PrimeiroAcesso from './routes/OqCadastrar/PrimeiroAcesso.tsx';
import CadOficina from './routes/CadMecanico/CadOficina.tsx';
import DadosCondutor from './routes/CadUsuario/DadosCondutor.tsx';

import Error from './routes/Error/index.tsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error/>,

    children:[
      /*{path: '/', element: <Home/>},*/

      {path: '/', element: <Home/>},
      {path: '/safedrive', element: <SafeDrive/>},
      {path: '/cliente', element: <Cliente/>},
      {path: '/recomendacao', element: <Recomendacao/>},
      {path: '/login', element: <Login/>},

      {path: '/cadastrousuario', element: <CadUsuario/>},
      //{path: '/novocondutor/ cadastrousuario', element: <DadosCondutor/>},

      {path: '/cadastromecanico', element: <CadMecanico/>},
      //{path: '/cadastromecanico/cadastrooficina', element: <CadOficina/>},

      {path: '/novoveicuo/ cadastroveiculo', element: <CadVeiculo/>}
      //{path: '/novoveiculo', element: <NovoVeiculo/>},

      //{path: '/CadUsuario/ novocondutor', element: <NovoCondutor/>},
      //{path: 'primeiroAcesso', element: <PrimeiroAcesso/>},
      
      
    ]
  }

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

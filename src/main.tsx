import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
/*import GlobalStyle from './global-styled.ts'*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CadMecanico from './routes/CadMecanico/CadMecanico.tsx';
import CadUsuario from './routes/CadUsuario/CadUsuario.tsx';
import CadVeiculo from './routes/CadVeiculo/CadVeiculo.tsx';
import Error from './routes/Error/index.tsx';
import NovoCondutor from './routes/OqCadastrar/NovoCondutor.tsx';
import NovoVeiculo from './routes/OqCadastrar/NovoVeiculo.tsx';
import PrimeiroAcesso from './routes/OqCadastrar/PrimeiroAcesso.tsx';
import CadOficina from './routes/CadMecanico/CadOficina.tsx';
import DadosCondutor from './routes/CadUsuario/DadosCondutor.tsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error/>,

    children:[
      /*{path: '/', element: <Home/>},*/

      {path: '/CadUsuario/ novocondutor', element: <NovoCondutor/>},
      {path: '/home/ novoveiculo', element: <NovoVeiculo/>},
      {path: '/nome/ primeiroAcesso', element: <PrimeiroAcesso/>},
      {path: '/home/ cadastromecanico', element: <CadMecanico/>},
      {path: '/home/ cadastromecanico/ cadastrooficina', element: <CadOficina/>},
      {path: '/home/ cadastrousuario', element: <CadUsuario/>},
      
      {path: '/home/ novocondutor/ cadastrousuario', element: <DadosCondutor/>},
      {path: '/home/ novoveicuo/ cadastroveiculo', element: <CadVeiculo/>}
      
    ]
  }

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

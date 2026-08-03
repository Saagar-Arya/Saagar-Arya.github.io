import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { system } from './theme';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found');

createRoot(rootElement).render(
  <StrictMode>
    <HashRouter>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </HashRouter>
  </StrictMode>,
);

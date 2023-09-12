import { RouterProvider } from 'react-router-dom';
import BeforeLoginHeader from './components/Header/BeforeLoginHeader';
import { router } from './routes';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <BeforeLoginHeader />
      <RouterProvider router={router} />
      <Box as='footer'>footer goes here</Box>
    </>
  );
};

export default App;

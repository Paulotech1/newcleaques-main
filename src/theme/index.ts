import { extendTheme } from '@chakra-ui/react';
import { button, input, link, hr } from './components';
import { typography } from './foundations';
import { globalStyles } from './styles';

const theme = extendTheme(globalStyles, button, hr, input, link, typography);

export default theme;

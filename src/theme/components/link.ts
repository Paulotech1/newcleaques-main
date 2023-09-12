import { ThemeProps } from '@/theme/@types';

export const link: ThemeProps = {
  components: {
    Link: {
      baseStyle: {
        color: 'primary',
        _hover: {
          textDecoration: 'underline'
        }
      }
    }
  }
};

import { ThemeProps } from '@/theme/@types';

export const input: ThemeProps = {
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            border: '1px solid',
            background: '#F1F5F9',
            fontSize: '14px',
            fontWeight: 400
          }
        }
      },
      defaultProps: {
        variant: 'filled',
        size: 'md'
      }
    }
  }
};

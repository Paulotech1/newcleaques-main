import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PanelHeader extends FlexProps {
  header?: ReactNode;
  rightAction?: ReactNode;
}
export const PanelHeader = ({ header = 'Heading', rightAction, ...rest }: PanelHeader) => {
  return (
    <Flex alignItems='center' bgColor='red.500' p={3} justifyContent='space-between' {...rest}>
      {typeof header === 'string' ? (
        <Text color='#fff' textStyle='h1'>
          {header}
        </Text>
      ) : (
        <>{header}</>
      )}
      <>{rightAction}</>
    </Flex>
  );
};

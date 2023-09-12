import React, { forwardRef, useState } from 'react';
import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { RiStarFill } from 'react-icons/ri';

type RatingProps = {
  size?: number;
  icon?: string;
  scale?: number;
  fillColor?: string;
  strokeColor?: string;
};

export const Rating = forwardRef<HTMLInputElement, RatingProps>(
  (
    { size = 16, icon = RiStarFill, scale = 5, fillColor = '#F2994A', strokeColor = '#f1d0b3' },
    ref
  ) => {
    const [rating, setRating] = useState<number>(0);
    const buttons: JSX.Element[] = [];

    const onClick = (idx: number) => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    const RatingIcon: React.FC<{ fill: boolean }> = ({ fill }) => {
      return (
        <Icon
          as={icon}
          w={`${size}px`}
          h={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={() => onClick(1)} // You can update this to pass the appropriate index
          fillOpacity={fill ? '100%' : '20%'}
        />
      );
    };

    const RatingButton: React.FC<{ idx: number; fill: boolean }> = ({ idx, fill }) => {
      return (
        <Box
          as='button'
          aria-label={`${idx} rating${idx > 1 ? 's' : ''}`}
          height={`${size}px`}
          width={`${size}px`}
          // variant='unstyled'
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <HStack alignItems='flex-start' justify='center' spacing={0}>
        <input name='rating' type='hidden' value={rating} ref={ref} />
        <Box width={`${size * 1.5}px`} textAlign='center'>
          <Text textStyle='body' fontWeight='semibold'>
            {rating}
          </Text>
        </Box>
        {buttons}
      </HStack>
    );
  }
);

Rating.displayName = 'Rating';

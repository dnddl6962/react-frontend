import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getRoom, getRoomReviews } from '../api';
import { IReview, IRoomDetail } from '../types.d';

export default function RoomDetail() {
  const { roomPk } = useParams();

  const { isLoading, data } = useQuery<IRoomDetail>({
    queryKey: ['rooms', roomPk],
    queryFn: getRoom,
  });

  const {
    data: reviewsData,
    // isLoading: isReviewsLoading,
    isError: isReviewsError,
  } = useQuery<IReview[]>({
    queryKey: ['rooms', roomPk, 'reviews'],
    queryFn: getRoomReviews,
    retry: false, // 실패 시 재시도하지 않음
  });

  return (
    <Box
      pb={40}
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      {/* 방 이름 */}
      <Skeleton height="43px" width="100%" isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>

      {/* 이미지 그리드 */}
      <Grid
        mt={8}
        rounded="xl"
        overflow="hidden"
        gap={2}
        height="60vh"
        templateRows="1fr 1fr"
        templateColumns="repeat(4, 1fr)"
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow="hidden"
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h="100%" w="100%">
              {data?.photos?.[index]?.file ? (
                <Image objectFit="cover" w="100%" h="100%" src={data.photos[index].file} />
              ) : null}
            </Skeleton>
          </GridItem>
        ))}
      </Grid>

      {/* 호스트 정보 */}
      <HStack width="40%" justifyContent="space-between" mt={10}>
        <VStack alignItems="flex-start">
          <Skeleton isLoaded={!isLoading} height="30px">
            <Heading fontSize="2xl">House hosted by {data?.owner.username}</Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} height="30px">
            <HStack justifyContent="flex-start" w="100%">
              <Text>
                {data?.toilets} toilet{data?.toilets === 1 ? '' : 's'}
              </Text>
              <Text>∙</Text>
              <Text>
                {data?.rooms} room{data?.rooms === 1 ? '' : 's'}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar name={data?.owner.username} size="xl" src={data?.owner.avatar} />
      </HStack>

      {/* 평점 및 리뷰 수 */}
      <Box mt={10}>
        <Heading mt={5} fontSize="2xl">
          <HStack>
            <FaStar />
            <Text>{data?.rating}</Text>
            <Text>∙</Text>
            <Text>
              {isReviewsError
                ? 'No reviews'
                : `${reviewsData?.length ?? 0} review${reviewsData?.length === 1 ? '' : 's'}`}
            </Text>
          </HStack>
        </Heading>
        <Container mt={16} maxW="container.lg" marginX="none">
          <Grid gap={10} templateColumns={'1fr 1fr'}>
            {reviewsData?.map((review, index) => (
              <VStack alignItems={'flex-start'} key={index}>
                <HStack>
                  <Avatar name={review.user.name} src={review.user.avatar} size="md" />
                  <VStack spacing={0} alignItems={'flex-start'}>
                    <Heading fontSize={'md'}>{review.user.name}</Heading>
                    <HStack spacing={1}>
                      <FaStar size="12px" />
                      <Text>{review.rating}</Text>
                    </HStack>
                  </VStack>
                </HStack>
                <Text>{review.payload}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

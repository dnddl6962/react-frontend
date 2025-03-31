import { Box, Button, HStack, VStack, Divider, Text } from '@chakra-ui/react';
import { FaComment, FaGithub } from 'react-icons/fa6';

export default function SocialLogIn() {
  return (
    <Box mb={'4'}>
      <HStack mt={'8'} mb={'8'}>
        <Divider />
        <Text textTransform={'uppercase'} color={'gray.500'} fontSize={'xs'} as={'b'}>
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button width="100%" colorScheme="telegram" leftIcon={<FaGithub />}>
          Continue with Github
        </Button>
        <Button width="100%" colorScheme="yellow" leftIcon={<FaComment />}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}

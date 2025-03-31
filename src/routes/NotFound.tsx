import { Heading, VStack, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <VStack bg="gray.100" justifyContent={'center'} minHeight="100vh">
      <Heading>Page Not Found</Heading>
      <Text>It seems that u r lost.</Text>
      <Link to="/">
        <Button colorScheme={'twitter'} variant={'outline'}>
          Go Home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}

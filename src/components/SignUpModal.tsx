import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaUserNinja, FaKey, FaEnvelope, FaUserSecret } from 'react-icons/fa6';
import SocialLogIn from './socialLogIn';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaUserSecret />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="E-Mail" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaUserNinja />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="Username" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={'gray.500'}>
                    <FaKey />
                  </Box>
                }
              />
              <Input variant={'filled'} placeholder="Password" />
            </InputGroup>
          </VStack>
          <Button mt={'4'} colorScheme="red" width="100%">
            Log In
          </Button>
          <SocialLogIn />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

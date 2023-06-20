import {
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  PinInput,
  PinInputField,
  HStack,
  VStack,
  FormHelperText,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";

const LoginModal = (): JSX.Element => {
  // const [isOpen, setIsOpen] = useBoolean(true);
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
        size="md"
      >
        <ModalOverlay backdropFilter="blur(50px)" />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalBody>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Submitted.");
                onClose();
              }}
            >
              <VStack spacing={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="John Doe" />
                </FormControl>
                <FormControl>
                  <FormLabel>Age</FormLabel>
                  <NumberInput min={0} max={100}>
                    <NumberInputField />
                  </NumberInput>
                  <FormHelperText>Your Current Age (0-100)</FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel>PIN</FormLabel>
                  <HStack>
                    <PinInput mask>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                  <FormHelperText>Your Birthday (MMDDYY)</FormHelperText>
                </FormControl>
                <Button type="submit">Submit</Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;

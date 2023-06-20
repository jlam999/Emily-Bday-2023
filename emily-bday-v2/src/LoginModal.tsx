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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      age: { value: number };
      pin1: { value: number };
      pin2: { value: number };
      pin3: { value: number };
      pin4: { value: number };
      pin5: { value: number };
      pin6: { value: number };
    };
    const creds: Array<string | number> = [
      target.name,
      target.age,
      target.pin1,
      target.pin2,
      target.pin3,
      target.pin4,
      target.pin5,
      target.pin6,
    ].map((v) => v.value);
    const vals: Array<string | number> = ["Emily Zhao", 20, 0, 7, 0, 3, 0, 3];
    let pass = true;
    for (let i = 0; i < creds.length; i++) {
      pass &&= creds[i] === String(vals[i]);
    }
    if (pass) {
      onClose();
    } else {
      alert("Wrong Name, Age, and/or PIN");
    }
  };

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
          <ModalHeader textAlign="center">Log In</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="John Doe" name="name" />
                </FormControl>
                <FormControl>
                  <FormLabel>Age</FormLabel>
                  <NumberInput min={0} max={100} defaultValue={0} name="age">
                    <NumberInputField />
                  </NumberInput>
                  <FormHelperText>Your Current Age (0-100)</FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel>PIN</FormLabel>
                  <HStack>
                    <PinInput mask>
                      <PinInputField name="pin1" />
                      <PinInputField name="pin2" />
                      <PinInputField name="pin3" />
                      <PinInputField name="pin4" />
                      <PinInputField name="pin5" />
                      <PinInputField name="pin6" />
                    </PinInput>
                  </HStack>
                  <FormHelperText>Your Birthday (MMDDYY)</FormHelperText>
                </FormControl>
                <Button type="submit" mb="3" colorScheme="pink">
                  Submit
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;

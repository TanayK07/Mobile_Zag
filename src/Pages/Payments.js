import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Input, Flex, Text, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

const PaymentComponent = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (cardNumber.length < 16 || cardName.trim() === '' || expiryDate.trim() === '' || cvv.length < 3) {
      return;
    }

    setIsLoading(true);
    // Simulate API request or payment processing
    setTimeout(() => {
      setIsLoading(false);
      history.push('/payment-success'); // Redirect to the payment success page
    }, 2000);
  };

  const isCardNumberValid = cardNumber.length === 16 || !isSubmitted;
  const isCardNameValid = cardName.trim() !== '' || !isSubmitted;
  const isExpiryDateValid = expiryDate.trim() !== '' || !isSubmitted;
  const isCvvValid = cvv.length === 3 || !isSubmitted;

  return (
    <Text>  df,s </Text>
    // <Flex justifyContent="center" alignItems="center" height="100vh">
    //   <Box width={375}>
    //     <Box p={4}>
    //       <form onSubmit={handleSubmit}>
    //         <FormControl id="cardNumber" isInvalid={!isCardNumberValid} isRequired>
    //           <FormLabel>Card Number</FormLabel>
    //           <Input
    //             type="text"
    //             placeholder="Enter card number"
    //             value={cardNumber}
    //             onChange={(e) => setCardNumber(e.target.value)}
    //           />
    //           <FormErrorMessage>Card number must be 16 digits</FormErrorMessage>
    //         </FormControl>

    //         <FormControl id="cardName" isInvalid={!isCardNameValid} isRequired mt={4}>
    //           <FormLabel>Cardholder Name</FormLabel>
    //           <Input
    //             type="text"
    //             placeholder="Enter cardholder name"
    //             value={cardName}
    //             onChange={(e) => setCardName(e.target.value)}
    //           />
    //           <FormErrorMessage>Cardholder name is required</FormErrorMessage>
    //         </FormControl>

    //         <Flex mt={4}>
    //           <FormControl id="expiryDate" isInvalid={!isExpiryDateValid} isRequired mr={2}>
    //             <FormLabel>Expiry Date</FormLabel>
    //             <Input
    //               type="text"
    //               placeholder="MM/YY"
    //               value={expiryDate}
    //               onChange={(e) => setExpiryDate(e.target.value)}
    //             />
    //             <FormErrorMessage>Expiry date is required</FormErrorMessage>
    //           </FormControl>

    //           <FormControl id="cvv" isInvalid={!isCvvValid} isRequired>
    //             <FormLabel>CVV</FormLabel>
    //             <Input
    //               type="text"
    //               placeholder="Enter CVV"
    //               value={cvv}
    //               onChange={(e) => setCvv(e.target.value)}
    //             />
    //             <FormErrorMessage>CVV must be 3 digits</FormErrorMessage>
    //           </FormControl>
    //         </Flex>

    //         <Button type="submit" colorScheme="blue" mt={4} isLoading={isLoading} isDisabled={isLoading}>
    //           {isLoading ? 'Processing...' : 'Pay Now'}
    //         </Button>
    //       </form>
    //     </Box>
    //   </Box>
    // </Flex>
  );
};

export default PaymentComponent;

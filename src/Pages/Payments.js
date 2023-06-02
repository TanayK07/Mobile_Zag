import React, { useState } from 'react';
import { Box, Button, Text, Flex, Input, Spinner, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const PaymentComponent = () => {
  // State variables to store form input values and status
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing for 3 seconds
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentSuccessful(true);
    }, 3000);
  };

  // Function to handle card number input change and format it
  const handleCardNumberChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\s/g, ''); // Remove spaces from input
    const formattedValue = value
      .replace(/(\d{4})/g, '$1 ') // Add space after every 4 characters
      .trim();
    if (formattedValue.length <= 19) {
      setCardNumber(formattedValue);
    }
  };

  // Function to handle expiration date input change and format it
  const handleExpirationDateChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d/]/g, ''); // Remove non-numeric and non-slash characters
    if (value.length <= 5) {
      if (value.length === 2 && !value.includes('/')) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
      setExpirationDate(value);
    }
  };

  // Function to handle CVV input change and format it
  const handleCvvChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  return (
    <Box>
      <Flex align="center" justify="center" flexDirection="column" mt={5} p={5}>
        <form onSubmit={handleSubmit}>
          {/* Card Number Input */}
          <Flex direction="column" align="flex-start" mb={2}>
            <Text fontSize={4} fontWeight={700} ml={2} mb={1}>
              Card Number
            </Text>
            <Input
              placeholder="Enter Card Number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
          </Flex>

          {/* Card Name Input */}
          <Flex direction="column" align="flex-start" mb={2}>
            <Text fontSize={4} fontWeight={700} ml={2} mb={1}>
              Name on Card
            </Text>
            <Input
              placeholder="Enter Name on Card"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </Flex>

          {/* Expiration Date and CVV Inputs */}
          <Flex spacing={2} mt={5} ml={2} justifyContent="space-between">
            <Flex direction="column" align="flex-start">
              <Text fontSize={4} fontWeight={700} mb={1}>
                Expiration Date
              </Text>
              <Input
                placeholder="MM/YY"
                value={expirationDate}
                onChange={handleExpirationDateChange}
                required
              />
            </Flex>
            <Flex direction="column" align="flex-start">
              <HStack mb={1}>
                <Text fontSize={4} fontWeight={700}>
                  Security Code
                </Text>
                <FontAwesomeIcon
                  fontSize={'0.7rem'}
                  icon={faCircleQuestion}
                  style={{ color: '#7e797c' }}
                />
              </HStack>
              <Input
                placeholder="CVV"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
            </Flex>
          </Flex>

          {/* Payment Processing or Payment Success */}
          <Flex justify="center" mt={50}>
            {isProcessing ? (
              // Payment Processing
              <Flex direction="column" align="center">
                <Spinner size="lg" color="grey" mb={2} />
                <Text fontSize={20} fontWeight={700} p={2} mt={1}>
                  Payment is processing
                </Text>
                <Text fontSize="0.6rem">Please wait, do not close the screen.</Text>
              </Flex>
            ) : isPaymentSuccessful ? (
              // Payment Success
              <Flex direction="column" align="center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  mb={10}
                  style={{ color: '#0d9b03' }}
                  size="2x"
                />
                <Text fontSize={20} fontWeight={700} p={2} mt={1}>
                  Payment Received!
                </Text>
                <Text fontSize="0.6rem">Your order is now on the way.</Text>
                <Text fontSize="0.6rem">Please check your email for receipt</Text>
              </Flex>
            ) : (
              // Payment Button
              <Button type="submit" w="100%" colorScheme="pink" h={45} position="relative">
                <Box position="absolute" top="50%" transform="translateY(-50%)" marginRight={5}>
                  <HStack>
                    <FontAwesomeIcon icon={faLock} style={{ color: '#ffffff' }} />
                    <Text fontSize="0.8rem">Pay now</Text>
                  </HStack>
                </Box>
              </Button>
            )}
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default PaymentComponent;

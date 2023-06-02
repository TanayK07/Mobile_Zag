import React from "react";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Card1 from "./card1";
import Card2 from "./card2";

const Middlecardshome = () => {
  const cardData = [
    {
      image: "bag1.png",
      title: "50% Off",
      description: "On everything today",
      code: "With code: FSCREATION",
      link: "/product", // Add the link property for navigation
    },
    {
      image: "watch.png",
      title: "70% Off",
      description: "On everything today",
      code: "With code: FSCREATION",
      link: null, // Set the link property to null for the second card
    },
  ];

  const newArrivalsData = [
    {
      image: "bag2.png",
      title: "The Marc Jacobs",
      description: "Traveller Tote",
      price: "$195.00",
    },
    {
      image: "shoes.png",
      title: "Axel Arigato",
      description: "Clean 90 Triple Sneakers",
      price: "$245.00",
    },
    {
      image: "bag2.png",
      title: "The Marc Jacobs",
      description: "Traveller Tote",
      price: "$195.00",
    },
  ];

  return (
    <>
      <Flex p={4} overflowX="auto">
        <HStack spacing={4}>
          {cardData.map((data, index) => (
            // Render the Link component only if a valid link is provided
            data.link ? (
              <Link to={data.link} key={index}> 
                <Card1 {...data} />
              </Link>
            ) : (
              <Card1 key={index} {...data} />
            )
          ))}
        </HStack>
      </Flex>

      <Flex justify="space-between" px={4}>
        <Text>New Arrivals</Text>
        <Text>View All</Text>
      </Flex>

      <Flex p={4} overflowX="auto">
        <HStack spacing={4}>
          {newArrivalsData.map((data, index) => (
            <Card2 key={index} {...data} />
          ))}
        </HStack>
      </Flex>
    </>
  );
};

export default Middlecardshome;

import { Box, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import BackArrowIcon from "./BackArrow";
import { useAppState } from "context";

const DetailsOverview = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  const { selectedItems, subTotalPrice }: any = useAppState();


  const deliveryFee = selectedItems.length > 0 ? 300 : 0;

  const displayItems = () => {
    if (selectedItems.length > 0) {
      return selectedItems.map((item: any) => {
        return (
          <Flex
            key={item.name}
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </Flex>
        );
      });
    } else {
      return <Text>No items selected</Text>;
    }
  };

  return (
    <Box>
      <BackArrowIcon onClick={() => goBack()} />

      <Box borderBottom="1px" borderColor="primary.gray1" pb="4">
        <Text fontSize="lg" fontWeight={700} color="primary.text" mb={3} mt={6}>
          Order Information
        </Text>
        <Text fontSize="md" fontWeight={400} color="primary.gray3">
          Here is your order details. Kindly confirm before you proceed to pay
        </Text>
      </Box>

      <Box my={5}>
        <Text fontSize="lg" fontWeight={700} color="primary.text" pb={3}>
          Phone Number
        </Text>
        <Text color="primary.gray4" fontWeight={400} fontSize="md">
          080678900033
        </Text>
      </Box>

      <Box my={5}>
        <Text fontSize="lg" fontWeight={700} color="primary.text" pb={3}>
          Delivery Address
        </Text>
        <Text color="primary.gray4" fontWeight={400} fontSize="md">
          No 26, Agbowo opposite Agowo shopping complex
        </Text>
      </Box>

      <Box bg="primary.white" borderRadius="10px" px={3} py={4}>
        <Text fontSize="md" fontWeight={700} color="primary.text" mb={4}>
          Products Ordered
        </Text>

        <Box borderBottom="1px dashed" borderColor="primary.gray1" pb={4}>
          {displayItems()}
        </Box>

        <Box mt={4}>
          <Flex w="sizes.full" justify="space-between" align="center" mb="4">
            <Text color="primary.gray4" fontWeight={600} fontSize="md">
              SubTotal
            </Text>
            <Text fontWeight={400} fontSize="sm" color="primary.gray2">
              #{subTotalPrice}
            </Text>
          </Flex>

          <Flex w="sizes.full" justify="space-between" align="center" mb="4">
            <Text color="primary.gray4" fontWeight={600} fontSize="md">
              Delivery Fee
            </Text>
            <Text fontWeight={400} fontSize="sm" color="primary.gray2">
              #{deliveryFee}
            </Text>
          </Flex>

          <Flex w="sizes.full" justify="space-between" align="center" mb="4">
            <Text color="primary.text" fontWeight={700} fontSize="md">
              Total
            </Text>
            <Text fontWeight={400} fontSize="sm" color="primary.gray2">
              #{`${Number(subTotalPrice) + deliveryFee}`}
            </Text>
          </Flex>
        </Box>
      </Box>
      <Button
        bg="primary.one"
        size="md"
        w="sizes.full"
        px="8"
        mt={4}
        colorScheme="red"
        color="primary.white"
        isDisabled={selectedItems.length < 1}
      >
        MAKE PAYMENT
      </Button>
    </Box>
  );
};

export default DetailsOverview;

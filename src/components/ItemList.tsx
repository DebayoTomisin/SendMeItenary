import React, { useState, useEffect, useCallback } from "react";
import { Text, Flex, Box, Checkbox } from "@chakra-ui/react";
import { useAppState } from "context";

type itemProps = {
  name: string;
  price: string;
  weight: string;
  category: string;
};

const ItemList = ({ data }: any) => {
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
  );

  const {
    selectedItems,
    setSelectedItems,
    setSubTotalPrice,
    subTotalPrice,
  }: any = useAppState();

  const handleSelectedItem = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const selectedItem = data.filter((item: itemProps, index: number) => {
      return updatedCheckedState[index] === true;
    });

    setSelectedItems(selectedItem);
  };

  useEffect(() => {
    function handleSubTotalPrice() {
      if (selectedItems.length > 0) {
        const subTotal = selectedItems.reduce(
          (acc: number, item: itemProps) => {
            return acc + Number(item.price);
          },
          0
        );

        setSubTotalPrice(subTotal);
      }
    }
    handleSubTotalPrice();
  }, [selectedItems, setSubTotalPrice]);

  return (
    <Box>
      {data.map((item: itemProps, index: number) => {
        return (
          <Flex
            key={index}
            w="sizes.full"
            justify="space-between"
            align="center"
            mb="8"
          >
            <Flex gap="2">
              <Checkbox
                size="lg"
                colorScheme="red"
                onChange={() => handleSelectedItem(index)}
              >
                <Text fontWeight={600} color="primary.text" fontSize="md">
                  {item.name} {item.weight}
                </Text>
              </Checkbox>
            </Flex>

            <Text fontWeight={400} fontSize="sm" color="primary.gray2">
              #{item.price}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default ItemList;

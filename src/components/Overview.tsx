import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Select,
  Input,
} from "@chakra-ui/react";
import ItemList from "./ItemList";
import { selectOptions, dataOptions } from "src/options";
import { useAppState } from "context";
import { useRouter } from "next/router";

const Overview = () => {
  const [btnActive, setBtnActive] = useState(false);

  const { selectedItems }: any = useAppState();

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(dataOptions);

  const router = useRouter();

  const handleNext = () => {
    router.push("/details");
  };

  const handleSearch = () => {
    const filtered = dataOptions.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleSelect = (e: any) => {
    const filtered = dataOptions.filter((item) => {
      return item.category === e.target.value;
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    selectedItems.length > 0 ? setBtnActive(true) : setBtnActive(false);
  }, [selectedItems]);

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  return (
    <>
      <Box>
        <Flex w="sizes.full" justify="space-between" align="center" mb="4">
          <Text
            fontSize="lg"
            color="primary.text"
            fontWeight={700}
            letterSpacing={0.04}
          >
            New Order
          </Text>

          <Button
            bg="primary.one"
            size="sm"
            px="8"
            colorScheme="red"
            color="primary.white"
            isDisabled={!btnActive}
            onClick={() => handleNext()}
          >
            Next
          </Button>
        </Flex>

        <Text fontWeight={700} color="primary.grey" size="lg">
          SELECT PRODUCTS
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4} mb={8}>
          <GridItem w="100%">
            <Select
              color="primary.red2"
              bg="primary.lightRed"
              border="2px"
              borderColor="primary.red"
              borderRadius="md"
              size="sm"
              variant="filled"
              onChange={handleSelect}
            >
              {selectOptions.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.name}
                  </option>
                );
              })}
            </Select>
          </GridItem>

          <GridItem w="100%" colSpan={3}>
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              size="sm"
              bg="primary.white"
              color="primary.gray1"
              variant="outline"
              borderRadius="6px"
              borderColor="#CCCDD5"
              placeholder="Search"
            />
          </GridItem>
        </Grid>

        <ItemList data={filteredData} />
      </Box>
    </>
  );
};

export default Overview;

import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "context";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";

const colors = {
  primary: {
    one: "#FF1B03",
    two: "#F6F5F5",
    text: "#092443",
    grey: "#CDCCCC",
    white: "#FFFFFF",
    lightRed: "#F1D1D1",
    red2: "#CB4234",
    red: "#F18479",
    gray1: "#8F92A1",
    gray2: "#777E96",
    checkRed: "#FF1B03",
    gray3: "#7C7C7C",
    gray4: "#596273",
  },
};

const sizes = {
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    screen: "100vh",
  },
};

const theme = extendTheme({ colors, sizes });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress startPosition={0.3} showOnShallow={true} />
      <AppProvider>
        <ChakraProvider theme={theme}>
          <Box pt={8} px="4" bg="primary.two" minH="sizes.screen">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </AppProvider>
    </>
  );
}

export default MyApp;

"use client";
import { ChakraProvider, defineConfig, createSystem } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(config);

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div suppressHydrationWarning>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </div>
  );
}

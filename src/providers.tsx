"use client";

import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apollo-client";
import { ColorProvider } from "@/context/ColorContext";
import { NavigationProvider } from "@/context/NavigationContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ColorProvider>
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </ColorProvider>
    </ApolloProvider>
  );
}

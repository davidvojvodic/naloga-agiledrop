import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const client = new QueryClient();

const Providers = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

Providers.propTypes = {
  children: React.ReactNode,
};

export default Providers;

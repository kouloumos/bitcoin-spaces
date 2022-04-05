import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

import { LandingPage } from "./pages";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

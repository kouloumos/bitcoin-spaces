import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { TSpaceV2State } from "src/models/Spaces";

import { Description, HallofFame, Navbar, Spaces } from "./components";
import { Content, ContentWrapper, PageWrapper } from "./LandingPage.style";

const LandingPage = () => {
  const location = useLocation();
  const [state, setState] = useState<TSpaceV2State>("live");

  useEffect(() => {
    if (["/live", "/scheduled"].includes(location.pathname)) {
      setState(location.pathname.substring(1) as TSpaceV2State);
    }
  }, [location.pathname]);

  return (
    <PageWrapper>
      <Navbar />
      <Description state={state} />
      <ContentWrapper>
        <Content>
          <Routes>
            <Route path="/hosts" element={<HallofFame />} />
            <Route path="/speakers" element={<HallofFame state="speaker" />} />
            <Route path="/ended" element={<Spaces state="ended" />} />
            <Route path="/scheduled" element={<Spaces state="scheduled" />} />
            <Route path="/*" element={<Spaces state="live" />} />
          </Routes>
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default LandingPage;

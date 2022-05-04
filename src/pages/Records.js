import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 20%;
  background-color: blue;
`;

const RightContainer = styled.div`
  height: 100vh;
  width: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: blue;
`;

const RightMainTop = styled.div`
  height: 15%;
  width: 100vw;
  background-color: white;
  display: flex;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #999;
`;

const RightMainTopRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 18px;
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100vw;
  background-color: black;
`;

const Records = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <RightMainTop>
              <RightMainTopLeft>
                <h3>Clinical Notes</h3>
                <h5>All added documents will be listed here</h5>
              </RightMainTopLeft>
              <RightMainTopRight></RightMainTopRight>
            </RightMainTop>
            <RightMainBottom></RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default Records;

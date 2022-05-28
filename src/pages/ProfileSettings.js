import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";
import { useState } from "react";
import NotificationSettings from "../components/profilepage/NotificationSettings";
import AccountSettings from "../components/profilepage/AccountSettings";
import MyMedicalInformation from "../components/profilepage/MyMedicalInformation";
import Insurance from "../components/profilepage/Insurance";
import AddressContactInfo from "../components/profilepage/AddressContactInfo";
import PaymentDetails from "../components/profilepage/PaymentDetails";
import greybackground from "../media/greybackground.jpg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: #2658e2;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 15%;
  background-color: blue;
`;

const RightContainer = styled.div`
  height: 100vh;
  width: 85%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const RightMainTop = styled.div`
  height: 20vh;
  width: 100%;
  background-image: url(${greybackground});
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  overflow: hidden;

  .avatar {
    height: 100px;
    width: 100px;
    padding-right: 14px;
  }
`;

const Pic = styled.div`
  height: 12vh;
  width: 7%;
  background-color: black;
  margin-right: 2%;
`;

const BottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const RightMainBottomComponentContainer = styled.div`
  height: 90%;
  width: 70%;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ComponentTabContainer = styled.div`
  width: 100%;
  height: 7%;
  background-color: #eaedf1;
  display: flex;
`;

const Tab = styled.div`
  height: 100%;
  width: 14%;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProfileSettings() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);

  const firstButton = () => {
    setToggle(true);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };

  const secondButton = () => {
    setToggle(false);
    setToggle2(true);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };

  const thirdButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(true);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };

  const fourthButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(true);
    setToggle5(false);
    setToggle6(false);
  };

  const fifthButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(true);
    setToggle6(false);
  };

  const sixthButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(true);
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar></Sidebar>
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <RightMainTop>
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="pic"
                className="avatar"
              />
              <h1>Nat Scott</h1>
            </RightMainTop>
            <BottomContainer>
              <RightMainBottomComponentContainer>
                <ComponentTabContainer>
                  <Tab onClick={firstButton}>
                    <h5>Account Settings</h5>
                  </Tab>
                  <Tab onClick={secondButton}>
                    <h5>Notification Settings</h5>
                  </Tab>
                  <Tab onClick={thirdButton}>
                    <h5>My medical Information</h5>
                  </Tab>
                  <Tab onClick={fourthButton}>
                    <h5>Insurance</h5>
                  </Tab>
                  <Tab onClick={fifthButton}>
                    <h5>address and Contact Info</h5>
                  </Tab>
                  <Tab onClick={sixthButton}>
                    <h5>Payment Details</h5>
                  </Tab>
                </ComponentTabContainer>
                {toggle && <AccountSettings />}
                {toggle2 && <NotificationSettings />}
                {toggle3 && <MyMedicalInformation />}
                {toggle4 && <Insurance />}
                {toggle5 && <AddressContactInfo />}
                {toggle6 && <PaymentDetails />}
              </RightMainBottomComponentContainer>
            </BottomContainer>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
}

export default ProfileSettings;

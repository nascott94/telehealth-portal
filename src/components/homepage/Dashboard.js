import React from 'react';
import styled from '@emotion/styled';

const TopContainer = styled.div`
  .dashboard-top {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 5px;
    width: 90%;
    height: 75px;

    .left {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 20px;
        color: black;
      }
      .sub-title {
        font-weight: bold;
        font-size: 15px;
        color: rgb(160, 160, 160);
        margin-top: 5px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 30px;

      .appt-button {
        width: 100%;
        height: 80%;
        padding: 17px;
        background-color: #f7bc01;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        :hover {
          background-color: #eaedf1;
        }
      }
    }
  }
`;

const BottomContainer = styled.div`
  .dashboard-bottom {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 25px;
    width: 90%;

    .left {
      display: flex;
      flex-direction: column;
      .title {
        font-weight: bold;
        font-size: 35px;
        color: black;
      }
      .sub-title {
        font-size: 20px;
        color: rgb(160, 160, 160);
        margin-top: 5px;
      }

      .appointments {
        display: flex;
        flex-direction: column;
        padding-top: 30px;

        .view-button {
          /* margin-left: auto; */
          justify-content: space-between;
        }

        .appt-box {
          -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
          box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
          border-radius: 10px;
          width: 100%;
          height: 75px;
        }
      }

      .test-results {
        display: flex;
        flex-direction: column;
        padding-top: 30px;

        .view-button {
          /* margin-left: auto; */
          justify-content: space-between;
        }

        .test-box {
          -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
          box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
          border-radius: 10px;
          width: 100%;
          height: 75px;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .patient {
        font-size: 15px;
        padding: 10px 100px 10px 20px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 6px;
      }
    }
  }
`;

const Dashboard = () => {
  return (
    <>
      <TopContainer>
        <div className="dashboard-top">
          <div className="left">
            <span className="title">Patient Dashboard</span>
            <span className="sub-title">Welcome to the Patient Dashboard</span>
          </div>
          <div className="right">
            <button className="appt-button">Make Appointment</button>
          </div>
        </div>
      </TopContainer>
      <BottomContainer>
        <div className="dashboard-bottom">
          <div className="left">
            <div className="title">Hello Olive</div>
            <div className="sub-title">Welcome to your dashboard</div>
            <div className="appointments">
              <div>Today's appointments and registations</div>
              <button className="view-button">View All</button>
              <div className="appt-box">None Today</div>
            </div>
            <div className="test-results">
              <div>Today's appointments and registations</div>
              <button className="view-button">View All</button>
              <div className="test-box">None Today</div>
            </div>
          </div>
          <div className="right">
            <select name="patient" className="patient">
              <option value="1" selected="selected">
                Olive Scott (self)
              </option>
              <option value="2">Leo Scott</option>
            </select>
          </div>
        </div>
      </BottomContainer>
    </>
  );
};

export default Dashboard;

import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import partlycloudy from "./images/cloudy.png";
import rain from "./images/rain.png";
import snow from "./images/snow.png";
import fog from "./images/fog.png";
import storms from "./images/storms.png";
import sunny from "./images/sunny.png";

const WeatherContainer = styled.div`
  height: 100%;
`;
const Today = styled.div`
  width: 100%;
  text-align: left;
  font-size: 10px;
  padding: 46px;
`;

const InlineDate = styled.div`
  * {
    display: inline;
  }

  p {
    font-size: 14px;
    color: #848484;
  }

  h2 {
    display: block;
    font-size: 20px;
  }
`;

const TodayDescribe = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  align-items: flex-start;
  h1 {
    font-size: 130px;
    flex: 130px;
    margin: 0;
    padding-left: 60px;
  }
  div {
    flex: 300px;
    padding: 60px 0 0 0;
    margin: 0;
    h2 {
      text-align: center;
      font-weight: 400;
      font-size: 17px;
    }
    p {
      text-align: center;
      width: 180px;
      margin: 0 auto;
      color: #848484;
      font-size: 12px;
    }
  }
`;

const Future = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "day day2 day3 day4 day5";
  position: relative;
  justify-items: center;
  height: 100%;
  width: 787px;
  margin: 0;
  transform: translate(-50px, 0px);

  p {
    margin: 0;
    text-align: center;
  }
`;
const FutureDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 9px rgba(129, 129, 129, 0.2);
  margin-right: 30px;
  background-color: white;
  width: 100px;
  height: 150px;
  padding: 18px;
  grid-area: day;

  &:nth-child(2) {
    grid-area: day2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }

  &:nth-child(3) {
    grid-area: day3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
  &:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    grid-area: day4;
  }
  &:nth-child(5) {
    grid-area: day5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
  }
`;

const FutureTemp = styled.div`
  position: absolute;
  bottom: 20px;
  font-weight: 800;
  width: 75%;
  text-align: center;
`;

const PartlyCloudyImage = styled.div`
  background-image: url(${partlycloudy});
  height: 60px;
  width: 60px;
  background-size: 100%;
  margin-left: 20px;
  margin-top: 20px;
`;

const RainImage = styled.div`
  background-image: url(${rain});
  height: 60px;
  width: 60px;
  background-size: 100%;
  margin-left: 22px;
  margin-top: 20px;
`;

const StormImage = styled.div`
  background-image: url(${storms});
  height: 60px;
  width: 60px;
  background-size: 100%;
  margin-left: 17px;
  margin-top: 20px;
`;

const SnowImage = styled.div`
  background-image: url(${snow});
  height: 60px;
  width: 60px;
  background-size: 100%;
  margin-left: 17px;
  margin-top: 20px;
`;

const FogImage = styled.div`
  background-image: url(${fog});
  height: 60px;
  width: 60px;
  background-size: 100%;
  margin-left: 17px;
  margin-top: 20px;
`;

const SunnyImage = styled.div`
  background-image: url(${sunny});
  height: 60px;
  width: 60px;
  background-size: 100%;
  margin-left: 20px;
  margin-top: 20px;
`;

class Weather extends React.Component {
  render() {
    const date = new Date();
    console.log(date);
    return (
      <div>
        {this.props.zip1 && (
          <WeatherContainer>
            <Today>
              <InlineDate>
                <p>
                  <Moment format="MMMM Do[, ] YYYY">{date}</Moment>
                </p>
                <h2> {this.props.city}</h2>
              </InlineDate>
              <TodayDescribe>
                <h1>
                  {/* {this.props.temperatureNow} */}
                  {JSON.stringify(this.props.temperatureNow).slice(0, 2)}&#176;
                </h1>
                <div>
                  <h2>{this.props.conditionsToday}</h2>
                  <p>
                    The high today will be {this.props.temperatureNowHigh}° with
                    winds at {this.props.windSpeed} mph
                  </p>
                </div>
              </TodayDescribe>
            </Today>
            <Future>
              <FutureDiv>
                {/* today */}
                <p>Today</p>
                <div>
                  {(this.props.conditionsID === 1003 || this.props.conditionsID === 1006) && (
                    <PartlyCloudyImage />
                  )}
                  {this.props.conditionsID === 1063 && <RainImage />}
                  {this.props.conditionsID === 1186 && <RainImage />}
                  {this.props.conditionsID === 1243 && <StormImage />}
                  {(this.props.conditionsID === 1030 || this.props.conditionsID === 1114) && <SnowImage />}
                  {this.props.conditionsID === 1009 && <FogImage />}
                  {this.props.conditionsID === 1000 && <SunnyImage />}
                </div>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureNow).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* tomorrow */}
                <p>
                  <Moment add={{ days: 1 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <div>
                  {(this.props.conditionsIDTomorrow === 1003 || this.props.conditionsIDTomorrow === 1006) && (
                    <PartlyCloudyImage />
                  )}
                  {this.props.conditionsIDTomorrow === 1063 && <RainImage />}
                  {this.props.conditionsIDTomorrow === 1186 && <RainImage />}
                  {this.props.conditionsIDTomorrow === 1243 && <StormImage />}
                  {(this.props.conditionsIDTomorrow === 1030 || this.props.conditionsIDTomorrow === 1114) && <SnowImage />}
                  {this.props.conditionsIDTomorrow === 1009 && <FogImage />}
                  {this.props.conditionsIDTomorrow === 1000 && <SunnyImage />}
                </div>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureTomorrow).slice(0, 2)}
                  &#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* day 3 */}
                <p>
                  {" "}
                  <Moment add={{ days: 2 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <div>
                  {(this.props.conditionsID3 === 1003 || this.props.conditionsID3 === 1006) && (
                    <PartlyCloudyImage />
                  )}
                  {this.props.conditionsID3 === 1063 && <RainImage />}
                  {this.props.conditionsID3 === 1186 && <RainImage />}
                  {this.props.conditionsID3 === 1243 && <StormImage />}
                  {(this.props.conditionsID3 === 1030 || this.props.conditionsID3 === 1114) && <SnowImage />}
                  {this.props.conditionsID3 === 1009 && <FogImage />}
                  {this.props.conditionsID3 === 1000 && <SunnyImage />}
                </div>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureDay3).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* day 4 */}
                <p>
                  <Moment add={{ days: 3 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <div>
                  {(this.props.conditionsID4 === 1003 || this.props.conditionsID4 === 1006) && (
                    <PartlyCloudyImage />
                  )}
                  {this.props.conditionsID4 === 1063 && <RainImage />}
                  {this.props.conditionsID4 === 1186 && <RainImage />}
                  {this.props.conditionsID4 === 1243 && <StormImage />}
                  {(this.props.conditionsID4 === 1030 || this.props.conditionsID4 === 1114) && <SnowImage />}
                  {this.props.conditionsID4 === 1009 && <FogImage />}
                  {this.props.conditionsID4 === 1000 && <SunnyImage />}
                </div>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureDay4).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
              <FutureDiv>
                {/* day 5 */}
                <p>
                  <Moment add={{ days: 4 }} format="ddd">
                    {date}
                  </Moment>
                </p>
                <div>
                  {(this.props.conditionsID5 === 1003 || this.props.conditionsID5 === 1006) && (
                    <PartlyCloudyImage />
                  )}
                  {this.props.conditionsID5 === 1063 && <RainImage />}
                  {this.props.conditionsID5 === 1186 && <RainImage />}
                  {this.props.conditionsID5 === 1243 && <StormImage />}
                  {(this.props.conditionsID5 === 1030 || this.props.conditionsID5 === 1114) && <SnowImage />}
                  {this.props.conditionsID5 === 1009 && <FogImage />}
                  {this.props.conditionsID5 === 1000 && <SunnyImage />}
                </div>
                <FutureTemp>
                  {JSON.stringify(this.props.temperatureDay5).slice(0, 2)}&#176;
                </FutureTemp>
              </FutureDiv>
            </Future>
          </WeatherContainer>
        )}
        {this.props.error && <p>Error: {this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;

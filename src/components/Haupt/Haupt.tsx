import { Content } from "./styles"

import { WetterData } from '../../model/Wetter'

export interface HauptProps {
  wetterData: WetterData;
  loading: boolean;
  error: boolean;
}

export function Haupt(props :HauptProps) {

  const wetterData = props.wetterData;
  const loading = props.loading;
  const error = props.error ;

  return (
    <Content>
     {  <a data-testid="link" href="https:Wetter.thb" aria-disableds>
        Wetter App
      </a> }

      {!loading && !error && (
        <div className="wrapper">
          <h1>{Math.round(wetterData.current.temp)}°</h1>
          <div className="info">
            <div className="stats">
              <h3>{wetterData.place.name}</h3>
              <span>
                {new Date().toLocaleTimeString('de-DE', {
                  timeZone: wetterData.timezone,
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="status">
              <img src={`http://openweathermap.org/img/wn/${wetterData.current.weather[0].icon}@2x.png`} alt="wetter icon" />
              <span>{wetterData.current.weather[0].description}</span>
            </div>
          </div>
        </div>
      )}
    </Content>
  );
}
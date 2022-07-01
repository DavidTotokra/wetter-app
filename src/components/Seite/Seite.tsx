
import { Suche } from '../Suchen/Suchen';
import { Spinner } from '../Spinner/Spinner'

import { Place, WetterData } from '../../model/Wetter'

import { Content } from "./style";

export interface SeiteProps {
  setCurrentPlace: (params: Place) => void;
  wetterData: WetterData;
  loading: boolean;
  error: boolean;
}

 export function Seite(props:SeiteProps) {

  const setCurrentPlace = props.setCurrentPlace ;
  const wetterData = props.wetterData;
  const loading = props.loading;
  const error = props.error ; 
  






  function datum(index: number) {
    const date = new Date(); 

    const currentDay = date.getDate();
    const daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const rest = (currentDay + index + 1) - daysInCurrentMonth;
    const actualDay = rest >= 0 ? rest + 1 : (currentDay + index + 1);

    const currentWeekday = date.toLocaleString('de-DE', { weekday: "long" });    
    const weekdays = ['Son', 'Mon', 'Diens', 'Wed', 'Donn', 'Frei', 'Sams', 'Son', 'Mon', 'Diens', 'Wed', 'Donn', 'Frei', 'Sams', 'Son', 'Mon'];
    const weekdayIndex = weekdays.findIndex(day => day === currentWeekday);
    const actualWeekday = weekdays[weekdayIndex + index + 6];
    return {actualDay, actualWeekday}
  }

  return (
    <Content>
      <Suche setCurrentPlace={setCurrentPlace} />

      <div className="separator"></div>

      <h1 className="heading">Wetter Details</h1>

      {loading ? <Spinner /> : !error && (
        <div className="container-flex-dual">
          <div>
            <span>Temperatur</span>
            <span>{Math.round(wetterData.current.temp)}°C</span>
          </div>
          <div>
            <span>Bewölkt</span>
            <span>{wetterData.current.clouds}%</span>
          </div>
          <div>
            <span>Luftfeuchtigkeit</span>
            <span>{wetterData.current.humidity}%</span>
          </div>
          <div>
            <span>Wind</span>
            <span>{(wetterData.current.wind_speed * 3.6).toFixed(1)}km/h</span>
          </div>
          <div>
            <span>Regen</span>
            <span>{wetterData.current.rain?.['1h'] || '0'}mm</span>
          </div>
        </div>
      )}

      {!loading && !error && (
        <>

          <div className="separator"></div>

          <h1 className="heading">Kommende Tage</h1>

          <div className="container-flex-column">
            {wetterData.daily.map((data, index) => {
              const { actualDay, actualWeekday  } = datum(index);
              return (
                <div key={data.sunrise}>
                  <div className="date-box">
                    <span>{actualDay}</span>
                    <span>{actualWeekday}</span>
                  </div>
                  <div className="temperatures">
                    <div>
                      <i className="fas fa-long-arrow-alt-down"></i>
                      <span>{Math.round(data.temp.max)}°</span>
                    </div>
                    <div>
                      <i className="fas fa-long-arrow-alt-up"></i>
                      <span>{Math.round(data.temp.min)}°</span>
                    </div>
                  </div>
                  <div className="rain">
                    <i className="fas fa-tint"></i>
                    <span>{data.rain? data.rain.toFixed(1) : '0'}mm</span>
                  </div>
                  <p className="description">{data.weather[0].description}.</p>
              </div>
              );
            })}
          </div>
        </>
      )}

    </Content>
  );
}
import { useLayoutEffect, useEffect, useState } from 'react'
import axios from 'axios';
  /**
  * Hier ist der API .
  */
import { API_URL } from './services/Api'
  /**
  * Hier ist der Model, weil wir in TypeScript befinden, möchten wir die Ergebnisse, die von der API zurückkommen, stark eingeben .
  */
import { Place, WetterData } from './model/Wetter'
 /**
  * Zufall Auswahl  
  */
import { getZufall } from './services/Zufall_Ort'

import { Haupt } from './components/Haupt/Haupt'

import { Seite } from './components/Seite/Seite'

import { Content, GlobalStyle } from './model/Global'

export function App() {
  const [currentPlace, setCurrentPlace] = useState<Place>({} as Place);
  const [wetterData, setWetterData] = useState({} as WetterData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  
  useLayoutEffect(() => {
    function setZufallErst_Ort() {
      const [ place ] = getZufall(1);
      setCurrentPlace(place);
    };


    setZufallErst_Ort();
 
   }, []);

   useEffect(() => {
    (async function getWetter() {
      if (!currentPlace.name) return;

      try {
        setLoading(true);
        setError(false);
        const { lat, lon } = currentPlace;
        const response =  await axios.get(`${API_URL}&lat=${lat}&lon=${lon}&units=metric`);
        
        setWetterData({
          ...response.data,
          place: currentPlace
        });

      } catch(err) {  
        console.error(err);
        setError(true);
      }
      
      setLoading(false);
    })();
  }, [currentPlace]);



  return (
    <Content >
      <Haupt wetterData={wetterData} loading={loading} error={error}/>
      <Seite setCurrentPlace={setCurrentPlace} wetterData={wetterData} loading={loading} error={error}/>
      <GlobalStyle />
    </Content>
  );
}
export default App;
export interface OrtsAPI {
  address: {
    name: string;
    state: string;
    country: string;
  }
  display_name: string;
  lat: string;
  lon: string;
}

export interface Place {
  name: string;
  display_name?: string;
  lat: string;
  lon: string;
}


interface Wetter {
  icon: string;
  description: string;
}

interface TagWetter {
  rain?: number;
  temp: {
    min: number;
    max: number;
  }
  weather: Wetter[];
  sunrise: number;
}


export interface WetterData {
  current: {
    temp: number;
    clouds: number;
    humidity: number;
    wind_speed: number;
    rain?: {
      '1h': number;
    };
    weather: Wetter[];
  }
  daily: TagWetter[];
  timezone: 'UTC';
  place: Place;
}
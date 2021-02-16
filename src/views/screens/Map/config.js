import {width, height} from '../../styles';

export const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
};

export const GEOLOCATION_OPTIONS_WATCH = {
  enableHighAccuracy: true,
  distanceFilter: 30,
  interval: 10000,
  fastestInterval: 5000,
};

export const ASPECT_RATIO = width / height;
export const LATITUDE = 25.286106;
export const LONGITUDE = 51.534817;
export const LATITUDE_DELTA = 0.0922 / 10;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const SPACE = 0.01;

export const API_KEY = 'AIzaSyAYHscykLHsALDzKuDDoYV-SjME_8YHHqI';

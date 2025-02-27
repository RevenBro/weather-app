export const DEFAULT_PLACE = {
  name:"Tashkent",
  place_id:"tashkent",
  adm_area1:"Toshkent Shahri",
  adm_area2:null,
  country:"Republic of Uzbekistan",
  lat:"41.26465N",
  lon:"69.21627E",
  timezone:"Asia/Tashkent",
  type:"settlement"
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
}

export const UNITS = {
  metric: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "m/s",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%"
  },
  us: {
    temperature: "°F",
    precipitation: "in/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%"
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
}
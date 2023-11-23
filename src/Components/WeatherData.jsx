const apiKey = "073cee779643485ab9a43b49463c9daa";
const createIcon = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const fetchData = await fetch(url);
  const data = await fetchData.json();

  const {
    main: { temp, temp_min, temp_max, humidity },
    name,
    weather,
    sys: { country },
    wind: { speed },
  } = data;
  const { description, icon } = weather[0];

  return {
    temp,
    temp_min,
    temp_max,
    description,
    iconUrl: createIcon(icon),

    name,
    country,
    humidity,
    speed,
  };
};
export { getWeatherData };

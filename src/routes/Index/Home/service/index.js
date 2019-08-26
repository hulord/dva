import $$ from 'cmn-utils';

export async function getList(payload) {
  return $$.post('/home/getList', payload);
}
export async function getWeather(payload) {
  return $$.get('http://t.weather.sojson.com/api/weather/city/101230101', payload);
}
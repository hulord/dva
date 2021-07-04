import $$ from 'cmn-utils';
export async function create ( payload ) {
  return $$.post('/v1/attendance/create', payload);
}
export async function getAttendance(payload){
  return $$.get('/v1/attendance/'+payload.id);
}
export async function delArtical ( payload ) {
  return $$.del('/v1/artical/'+payload.id);
}
export async function getTags(payload){
  return $$.get('/v1/artical/tags'+"?type="+payload.type);
}
export async function updateAttendance(payload){
  return $$.put('/v1/attendance/'+payload.id,payload);
}
export async function deleteImg(payload){
  return $$.del('/v1/image/'+payload.uid,payload);
}
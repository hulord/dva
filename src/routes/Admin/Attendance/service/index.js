import $$ from 'cmn-utils';

export async function getAll(payload){
  return $$.get('/v1/attendance/getall'+"?currentPage="+payload.currentPage+"&showCount="+payload.showCount+"&month="+payload.month);
}
export async function delAttendance(payload){
  return $$.del('/v1/attendance/'+payload.id);
}
export async function getApplyList(payload){
  return $$.get('/v1/attendance/applyList'+"?currentPage="+payload.currentPage+"&showCount="+payload.showCount);
}
export async function applyCreate(payload){
  return $$.post('/v1/attendance/applyCreate');
}
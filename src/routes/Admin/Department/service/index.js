import $$ from 'cmn-utils';

export async function getAll(payload){
  return $$.get('/v1/department/getall'+"?currentPage="+payload.currentPage+"&showCount="+payload.showCount);
}

export async function delDepartment(payload){
  return $$.del('/v1/department/'+payload.id);
}

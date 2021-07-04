import $$ from 'cmn-utils';

export async function getAll(payload){
  return $$.get('/v1/user/getall'+"?currentPage="+payload.currentPage+"&showCount="+payload.showCount);
}
export async function delUser(payload){
  return $$.del('/v1/user/'+payload.id);
}


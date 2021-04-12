import $$ from 'cmn-utils';
export async function create ( payload ) {
  return $$.post('/v1/artical/add', payload);
}
export async function delArtical ( payload ) {
  return $$.del('/v1/artical/'+payload.id);
}
export async function getAll(payload){
  return $$.get('/v1/image');
}

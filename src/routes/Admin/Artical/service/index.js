import $$ from 'cmn-utils';
export async function create ( payload ) {
  return $$.post('/v1/artical/add', payload);
}
export async function delArtical ( payload ) {
  return $$.del('/v1/artical/'+payload.id);
}
export async function getTags(){
  return $$.get('/v1/artical/tags');
}
export async function editArtical(payload){
  return $$.get('/v1/artical/'+payload.id);
}
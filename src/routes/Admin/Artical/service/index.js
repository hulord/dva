import $$ from 'cmn-utils';
export async function create ( payload ) {
  return $$.post('/v1/artical/add', payload);
}
export async function getTags(){
  return $$.get('/v1/artical/tags');
}
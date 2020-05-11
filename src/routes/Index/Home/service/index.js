import $$ from 'cmn-utils';

export async function getArtical(payload) {
  return $$.get('/v1/artical/getall', payload);
}

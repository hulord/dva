import $$ from 'cmn-utils';

export async function getArtical(payload) {
  return $$.get('/artical/getall', payload);
}

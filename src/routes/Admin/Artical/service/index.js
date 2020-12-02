import $$ from 'cmn-utils';

export async function create(payload) {
  return $$.post('/v1/artical/add', payload);
}
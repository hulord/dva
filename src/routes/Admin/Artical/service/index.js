import $$ from 'cmn-utils';

export async function create(payload) {
  return $$.post('/artical', payload);
}
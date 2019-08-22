import $$ from 'cmn-utils';

export async function getList(payload) {
  return $$.post('/home/getList', payload);
}
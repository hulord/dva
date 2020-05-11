import $$ from 'cmn-utils/lib';

export async function login(payload) {
  return $$.post('/user/login',payload);
}
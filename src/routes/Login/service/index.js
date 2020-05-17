import $$ from 'cmn-utils/lib';

export async function login(payload) {
  return $$.post('/v1/user/login',payload);
}
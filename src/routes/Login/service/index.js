import $$ from 'cmn-utils/lib';

export async function login(payload) {
  return $$.post('api/v1/user/Login',payload);
}
import $$ from 'cmn-utils';

export async function articalDetail(payload) {
  return $$.get("/v1"+payload);
}

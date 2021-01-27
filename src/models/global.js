import $$ from 'cmn-utils';
import modelEnhance from '@/utils/modelEnhance';

export default modelEnhance({
  namespace: 'global',

  state: {
    menu: [],
    flatMenu: [],
    vhistory:[],
    is_index:1,
    collapsed:250,
    weather:[]
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(({ pathname }) => {
        if(pathname=="/home"){
          var  is_index = 1;
        }else{
          var  is_index = 2;
        };
        dispatch({
          type: 'setIndex',
          payload:is_index
        }) 
      });
    }
  },
  effects: {
    *getMenu({ payload }, { call, put }) {
      const { status, data } = yield call(getMenu, payload);
      if (status==0) {
        const loopMenu = (menu, pitem = {}) => {
          menu.forEach(item => {
            if (pitem.path) {
              item.parentPath = pitem.parentPath ? pitem.parentPath.concat(pitem.path) : [pitem.path];
            }
            if (item.children && item.children.length) {
              loopMenu(item.children, item);
            }
          });
        }
        loopMenu(data);
        yield put({
          type: 'getMenuSuccess',
          payload: data,
        });
      }
    },
    *getWeather({payload},{call,put}){
      const { data, message, status} = yield call(getWeather,payload);
      const tem=[];const temTop=[];const temLow=[];
      if( status == 0 ){
        var week_data = data.data.forecast;
        week_data.map((item)=>{
          tem.push({value:parseInt(item.high),day:item.date,name:"当前温度"});
          temTop.push({value:parseInt(item.high),day:item.date,name:"最高温度"});
          temLow.push({value:parseInt(item.low),day:item.date,name:"最低温度"});
        })
      }
      var today_data = data.data;
       yield put({
         type:'setWeather',
         payload:{today:{wea:today_data.shidu,temperature:today_data.wendu,air_tips:today_data.ganmao,pm10:today_data.pm10,pm25:today_data.pm25},areaChat:{tem,temTop,temLow}}
       })
   }
  },

  reducers: {
    getMenuSuccess(state, { payload }) {
      return {
        ...state,
        menu: payload,
        flatMenu: getFlatMenu(payload),
      };
    },
    setIndex(state,{ payload }){
      return { ...state,is_index:payload }
    },
    setWeather(state,{ payload }){
      return {...state,weather:payload}
    } 
  },
});

export function getFlatMenu(menus) {
  let menu = [];
  menus.forEach(item => {
    if (item.children) {
      menu = menu.concat(getFlatMenu(item.children));
    }
    menu.push(item);
  });
  return menu;
}
//获取菜单
export async function getMenu(payload) {
  return $$.post('/v1/menu', payload);
}
//获取天气信息
export async function getWeather(payload) {
  return $$.get('/v1/common/getWeather/'+payload);
}


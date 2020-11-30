import $$ from 'cmn-utils';
import modelEnhance from '@/utils/modelEnhance';
import functions from '@/utils/func.js';

export default modelEnhance({
  namespace: 'global',

  state: {
    menu: [],
    flatMenu: [],
    vhistory:[],
    is_index:1,
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
        console.log(data)
        yield put({
          type: 'getMenuSuccess',
          payload: data,
        });
      }
    },
    *getWeather({payload},{call,put}){
      const response = yield call(getWeather,payload);
      const tem=[];const temTop=[];const temLow=[];
      if(response){
        var week_data = response.data[0].data;
        week_data.map((item)=>{
          tem.push({value:parseInt(item.tem),day:item.date,name:"当前温度"});
          temTop.push({value:parseInt(item.tem1),day:item.date,name:"最高温度"});
          temLow.push({value:parseInt(item.tem1),day:item.date,name:"最低温度"});
        })
      }
      var today_data = week_data[0];
       yield put({
         type:'setWeather',
         payload:{today:{wea:today_data.wea,temperature:today_data.tem,air_tips:today_data.air_tips},areaChat:{tem,temTop,temLow}}
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
  return $$.post('/v1/home/getWeather',payload);
}


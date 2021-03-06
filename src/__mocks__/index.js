// http://www.wheresrhys.co.uk/fetch-mock/api
import packMock from '@/utils/packMock';
import user from './user';
import crud from './crud';
import tree from './tree';
import datatable from './datatable';
import charts from './charts';
import home from './home';
import formData from './form';
/**
 * 加载mock文件
 * packMock(mock1[,mock2])
 */
packMock(
  crud,
  tree,
  datatable,
  charts,
  formData,
  home
);
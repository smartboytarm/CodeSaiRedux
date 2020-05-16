import { combineReducers } from 'redux';
import QuanLyXeReducers from './QuanLyXeReducers';
import BaiTapThuKinhReducer from './BaiTapThuKinhReducer';
const rootReduces = combineReducers({
    // Noi khai bao cac state cua cac COMP theo nghiep vu
    stateModal: QuanLyXeReducers,
    BaiTapThuKinhReducer
})

export default rootReduces;
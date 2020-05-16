const stateModal = {
    thongTinXe: { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/CarBasic/products/black-car.jpg', gia: 1000 }
}

//observe variable
const QuanLyXeReducers = (state = stateModal, action) => {
    switch (action.type) {
        case 'XEM_THONG_TIN':
            return {...state, thongTinXe: {...action.thongTinXe } }
        default:
            return {...state }
    }
    return {...state };
}
export default QuanLyXeReducers;
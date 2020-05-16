
const initialState = {
    glassesCurrent: { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' }
}

const BaiTapThuKinhReducer = (state = initialState, { type, action }) => {
    switch (action.type) {

    case 'CHANGE_GLASSES':
        return { ...state }

    default:
        return state
    }
}
export default BaiTapThuKinhReducer;
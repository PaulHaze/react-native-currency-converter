import { CHANGE_THEME_COLOR } from '../actions/themes';

const initialState = {
  themeColor: '#4F6D7A',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_COLOR:
      return {
        ...state,
        themeColor: action.color,
      };
    default:
      return state;
  }
};

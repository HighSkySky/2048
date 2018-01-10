// action types
const INIT_LIST = 'INIT_LIST';
const CHANGE_LIST = 'CHANGE_LIST';

// reducer
export default function (state, action) {
  if (!state) {
    state = { list: new Array(16).fill('')  }
  };

  switch (action.type) {
    case INIT_LIST: 
      return { list: action.list };
    case CHANGE_LIST: 
      return { list: action.list };
    default: 
      return state;
  }
}

// action creators
export const initList = () => {
  return { 
    type: INIT_LIST, 
    list: new Array(16).fill('') 
  };
}

export const changeList = (list) => {
  return {
    type: CHANGE_LIST,
    list
  }
}
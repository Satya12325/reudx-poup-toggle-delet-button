import { ADD_TODO, REMOVE_TODO_ITEM, TOGGLE_TODO_STATUS } from "./actionType";

const initialState = {
  todo: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    case REMOVE_TODO_ITEM: {
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== payload?.id)
      };
    }

    case TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === payload.id ? { ...item, status: !item.status } : item
        )
      };
    }
    default:
      return state;
  }
};

export { reducer };

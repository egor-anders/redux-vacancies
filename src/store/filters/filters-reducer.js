import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from "./filters-actions";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }

      return state;
    }

    case REMOVE_FILTER: {
      return state.filter((el) => el !== action.filter);
    }

    case CLEAR_FILTERS: {
      return [];
    }

    default: {
      return state;
    }
  }
};

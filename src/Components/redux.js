import data from "../Views/listDeFilms";
const { createSlice, configureStore } = require("@reduxjs/toolkit");

const likeSlice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    add: (state, action) => {
      //{type: "like/add", payload:"nouvelle object"}
      
      state.push(action.payload);
    },
    delete: (state, action) => {
      //{ type: "like/delete" , payload: id}
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

// export const select = (state) => state;

// export const {add, delete} = likeSlice.actions;

export const store = configureStore({
  reducer: {
    like: likeSlice.reducer,
  },
});

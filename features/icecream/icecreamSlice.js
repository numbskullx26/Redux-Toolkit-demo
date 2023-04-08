const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numberOfIcecreams += action.payload;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamSlice = icecreamSlice.actions;

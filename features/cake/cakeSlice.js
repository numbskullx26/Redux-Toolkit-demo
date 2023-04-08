// Importing the function createSlice() from the Redux-toolkit
const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfCakes: 10,
};

//Assinging the function to a constant variable
// This function takes an object as an argument
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

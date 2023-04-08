const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamSlice = require("../features/icecream/icecreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamSlice,
  },
});

module.exports = store;

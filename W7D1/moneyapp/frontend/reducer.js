const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  const {rates, baseCurrency} = action;
  switch(action.type){
    case "SWITCH_CURRENCY":
      return {rates: rates, baseCurrency: baseCurrency};
    default:
      return state;
  }
};

window.reducer = reducer;

export default reducer;

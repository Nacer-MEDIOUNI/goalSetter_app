const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  message: "",
};


export const goalSlice =({
  name:'goal',
  initialState,
  reducers: {
    reset:(state) => initialState
  }
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer 
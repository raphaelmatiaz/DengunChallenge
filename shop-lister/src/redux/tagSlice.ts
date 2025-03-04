// "use client"
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface ProductTag {
//     tag: string;
//     image: string;
// }

// interface TagState {
//     productTags: ProductTag[];
// }

// const initialState: TagState = {
//     productTags: [],
// };

// const tagSlice = createSlice({
//     name: "tag",
//     initialState,
//     reducers: {
//         setProductTags: (state, action: PayloadAction<ProductTag[]>) => {
//             state.productTags = action.payload;
//         },
//     },
// });

// export const { setProductTags } = tagSlice.actions;
// export default tagSlice.reducer;

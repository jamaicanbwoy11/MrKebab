import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prods: [
    {
      prodId: 1,
      name: "Chicken Kebab & Rice",
      price: 17.00,
      image:
        "https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_69e56976fc9bee70c1d2eaa85c0c8dea9f722a2f.png",
      sale: true,
      description:
        "Chicken breast, plain greek yogurt, grain white rice, lemon, red onion.",
      discount: 2,
    },
    {
      prodId: 2,
      name: "Lahmacun",
      price: 12.00,
      image:
        "https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_5b7d26c4d99b922929b7c30ce06be0fd58a71500.png",
      sale: false,
      description:
        "Ground lamb, lemon, red bell pepper, crust, olive oil.",
      discount: 0,
    },
    {
      prodId: 3,
      name: "Zucchini Pancake",
      price: 9.95,
      image:
        "https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_d2fce7d4fae7323ea1b94f177e0a41a42fe0dd09.png",
      sale: false,
      description:
        "Zucchini, carrots, dill, flour, eggs & mozzarella.",
      discount: 0,
    },
    {
      prodId: 4,
      name: "Chicken Kebab Wrap",
      price: 13,
      image:"https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_2978e0c34dbebfc46bf96c994436a5790a22017a.png",
      sale: false,
      description:
        "Chicken, pita bread, tzatziki sauce, beef tomatoes, red onion.",
      discount: 0,
    },
    {
      prodId: 1,
      name: "Lamb Chops",
      price: 15.95,
      image:
        "https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_431bf3b995a99c2cd6899b97187d1542a965cec9.png",
      sale: false,
      description:
        "Plain greek yogurt, lamb steak, basmati rice, tomatoes, iceberg lettuce.",
      discount: 0,
    },
    {
      prodId: 2,
      name: "Chicken & Lamb Adana Kebab",
      price: 17.00,
      image:
        "https://static.easy.restaurant/media/7001e384f5115ae83de5e75990365db83aaf2137/menu/thumb/400x400_94940e534aedd3f6d9bb77c6322f6641dbb7432a.png",
      sale: false,
      description:
        "ground chicken, ground lamb, basmati rice, tomatoes, olive oil, tomatoes.",
      discount: 0,
    },
    {
      prodId: 3,
      name: "Kebab And Lamb Gyro",
      price: 17.50,
      image:
        "https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_9aaa0b523023790b2cf1df9dc629ba14abd0edd5.png",
      sale: false,
      description:
        "Ground lamb cooked on a rotisserie, lamb doner slices, freshly chopped tomatoes and basmati rice.",
      discount: 0,
    },
    {
      prodId: 4,
      name: "Lamb Kebab On Turkish Bread",
      price: 8.95,
      image:"https://static.easy.restaurant/media/fc251f8a8d36d58864245ce34cfeb91ca8d2cc8f/menu/thumb/400x400_6153f0b97fb44420cd413a37979f8e6219fc3f36.png",
      sale: false,
      description:
        "lamb kebab, turkish bread, lettuce and tomatoes, white sauce.",
      discount: 0,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, actions) => {
      state.prods.push({
        prodId: actions.payload.id,
        name: actions.payload.name,
        price: actions.payload.price,
        image: actions.payload.image,
        sale: actions.payload.sale,
        description: actions.payload.description,
        discount: actions.payload.discount,
      });
    },
  },
});

export const { addProduct } = productsSlice.actions;
export const selectProducts = (state) => state.products.prods;
export default productsSlice.reducer;

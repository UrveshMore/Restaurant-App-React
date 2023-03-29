const mockResponse = {
  data: {
    0: [
      {
        id: "A101",
        rname: "Burger king",
        imgdata:
          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        address: "Burger, American",
        delimg:
          "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
        somedata: " 1175 + order placed from here recently",
        price: "₹250 for one",
        rating: "4.2",
        foodList: [
          {
            id: 1,
            title: "Grill Sandwich",
            price: 120,
            rating: "4.3",
            qnty: 0,
            cal: "180-220",
            img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
          },
        ],
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};

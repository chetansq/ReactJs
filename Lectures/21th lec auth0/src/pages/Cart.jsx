import React from 'react'

const Cart = () => {
  const vegFoodItems = [
    {
      id: 1,
      name: 'Veggie Burger',
      description: 'A delicious plant-based patty with fresh lettuce, tomato, and vegan mayo.',
      price: '$6.99',
      img: 'https://static01.nyt.com/images/2020/06/28/dining/jo-black-bean-burgers/merlin_167531589_227b9414-ffad-4b44-ae53-67483bd2bae5-superJumbo.jpg',
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      description: 'A classic pizza topped with fresh mozzarella, tomatoes, and basil.',
      price: '$8.99',
      img: 'https://www.bora.com/fileadmin/_processed_/2/b/csm_Pizza_1edbbde8a5.jpg',
    },
    {
      id: 3,
      name: 'Grilled Veggie Wrap',
      description: 'Grilled vegetables wrapped in a soft tortilla with hummus and spices.',
      price: '$5.99',
      img: 'https://www.hiddenvalley.com/wp-content/uploads/2021/04/roasted-ranch-veggie-wrap-RDP.jpg',
    },
    {
      id: 4,
      name: 'Paneer Tikka',
      description: 'Spicy grilled paneer skewers served with mint chutney.',
      price: '$7.99',
      img: 'https://mrsbalbirsingh.com/cdn/shop/articles/Untitled_design_55.png?v=1620657178',
    },
    {
      id: 5,
      name: 'Falafel Bowl',
      description: 'Crispy falafel served on a bed of fresh greens, hummus, and pita bread.',
      price: '$9.49',
      img: 'https://paleoglutenfree.com/wp-content/uploads/2018/05/falafel-bowls-25-of-54.jpg',
    },
    {
      id: 6,
      name: 'Veg Grilled Sandwich',
      description: 'Grilled tofu slices in a whole-grain sandwich with avocado, lettuce, and tomato.',
      price: '$6.49',
      img: 'https://i0.wp.com/aartimadan.com/wp-content/uploads/2023/10/Cheesy-Veg-Grilled-Sandwich.jpg?fit=800%2C449&ssl=1',
    },
    {
      id: 7,
      name: 'Vegetable Sushi Roll',
      description: 'Rice and veggies rolled in seaweed, served with soy sauce and wasabi.',
      price: '$8.49',
      img: 'https://freshbalancenutrition.com/wp-content/uploads/2022/04/Veggie-Sushi-CA-6.jpg',
    },
    {
      id: 8,
      name: 'Stuffed Bell Peppers',
      description: 'Bell peppers stuffed with quinoa, black beans, and herbs.',
      price: '$7.99',
      img: 'https://cadryskitchen.com/wp-content/uploads/2020/04/stuffed_bell_peppers_air_fryer-1.jpg',
    },
    {
      id: 9,
      name: 'Vegetarian Pasta',
      description: 'Penne pasta tossed in a creamy tomato sauce with sautéed vegetables.',
      price: '$9.99',
      img: 'https://fullofplants.com/wp-content/uploads/2023/04/quick-vegan-pasta-vegetable-stir-fry-with-ginger-and-garlic-8.jpg',
    },
    {
      id: 10,
      name: 'Grilled Tofu Sandwich',
      description: 'Grilled tofu slices served in a whole-grain sandwich with avocado.',
      price: '$6.99',
      img: 'https://i.ytimg.com/vi/KCHxVimjYD0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUxgngSnH0lBx2zn5Z_xmIxR9rcg',
    },
    {
      id: 11,
      name: 'Mushroom Risotto',
      description: 'Creamy arborio rice cooked with wild mushrooms, garlic, and parmesan.',
      price: '$10.49',
      img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/2048x1152/hd-aspect-1504128527-delish-mushroom-risotto.jpg?resize=1200:*',
    },
    {
      id: 12,
      name: 'Sweet Potato Fries',
      description: 'Crispy sweet potato fries served with a tangy garlic aioli dip.',
      price: '$4.99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSn5VI_q2e1BzOj1mxvJoV1GBDXR4ZphauXQ&s',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Vegetarian Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vegFoodItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.price}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cart

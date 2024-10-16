import React from 'react'

const AboutUs = () => {
  return (


    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-red-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">About FastFoodies</h1>
          <p className="mt-4 text-lg">Serving delicious fast food since 1999</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src="https://healthnewshub.org/wp-content/uploads/2024/03/Fast-Food-Restaurants.jpg" alt="Our Story" className="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0" />
            <div className="md:ml-10 text-center md:text-left">
              <p className="text-lg text-gray-700 mb-6">
                FastFoodies started as a small burger stand in the heart of the city, serving mouth-watering burgers, crispy fries, and delicious milkshakes. Over the years, we've grown into a well-loved fast-food chain, known for our quality ingredients and friendly service.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is simple: to provide tasty, affordable fast food for everyone. Whether you're grabbing a quick bite or ordering for a family feast, FastFoodies is here to serve you!
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Food Item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://www.sargento.com/assets/Uploads/Recipe/Image/burgercampNachos_07__FillWzExNzAsNTgzXQ.jpg" alt="Cheeseburger" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Classic Cheeseburger</h3>
                <p className="text-gray-600 mb-2">$5.99</p>
                <p className="text-gray-700">Our iconic cheeseburger is made with 100% beef, topped with melted cheddar, fresh lettuce, tomatoes, and our secret sauce.</p>
              </div>
            </div>

            {/* Food Item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uiwSSey5MekNOhVaGtfW1jdrR8EPvf2DEWnYlFHGVCp1MgHFkpxIw7pJp2fYFPlhXz4&usqp=CAU" alt="Pizza" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Pepperoni Pizza</h3>
                <p className="text-gray-600 mb-2">$9.99</p>
                <p className="text-gray-700">A classic pizza topped with fresh mozzarella, tangy tomato sauce, and premium pepperoni slices.</p>
              </div>
            </div>

            {/* Food Item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg" alt="Fries" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Crispy French Fries</h3>
                <p className="text-gray-600 mb-2">$2.99</p>
                <p className="text-gray-700">Golden and crispy on the outside, soft on the inside. Our fries are perfectly seasoned and served hot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FastFoodies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>

  )
}

export default AboutUs

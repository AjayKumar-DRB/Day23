// Importing the necessary modules/components for the application
import './App.css'; // Importing the CSS file for styling the application
import { useState } from 'react';

const cardData = [
  {
    id: 1,
    badge: 'false',
    name: 'fancy product',
    rating : '',
    price : '$40.00 - $80.00',
    btnText : 'view options'
  },
  {
    id: 2,
    badge: 'true',
    name: 'special item',
    rating : 5,
    price : ['$20.00', '  $18.00'],
    btnText : 'add to cart'
  },
  {
    id: 3,
    badge: 'true',
    name: 'sale item',
    rating : '',
    price : ['$50.00','  $25.00'],
    btnText : 'add to cart'
  },
  {
    id: 4,
    badge: 'false',
    name: 'popular item',
    rating : 5,
    price : '$40.00',
    btnText : 'add to cart'
  },
  {
    id: 5,
    badge: 'true',
    name: 'sale item',
    rating : '',
    price : ['$50.00','  $25.00'],
    btnText : 'add to cart'
  },
  {
    id: 6,
    badge: 'false',
    name: 'fancy product',
    rating : '',
    price : '$120.00 - $280.00',
    btnText : 'view Options'
  },
  {
    id: 7,
    badge: 'true',
    name: 'special item',
    rating : 5,
    price : ['$20.00','  $18.00'],
    btnText : 'add to cart'
  },
  {
    id: 8,
    badge: 'false',
    name: 'popular item',
    rating : 5,
    price : '$40.00',
    btnText : 'add to cart'
  }
]

// Defining the main App function component
function App() {

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  
  // Function that handles adding items to the cart and updating the quantity of items in the cart
  const updateCartValue = (id) => {
    setCartQuantity(cartQuantity + (cart.includes(id) ? -1 : 1));
  };
  

  const handleCartToggle = (id) => {
    if (cart.includes(id)) {
      setCart(cart.filter(itemId => itemId !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  const updateCart = (id) => {
    handleCartToggle(id);
    updateCartValue(id);
  }


  // Returning the JSX code that represents the structure and content of the application
  return (
    <div>
      {/* Rendering the Navbar component */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="">All Products</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="">Popular Items</a></li>
                                <li><a class="dropdown-item" href="">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="fas fa-cart-shopping me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white rounded-pill">{cartQuantity}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

      {/* Rendering the Header component */}
      <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

      {/* Rendering the Product component */}
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {cardData.map((card) => (
                    <div class="col mb-5">
                    <div class="card h-100">
                        {(card.badge === "true") ? <div class="badge bg-dark text-white position-absolute">Sale</div> : null}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">{card.name}</h5>
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                {Number.isFinite(card.rating) ? (
                                <>
                                    {Array.from({ length: card.rating }).map((_, index) => (
                                    <i key={index} className="fas fa-star"></i>
                                    ))}
                                </>
                                ) : (
                                null
                                )}
                                </div>
                                {Array.isArray(card.price) ? <><span className="text-muted text-decoration-line-through">{card.price[0]}</span>{card.price[1]}</> : <span>{card.price}</span> }
                            </div>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={() => updateCart(card.id)} >
                            <div class="text-center"><a class={`btn ${cart.includes(card.id) ? "btn-outline-danger" : "btn-outline-dark"} mt-auto`}>{cart.includes(card.id) ? "Remove From Cart" : card.btnText }</a></div>
                          </div>
                        </div>
                        
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>

      {/* Rendering the Footer component */}
      <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
      </footer>
    </div>
  );
}

// Exporting the App component as the default export of the module
export default App;
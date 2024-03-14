import { useEffect } from "react";
import "./App.css";
import { fetch_products } from "./features/productSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch()
    useEffect(() => {
		dispatch(fetch_products());
		console.log(products);
    },[]);

    return (
        <>
            <div className="colorlib-loader"></div>

            <div id="page">
                <nav className="colorlib-nav" role="navigation">
                    <div className="top-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7 col-md-9">
                                    <div id="colorlib-logo">
                                        <a href="index.html">Footwear</a>
                                    </div>
                                </div>
                                <div className="col-sm-5 col-md-3">
                                    <form action="#" className="search-wrap">
                                        <div className="form-group">
                                            <input
                                                type="search"
                                                className="form-control search"
                                                placeholder="Search"
                                            />
                                            <button
                                                className="btn btn-primary submit-search text-center"
                                                type="submit"
                                            >
                                                <i className="icon-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 text-left menu-1">
                                    <ul>
                                        <li className="active">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="has-dropdown">
                                            <a href="men.html">Men</a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="product-detail.html">
                                                        Product Detail
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">
                                                        Shopping Cart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">
                                                        Checkout
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="order-complete.html">
                                                        Order Complete
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="add-to-wishlist.html">
                                                        Wishlist
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="women.html">Women</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li className="cart">
                                            <a href="cart.html">
                                                <i className="icon-shopping-cart"></i>{" "}
                                                Cart [0]
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sale">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 offset-sm-2 text-center">
                                    <div className="row">
                                        <div className="owl-carousel2">
                                            <div className="item">
                                                <div className="col">
                                                    <h3>
                                                        <a href="#">
                                                            25% off (Almost)
                                                            Everything! Use
                                                            Code: Summer Sale
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="col">
                                                    <h3>
                                                        <a href="#">
                                                            Our biggest sale yet
                                                            50% off all summer
                                                            shoes
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default App;

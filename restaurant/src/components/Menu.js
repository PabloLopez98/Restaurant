import React from 'react';
import './Menu.scss';
import { motion } from 'framer-motion';

function Menu() {
    return (
        <div className="menu-container">
            <span className="title">Menu<span style={{ color: "goldenrod" }}>.</span></span>
            <span className="section">Appetizers</span>
            <div className="divider"></div>
            <div className="appetizers">
                <div className="item">
                    <span className="name">Shrimp Capri</span>
                    <span className="description">Five jumbo shrimp sauteed with butter, tomatoes, scallions, garlic, oregano and lemon. Served over angel hair pasta.</span>
                    <span className="price">$5.99</span>
                </div>
                <div className="item">
                    <span className="name">Haystack Onion Strings</span>
                    <span className="description">Homemade shoestring onion rings deep fried golden brown.</span>
                    <span className="price">$6.49</span>
                </div>
                <div className="item">
                    <span className="name">Jumbo Garlic Bread</span>
                    <span className="description">Topped with mozzarella cheese.</span>
                    <span className="price">$4.30</span>
                </div>
                <div className="item">
                    <span className="name">Homemade Calamari</span>
                    <span className="description">Deep fried, pan fried Sicilian style or grilled.</span>
                    <span className="price">$7.49</span>
                </div>
            </div>
            <span className="section">Drinks</span>
            <div className="divider"></div>
            <div className="drinks">
                <div className="item">
                    <span className="name">Water</span>
                    <span className="description">With ice.</span>
                    <span className="price">free</span>
                </div>
                <div className="item">
                    <span className="name">Soda</span>
                    <span className="description">Pepsi, Cola, Fanta, Brisk, Powerade, Sangria</span>
                    <span className="price">$3</span>
                </div>
                <div className="item">
                    <span className="name">Wine</span>
                    <span className="description">Red wine.</span>
                    <span className="price">$5</span>
                </div>
                <div className="item">
                    <span className="name">Beer</span>
                    <span className="description">Pacifico, Sol, Corona, Bohemia, Modelo, Tecate</span>
                    <span className="price">$5</span>
                </div>
            </div>
            <span className="section">Food</span>
            <div className="divider"></div>
            <div className="food">
                <div className="item">
                    <span className="name">Lasagna</span>
                    <span className="description">Beef, pork and lots of cheese! A house favorite!</span>
                    <span className="price">$15.99</span>
                </div>
                <div className="item">
                    <span className="name">Baked Ziti</span>
                    <span className="description">Large tube shaped pasta tossed with Italian sausage, ricotta and mozzarella cheese. Baked in our rich red sauce until bubbly.</span>
                    <span className="price">$14.49</span>
                </div>
                <div className="item">
                    <span className="name">Pasta Norcina</span>
                    <span className="description">Home made Italian sausage, sauteed with garlic, white wine red pepper flakes, arugula, a touch of cream and finished with romano cheese. Tossed with spaghetti.</span>
                    <span className="price">$16.99</span>
                </div>
                <div className="item">
                    <span className="name">Fettuccine Alfredo</span>
                    <span className="description">Fresh fettuccine made to order. Tossed with out homemade Alfredo cheese sausce with three different imported cheeses.</span>
                    <span className="price">$14.99</span>
                </div>
                <div className="item">
                    <span className="name">Gnochi</span>
                    <span className="description">Tender pasta dumplings topped with our zesty meat sauce and mozzarella.</span>
                    <span className="price">$17.99</span>
                </div>
                <div className="item">
                    <span className="name">Tortelloni</span>
                    <span className="description">Doughnut shaped pasta filled with five different cheeses. Topped with your choice of sauces: Red, Alfredo or Garlic and herb.</span>
                    <span className="price">$13.50</span>
                </div>
                <div className="item">
                    <span className="name">Rigatoni Salsiccia</span>
                    <span className="description">Sauteed Italian sausage, green peppers, mushrooms, onions, tossed in marinara sauce adn rigatoni. Topped with mozzarella cheese and baked.</span>
                    <span className="price">$17.99</span>
                </div>
                <div className="item">
                    <span className="name">Seafood Amore</span>
                    <span className="description">Freshly sauteed mushrooms, garlic, broccoli, tossed with crab, scallops and shrimp in Alfredo cheese sauce over linguine.</span>
                    <span className="price">$18.40</span>
                </div>
                <div className="item">
                    <span className="name">Spaghetti</span>
                    <span className="description">Fresh made to order spaghetti in our rich tomato sauce topped with meatballs, meat sauce, sausage or plain sauce.</span>
                    <span className="price">$15.99</span>
                </div>
                <div className="item">
                    <span className="name">Mostaccioli Amore</span>
                    <span className="description">Fresh mostaccioli baked with mushrooms, green peppers, pepperoni and black olives in our marinara sauce. Topped with mozzarella cheese.</span>
                    <span className="price">$14.20</span>
                </div>
                <div className="item">
                    <span className="name">Ravioli</span>
                    <span className="description">Light pasta pillows filled with your choice of meat, cheese or both. Topped with our special red sauce.</span>
                    <span className="price">$15.49</span>
                </div>
                <div className="item">
                    <span className="name">Mushroom Ravioli</span>
                    <span className="description">Sauteed portabella and button mushrooms with pine nuts in a mushroom cream sauce.</span>
                    <span className="price">$15.50</span>
                </div>
                <div className="item">
                    <span className="name">Nonno Lorenzo's</span>
                    <span className="description">The boss's favorite. Sauteed potatoes, bacon, Italian sausage, mushrooms, green peppers and Romano cheese. Tossed with spaghetti.</span>
                    <span className="price">$17.99</span>
                </div>
                <div className="item">
                    <span className="name">Chicken Parmesan</span>
                    <span className="description">Two gently fried breaded chicken breasts, smothered with our homemade marinara sauce and covered with three different imported cheeses.</span>
                    <span className="price">$16.99</span>
                </div>
                <div className="item">
                    <span className="name">Pizza</span>
                    <span className="description">Oven baked pizza with meatball, hot pepper, and red onion.</span>
                    <span className="price">$14.49</span>
                </div>
                <div className="item">
                    <span className="name">Fagioli Soup</span>
                    <span className="description">Soup with prepared spaghetti sauce, beef broth, chopped onions, sliced carrots, kidney beans, and shell pasta.</span>
                    <span className="price">$13.99</span>
                </div>
            </div>
            <span className="section">Desert</span>
            <div className="divider"></div>
            <div className="desert">
                <div className="item">
                    <span className="name">Ice Cream</span>
                    <span className="description">Vanilla, Chocolate, Both.</span>
                    <span className="price">$4</span>
                </div>
                <div className="item">
                    <span className="name">Cake</span>
                    <span className="description">Chocolate, Red Velvet.</span>
                    <span className="price">$6</span>
                </div>
                <div className="item">
                    <span className="name">Milkshake</span>
                    <span className="description">Vanilla, Chocolate, Both.</span>
                    <span className="price">$4</span>
                </div>
                <div className="item">
                    <span className="name">Ice Cream Topped Brownies</span>
                    <span className="description">Vanilla or Chocolate Ice Cream.</span>
                    <span className="price">$5</span>
                </div>
            </div>
        </div>
    )
}

export default Menu;

# 🧸 ToyLand — End-to-End Toy Shop E-Commerce Website

Welcome to **ToyLand**, a full-featured, responsive, and delightful e-commerce website for a toy shop built from **starting to ending**!

---

## 🌟 Highlights & End-to-End User Journey

### 1. 🚀 Starting Point (Discovery & Exploration)
* **Announcement Marquee:** Promotional banner with active discount codes, free shipping alerts, and flash sales.
* **Navigation Header:** 
  * Responsive search bar with real-time filtering.
  * Audio Sound Effects engine toggle (synthesizer chimes and clicks).
  * Dark / Light mode toggle switch with theme persistence.
  * Live order tracker shortcut button.
  * Wishlist drawer trigger with dynamic badge counter.
  * Cart drawer trigger with item badge count.
* **Hero Banner:** Catchy animated headline, call-to-actions, featured toy card, and floating trust badges (*100% Non-Toxic*, *Fast 2-Day Air*).
* **Trust & Safety Strip:** ASTM F963 / EN71 safety credentials, express delivery, gift wrapping, and 30-Day Smiles Guarantee.

### 2. 🔍 Catalog & Multi-Criteria Filtering
* **Shop by 5 Core Categories:**
  1. 🚀 Building & STEM
  2. 🐻 Plush & Stuffed Animals
  3. 🏰 Dolls & Castles
  4. 🎲 Board Games & Puzzles
  5. 🛴 Outdoor & Active Play
* **Shop by Age Groups:** 0-2 yrs, 3-5 yrs, 6-8 yrs, 9-12 yrs, 12+ yrs & Teens.
* **Interactive Controls:**
  * Live keyword search (filters titles, descriptions, categories, and developmental skills).
  * Interactive price range slider ($15 - $120).
  * "In-Stock Only" toggle filter.
  * Sort by Popularity, Price (Low to High), Price (High to Low), Rating, and Most Reviewed.
  * Dynamic result counter with single-click filter reset.

### 3. 🎁 Product Cards & Quick View Modal
* **Rich Product Cards:** High-resolution photography, badges (*Bestseller*, *STEM Pick*, *Sale -25%*, *Eco-Friendly*), star ratings, verified review counts, quick wishlist toggle, and quick-add to cart.
* **Quick View Modal:**
  * Multi-image thumbnail gallery switcher.
  * Full product descriptions and bulleted feature highlights.
  * Safety & certification badges (BPA-free, non-toxic, child-safe).
  * Developmental skills nurtured (Spatial reasoning, fine motor skills, logic).
  * Interactive quantity stepper.

### 4. 🛒 Cart & Wishlist Drawers
* **Slide-Over Cart Drawer:**
  * Free shipping progress meter (Threshold: $50) with real-time remaining calculation.
  * Item list with quantity steppers `+` / `-` and instant remove `×`.
  * Promo code voucher system with real discount deductions:
    * `MAGIC20` — 20% discount on order
    * `TOY10` — $10 discount on orders $40+
    * `FREESHIP` — 100% Free Shipping
    * `WELCOME15` — 15% discount for subscribers
    * `SPINWHEEL` — 25% Lucky Jackpot discount
  * Live calculation of Subtotal, Discount, Estimated Shipping, Tax (8%), and Grand Total.
* **Slide-Over Wishlist Drawer:** Save favorite toys with heart icons, view list, remove items, or "Move All to Cart" in one click.

### 5. 💳 Multi-Step Checkout Flow
* **Step 1: Shipping & Customer Information:**
  * Name, email, phone, street address, city, and ZIP validation.
  * Optional Deluxe Gift Wrapping checkbox with custom greeting card message.
* **Step 2: Delivery Speed Selection:**
  * Standard Toy Delivery (3-5 business days — Free over $50 or $5.99).
  * Express Rocket Delivery (1-2 business days — $12.99).
  * ToyLand Magic Sleigh Same-Day Courier ($19.99).
* **Step 3: Secure Payment Simulation:**
  * Interactive credit card visual preview with live number and name formatting.
  * Option for Cash on Delivery (COD).
  * Full itemized order pricing summary before placing order.

### 6. 🎉 The Ending (Confirmation, Receipt & Live Tracking)
* **Step 4: Order Confirmation & Receipt:**
  * Fullscreen colorful confetti explosion animation!
  * Cheerful celebration sound effect.
  * Unique Order ID generation (e.g. `TOY-2026-8492`).
  * Itemized breakdown, customer delivery address, and expected delivery date.
  * "Print Receipt / Download PDF" button.
  * "Live Track This Order" direct button.
* **Live Order Tracker:**
  * Visual 4-step progress timeline:
    1. 📝 Order Placed & Verified
    2. 🎁 Packed with Magic & Bow
    3. 🚀 In Transit with Toy Express
    4. 🎉 Delivered & Ready to Play
  * **"Simulate Next Step" button** to test advancing the parcel along the delivery journey!
  * Enter any Order ID (or try `TOY-2026-DEMO`) to look up order details.

### 7. 🎯 Interactive Extras & Gamification
* **Gift Advisor Quiz:** 3-question interactive wizard matching age, playstyle interest, and budget with top-rated toys and percentage match scores.
* **Spin the Lucky Wheel:** Canvas-based animated prize wheel awarding instant discount codes.
* **Audio FX Engine:** Built-in Web Audio synthesizer sounds for clicks, pops, and celebrations (no external audio files required, fully polite with mute switch).
* **Customer Testimonials & FAQ Accordion:** Real parent reviews and answers to common delivery/safety questions.

---

## 💻 How to Run the Website

### Option 1: Direct in Browser (No Server Required)
Simply double-click `index.html` in Windows Explorer or open it with any web browser (Google Chrome, Microsoft Edge, Firefox, Safari). Everything works immediately out of the box!

### Option 2: Running with Node.js Server
If you'd like to run a local server with the orders API:

```bash
# In the Toy_shop folder:
node server.js
```
Then open:
👉 **http://localhost:3000**

API endpoints:
- `GET /api/products` — Catalog of toys
- `GET /api/orders` — All saved orders
- `GET /api/orders/:orderId` — Single order lookup
- `POST /api/orders` — Save a placed order

---

## 📁 Project Structure

```
Toy_shop/
├── index.html                   # Main frontend webpage (Single Page Application)
├── css/
│   └── styles.css               # Complete responsive design, animations, theme tokens
├── js/
│   ├── products.js              # 24-toy curated catalog, categories, age groups
│   ├── cart.js                  # CartManager: persistence, promo codes, badges
│   ├── checkout.js              # CheckoutManager: multi-step validation & receipt
│   ├── tracker.js               # OrderTracker: live timeline & delivery simulator
│   ├── quiz.js                  # ToyQuiz: 3-question gift recommendation advisor
│   ├── wheel.js                 # SpinWheel: canvas physics prize wheel
│   └── app.js                   # ToyApp: sound effects, confetti, modals & UI events
├── assets/
│   └── images/
│       ├── logo.svg             # ToyLand brand rocket logo
│       └── placeholder-toy.svg  # High-res SVG fallback toy illustration
├── data/
│   └── orders.json              # Local order database persistence
├── server.js                    # Native Node.js HTTP server & API
├── package.json                 # Scripts and metadata
└── README.md                    # Documentation & guide
```

---

*Made with ❤️ for young dreamers and playful minds!*

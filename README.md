# Stuff Boutique

## Overview

The following is my solution to a technical challenge given by **Dengun**.

**Stuff Boutique** is a simple app consisting of two main pages:

### 1. Tags List Page
This page displays a list of tags as clickable components, which redirect to the second page. Each tag represents a product category within a collection used for this exercise.

- This page can be accessed through the `/browse` endpoint.
- Each tag component includes:
  - The tag name.
  - An image representing a product that matches the tag.

### 2. Products List Page
This page lists all products associated with a specific tag. You can access this page by:
- Clicking on a tag component on the **Tags List Page**.
- Navigating directly to `/list/[tag]` (replacing `[tag]` with a valid tag name).

The page displays the following details for each product under a specific tag:
- **Price range** (from the lowest price to the highest price, across all product variants) or a **single price** if only one variant exists.
- **Product tags**.
- **Product variants** and their respective stock quantities.
- **Total stock** for the product (across all variants).
- **Vendor name(s)**.
- **Product image**.

Both pages feature responsive UI layous for desktop, phone and everything in between.

All product data is fetched from an API provided by **Dengun**.


---

## Project Requirements

As per the requirements, screenshots of each page mentioned above can be found in the `screenshots` folder. The app's code is located in the `shop-lister` folder.

As a small bonus I also included an extra `design` folder which contains the figma design file I created as a guideline before I began coding.

---

## Technologies Used

The challenge was originally intended to be solved using **Flutter**. However, I was given the freedom to use any technology of my choice. I decided to build the app using the **Next.js** framework.

I chose Next.js out of curiosity and a desire to learn more about this tool. I had just started learning it as part of my web development course at **ETIC Algarve**, and I was eager to dive deeper into the framework. I also plan on exploring front-end development in more detail, and this seemed like a great opportunity to challenge myself with a new technology.

Next.js' routing mechanism and its integration with **React** played a significant role in my decision, as I believed it was well-suited for the requirements of this project.

---

## Accessing the Project

To view the project, follow these steps:

1. Clone this repository.
2. Navigate to the `shop-lister` folder.
3. Run `npm run dev` in a Node.js or other JavaScript runtime environment.
4. Open your browser and go to `http://localhost:3000/browse` to start exploring.

Enjoy!

---


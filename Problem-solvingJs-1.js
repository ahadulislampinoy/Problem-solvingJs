/* 1. BUDGET CALCULATOR */

function totalPrice(computer, watch, coffee) {
  if (
    typeof computer == "number" &&
    typeof watch == "number" &&
    typeof coffee == "number"
  ) {
    var result =
      computer * 100000 +
      watch * 260 +
      coffee * 50 +
      "৳" +
      " " +
      "On your cart";
    console.log(result);
  } else {
    console.log("Please enter a valid quantity for the products");
  }
}
// enter the quantity here (⬇)
totalPrice(1, 1, 1);

/* 2. PRODUCT SEARCH */

function item(productTitle) {
  var products = [
    {
      id: 1,
      title: "laptop",
      price: 567,
      description:
        "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
    {
      id: 2,
      title: "Mobile",
      price: 367,
      description:
        "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
    {
      id: 3,
      title: "Watch",
      price: 180,
      description:
        "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
    {
      id: 4,
      title: "Coffee",
      price: 40,
      description:
        "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
    },
  ];

  if (productTitle == "laptop") {
    console.log(products[0]);
  } else if (productTitle == "mobile") {
    console.log(products[1]);
  } else if (productTitle == "watch") {
    console.log(products[2]);
  } else if (productTitle == "coffee") {
    console.log(products[3]);
  } else {
    console.log(
      "We're sorry. We can not find any matches for your search product"
    );
  }
}
// enter the product name here (⬇)
item("laptop");

/* 3. HIDDEN MILLIONAIRE CALCULATOR */

function totalIncome(year) {
  if (year % 4 == 0) {
    console.log(366 * 10 + "৳" + " " + "Save in this year");
  } else {
    console.log(365 * 10 + "৳" + " " + "Save in this year");
  }
}
// enter the year here (⬇)
totalIncome(2020);

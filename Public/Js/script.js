let $ = document;
let body = $.getElementById("body");
let changeMobileThemeBtn = $.getElementById("change-mobile-theme-btn");
let toggleThemeBtn = $.querySelector("#toggle-theme");
let chevron_for_mobile_menu = $.getElementById("chevron-for-mobile-menu");
let store_features_box = $.getElementById("store-features-box");
let store_features = $.querySelectorAll(".store-features");
let shop_text = $.getElementById("shop-text");
let menu = $.getElementById("menu");
let close_menu = $.getElementById("close-menu");
let open_menu = $.getElementById("open-menu");
let shopping_cart_menu = $.getElementById("shopping-cart-menu");
let open_shopping_cart_menu = $.getElementById("open-shopping-cart-menu");
let close_shopping_cart_menu = $.getElementById("close-shopping-cart-menu");
let overlay = $.getElementById("overlay");

toggleThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

changeMobileThemeBtn.addEventListener("click", function () {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

chevron_for_mobile_menu.addEventListener("click", function () {
  shop_text.classList.toggle("text-orange-300");
  store_features_box.classList.toggle("hidden");
  store_features_box.classList.toggle("flex");
  store_features_box.style.animation = "1s openMenu both";
  store_features_box.style.animation = "1s translate both";
});

close_menu.addEventListener("click", function () {
  menu.classList.add("-right-72");
  menu.classList.remove("right-0");
  overlay.classList.add("invisible");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  body.style.cssText = "overflow-x: hidden !important;";
});

open_menu.addEventListener("click", function () {
  menu.classList.remove("-right-72");
  menu.classList.add("right-0");
  overlay.classList.remove("invisible");
  overlay.classList.remove("opacity-0");
  overlay.classList.add("opacity-100");
  body.style.cssText = "overflow: hidden !important;";
});

open_shopping_cart_menu.addEventListener("click", function () {
  shopping_cart_menu.classList.remove("-left-72");
  shopping_cart_menu.classList.add("left-0");
  overlay.classList.remove("invisible");
  overlay.classList.remove("opacity-0");
  body.style.cssText = "overflow: hidden !important;";
});

close_shopping_cart_menu.addEventListener("click", function () {
  shopping_cart_menu.classList.add("-left-72");
  shopping_cart_menu.classList.remove("left-0");
  overlay.classList.add("invisible");
  overlay.classList.add("opacity-0");
  body.style.cssText = "overflow-x: hidden !important;";
});

overlay.addEventListener("click", function () {
  menu.classList.add("-right-72");
  menu.classList.remove("right-0");
  overlay.classList.add("invisible");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  shopping_cart_menu.classList.add("-left-72");
  shopping_cart_menu.classList.remove("left-0");
  overlay.classList.add("invisible");
  overlay.classList.add("opacity-0");
  body.style.cssText = "overflow-x: hidden !important;";
});

// Shopping Cart Tags Id
let cart_Data = $.querySelectorAll(".cart-data");
let shopping_Cart_Body = $.getElementById("shopping-cart-body");
let empty_Shopping_Cart = $.getElementById("empty-shopping-cart");
let products_Amount = $.getElementById("products-amount");
let total_Price = $.getElementById("total-price");
let mobile_Total_Price = $.getElementById("mobile-total-price");
let mobile_Shopping_Cart_Body = $.getElementById("mobile-shopping-cart-body");

cart_Data.forEach(function (data) {
  data.addEventListener("click", function (event) {
    const data_Price = event.target.dataset.price;
    let data_Text = event.target.dataset.text;
    let data_Discount_Tooman = event.target.dataset.discount_tooman;
    let data_Tooman = event.target.dataset.tooman;
    let data_Discount = event.target.dataset.discount;
    let data_Img = event.target.dataset.img;
    let data_Discount_Text = event.target.dataset.discount_text;

    new_Product(
      data_Price,
      data_Discount,
      data_Text,
      data_Tooman,
      data_Img,
      data_Discount_Text,
      data_Discount_Tooman
    );

    mobile_New_Product(
      data_Price,
      data_Discount,
      data_Text,
      data_Tooman,
      data_Img,
      data_Discount_Text,
      data_Discount_Tooman
    );
  });
});

let index = 0;
let price_Save = 0;

function new_Product(
  price,
  discount,
  text,
  tooman,
  src,
  discount_Text,
  discount_Tooman
) {
  let price_Type_Number = parseFloat(price);

  let datas_Parent_Div = $.createElement("div");
  datas_Parent_Div.className = "flex items-center gap-2.5 main_Class";

  let img = $.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "product");
  img.setAttribute("width", "120px");
  img.setAttribute("height", "120px");

  let div_2 = $.createElement("div");
  div_2.className = "text-zinc-800 dark:text-white flex flex-col gap-y-6";

  let p_Text = $.createElement("p");
  p_Text.className = "font-semibold dark:font-medium line-clamp-2";
  p_Text.innerHTML = text;

  let div_3 = $.createElement("div");

  let p_Discount = $.createElement("p");
  p_Discount.className =
    "text-teal-700 dark:text-emerald-600  text-[13px] font-semibold tracking-wider";
  p_Discount.innerHTML = discount + " ";

  let span_Discount = $.createElement("span");
  span_Discount.className = "tracking-tight";
  span_Discount.innerHTML = discount_Tooman + " " + discount_Text;

  let p_Price = $.createElement("p");
  p_Price.className = "text-xl";
  p_Price.innerHTML = price + " ";

  let span_Price = $.createElement("span");
  span_Price.className = "font-normal tracking-normal text-lg";
  span_Price.innerHTML = tooman + " ";

  let remove_Item = $.createElement("i");
  remove_Item.className = "bi bi-trash text-[15px] cursor-pointer";
  remove_Item.style.cssText = "color : #cd3434 !important ;";

  index++;
  index_Mobile = index;

  remove_Item.addEventListener("click", function (event) {
    remove_Item = event.target.closest(".main_Class").remove();

    let mobileItems = mobile_Shopping_Cart_Body.querySelectorAll(
      ".mobile-datas-parent-div"
    );
    mobileItems.forEach((item) => {
      if (item.querySelector("p").innerHTML === text) {
        item.remove();
      }
    });

    index--;
    index_Mobile = index;
    products_Amount.innerHTML = index;

    if (index === 0) {
      empty_Shopping_Cart.classList.remove("hidden");
      empty_Shopping_Cart.classList.add("flex");
    }

    price_Save = price_Save - price_Type_Number;
    mobile_price_Save = price_Save;
    total_Price.innerHTML = price_Save.toLocaleString() + " " + tooman;
    mobile_Total_Price.innerHTML = price_Save.toLocaleString() + " " + tooman;

    if (price_Save > 0) {
      let formattedPrice =
        Number(price_Save).toLocaleString() + "," + "000" + " " + tooman;
      total_Price.innerHTML = formattedPrice;
      mobile_Total_Price.innerHTML = formattedPrice;
    }
  });

  if (index > 0) {
    empty_Shopping_Cart.classList.add("hidden");
    empty_Shopping_Cart.classList.remove("flex");
  }

  price_Save += price_Type_Number;
  mobile_price_Save = price_Save;
  total_Price.innerHTML = price_Save.toLocaleString() + " " + tooman;
  mobile_Total_Price.innerHTML = price_Save.toLocaleString() + " " + tooman;
  products_Amount.innerHTML = index;

  if (price_Save > 0) {
    let formattedPrice =
      Number(price_Save).toLocaleString() + "," + "000" + " " + tooman;
    total_Price.innerHTML = formattedPrice;
    mobile_Total_Price.innerHTML = formattedPrice;
  }

  shopping_Cart_Body.append(datas_Parent_Div);
  datas_Parent_Div.append(img);
  datas_Parent_Div.append(div_2);
  div_2.append(p_Text);
  div_2.append(div_3);
  div_3.append(p_Discount);
  div_3.append(p_Price);
  p_Price.append(span_Price);
  p_Discount.append(span_Discount);
  span_Price.append(remove_Item);
}

let index_Mobile = 0;
let mobile_price_Save = 0;

function mobile_New_Product(
  price,
  discount,
  text,
  tooman,
  src,
  discount_Text,
  discount_Tooman
) {
  let price_Type_Number = parseFloat(price);

  let datas_Parent_Div = $.createElement("div");
  datas_Parent_Div.className =
    "flex items-center gap-0.5 mobile-datas-parent-div";

  let img = $.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "product");
  img.setAttribute("width", "90px");
  img.setAttribute("height", "90px");

  let div_2 = $.createElement("div");
  div_2.className = "text-zinc-800 dark:text-white flex flex-col gap-y-3";

  let p_Text = $.createElement("p");
  p_Text.className = "font-medium dark:font-normal line-clamp-1 text-sm";
  p_Text.innerHTML = text;

  let div_3 = $.createElement("div");

  let p_Discount = $.createElement("p");
  p_Discount.className =
    "text-teal-700 dark:text-emerald-600 text-xs font-semibold tracking-wider";
  p_Discount.innerHTML = discount + " ";

  let span_Discount = $.createElement("span");
  span_Discount.className = "tracking-tight";
  span_Discount.innerHTML = discount_Tooman + " " + discount_Text;

  let p_Price = $.createElement("p");
  p_Price.className = "text-sm";
  p_Price.innerHTML = price + " ";

  let span_Price = $.createElement("span");
  span_Price.className = "font-normal tracking-normal text-lg";
  span_Price.innerHTML = tooman + " ";

  let remove_Item = $.createElement("i");
  remove_Item.className = "bi bi-trash text-[13px] cursor-pointer";
  remove_Item.style.cssText = "color : #cd3434 !important ;";

  remove_Item.addEventListener("click", function (event) {
    remove_Item = event.target.closest(".mobile-datas-parent-div").remove();

    let desktopItems = shopping_Cart_Body.querySelectorAll(".main_Class");
    desktopItems.forEach((item) => {
      if (item.querySelector("p").innerHTML === text) {
        item.remove();
      }
    });

    index--;
    index_Mobile = index;
    products_Amount.innerHTML = index;

    if (index === 0) {
      empty_Shopping_Cart.classList.remove("hidden");
      empty_Shopping_Cart.classList.add("flex");
    }

    price_Save = price_Save - price_Type_Number;
    mobile_price_Save = price_Save;
    total_Price.innerHTML = price_Save.toLocaleString() + " " + tooman;
    mobile_Total_Price.innerHTML = price_Save.toLocaleString() + " " + tooman;

    if (price_Save > 0) {
      let formattedPrice =
        Number(price_Save).toLocaleString() + "," + "000" + " " + tooman;
      total_Price.innerHTML = formattedPrice;
      mobile_Total_Price.innerHTML = formattedPrice;
    }
  });

  mobile_Shopping_Cart_Body.append(datas_Parent_Div);
  datas_Parent_Div.append(img);
  datas_Parent_Div.append(div_2);
  div_2.append(p_Text);
  div_2.append(div_3);
  div_3.append(p_Discount);
  div_3.append(p_Price);
  p_Price.append(span_Price);
  p_Discount.append(span_Discount);
  span_Price.append(remove_Item);
}

const snowflakes = document.querySelectorAll(".snowflake");

snowflakes.forEach((snowflake) => {
  const randomX = Math.random() * window.innerWidth;
  const randomDuration = Math.random() * 3 + 2;
  const randomDelay = Math.random() * 5;

  snowflake.style.left = `${randomX}px`;
  snowflake.style.animationDuration = `${randomDuration}s`;
  snowflake.style.animationDelay = `${randomDelay}s`;
});

let snow_Bg = document.getElementById("snow-bg");

setTimeout(function () {
  snow_Bg.remove();
  body.style.cssText = "overflow-x : hidden !important ;";
}, 5700);

snow_Bg.addEventListener("click", function (event) {
  event.target.closest(".snow-bg-parent").remove();
  body.style.cssText = "overflow-x : hidden !important ; ";
});

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
};

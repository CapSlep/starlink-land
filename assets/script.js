const { mainProduct, products, sizes, reviews, notifications, faqs } =
    window.__config;

const modals = document.querySelectorAll(".p_modal");
const qq3 = document.querySelector("#q3");
const boxesWrapper = document.querySelector("#boxes");
const commentsContent = document.querySelector("#comments");
const okModalButton = document.querySelector(".p_modal_button");

const modal1 = document.querySelector("#p_modal1");
const bq3Btn = document.querySelectorAll("[data-answer]");
const giftImg = document.querySelectorAll(".caja_gift-img");
const giftImgModal = document.querySelector(".gift-img-modal");
const giftImgWin = document.querySelector(".img_gift");

function displayGift(event) {
    let answer = event.target.dataset.answer;
    // const images = {
    //     1: "1.png",
    //     2: "2.png",
    //     3: "3.png",
    // };
    let imgPath = `./assets/prize.png`;
    let imgItems = Object.values(giftImg);

    imgItems.map((item) => {
        item.src = imgPath;
    });
    giftImgModal.src = imgPath;
    giftImgWin.src = imgPath;
    // return imgPath;
}
qq3.addEventListener("click", (e) => displayGift(e));

function hideBoxes() {
    boxesWrapper.style.display = "none";
    // commentsContent.style.display = "none";
    // footer.style.display = "none";
}

const showBoxes = () => {
    boxesWrapper.style.display = "block";
    // commentsContent.style.display = "block";
    // footer.style.display = "block";
};

qq3.addEventListener("click", hideBoxes);
okModalButton.addEventListener("click", showBoxes);

// console.log(modals)

document.querySelectorAll(".survey_button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
    });
});
const faqBtn = document.querySelector(".faq-btn");
const faqBlock = document.querySelector(".faq");

setTimeout(() => {
    faqBtn.classList.remove("hiiden");
    faqBlock.classList.remove("hiiden");
}, 100);

// const burger = document.querySelector('.burger');
// const toggleClick = () => {
//   burger.classList.toggle("burger-active");
// }

// burger.addEventListener('click', toggleClick)


const makeStars = (el) => {
    const starsssEl = document.createElement("div");
    starsssEl.classList.add("starsss");
    for (let i = 0; i < 5; i++) {
        const starEl = document.createElement("div");
        starEl.classList.add("star");
        starEl.innerHTML = `
      <svg data-v-4cc5c858="" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" aria-hidden="true">
        <path 
          d="m10.995 1.037 2.564 6.993a.2.2 0 0 0 .174.13l6.912.465-5.342 4.822a.2.2 0 0 0-.061.195l1.75 7.321-5.802-4.05a.2.2 0 0 0-.227-.002l-5.905 4.045 1.737-7.336a.2.2 0 0 0-.062-.195L1.355 8.633l6.86-.472a.2.2 0 0 0 .175-.13l2.605-6.994z" 
          fill="#ffbc0d"
          ></path>
      </svg>
      `;
        starsssEl.appendChild(starEl);
    }

    el.appendChild(starsssEl);
};

const ratingInit = () => {
    const starsEl = document.querySelector("#stars");
    makeStars(starsEl);

    const rrEl = document.querySelector("#ratingRr");
    //const percentEl = document.querySelector("#ratingPercent");
    const recRatEl = document.querySelector("#ratingRecRat");

    //rrEl.innerText = reviews.rr;
    //percentEl.innerText = reviews.percent;
    recRatEl.innerText = reviews.rec;
};

const reviewsInit = () => {
    const reviewsEl = document.querySelector("#reviews");
    console.log(reviews);
    reviews.reviews.forEach((r) => {
        const reviewEl = document.createElement("div");
        reviewEl.classList.add("review");
        const headerEl = document.createElement("div");
        headerEl.style.paddingBottom = "0.5rem";
        headerEl.style.alignItems = "stretch";
        headerEl.style.display = "flex";
        const starsEl = document.createElement("div");
        starsEl.classList.add("stars");
        makeStars(starsEl);
        const usernameEl = document.createElement("span");
        usernameEl.classList.add("review-username");
        usernameEl.style.marginLeft = "0.5rem";
        usernameEl.innerText = r.name;
        const timeEl = document.createElement("span");
        timeEl.innerText = r.time;

        headerEl.appendChild(starsEl);
        headerEl.appendChild(usernameEl);
        headerEl.appendChild(timeEl);

        const titleEl = document.createElement("b");
        titleEl.innerText = r.header;

        const textEl = document.createElement("p");
        textEl.classList.add("mt-2");
        textEl.innerText = r.review;

        const imgDivEl = document.createElement("div");
        imgDivEl.classList.add("comment-img");
        if (r?.image != null) {
            const imgEl = document.createElement("img");
            imgEl.style.maxHeight = "200px";
            imgEl.src = r.image;
            imgEl.classList.add("mt-2");

            imgDivEl.appendChild(imgEl);
        }

        const productDivEl = document.createElement("div");
        if (r?.product != null && getProductById(r.product) != null) {
            const pr = getProductById(r.product);
            const wrapEl = document.createElement("div");
            wrapEl.setAttribute(
                "style",
                "padding: 0.667rem; background: rgb(247, 247, 248); margin: 0.667rem 0px;"
            );
            wrapEl.style.display = "flex";
            wrapEl.style.alignItems = "center";
            const iconEl = document.createElement("img");
            iconEl.src = pr.miniImg;
            iconEl.setAttribute(
                "style",
                "width: 1.667rem; height: 1.667rem; margin-right: 1rem; border-radius: 50%;"
            );
            const prNameEl = document.createTextNode(`${pr.name} (${pr.id})`);

            wrapEl.appendChild(iconEl);
            wrapEl.appendChild(prNameEl);

            productDivEl.appendChild(wrapEl);
        }

        reviewEl.appendChild(headerEl);
        reviewEl.appendChild(titleEl);
        reviewEl.appendChild(textEl);
        if (r?.image != null) reviewEl.appendChild(imgDivEl);
        if (r?.product != null && getProductById(r.product) != null)
            reviewEl.appendChild(productDivEl);

        reviewsEl.appendChild(reviewEl);
    });
};

ratingInit();
reviewsInit();
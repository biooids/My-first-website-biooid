const menu = document.querySelector("#mobile-menu");
const menuTwo = document.querySelector("#mobile-menu-2");
const manuLinks = document.querySelector(".short-text-mobile");
const mobileContact = document.getElementById("mobile-contact");
const mobileMenu = () => {
  menu.classList.toggle("active");
  menuTwo.classList.toggle("active-2");
  manuLinks.classList.toggle("is-active");
};
const mobileMenuTwo = () => {
  menuTwo.classList.toggle("active-2");
  menu.classList.toggle("active");
  manuLinks.classList.toggle("is-active");
};
const clickContact = () => {
  manuLinks.classList.toggle("is-active");
  menuTwo.classList.toggle("active-2");
  menu.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);
menuTwo.addEventListener("click", mobileMenuTwo);
mobileContact.addEventListener("click", clickContact);

// --------------------------------------------- scroll --------------------------------
// --------------------------------------------- scroll --------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const homeMenu = document.querySelector("#theHome");
  const aboutMenu = document.querySelector("#theAbout");
  const servicesMenu = document.querySelector("#theServices");
  const worksMenu = document.querySelector("#theWorks");
  const contactMenu = document.querySelector("#theContact");

  let highLightMenu = () => {
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if (window.innerWidth > 770 && scrollPos < 600) {
      homeMenu.classList.add("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth > 770 && scrollPos < 1400) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.add("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.remove("theback-ground");
      contactMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth > 770 && scrollPos < 2100) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.add("theback-ground");
      worksMenu.classList.remove("theback-ground");
      contactMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth > 770 && scrollPos < 3700) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.add("theback-ground");
      contactMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth > 770 && scrollPos < 4000) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.remove("theback-ground");
      contactMenu.classList.add("theback-ground");
      return;
    }
    // ---------------------------------------------------------------------------
    //                            mobile
    // ---------------------------------------------------------------------------

    if (window.innerWidth < 770 && scrollPos < 700) {
      homeMenu.classList.add("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth < 770 && scrollPos < 2200) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.add("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.remove("theback-ground");
      contactMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth < 770 && scrollPos < 4000) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.add("theback-ground");
      worksMenu.classList.remove("theback-ground");
      contactMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth < 770 && scrollPos < 5578) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.add("theback-ground");
      contactMenu.classList.remove("theback-ground");
      return;
    } else if (window.innerWidth < 770 && scrollPos < 10000) {
      homeMenu.classList.remove("theback-ground");
      aboutMenu.classList.remove("theback-ground");
      servicesMenu.classList.remove("theback-ground");
      worksMenu.classList.remove("theback-ground");
      contactMenu.classList.add("theback-ground");
      return;
    }
  };

  window.addEventListener("scroll", highLightMenu);
  window.addEventListener("click", highLightMenu);
});

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

let scrollContainer = document.querySelector(".gallery");
let back = document.getElementById("back-btn");
let front = document.getElementById("front-btn");

function smoothScroll(target, duration) {
  const targetPosition = target;
  const startPosition = scrollContainer.scrollLeft;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const timeElapsed = currentTime - startTime;
    const scrollValue = easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      duration
    );
    scrollContainer.scrollLeft = scrollValue;

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  const scrollAmount = e.deltaY * 5;
  const currentScrollPosition = scrollContainer.scrollLeft;
  smoothScroll(currentScrollPosition + scrollAmount, 1000); // Adjust the duration for smoothness
});

front.addEventListener("click", () => {
  smoothScroll(scrollContainer.scrollLeft + 200, 800); // Adjust the duration for smoothness
});

back.addEventListener("click", () => {
  smoothScroll(scrollContainer.scrollLeft - 50, 800); // Adjust the duration for smoothness
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        const loopContent = [...scrollerContent, ...scrollerContent];
        scrollerInner.innerHTML = "";
        loopContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }
});

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

const track = document.getElementById("image-track");
const moveLeftButton = document.getElementById("moveLeftButton");
const moveRightButton = document.getElementById("moveRightButton");

const images = track.querySelectorAll(".image");
const imageCount = images.length;
let currentIndex = 0;

let prevPercentage = 0;
let parallaxOffset = 10; // Set your desired parallax offset

moveLeftButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;

    prevPercentage = moveImages(3, parallaxOffset, prevPercentage); // --------------------------------------------------------------
    //Increased the offset for parallax effect ex from -20 to etc
    // -------------------------------------------------------------
  }
});

moveRightButton.addEventListener("click", () => {
  if (currentIndex < imageCount - 1) {
    currentIndex++; // --------------------------------------------------------------
    prevPercentage = moveImages(-3, parallaxOffset, prevPercentage); //Increased the offset for parallax effect ex from -20 to etc
  } // -------------------------------------------------------------
});

function moveImages(offset, parallaxOffset, prevPercentage) {
  // Reset the image track to its initial state
  track.style.transition = "transform 1.2s ease-in-out";
  track.style.transform = "translate(0%, -50%)";

  images.forEach((image) => {
    image.style.transition = "object-position 1.2s ease-in-out";
    image.style.objectPosition = `${
      100 + prevPercentage + parallaxOffset
    }% 50%`; // Increased parallax offset
  });
  // ------------------------------------------------------------------------------------------------
  //             Apply the effect----------------reduce or increase width eg from -100 to etc
  //             Apply the effect----------------reduce or increase width eg from -100 to etc
  // -----------------------------------------------------------------------------------------------
  const nextPercentage = Math.min(Math.max(prevPercentage + offset, -100), 0);

  track.style.transform = `translate(${nextPercentage}%, -50%)`;
  images.forEach((image) => {
    image.style.objectPosition = `${
      100 + nextPercentage + parallaxOffset
    }% 50%`; // Increased parallax offset
  });

  return nextPercentage;
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwn4FHhhKKZg_vOPrjSWCxckWjPVvSp4FEvv8Zg_6RZ9HRWvLFQSJ9RZcJfZBx9Srs8Jw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("message-sent");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show "Sending, please wait..." message
  msg.innerHTML = "<span>Sending, please wait...</span>";

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      // Hide the progress message
      msg.innerHTML = "";

      // Show success message after a delay
      setTimeout(() => {
        msg.innerHTML =
          '<span>Message Sent </span><img src="images/success.gif" alt="Success">';
      }, 5000);

      form.reset();
    })
    .catch((error) => {
      // Hide the progress message and show error message
      msg.innerHTML = `<span>Error: ${error.message}</span>`;
    });
});

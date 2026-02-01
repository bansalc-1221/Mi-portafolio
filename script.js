if (typeof emailjs !== "undefined") {
  emailjs.init("EFPp3O6wmEuiU9K9Y");
}

const elements = document.querySelectorAll(".fade");

const reveal = () => {
  const trigger = window.innerHeight - 100;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const form = document.querySelector("form");

if (form && typeof emailjs !== "undefined") {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    const data = {
      name: inputs[0].value.trim(),
      email: inputs[1].value.trim(),
      message: inputs[2].value.trim(),
      title: "Portfolio Contact",
      time: new Date().toLocaleString()
    };

    if (!data.name || !data.email || !data.message) {
      alert("Please complete the entire form before submitting.");
      return;
    }

    emailjs
      .send("service_e2jp875", "template_szdgou6", data)
      .then(() => {
        alert("Thank you for reaching out! Your message has been sent successfully.");
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  });
}

/* MAP LINK */
const map = document.getElementById("mapLink");

if (map) {
  map.addEventListener("click", () => {
    window.open(
      "https://maps.app.goo.gl/GRqGFzBy6f6pWya56",
      "_blank"
    );
  });
}

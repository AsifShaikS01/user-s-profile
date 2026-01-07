const backgrounds = [
  "bg-1", "bg-2", "bg-3", "bg-4", "bg-5",
  "bg-6", "bg-7", "bg-8", "bg-9", "bg-10"
];

let currentBgIndex = 0;

function generateTag() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!name || !number || !email) {
    alert("Fill all the above fields");
    return false;
  }

  if (!gender) {
    alert("Please select gender");
    return false;
  }

  if (number.length !== 10) {
    alert("Mobile number must contain 10 digits");
    return false;
  }

  if (!/^[0-9]+$/.test(number)) {
    alert("Enter numbers only in mobile number field");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Enter a valid email address");
    return false;
  }

  document.getElementById("tagName").textContent = name;
  document.getElementById("tagNumber").textContent = number;
  document.getElementById("tagEmail").textContent = email;

  const circle = document.querySelector(".circle");
  if (gender.value === "male") {
    circle.style.backgroundImage = "url('man.png')";
  } else if (gender.value === "female") {
    circle.style.backgroundImage = "url('female.jpg')";
  }

  const tag = document.getElementById("tag");
  const changeBgBtn = document.getElementById("changeBgBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  tag.style.display = "block";
  changeBgBtn.style.display = "inline-block";
  downloadBtn.style.display = "inline-block";

  tag.className = "tag " + backgrounds[currentBgIndex];

  changeBgBtn.onclick = () => {
    tag.classList.remove(backgrounds[currentBgIndex]);
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    tag.classList.add(backgrounds[currentBgIndex]);
  };

  downloadBtn.onclick = () => {
    html2canvas(tag).then(canvas => {
      const link = document.createElement("a");
      link.download = "my_profile.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return true;
}

document.getElementById("number").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

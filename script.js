function generateTag() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validation
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

  // Set profile text
  document.getElementById("tagName").textContent = name;
  document.getElementById("tagNumber").textContent = number;
  document.getElementById("tagEmail").textContent = email;

  // Set profile image based on gender
  const circle = document.querySelector(".circle");
  if (gender.value === "male") {
    circle.style.backgroundImage = "url('man.jpg')";
  }
  
  if (gender.value === "female") {
    circle.style.backgroundImage = "url('female.jpg')";
  }

  // Show tag and download button
  const tag = document.getElementById("tag");
  tag.style.display = "block";

  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.style.display = "inline-block";

  // Download functionality
  downloadBtn.onclick = () => {
    html2canvas(tag).then((canvas) => {
      const link = document.createElement("a");
      link.download = "my_profile.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return true;
}

// Allow only numbers in mobile input
document.getElementById("number").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

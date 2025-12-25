function generateTag() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();

  // ✅ Validation checks
  if (!name || !number || !email) {
    alert("Fill all the above fields");
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

  // ✅ If all validations pass → fill values
  document.getElementById("tagName").textContent = name;
  document.getElementById("tagNumber").textContent = number;
  document.getElementById("tagEmail").textContent = email;

  // Show the tag
  const tag = document.getElementById("tag");
  tag.style.display = "block";

  // Show the download button
  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.style.display = "inline-block";

  // ✅ Download functionality
  downloadBtn.onclick = () => {
    html2canvas(tag).then((canvas) => {
      const link = document.createElement("a");
      link.download = "id_tag.png"; // filename
      link.href = canvas.toDataURL(); // image data
      link.click(); // triggers download
    });
  };

  return true; // success
}

// ✅ Live restriction: only allow digits while typing in mobile field
document.getElementById("number").addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, "");
});

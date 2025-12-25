function generateTag() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;

  if (!/^[0-9]+$/.test(number)) {
        alert("Enter numbers only in Mobile Number field");
        return false;
      }

  if (number.length !== 10) {
      alert("Mobile number must be 10 digits");
      return false;
    }

  if (!name || !number || !email) {
    alert("Please fill all fields.");
    return;
  }

  document.getElementById("tagName").textContent = name;
  document.getElementById("tagNumber").textContent = number;
  document.getElementById("tagEmail").textContent = email;

    document.getElementById("number").addEventListener("input", function() {
      this.value = this.value.replace(/[^0-9]/g, ""); // removes non-numeric characters
    });
  

  const tag = document.getElementById("tag");
  tag.style.display = "block";

  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.style.display = "inline-block";

  downloadBtn.onclick = () => {
    html2canvas(tag).then((canvas) => {
      const link = document.createElement("a");
      link.download = "id_tag.png"; // filename
      link.href = canvas.toDataURL(); // image data
      link.click(); // triggers download
    });
  };

  downloadBtn.onclick = () => {
    html2canvas(tag).then((canvas) => {
      const link = document.createElement("a");
      link.download = "id_tag.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
}

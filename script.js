function generateTag() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !number || !email) {
    alert("Please fill all fields.");
    return;
  }

  document.getElementById("tagName").textContent = name;
  document.getElementById("tagNumber").textContent = number;
  document.getElementById("tagEmail").textContent = email;

    if (!/^[0-9]+$/.test(number)) {
        alert("Enter numbers only in Mobile Number field");
        return false;
      }


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

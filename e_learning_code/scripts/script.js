document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const detailsElements = document.querySelectorAll("details");
  
    detailsElements.forEach((detail) => {
      detail.addEventListener("click", () => {
        detailsElements.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute("open"); // Cerrar los demás detalles
          }
        });
      });
    });
  });
  
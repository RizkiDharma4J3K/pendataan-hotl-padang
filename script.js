function searchHotel() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const hotels = document.querySelectorAll(".hotel");
  
    hotels.forEach(hotel => {
      const hotelName = hotel.querySelector("a").textContent.toLowerCase();
      if (hotelName.includes(input)) {
        hotel.style.display = "flex";
      } else {
        hotel.style.display = "none";
      }
    });
  }
  
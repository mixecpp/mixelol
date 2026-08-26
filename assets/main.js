fetch("navbar.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not load navbar.html");
    }

    return response.text();
  })
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#navbar a").forEach((link) => {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  })
  .catch((error) => {
    console.error("Navbar failed to load:", error);
  });

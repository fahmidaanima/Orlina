// ✅ login button (safe)
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

// ✅ search button (safe)
const searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    const input = document.querySelector(".search-input");
    const query = input ? input.value.trim() : "";
    if (query) {
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
  });
}

// ✅ Dropdown: desktop hover, mobile tap-open (no accidental navigation)
document.querySelectorAll(".dropdown").forEach((dd) => {
  const btn = dd.querySelector(".dropbtn");
  if (!btn) return;

  let lastTap = 0;

  btn.addEventListener("click", (e) => {
    // Desktop: hover works, so keep click normal
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const now = Date.now();
    const isOpen = dd.classList.contains("open");

    if (!isOpen) {
      e.preventDefault();
      dd.classList.add("open");
      lastTap = now;
    } else {
      // open already: allow navigation only if user taps quickly again
      if (now - lastTap > 1200) {
        e.preventDefault();
        lastTap = now;
      }
    }
  });
});

// ✅ tap outside to close (mobile)
document.addEventListener("click", (e) => {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  document.querySelectorAll(".dropdown.open").forEach((dd) => {
    if (!dd.contains(e.target)) dd.classList.remove("open");
  });
});

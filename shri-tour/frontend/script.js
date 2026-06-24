// ===== Menu Data =====
const menuData = {
  starters: [
    { name: "Chicken Tandoori", desc: "Marinated chicken grilled in clay oven with aromatic spices", price: "₹350", emoji: "🍗", tag: "non-veg" },
    { name: "Paneer Tikka", desc: "Cottage cheese cubes marinated in yogurt and spices, chargrilled", price: "₹280", emoji: "🧀", tag: "veg" },
    { name: "Prawn Koliwada", desc: "Crispy fried prawns with Mumbai-style spice coating", price: "₹420", emoji: "🍤", tag: "non-veg" },
    { name: "Veg Samosa", desc: "Golden crispy pastry filled with spiced potatoes and peas", price: "₹120", emoji: "🥟", tag: "veg" },
  ],
  mains: [
    { name: "Butter Chicken", desc: "Tender chicken in rich creamy tomato-butter gravy", price: "₹450", emoji: "🍛", tag: "non-veg" },
    { name: "Dal Makhani", desc: "Slow-cooked black lentils in buttery creamy sauce", price: "₹280", emoji: "🫘", tag: "veg" },
    { name: "Fish Thali", desc: "Complete Konkan meal with fish curry, rice, bhakri, and sides", price: "₹550", emoji: "🐟", tag: "non-veg" },
    { name: "Paneer Butter Masala", desc: "Cottage cheese cubes in rich, creamy tomato gravy", price: "₹320", emoji: "🍲", tag: "veg" },
  ],
  desserts: [
    { name: "Gulab Jamun", desc: "Deep-fried milk dumplings soaked in rose-cardamom syrup", price: "₹180", emoji: "🍩", tag: "veg" },
    { name: "Mango Kulfi", desc: "Traditional Indian ice cream with fresh Alphonso mango", price: "₹200", emoji: "🍦", tag: "veg" },
    { name: "Jalebi", desc: "Crispy spiral sweets soaked in saffron sugar syrup", price: "₹150", emoji: "🥨", tag: "veg" },
    { name: "Ras Malai", desc: "Soft paneer dumplings in chilled saffron milk", price: "₹220", emoji: "🍮", tag: "veg" },
  ],
  drinks: [
    { name: "Masala Chai", desc: "Aromatic Indian tea brewed with cardamom and ginger", price: "₹80", emoji: "🍵", tag: "veg" },
    { name: "Mango Lassi", desc: "Creamy yogurt smoothie blended with fresh mango pulp", price: "₹150", emoji: "🥭", tag: "veg" },
    { name: "Fresh Lime Soda", desc: "Refreshing lime soda with mint and a hint of black salt", price: "₹100", emoji: "🍋", tag: "veg" },
    { name: "Rose Sharbat", desc: "Chilled rose-flavored drink with basil seeds", price: "₹120", emoji: "🌹", tag: "veg" },
  ],
};

// ===== Render Menu =====
function renderMenu(category) {
  const grid = document.getElementById("menu-grid");
  const items = menuData[category];
  grid.innerHTML = items
    .map(
      (item) => `
    <div class="menu-item fade-in visible">
      <span class="tag-${item.tag === "veg" ? "veg" : "nonveg"}">${item.tag === "veg" ? "● Veg" : "● Non-veg"}</span>
      <div class="menu-item-emoji">${item.emoji}</div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <span class="price">${item.price}</span>
    </div>
  `
    )
    .join("");
}

// ===== Tab Switching =====
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.tab);
  });
});

// ===== Navbar Scroll =====
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== Mobile Menu Toggle =====
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

// ===== Form Submission =====
document.getElementById("reserve-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button[type='submit']");
  btn.textContent = "✓ Reserved!";
  btn.style.background = "#4caf50";
  setTimeout(() => {
    btn.textContent = "Reserve Now";
    btn.style.background = "";
    e.target.reset();
  }, 2500);
});

// ===== Scroll Animations =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector(".nav-links").classList.remove("active");
    }
  });
});

// ===== Initialize =====
renderMenu("starters");

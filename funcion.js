// Tallas disponibles
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const shoeSizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44"];

// Colores disponibles para camisetas CON IMÁGENES ESPECÍFICAS
const tshirtColors = [
  {
    name: "Blanco",
    value: "#ffffff",
    code: "blanco",
    image: "imagenes/001/blanco.png",
  },
  {
    name: "Negro",
    value: "#000000",
    code: "negro",
    image: "imagenes/001/negro.png",
  },
  {
    name: "Turquesa",
    value: "#19cbd8ff",
    code: "turquesa",
    image: "imagenes/001/turquesa.png",
  },
  {
    name: "Vino",
    value: "#7e114fff",
    code: "vino",
    image: "imagenes/001/vino.png",
  },
  {
    name: "Azul",
    value: "#06249bff",
    code: "verde",
    image: "imagenes/001/azul.png",
  },
  {
    name: "Gris",
    value: "#6b7280",
    code: "gris",
    image: "imagenes/001/plomo.png",
  },
];

const mangaLarga = [
  {
    name: "Blanco",
    value: "#ffffff",
    code: "blanco",
    image: "imagenes/002/blanco.png",
  },
  {
    name: "Negro",
    value: "#000000",
    code: "negro",
    image: "imagenes/002/negro.png",
  },
  {
    name: "Vino",
    value: "#7e114fff",
    code: "vino",
    image: "imagenes/002/vino.png",
  },
  {
    name: "Azul",
    value: "#06249bff",
    code: "azul",
    image: "imagenes/002/azul.png",
  },
  {
    name: "Gris",
    value: "#6b7280",
    code: "gris",
    image: "imagenes/002/plomo.png",
  },
];

const sockColors = [
  {
    name: "Blanco",
    value: "#ffffff",
    code: "blanco",
    image: "imagenes/medias/blanco.jpg",
  },
  {
    name: "Negro",
    value: "#000000",
    code: "negro",
    image: "imagenes/medias/negro.jpg",
  },
  {
    name: "Gris",
    value: "#6b7280",
    code: "gris",
    image: "imagenes/medias/gris.jpg",
  },
];

const jacketColors = [
  {
    name: "Negro",
    value: "#000000",
    code: "negro",
    image: "imagenes/chaquetas/negro.jpg",
  },
  {
    name: "Azul Marino",
    value: "#1e3a8a",
    code: "azul-marino",
    image: "imagenes/chaquetas/azul.jpg",
  },
  {
    name: "Verde Oliva",
    value: "#3f6212",
    code: "verde-oliva",
    image: "imagenes/chaquetas/verde.jpg",
  },
  {
    name: "Gris",
    value: "#6b7280",
    code: "gris",
    image: "imagenes/chaquetas/gris.jpg",
  },
];

const backpackColors = [
  {
    name: "Negro",
    value: "#000000",
    code: "negro",
    image: "imagenes/mochilas/negro.jpg",
  },
  {
    name: "Azul",
    value: "#1e3a8a",
    code: "azul",
    image: "imagenes/mochilas/azul.jpg",
  },
  {
    name: "Rojo",
    value: "#dc2626",
    code: "rojo",
    image: "imagenes/mochilas/rojo.jpg",
  },
  {
    name: "Verde",
    value: "#16a34a",
    code: "verde",
    image: "imagenes/mochilas/verde.jpg",
  },
];

// Datos de los productos con imágenes específicas por color
const products = [
  // Productos 1-9 (Pestaña 1)
  {
    id: 1,
    name: "Camiseta Manga Corta de Algodón",
    description:
      "Camiseta manga corta de algodón, cómoda, lisa con cuello redondo.",
    price: 7.99,
    hasColors: true,
    colors: tshirtColors,
    defaultColor: "blanco",
    hasSizes: true,
    sizes: ["S", "M", "L"],
    defaultSize: "M",
    tab: 1,
  },
  {
    id: 2,
    name: "Camiseta Manga Larga de Algodón",
    description:
      "Camiseta manga larga de algodón, cómoda, lisa con cuello redondo.",
    price: 12.99,
    hasColors: true,
    colors: mangaLarga,
    defaultColor: "blanco",
    hasSizes: true,
    sizes: ["S", "M", "L"],
    defaultSize: "M",
    tab: 1,
  },
  {
    id: 3,
    name: "Jean Clásico",
    description:
      "Jean clásico para hombre, corte recto, tela resistente. Ideal para uso diario, combina con cualquier estilo y ocasión.",
    price: 19.99,
    hasColors: true,
    colors: [
      {
        name: "Azul",
        value: "#2b59e2ff",
        code: "azul",
        image: "imagenes/003/azul.png",
      },
      {
        name: "Celeste",
        value: "#5071d4ff",
        code: "celeste",
        image: "imagenes/003/celeste.png",
      },
      {
        name: "Negro",
        value: "#0f0f10ff",
        code: "negro",
        image: "imagenes/003/negro.png",
      },
      {
        name: "Plomo",
        value: "#4b4d53ff",
        code: "plomo",
        image: "imagenes/003/plomo.png",
      },
    ],
    defaultColor: "azul",
    hasSizes: true,
    sizes: ["38", "40", "42", "44"],
    defaultSize: "40",
    tab: 1,
  },
  {
    id: 4,
    name: "Calentador",
    description:
      "Calentador deportivo para hombre, diseño cómodo, ideal para entrenar o relajarse. Tela suave, ajuste moderno y bolsillos prácticos. Perfecto para climas frescos y estilo urbano.",
    price: 9.99,
    hasColors: true,
    colors: [
      {
        name: "Azul",
        value: "#071d5eff",
        code: "azul",
        image: "imagenes/004/azul.png",
      },
      {
        name: "Negro",
        value: "#0f0f10ff",
        code: "negro",
        image: "imagenes/004/negro.png",
      },
      {
        name: "Plomo",
        value: "#4b4d53ff",
        code: "plomo",
        image: "imagenes/004/plomo.png",
      },
    ],
    defaultColor: "plomo",
    hasSizes: true,
    sizes: ["38", "40", "42", "44"],
    defaultSize: "40",
    tab: 1,
  },
    {
    id: 5,
    name: "Calentador Adidas",
    description: "Calentador deportivo adidas para hombre, diseño cómodo, ideal para entrenar o relajarse. Tela suave, ajuste moderno y bolsillos prácticos. Perfecto para climas frescos y estilo urbano.",
    price: 9.99,
    hasColors: true,
    colors: [
      {
        name: "Azul",
        value: "#0e3bc0ff",
        code: "azul",
        image: "imagenes/005/azul.png",
      },
      {
        name: "Negro",
        value: "#0f0f10ff",
        code: "negro",
        image: "imagenes/005/negro.png",
      },
      {
        name: "Plomo",
        value: "#545050ff",
        code: "plomo",
        image: "imagenes/005/plomo.png",
      },
    ],
    defaultColor: "negro",
    hasSizes: true,
    sizes: ["38", "40", "42", "44"],
    defaultSize: "40",
    tab: 1,
  },
      {
    id: 6,
    name: "Chompa de Cuerina",
    description: "Chompa de cuerina para hombre, con diseño moderno y entallado que realza la figura. Cuenta con cierre frontal, cuello alto y acabados elegantes, ideal para un look urbano y versátil.",
    price: 39.99,
    hasColors: true,
    colors: [
      {
        name: "Cafe",
        value: "#7e2105ff",
        code: "cafe",
        image: "imagenes/006/cafe.png",
      },
      {
        name: "Negro",
        value: "#0f0f10ff",
        code: "negro",
        image: "imagenes/006/negro.png",
      },
    ],
    defaultColor: "cafe",
    hasSizes: true,
    sizes: ["S", "M", "L"],
    defaultSize: "M",
    tab: 1,
  },
  
  // Productos 10-18 (Pestaña 2)
  {
    id: 10,
    name: "Camiseta V-Neck",
    description: "Camiseta con cuello en V, elegante y moderna.",
    price: 22.99,
    hasColors: true,
    colors: tshirtColors,
    defaultColor: "gris",
    hasSizes: true,
    sizes: sizes,
    defaultSize: "M",
    tab: 2,
  },
  {
    id: 11,
    name: "Camiseta Estampada",
    description: "Camiseta con estampado único, 100% algodón orgánico.",
    price: 27.99,
    hasColors: true,
    colors: tshirtColors.slice(0, 3),
    defaultColor: "blanco",
    hasSizes: true,
    sizes: sizes,
    defaultSize: "M",
    tab: 2,
  },
  {
    id: 12,
    name: "Medias Blancas",
    description: "Pack de 3 pares de medias blancas de algodón.",
    price: 8.75,
    hasColors: true,
    colors: sockColors,
    defaultColor: "blanco",
    hasSizes: false,
    tab: 2,
  },
  {
    id: 13,
    name: "Mochila Urbana",
    description: "Mochila resistente con múltiples compartimientos.",
    price: 38.5,
    hasColors: true,
    colors: backpackColors,
    defaultColor: "negro",
    hasSizes: false,
    tab: 2,
  },
  {
    id: 14,
    name: "Boxer Algodón",
    description: "Pack de 5 boxers de algodón suave y elástico.",
    price: 22.5,
    image: "imagenes/boxer/algodon.jpg",
    hasColors: false,
    hasSizes: true,
    sizes: sizes,
    defaultSize: "M",
    tab: 2,
  },
  {
    id: 15,
    name: "Reloj Deportivo",
    description: "Reloj digital resistente al agua con cronómetro.",
    price: 65.25,
    image: "imagenes/reloj/deportivo.jpg",
    hasColors: false,
    hasSizes: false,
    tab: 2,
  },
  {
    id: 16,
    name: "Bufanda de Lana",
    description: "Bufanda tejida en lana suave para el invierno.",
    price: 27.99,
    image: "imagenes/bufandas/lana.jpg",
    hasColors: true,
    colors: sockColors,
    defaultColor: "negro",
    hasSizes: false,
    tab: 2,
  },
  {
    id: 17,
    name: "Cinturón de Cuero",
    description: "Cinturón de cuero genuino con hebilla metálica.",
    price: 29.75,
    image: "imagenes/cinturones/cuero.jpg",
    hasColors: false,
    hasSizes: true,
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",
    tab: 2,
  },
  {
    id: 18,
    name: "Guantes de Invierno",
    description: "Guantes térmicos para climas fríos.",
    price: 21.5,
    image: "imagenes/guantes/invierno.jpg",
    hasColors: true,
    colors: sockColors,
    defaultColor: "negro",
    hasSizes: true,
    sizes: ["S", "M", "L"],
    defaultSize: "M",
    tab: 2,
  },
];

// Estado del carrito
let cart = [];
let cartItemId = 1;

// Elementos del DOM
const productsGrid1 = document.getElementById("products-grid-1");
const productsGrid2 = document.getElementById("products-grid-2");
const selectedList = document.getElementById("selected-list");
const emptyCartDiv = document.getElementById("empty-cart");
const totalPriceElement = document.getElementById("total-price");
const sendOrderBtn = document.getElementById("send-order-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Función para manejar el zoom de imágenes
function setupImageZoom() {
  // Crear botón de cerrar zoom si no existe
  let closeBtn = document.querySelector('.close-zoom-btn');
  if (!closeBtn) {
    closeBtn = document.createElement('button');
    closeBtn.className = 'close-zoom-btn';
    closeBtn.innerHTML = '×';
    closeBtn.title = 'Cerrar (ESC)';
    document.body.appendChild(closeBtn);
    
    closeBtn.addEventListener('click', closeAllZoom);
  }
  
  // Evento para abrir/cerrar zoom al hacer clic en la imagen
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('product-main-image')) {
      const container = e.target.closest('.main-image-container');
      if (!container.classList.contains('zoomed')) {
        openZoom(container);
      } else {
        closeZoom(container);
      }
    }
  });

  // Cerrar zoom con la tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllZoom();
    }
  });

  // Cerrar zoom al hacer clic fuera de la imagen ampliada
  document.addEventListener('click', function(e) {
    if (document.querySelector('.main-image-container.zoomed') && 
        !e.target.closest('.main-image-container.zoomed') && 
        !e.target.classList.contains('product-main-image') &&
        !e.target.classList.contains('close-zoom-btn')) {
      closeAllZoom();
    }
  });

  // Evitar scroll cuando hay zoom activo
  document.addEventListener('wheel', function(e) {
    if (document.querySelector('.main-image-container.zoomed')) {
      e.preventDefault();
    }
  }, { passive: false });

  // Evitar touchmove cuando hay zoom activo
  document.addEventListener('touchmove', function(e) {
    if (document.querySelector('.main-image-container.zoomed')) {
      e.preventDefault();
    }
  }, { passive: false });
}

// Función para abrir el zoom
function openZoom(container) {
  // Cerrar cualquier zoom activo primero
  closeAllZoom();
  
  // Activar zoom en el contenedor
  container.classList.add('zoomed');
  document.body.classList.add('zoom-active');
  
  // Mostrar botón de cerrar
  const closeBtn = document.querySelector('.close-zoom-btn');
  if (closeBtn) {
    closeBtn.classList.add('show');
  }
}

// Función para cerrar el zoom
function closeZoom(container) {
  container.classList.remove('zoomed');
  document.body.classList.remove('zoom-active');
  
  // Ocultar botón de cerrar
  const closeBtn = document.querySelector('.close-zoom-btn');
  if (closeBtn) {
    closeBtn.classList.remove('show');
  }
}

// Función para cerrar todos los zooms activos
function closeAllZoom() {
  document.querySelectorAll('.main-image-container.zoomed').forEach(container => {
    container.classList.remove('zoomed');
  });
  document.body.classList.remove('zoom-active');
  
  // Ocultar botón de cerrar
  const closeBtn = document.querySelector('.close-zoom-btn');
  if (closeBtn) {
    closeBtn.classList.remove('show');
  }
}

// Cambiar entre pestañas
function changeTab(tabNumber) {
  // Cerrar zoom si está activo
  closeAllZoom();
  
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  const activeTab = document.querySelector(`.tab:nth-child(${tabNumber})`);
  if (activeTab) activeTab.classList.add("active");

  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => content.classList.remove("active"));

  const activeContent = document.getElementById(`tab-${tabNumber}`);
  if (activeContent) activeContent.classList.add("active");
}

// Función para obtener la imagen de un producto
function getProductImage(product, colorCode = null) {
  // Si se especifica un color y el producto tiene colores
  if (colorCode && product.hasColors && product.colors) {
    const color = product.colors.find((c) => c.code === colorCode);
    if (color && color.image) {
      return color.image;
    }
  }

  // Si hay una imagen por defecto en el producto
  if (product.image) {
    return product.image;
  }

  // Si el producto tiene colores, usar la imagen del color por defecto
  if (product.hasColors && product.colors) {
    const defaultColor = product.colors.find(
      (c) => c.code === product.defaultColor
    );
    if (defaultColor && defaultColor.image) {
      return defaultColor.image;
    }
  }

  // Imagen de respaldo
  return "imagenes/default.jpg";
}

// Cargar productos en las pestañas correspondientes
function loadProducts() {
  productsGrid1.innerHTML = "";
  productsGrid2.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Obtener imagen principal (color por defecto)
    const mainImage = getProductImage(product, product.defaultColor);

    // Generar HTML para miniaturas si el producto tiene colores
    let thumbnailsHTML = "";
    if (product.hasColors && product.colors && product.colors.length > 0) {
      thumbnailsHTML = `
                <div class="thumbnails-sidebar" id="thumbnails-${product.id}">
                    ${product.colors
          .map(
            (color) => `
                        <div class="thumbnail-container">
                            <img src="${color.image ||
              getProductImage(product, color.code)
              }" 
                                 alt="${product.name} - ${color.name}"
                                 class="thumbnail ${color.code === product.defaultColor
                ? "active"
                : ""
              }"
                                 data-color="${color.code}"
                                 onclick="changeProductImage(${product.id}, '${color.code
              }')">
                            <div class="thumbnail-label">${color.name}</div>
                        </div>
                    `
          )
          .join("")}
                </div>
            `;
    }

    let colorOptionsHTML = "";
    if (product.hasColors && product.colors) {
      colorOptionsHTML = `
                <div class="options-label">Color:</div>
                <div class="color-options" id="color-options-${product.id}">
                    ${product.colors
          .map(
            (color) => `
                        <div class="color-option ${color.code === product.defaultColor ? "selected" : ""
              }" 
                             style="background-color: ${color.value}; border: ${color.value === "#ffffff" ? "1px solid #ddd" : "none"
              }"
                             data-color="${color.code}"
                             data-color-name="${color.name}"
                             onclick="selectColorForProduct(${product.id}, '${color.code
              }', '${color.name}')">
                            <div class="color-tooltip">${color.name}</div>
                        </div>
                    `
          )
          .join("")}
                </div>
            `;
    }

    let sizeOptionsHTML = "";
    if (product.hasSizes && product.sizes) {
      sizeOptionsHTML = `
                <div class="options-label">Talla:</div>
                <div class="size-options" id="size-options-${product.id}">
                    ${product.sizes
          .map(
            (size) => `
                        <div class="size-option ${size === product.defaultSize ? "selected" : ""
              }" 
                             onclick="selectSizeForProduct(${product.id
              }, '${size}')">
                            ${size}
                        </div>
                    `
          )
          .join("")}
                </div>
            `;
    }

    productCard.innerHTML = `
            <div class="product-image-gallery">
                <div class="main-image-container">
                    <img src="${mainImage}" alt="${product.name
      }" class="product-main-image" id="main-image-${product.id}">
                </div>
                ${thumbnailsHTML}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                
                <div class="options-container">
                    ${colorOptionsHTML}
                    ${sizeOptionsHTML}
                </div>
                
                <button class="add-to-cart-btn" onclick="addToCart(${product.id
      })">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        `;

    if (product.tab === 1) {
      productsGrid1.appendChild(productCard);
    } else if (product.tab === 2) {
      productsGrid2.appendChild(productCard);
    }
  });
}

// Cambiar imagen del producto
function changeProductImage(productId, colorCode) {
  // Cerrar zoom si está activo
  closeAllZoom();
  
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const imageUrl = getProductImage(product, colorCode);

  // Cambiar imagen principal
  const mainImage = document.getElementById(`main-image-${productId}`);
  if (mainImage) {
    mainImage.src = imageUrl;
  }

  // Actualizar miniaturas activas
  const thumbnails = document.querySelectorAll(
    `#thumbnails-${productId} .thumbnail`
  );
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
    if (thumb.getAttribute("data-color") === colorCode) {
      thumb.classList.add("active");
    }
  });

  // Actualizar opciones de color
  selectColorForProduct(productId, colorCode);
}

// Seleccionar color para un producto
function selectColorForProduct(productId, colorCode, colorName = null) {
  const colorOptions = document.querySelectorAll(
    `#color-options-${productId} .color-option`
  );
  colorOptions.forEach((option) => {
    option.classList.remove("selected");
  });

  const selectedOption = document.querySelector(
    `#color-options-${productId} .color-option[data-color="${colorCode}"]`
  );
  if (selectedOption) {
    selectedOption.classList.add("selected");
  }

  // Cambiar imagen si es necesario
  changeProductImage(productId, colorCode);
}

// Seleccionar talla para un producto
function selectSizeForProduct(productId, size) {
  const sizeOptions = document.querySelectorAll(
    `#size-options-${productId} .size-option`
  );
  sizeOptions.forEach((option) => {
    option.classList.remove("selected");
  });

  sizeOptions.forEach((option) => {
    if (option.textContent.trim() === size) {
      option.classList.add("selected");
    }
  });
}

// Obtener color seleccionado para un producto
function getSelectedColor(productId) {
  const selectedOption = document.querySelector(
    `#color-options-${productId} .color-option.selected`
  );
  if (selectedOption) {
    return {
      code: selectedOption.getAttribute("data-color"),
      name: selectedOption.getAttribute("data-color-name"),
      value: selectedOption.style.backgroundColor || "#ccc",
    };
  }
  return null;
}

// Obtener talla seleccionada para un producto
function getSelectedSize(productId) {
  const selectedOption = document.querySelector(
    `#size-options-${productId} .size-option.selected`
  );
  if (selectedOption) {
    return selectedOption.textContent;
  }
  return null;
}

// Agregar producto al carrito
function addToCart(productId) {
  // Cerrar zoom si está activo
  closeAllZoom();
  
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Obtener color seleccionado
  const selectedColor = product.hasColors ? getSelectedColor(productId) : null;

  // Obtener imagen actual
  const currentImage = getProductImage(
    product,
    selectedColor ? selectedColor.code : null
  );

  // Validar talla si es necesario
  if (product.hasSizes) {
    const selectedSize = getSelectedSize(productId);
    if (!selectedSize) {
      alert(`Por favor, selecciona una talla para ${product.name}`);
      return;
    }
  }

  // Validar color si es necesario
  if (product.hasColors) {
    if (!selectedColor) {
      alert(`Por favor, selecciona un color para ${product.name}`);
      return;
    }
  }

  const selectedSize = product.hasSizes ? getSelectedSize(productId) : null;

  const cartItem = {
    id: cartItemId++,
    productId: product.id,
    name: product.name,
    price: product.price,
    image: currentImage,
    quantity: 1,
    color: selectedColor,
    size: selectedSize,
  };

  cart.push(cartItem);
  updateCartDisplay();
  showNotification(`"${product.name}" agregado al carrito`);
}

// Eliminar item del carrito
function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  updateCartDisplay();
}

// Actualizar cantidad de un item en el carrito
function updateCartItemQuantity(itemId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(itemId);
    return;
  }

  const item = cart.find((item) => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
    updateCartDisplay();
  }
}

// Vaciar carrito
function clearCart() {
  if (
    cart.length > 0 &&
    confirm("¿Estás seguro de que quieres vaciar el carrito?")
  ) {
    cart = [];
    updateCartDisplay();
    showNotification("Carrito vaciado");
  }
}

// Actualizar visualización del carrito
function updateCartDisplay() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = total.toFixed(2);
  selectedList.innerHTML = "";

  if (cart.length === 0) {
    selectedList.appendChild(emptyCartDiv.cloneNode(true));
    sendOrderBtn.disabled = true;
    clearCartBtn.style.display = "none";
  } else {
    emptyCartDiv.style.display = "none";
    clearCartBtn.style.display = "block";

    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.className = "selected-item";

      let detailsHTML = "";
      if (item.size) {
        detailsHTML += `<span>Talla: ${item.size}</span>`;
      }
      if (item.color) {
        detailsHTML += `<span class="item-color">
                    <span>Color:</span>
                    <span class="item-color-swatch" style="background-color: ${item.color.value
          }; ${item.color.value === "#ffffff" ? "border: 1px solid #ddd" : ""
          }"></span>
                    <span>${item.color.name}</span>
                </span>`;
      }

      itemElement.innerHTML = `
                <div class="item-info">
                    <div class="item-image-container">
                        <img src="${item.image}" alt="${item.name
        }" class="item-image">
                    </div>
                    <div class="item-text-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-details">
                            ${detailsHTML}
                        </div>
                    </div>
                </div>
                <div class="item-actions">
                    <div class="item-quantity-controls">
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id
        }, ${item.quantity - 1})">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id
        }, ${item.quantity + 1})">+</button>
                    </div>
                    <div class="item-price">$${(
          item.price * item.quantity
        ).toFixed(2)}</div>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id
        })">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
      selectedList.appendChild(itemElement);
    });

    const totalElement = document.createElement("div");
    totalElement.className = "selected-item";
    totalElement.style.fontWeight = "bold";
    totalElement.style.borderTop = "2px solid #4b6cb7";
    totalElement.style.paddingTop = "15px";
    totalElement.innerHTML = `
            <div class="item-name">TOTAL</div>
            <div class="item-actions">
                <div class="item-price" style="color: #28a745; font-size: 1.2rem;">$${total.toFixed(
      2
    )}</div>
            </div>
        `;
    selectedList.appendChild(totalElement);

    sendOrderBtn.disabled = false;
  }
}

// Enviar pedido por WhatsApp
function sendOrder() {
  // Cerrar zoom si está activo
  closeAllZoom();
  
  if (cart.length === 0) {
    alert(
      "Por favor, agrega al menos un producto al carrito para enviar el pedido."
    );
    return;
  }

  let message = `¡Hola! Quiero realizar el siguiente pedido:%0A%0A`;
  message += `*📦 PEDIDO DE TIENDA ONLINE*%0A%0A`;

  let total = 0;
  const productSummary = {};

  cart.forEach((item) => {
    const key = `${item.name}-${item.size || "sin-talla"}-${item.color ? item.color.code : "sin-color"
      }`;

    if (!productSummary[key]) {
      productSummary[key] = {
        name: item.name,
        size: item.size,
        color: item.color,
        quantity: 0,
        price: item.price,
        total: 0,
      };
    }

    productSummary[key].quantity += item.quantity;
    productSummary[key].total += item.price * item.quantity;
  });

  Object.values(productSummary).forEach((item) => {
    total += item.total;
    message += `• ${item.name}%0A`;

    if (item.size) {
      message += `  Talla: ${item.size}%0A`;
    }

    if (item.color) {
      message += `  Color: ${item.color.name}%0A`;
    }

    message += `  Cantidad: ${item.quantity}%0A`;
    message += `  Precio unitario: $${item.price.toFixed(2)}%0A`;
    message += `  Subtotal: $${item.total.toFixed(2)}%0A%0A`;
  });

  message += `*TOTAL A PAGAR: $${total.toFixed(2)}*%0A%0A`;
  message += `¡Gracias! Por favor, confírmame la disponibilidad y el tiempo de entrega.`;

  const phoneNumber = "593987259001";
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

// Mostrar notificación
function showNotification(message) {
  // Cerrar zoom si está activo
  closeAllZoom();
  
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

  notification.innerHTML = `
        <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
        ${message}
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);

  if (!document.getElementById("notification-styles")) {
    const style = document.createElement("style");
    style.id = "notification-styles";
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
    document.head.appendChild(style);
  }
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  setupImageZoom();
  sendOrderBtn.addEventListener("click", sendOrder);
  clearCartBtn.addEventListener("click", clearCart);
});

// Tallas disponibles
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const shoeSizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44"];

// Colores disponibles para camisetas
const tshirtColors = [
  { name: "Blanco", value: "#ffffff", code: "blanco" },
  { name: "Negro", value: "#000000", code: "negro" },
  { name: "Azul", value: "#1e3a8a", code: "azul" },
  { name: "Rojo", value: "#dc2626", code: "rojo" },
  { name: "Verde", value: "#16a34a", code: "verde" },
  { name: "Gris", value: "#6b7280", code: "gris" },
  { name: "Azul Marino", value: "#1e40af", code: "azul-marino" },
  { name: "Beige", value: "#d4a574", code: "beige" },
];

const sockColors = [
  { name: "Blanco", value: "#ffffff", code: "blanco" },
  { name: "Negro", value: "#000000", code: "negro" },
  { name: "Gris", value: "#6b7280", code: "gris" },
];

const jacketColors = [
  { name: "Negro", value: "#000000", code: "negro" },
  { name: "Azul Marino", value: "#1e3a8a", code: "azul-marino" },
  { name: "Verde Oliva", value: "#3f6212", code: "verde-oliva" },
  { name: "Gris", value: "#6b7280", code: "gris" },
];

const backpackColors = [
  { name: "Negro", value: "#000000", code: "negro" },
  { name: "Azul", value: "#1e3a8a", code: "azul" },
  { name: "Rojo", value: "#dc2626", code: "rojo" },
  { name: "Verde", value: "#16a34a", code: "verde" },
];

// Función para obtener imágenes de ejemplo
function getImageUrl(productName, colorCode) {
  // URLs de ejemplo de Unsplash para diferentes colores de camisetas
  const colorImages = {
    blanco:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    negro:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    azul: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rojo: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    verde:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gris: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "azul-marino":
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    beige:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  };

  // Para productos específicos, puedes tener imágenes diferentes
  if (productName.includes("Camiseta")) {
    return (
      colorImages[colorCode] ||
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    );
  }

  // Imagen genérica para otros productos
  return "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
}

// Datos de los productos (18 productos en total)
const products = [
  // Productos 1-9 (Pestaña 1) - CAMISETAS CON MÚLTIPLES COLORES
  {
    id: 1,
    name: "Camiseta Básica",
    description: "Camiseta de manga corta 100% algodón, cómoda y transpirable.",
    price: 19.99,
    hasColors: true,
    colors: tshirtColors,
    defaultColor: "blanco",
    hasSizes: true,
    sizes: sizes,
    defaultSize: "M",
    tab: 1,
  },
  {
    id: 2,
    name: "Camiseta Polo",
    description:
      "Camiseta polo clásica, ideal para ocasiones casuales y deportivas.",
    price: 29.99,
    hasColors: true,
    colors: tshirtColors.slice(0, 6),
    defaultColor: "azul",
    hasSizes: true,
    sizes: sizes,
    defaultSize: "M",
    tab: 1,
  },
  {
    id: 3,
    name: "Camiseta Manga Larga",
    description: "Camiseta de manga larga para climas frescos, suave al tacto.",
    price: 24.99,
    hasColors: true,
    colors: tshirtColors,
    defaultColor: "negro",
    hasSizes: true,
    sizes: sizes,
    defaultSize: "L",
    tab: 1,
  },
  {
    id: 4,
    name: "Camiseta Deportiva",
    description:
      "Camiseta técnica para deporte, con tecnología de secado rápido.",
    price: 34.99,
    hasColors: true,
    colors: tshirtColors.slice(0, 4),
    defaultColor: "rojo",
    hasSizes: true,
    sizes: sizes,
    defaultSize: "M",
    tab: 1,
  },
  // Productos sin colores variados
  {
    id: 5,
    name: "Zapatos Casuales",
    description: "Zapatos cómodos y versátiles para uso diario.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    hasColors: false,
    hasSizes: true,
    sizes: shoeSizes,
    defaultSize: "40",
    tab: 1,
  },
  {
    id: 6,
    name: "Pantalón Deportivo",
    description: "Pantalón deportivo con cintura elástica y bolsillos.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    hasColors: false,
    hasSizes: true,
    sizes: sizes,
    defaultSize: "M",
    tab: 1,
  },
  {
    id: 7,
    name: "Chaqueta de Cuero",
    description: "Chaqueta de cuero genuino, estilo clásico.",
    price: 120.99,
    hasColors: true,
    colors: jacketColors,
    defaultColor: "negro",
    hasSizes: true,
    sizes: sizes,
    defaultSize: "L",
    tab: 1,
  },
  {
    id: 8,
    name: "Gorra Deportiva",
    description: "Gorra ajustable con protección UV.",
    price: 18.25,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    hasColors: false,
    hasSizes: true,
    sizes: ["Única", "Ajustable"],
    defaultSize: "Ajustable",
    tab: 1,
  },
  {
    id: 9,
    name: "Saco Plomo",
    description: "Saco elegante color plomo para ocasiones formales.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    hasColors: false,
    hasSizes: true,
    sizes: sizes,
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
    colors: tshirtColors.slice(1, 5),
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
    colors: tshirtColors,
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
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    hasColors: false,
    hasSizes: false,
    tab: 2,
  },
  {
    id: 16,
    name: "Bufanda de Lana",
    description: "Bufanda tejida en lana suave para el invierno.",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1610553953724-079684b3f6f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    hasColors: true,
    colors: tshirtColors.slice(2, 6),
    defaultColor: "gris",
    hasSizes: false,
    tab: 2,
  },
  {
    id: 17,
    name: "Cinturón de Cuero",
    description: "Cinturón de cuero genuino con hebilla metálica.",
    price: 29.75,
    image:
      "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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

// Cambiar entre pestañas
function changeTab(tabNumber) {
  // Actualizar pestañas activas
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));

  const activeTab = document.querySelector(`.tab:nth-child(${tabNumber})`);
  if (activeTab) activeTab.classList.add("active");

  // Mostrar contenido de la pestaña seleccionada
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => content.classList.remove("active"));

  const activeContent = document.getElementById(`tab-${tabNumber}`);
  if (activeContent) activeContent.classList.add("active");
}

// Cargar productos en las pestañas correspondientes
function loadProducts() {
  // Limpiar grids
  productsGrid1.innerHTML = "";
  productsGrid2.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Determinar la imagen principal
    let mainImage =
      product.image || getImageUrl(product.name, product.defaultColor);

    // Crear objeto de imágenes para productos con colores
    let colorImages = {};
    if (product.hasColors && product.colors) {
      product.colors.forEach((color) => {
        colorImages[color.code] =
          product.image || getImageUrl(product.name, color.code);
      });
    }

    // Generar HTML para miniaturas si el producto tiene colores
    let thumbnailsHTML = "";
    if (product.hasColors && product.colors) {
      thumbnailsHTML = `
                <div class="thumbnails-sidebar" id="thumbnails-${product.id}">
                    ${product.colors
                      .map(
                        (color, index) => `
                        <img src="${colorImages[color.code]}" 
                             alt="${product.name} - ${color.name}"
                             class="thumbnail ${
                               color.code === product.defaultColor
                                 ? "active"
                                 : ""
                             }"
                             data-color="${color.code}"
                             onclick="changeProductImage(${product.id}, '${
                          color.code
                        }', '${colorImages[color.code]}')">
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
                        (color, index) => `
                        <div class="color-option ${
                          color.code === product.defaultColor ? "selected" : ""
                        }" 
                             style="background-color: ${color.value}; border: ${
                          color.value === "#ffffff" ? "1px solid #ddd" : "none"
                        }"
                             data-color="${color.code}"
                             data-color-name="${color.name}"
                             data-image="${colorImages[color.code]}"
                             onclick="selectColorForProduct(${product.id}, '${
                          color.code
                        }', '${color.name}', '${colorImages[color.code]}')">
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
                        <div class="size-option ${
                          size === product.defaultSize ? "selected" : ""
                        }" 
                             onclick="selectSizeForProduct(${
                               product.id
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
                    <img src="${mainImage}" alt="${
      product.name
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
                
                <button class="add-to-cart-btn" onclick="addToCart(${
                  product.id
                })">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        `;

    // Agregar a la pestaña correspondiente
    if (product.tab === 1) {
      productsGrid1.appendChild(productCard);
    } else if (product.tab === 2) {
      productsGrid2.appendChild(productCard);
    }
  });
}

// Cambiar imagen del producto cuando se selecciona un color
function changeProductImage(productId, colorCode, imageUrl) {
  // Cambiar imagen principal
  const mainImage = document.getElementById(`main-image-${productId}`);
  if (mainImage) {
    mainImage.src = imageUrl;
    mainImage.alt = `Producto ${productId} - Color ${colorCode}`;
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

  // Actualizar opciones de color visualmente
  const selectedColorOption = document.querySelector(
    `#color-options-${productId} .color-option[data-color="${colorCode}"]`
  );
  if (selectedColorOption) {
    // Primero quitar selección de todos
    const allColorOptions = document.querySelectorAll(
      `#color-options-${productId} .color-option`
    );
    allColorOptions.forEach((option) => option.classList.remove("selected"));

    // Luego seleccionar el correcto
    selectedColorOption.classList.add("selected");
  }
}

// Seleccionar color para un producto
function selectColorForProduct(
  productId,
  colorCode,
  colorName,
  imageUrl = null
) {
  // Actualizar selección visual de opciones de color
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

  // Si se proporciona una URL de imagen, cambiar la imagen principal y miniaturas
  if (imageUrl) {
    changeProductImage(productId, colorCode, imageUrl);
  }
}

// Seleccionar talla para un producto
function selectSizeForProduct(productId, size) {
  // Actualizar selección visual
  const sizeOptions = document.querySelectorAll(
    `#size-options-${productId} .size-option`
  );
  sizeOptions.forEach((option) => {
    option.classList.remove("selected");
  });

  // Buscar la opción correcta
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
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Obtener la imagen actual del producto
  const mainImage = document.getElementById(`main-image-${productId}`);
  const currentImage = mainImage
    ? mainImage.src
    : product.image || getImageUrl(product.name, product.defaultColor);

  // Validar que se haya seleccionado talla si el producto la requiere
  if (product.hasSizes) {
    const selectedSize = getSelectedSize(productId);
    if (!selectedSize) {
      alert(`Por favor, selecciona una talla para ${product.name}`);
      return;
    }
  }

  // Validar que se haya seleccionado color si el producto lo requiere
  if (product.hasColors) {
    const selectedColor = getSelectedColor(productId);
    if (!selectedColor) {
      alert(`Por favor, selecciona un color para ${product.name}`);
      return;
    }
  }

  const selectedColor = product.hasColors ? getSelectedColor(productId) : null;
  const selectedSize = product.hasSizes ? getSelectedSize(productId) : null;

  // Crear un ID único para este item del carrito
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

  // Mostrar confirmación
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
  // Calcular total
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  // Actualizar precio total
  totalPriceElement.textContent = total.toFixed(2);

  // Actualizar lista de productos seleccionados
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
                    <span class="item-color-swatch" style="background-color: ${
                      item.color.value
                    }; ${
          item.color.value === "#ffffff" ? "border: 1px solid #ddd" : ""
        }"></span>
                    <span>${item.color.name}</span>
                </span>`;
      }

      itemElement.innerHTML = `
                <div class="item-info">
                    <div class="item-image-container">
                        <img src="${item.image}" alt="${
        item.name
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
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${
                          item.id
                        }, ${item.quantity - 1})">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${
                          item.id
                        }, ${item.quantity + 1})">+</button>
                    </div>
                    <div class="item-price">$${(
                      item.price * item.quantity
                    ).toFixed(2)}</div>
                    <button class="remove-item-btn" onclick="removeFromCart(${
                      item.id
                    })">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
      selectedList.appendChild(itemElement);
    });

    // Agregar total al final
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
  if (cart.length === 0) {
    alert(
      "Por favor, agrega al menos un producto al carrito para enviar el pedido."
    );
    return;
  }

  // Construir mensaje para WhatsApp
  let message = `¡Hola! Quiero realizar el siguiente pedido:%0A%0A`;
  message += `*📦 PEDIDO DE TIENDA ONLINE*%0A%0A`;

  let total = 0;

  // Agrupar productos similares para el resumen
  const productSummary = {};

  cart.forEach((item) => {
    const key = `${item.name}-${item.size || "sin-talla"}-${
      item.color ? item.color.code : "sin-color"
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

  // Agregar productos al mensaje
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

  // Número de WhatsApp (cambia este número por el tuyo)
  const phoneNumber = "593987259001";

  // Abrir WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

// Mostrar notificación
function showNotification(message) {
  // Crear elemento de notificación
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

  // Remover después de 3 segundos
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);

  // Agregar estilos de animación
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

  // Asignar eventos a los botones
  sendOrderBtn.addEventListener("click", sendOrder);
  clearCartBtn.addEventListener("click", clearCart);
});

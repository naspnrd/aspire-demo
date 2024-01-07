// Generate a random 4-digit card number
function generateCardNumber() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10000));
}

// Generate a random expiration date in MM/YY format
function generateExpirationDate() {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String(
    new Date().getFullYear() + Math.floor(Math.random() * 6)
  ).slice(-2);
  return `${month}/${year}`;
}

// Generate a random 3-digit CVV
function generateCVV() {
  return String(Math.floor(Math.random() * 1000)).padStart(3, "0");
}

// Get card details hashmap from local storage
function getCardDetailsHashMap() {
  return JSON.parse(localStorage.getItem("hashmap")) || {};
}

// Update card details hashmap in local storage
function updateCardDetailsHashMap(hashmap) {
  localStorage.setItem("hashmap", JSON.stringify(hashmap));
}

// Generate unique cards and store them in a hashmap
export function generateUniqueCards() {
  const cardDetailsHashMap = getCardDetailsHashMap();
  return generateUniqueCard(cardDetailsHashMap);
}

// Generate a unique card and store it in a hashmap
function generateUniqueCard(hashmap) {
  let cardNumber, expirationDate, cvv;

  do {
    cardNumber = generateCardNumber();
    expirationDate = generateExpirationDate();
    cvv = generateCVV();
  } while (hashmap[cardNumber.join("")]); // Ensure uniqueness

  // Store card details in hashmap
  hashmap[cardNumber.join("")] = { expirationDate, cvv };
  updateCardDetailsHashMap(hashmap);

  return { cardNumber, expirationDate, cvv };
}

// Get card details list from local storage
export function getCardDetailsList() {
  try {
    const storedList = JSON.parse(localStorage.getItem("cardDetails")) ?? [];
    return storedList.length > 0
      ? storedList
      : [
          {
            cardNumber: [7005, 8769, 4066, 5314],
            cvv: "792",
            expirationDate: "01/25",
            firstName: "Neeraj",
            lastName: "Chaudhary",
          },
          {
            cardNumber: [7021, 2769, 4066, 4314],
            cvv: "123",
            expirationDate: "01/29",
            firstName: "Aspire",
            lastName: "App",
          },
        ];
  } catch (error) {
    console.error("Error while parsing card details list:", error.message);
    return [];
  }
}

// Update card details list in local storage
export function updateCardDetailsList(cardDetailsList) {
  try {
    localStorage.setItem("cardDetails", JSON.stringify(cardDetailsList));
  } catch (error) {
    console.error("Error while updating card details list:", error.message);
  }
}

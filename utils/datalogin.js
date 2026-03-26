export const validLoginData = {
  username: "Prabu",
  password: "Password123!"
};

export const passwordNegativeCases = [
  { name: "Panjang karakter kurang dari 8", password: "abc123A!" },
  { name: "Tidak ada huruf kapital", password: "lowercase1!" },
  { name: "Tidak ada huruf kecil", password: "UPPERCASE1!" },
  { name: "Tidak ada karakter spesial", password: "NoSpecial123" },
  { name: "Tidak ada angka (digit)", password: "NoDigitA!bc" },
  { name: "Hanya huruf saja", password: "OnlyLetters" },
  { name: "Hanya angka dan simbol", password: "12345678!@#" },
  { name: "Hanya spasi kosong", password: "          " }
];
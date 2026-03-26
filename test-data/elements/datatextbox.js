export const validDataTextBox = {
  fullname: "testing",
  email: "testing@example.com",
  currentAddress: "JalanTesting no.123",
  permanentAddress: "Gang Testing no.456"
};

export const negativeDataEmailTextBox = [
  {
    name: "Email Tanpa @",
    email: "userexample.com"
  },
  {
    name: "Email Tanpa domain",
    email: "user@"
  },
  {
    name: "Email Tanpa username",
    email: "@example.com"
  },
  {
    name: "Email Tanpa titik di domain",
    email: "user@examplecom"
  },
  {
    name: "Domain tidak valid",
    email: "user@.com"
  },
  {
    name: "Email Ada spasi di email",
    email: "user @example.com"
  },
  {
    name: "Email Double @",
    email: "user@@example.com"
  },
  {
    name: "Email Karakter spesial tidak valid",
    email: "user!#@example.com"
  },
  {
    name: "Email Titik di awal username",
    email: ".user@example.com"
  },
  {
    name: "Email Titik di akhir username",
    email: "user.@example.com"
  },
  {
    name: "Email Double titik di username",
    email: "user..name@example.com"
  },
  {
    name: "Email Domain terlalu pendek",
    email: "user@example.c"
  },
  {
    name: "Email Tanpa TLD",
    email: "user@example"
  },
  {
    name: "Email numeric saja tanpa domain",
    email: "123456"
  },
  {
    name: "Email Format random string",
    email: "asdasdasd"
  }
];

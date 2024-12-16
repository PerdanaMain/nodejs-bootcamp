import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// input user merupakan salah satu proses blocking
async function userInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (value) => {
      resolve(value);
    }); // proses blocking
  });
}

interface Account {
  id: string;
  name: string;
  accountNumber: string;
  email: string;
  phone: string;
  balance: number;
  isBlocked: boolean;
}

interface AtmCard {
  id: string;
  account: Account;
  pin: string;
  cardNumber: string;
}

const accountA: Account = {
  id: "1",
  name: "Rizky",
  accountNumber: "A001",
  email: "rizky@mail.com",
  phone: "08123456789",
  balance: 1000000,
  isBlocked: false,
};

const accountB: Account = {
  id: "2",
  name: "Agung",
  accountNumber: "A001",
  email: "agung@mail.com",
  phone: "08123456789",
  balance: 5000000,
  isBlocked: false,
};

const atmCardA: AtmCard = {
  id: "1",
  account: accountA,
  pin: "123456",
  cardNumber: "ATM001",
};

const atmCardB: AtmCard = {
  id: "2",
  account: accountB,
  pin: "123456",
  cardNumber: "ATM002",
};

const accountDb: Account[] = [accountA, accountB];
const atmCardDb: AtmCard[] = [atmCardA, atmCardB];

function checkBalance(account: Account, atmCard: AtmCard) {
  console.log(`Your Balance is ${account.balance}`);
  console.log("===============================\n");
  showMenu(account, atmCard);
}

async function login(): Promise<
  boolean | { account: Account; atmCard: AtmCard }
> {
  console.log("Welcome to ABC Bank");

  const valAtmNumber: string = await userInput("Insert your atm number: ");

  const valPin: string = await userInput("Insert your pin: ");

  const findAccountByAtmNumber = atmCardDb.find((item) => {
    return (
      item.pin === valPin &&
      item.cardNumber === valAtmNumber &&
      item.account.isBlocked === false
    );
  });

  if (!findAccountByAtmNumber) return false;

  return {
    account: findAccountByAtmNumber.account,
    atmCard: findAccountByAtmNumber,
  };
}

async function showMenu(account: Account, atmCard: AtmCard) {
  console.log("\n=====================");
  console.log("1. Check Balance");
  console.log("2. Exit");
  console.log("=====================\n");

  // simpan input user di sini ...
  const valSelectedMenu = await userInput("Choose menu: ");

  switch (Number(valSelectedMenu)) {
    case 1:
      checkBalance(account, atmCard);
      break;
    case 2:
      exit();
      break;
    default:
      console.log("Menu not found");
      showMenu(account, atmCard);
      break;
  }
}

function exit() {
  rl.close();
}

let loginAttempt: number = 0;

async function main() {
  if (loginAttempt >= 3) {
    console.log("You have been try for 3 times. Your account is blocked");
    exit();
  }
  const isAuthentticated = await login();
  if (!isAuthentticated) {
    loginAttempt += 1;
    console.log(
      `Your card number or pin is wrong. Please try : ${loginAttempt}`
    );
    return main(); // recursive
  }
  // destructuring
  const { account, atmCard } = isAuthentticated as {
    account: Account;
    atmCard: AtmCard;
  };
  showMenu(account, atmCard);
}

main();

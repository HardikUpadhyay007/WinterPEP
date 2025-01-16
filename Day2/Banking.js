let account = null;

const createAccount = (accountName, initialDeposit) => {
    if (account) {
        console.log("An account already exists.");
        return;
    }
    if (initialDeposit < 0) {
        console.log("Initial deposit cannot be negative.");
        return;
    }
    account = {
        name: accountName,
        balance: initialDeposit,
    };
    console.log(
        `Account created successfully for ${accountName} with an initial deposit of $${initialDeposit}.`
    );
};

const depositMoney = (amount) => {
    if (!account) {
        console.log("No account exists. Please create an account first.");
        return;
    }
    if (amount <= 0) {
        console.log("Deposit amount must be greater than zero.");
        return;
    }
    account.balance += amount;
    console.log(
        `$${amount} deposited successfully. Current balance: $${account.balance}.`
    );
};

const withdrawMoney = (amount) => {
    if (!account) {
        console.log("No account exists. Please create an account first.");
        return;
    }
    if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
        return;
    }
    if (amount > account.balance) {
        console.log("Insufficient funds. Withdrawal failed.");
        return;
    }
    account.balance -= amount;
    console.log(
        `$${amount} withdrawn successfully. Current balance: $${account.balance}.`
    );
};

const showAccountDetails = () => {
    if (!account) {
        console.log("No account exists.");
        return;
    }
    console.log(`Account Name: ${account.name}, Balance: $${account.balance}`);
};

createAccount("Hardik", 500);
depositMoney(200);
withdrawMoney(150);
showAccountDetails();
withdrawMoney(700);

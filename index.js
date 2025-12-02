function createLoginTracker(userInfo) {
    console.log("login feature intialized.");

    // Track number of login attempts
    let attemptCount = 0;

    // Define inner arrow function
    const checkLogin = (passwordAttempt) => {
        attemptCount++; // increment attempt count

        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts.";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful.";
        } else {
            return "Incorrect password. Attempt #" + attemptCount;
        }
    };

    return checkLogin;
}

// User object
const user1 = {
    username: "JoyBurgei",
    password: "pass123"
};

const login = createLoginTracker(user1);

console.log(login("wrongpass"));
console.log(login("wrongpass"));
console.log(login("wrongpass"));
console.log(login("pass123"));

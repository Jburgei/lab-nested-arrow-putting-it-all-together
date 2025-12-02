function createLoginTracker(userInfo) {
    let attemptCount = 0;

    const checkLogin = (passwordAttempt) => {
        attemptCount++;

        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        return `Attempt ${attemptCount}: Login failed`;
    };

    return checkLogin;
}

module.exports = { createLoginTracker };

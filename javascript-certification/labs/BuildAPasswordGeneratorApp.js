const generatePassword = (passLength) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";
    let result = "";

    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }

    return result;
}

const password = generatePassword(10);

console.log(`Generated password: ${password}`);
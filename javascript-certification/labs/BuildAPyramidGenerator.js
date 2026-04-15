const pyramid = (pattern, rows, isDownwards) => {
    let result = "";

    if (isDownwards) {
        let charNumber = 1 + (rows - 1) * 2;

        for (let i = 0; i < rows; i++) {
            result +=
                "\n" +
                " ".repeat(i) +
                pattern.repeat(charNumber);

            charNumber -= 2;
        }
    } else {
        let charNumber = 1;

        for (let i = 0; i < rows; i++) {
            result +=
                "\n" +
                " ".repeat(rows - i - 1) +
                pattern.repeat(charNumber);

            charNumber += 2;
        }
    }

    return result + "\n";
};
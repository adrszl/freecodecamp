const getAverage = (testScores) => {
    let sum = 0;

    for (let score of testScores) {
        sum += score;
    }

    return sum / testScores.length;
}

const getGrade = (score) => {
    let letterGrade = "";

    if (score === 100) letterGrade = "A+";
    else if (score >= 90 && score <= 99) letterGrade = "A";
    else if (score >= 80 && score <= 89) letterGrade = "B";
    else if (score >= 70 && score <= 79) letterGrade = "C";
    else if (score >= 60 && score <= 69) letterGrade = "D";
    else letterGrade = "F";

    return letterGrade;
}

const hasPassingGrade = (score) => {
    return score >= 60;
}

const studentMsg = (testScores, score) => {
    const classAvgScore = getAverage(testScores);
    const studentsGrade = getGrade(score);
    const hasStudentPassed = hasPassingGrade(score);

    if (hasStudentPassed) return `Class average: ${classAvgScore}. Your grade: ${studentsGrade}. You passed the course.`;
    else return `Class average: ${classAvgScore}. Your grade: ${studentsGrade}. You failed the course.`;
}
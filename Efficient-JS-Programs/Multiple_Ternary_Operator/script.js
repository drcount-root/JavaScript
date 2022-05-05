const marks = 86;
const grade = marks < 0 || marks > 100 ? "Invalid marks, kindly check again!"
    : marks >= 90 && marks <= 100 ? "A+"
        : marks >= 80 && marks <= 89 ? "A"
            : marks >= 70 && marks <= 79 ? "B+"
                : marks >= 60 && marks <= 69 ? "B"
                    : marks >= 50 && marks <= 59 ? "C+"
                        : marks >= 40 && marks <= 49 ? "C"
                            : "FAIL!";

console.log("\n" + grade);
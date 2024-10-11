import { useState } from "react";

import styles from "./App.module.css";

function App() {
	const [operand1, setOperand1] = useState("");
	const [operator, setOperator] = useState("");
	const [operand2, setOperand2] = useState("");
	const [resultColor, setResultColor] = useState(false);

	const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	const hundleFirstNum = (num) => {
		if (operator === "") {
			setOperand1(`${operand1}${num}`);
		} else {
			setOperand2(`${operand2}${num}`);
		}
	};

	const hundleSum = () => {
		if (operand1 !== "") {
			setOperator("+");
			setResultColor(false);
		}
	};

	const hundleDifference = () => {
		if (operand1 !== "") {
			setOperator("-");
			setResultColor(false);
		}
	};

	const hundleResult = () => {
		let result;
		if (operator === "+") {
			result = parseInt(operand1) + parseInt(operand2);
		} else if (operator === "-") {
			result = parseInt(operand1) - parseInt(operand2);
		}

		setOperand1(result);
		setOperator("");
		setOperand2("");
		setResultColor(true);
	};

	const hundleReset = () => {
		setOperand1("");
		setOperator("");
		setOperand2("");
		setResultColor(false);
	};

	const isValidResult = operand1 === "" || operand2 === "" ? true : false; // поставил данное условие для того, чтобы не было проблем, если нажать '=' до того, как введёшь цифры (т.е. в первую очередь)

	return (
		<>
			<div className={styles.container}>
				<div className={styles["calc-main"]}>
					<output
						className={`${styles["current-value"]} ${resultColor ? styles.result : ""}`}
					>
						{operand1}
						{operator}
						{operand2}
					</output>
					<div className={styles["calc-buttons_expression"]}>
						<button
							className={styles["calc-buttons_expression-mark"]}
							onClick={hundleSum}
						>
							+
						</button>
						<button
							className={styles["calc-buttons_expression-mark"]}
							onClick={hundleDifference}
						>
							-
						</button>
						<button
							className={styles["calc-buttons_expression-mark"]}
							onClick={hundleResult}
							disabled={isValidResult}
						>
							=
						</button>
						<button
							className={styles["calc-buttons_expression-mark"]}
							onClick={hundleReset}
						>
							C
						</button>
					</div>
					<div className={styles["calc-buttons_number"]}>
						{NUMS.map((num, index) => (
							<button
								key={index}
								className={styles["calc-buttons_number-figure"]}
								onClick={() => hundleFirstNum(num)}
							>
								{num}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

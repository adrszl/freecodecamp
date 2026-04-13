const { useState, useRef } = React;

export function Board() {
    const [currentSign, setCurrentSign] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isBoardBlocked, setIsBoardBlocked] = useState(false);
    const [clickCounter, setClickCounter] = useState(0);

    const buttonRefs = useRef(Array.from({ length: 9 }, () => React.createRef()));
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkIfWinning = () => {
        const values = buttonRefs.current.map(ref => ref.current.textContent);

        for (const [a, b, c] of winningCombinations) {
            if (
                values[a] &&
                values[a] === values[b] &&
                values[a] === values[c]
            ) {
                return values[a];
            }
        }

        return null;
    };

    const handleClick = (index) => {
        const btn = buttonRefs.current[index].current;

        if (btn && btn.textContent.length === 0 && !isBoardBlocked) {
            btn.textContent = currentSign;

            const nextClickCount = clickCounter + 1;

            const winning = nextClickCount >= 5 ? checkIfWinning() : null;
            if (winning) {
                setWinner(winning);
                setIsBoardBlocked(true);
            } else if (nextClickCount === 9) setWinner('draw');

            setCurrentSign(prev => (prev === 'X' ? 'O' : 'X'));
            setClickCounter(nextClickCount);
        }
    };

    const handleReset = () => {
        for (let i = 0; i < 9; ++i) {
            buttonRefs.current[i].current.textContent = '';
        }
        setCurrentSign("X")
        setWinner(null);
        setIsBoardBlocked(false);
        setClickCounter(0);
    }

    const renderMessage = () => {
        let message = null;

        if (winner === 'draw') message = "It's a Draw!";
        else if (winner) message = `Winner: ${winner}`;
        else message = `Next Player: ${currentSign}`;

        return (
            <>
                {message}
            </>
        );
    }

    return (
        <>
            <h1>Tic-Tac-Toe</h1>
            <p>
                {renderMessage()}
            </p>
            <div className="board">
                {buttonRefs.current.map((ref, i) => (
                    <button
                        key={i}
                        className="square"
                        ref={ref}
                        onClick={() => handleClick(i)}
                    >
                    </button>
                ))}
                <button
                    id="reset"
                    onClick={handleReset}
                    className="reset-button">
                    Reset game
                </button>
            </div>
        </>
    );
}
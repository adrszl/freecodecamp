const { useState, useMemo } = React;

export function CurrencyConverter() {
    const [value, setValue] = useState(1);
    const [startCurrency, setStartCurrency] = useState("PLN");
    const [targetCurrency, setTargetCurrency] = useState("USD");

    const currenciesToChoose = {
        PLN: 1,
        USD: 0.27,
        EUR: 0.23,
        GBP: 0.2,
        JPY: 43.03
    };

    const allConverted = useMemo(() => {
        const inPLN = value / currenciesToChoose[startCurrency];
        const results = {};
        for (let key in currenciesToChoose) {
            results[key] = inPLN * currenciesToChoose[key];
        }
        return results;
    }, [value, startCurrency]);

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>

            <h2>
                {startCurrency} to {targetCurrency} Conversion
            </h2>

            <input
                id="value-input"
                type="number"
                min="0"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
            />

            <label htmlFor="start-currency">Start Currency:</label>
            <select
                id="start-currency"
                value={startCurrency}
                onChange={(e) => setStartCurrency(e.target.value)}
            >
                {Object.keys(currenciesToChoose).map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <label htmlFor="target-currency">Target Currency:</label>
            <select
                id="target-currency"
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
            >
                {Object.keys(currenciesToChoose).map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <p>
                Converted Amount: {allConverted[targetCurrency].toFixed(2)} {targetCurrency}
            </p>
        </div>
    );
}
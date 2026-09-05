export async function evaluateConsistency(
    prompt,
    expectedResult,
    numberOfRuns,
    evaluator
) {
    let count = 0;
    const results = [];

    for (let i = 0; i < numberOfRuns; i++) {
        const actualResult = await evaluator(prompt);
        results.push(actualResult);

        if (actualResult === expectedResult) {
            count++;
        }
    }

    const resultCounts = {};

    for (const result of results) {
        if (resultCounts[result] === undefined) {
            resultCounts[result] = 1;
        } else {
            resultCounts[result]++;
        }
    }

    const counts = Object.values(resultCounts);
    const mostFrequentCount = Math.max(...counts);

    const correctness = (count / results.length) * 100;
    const consistency = (mostFrequentCount / results.length) * 100;

    return {
        prompt,
        expectedResult,
        numberOfRuns,
        resultCounts,
        correctness,
        consistency
    };
}
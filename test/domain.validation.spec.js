import { validationCases } from '../data/domainValidationCases.js';
import { evaluateDomain } from '../evaluators/domainEvaluator.js';
let successCount = 0;
let failedCount = 0;
let failedDetails = [];

for(const validationCase of validationCases){
    const actualValidation = await evaluateDomain(validationCase.prompt);
    const expectedValidation = validationCase.domain

    if(actualValidation===expectedValidation){
        successCount++

    }
    else{
        failedCount++
        failedDetails.push({
        prompt: validationCase.prompt,
        expected: expectedValidation,
        actual: actualValidation
    });

    }


    


}

const totalTests = validationCases.length
const accuracy = (successCount / totalTests) * 100

console.log({
    'Total Tests': totalTests,
    'Passed': successCount,
    'Failed': failedCount,
    'Accuracy': accuracy
})

if(failedDetails.length>0){
         console.log(failedDetails)

    }
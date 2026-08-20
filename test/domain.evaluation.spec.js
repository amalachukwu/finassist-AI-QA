import { testcases } from "../data/domainTestCases.js";
import { evaluateDomain} from '../evaluators/domainEvaluator.js'



for (const testcase of testcases) {
    const actualDomain = await evaluateDomain(testcase.prompt);
    const expectedDomain = testcase.domain
    if (actualDomain === expectedDomain) {
        console.log('PASS')
    }
    else {
        console.log(`Prompt: ${testcase.prompt}\n 
            Expected: ${expectedDomain}\n 
           Actual: ${actualDomain} \n 
           Result: Fail`)
    }



    // console.log(`${testcase.prompt} -> ${testcase.domain}`)
}
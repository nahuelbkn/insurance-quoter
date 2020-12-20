import {
    getYearsOld, 
    getVariantForYearsAndOrigin,
    getIncreaseForOrigin,
    getIncreaseForCoverage
} from "./helpers";



export default function calculateCoute(origin, year, coverage, initialQuotation) {
    let quotation = initialQuotation;
    let variation = 0;

    // The age of the car is calculated.
    const yearsOld = getYearsOld(year);

    // For each year of seniority, 3% is deducted from the value of the insurance.
    variation += getVariantForYearsAndOrigin(yearsOld, origin, initialQuotation);

    // If it is imported, it will have a 25% surcharge.
    variation += getIncreaseForOrigin(origin, initialQuotation);

    // If full coverage is chosen, the initial price increases by 20%.
    variation += getIncreaseForCoverage(coverage, initialQuotation);


    return ( quotation + variation );
}
export function getYearsOld(year) {
    return new Date().getFullYear() - year;
}

export function getVariantForYearsAndOrigin(yearsOld, origin, quotation) {
    let variant = 0;

    if ( origin === "national" ) {
        variant = - (((yearsOld * 3) * quotation ) / 100 );
    } else if ( origin === "imported" ) {
        variant = ( (yearsOld * 3) * quotation ) / 100;
    }

    return variant;
}

export function getIncreaseForOrigin(origin, quotation) {
    let increase = 0;

    if (origin === "imported") {
        increase = (quotation / 100) * 25;
    }

    return increase;
}

export function getIncreaseForCoverage(coverage, quotation) {
    let increase = 0;

    if (coverage === "complete") {
        increase = (quotation / 100) * 35;
    }

    return increase;
}

export function translateOrigin(origin) {
    return (origin === "national" ? "Nacional" : "Importado" );
}

export function translateCoverage(coverage) {
    return ( coverage === "basic" ? "Básica" : "Completa" ) ;
}
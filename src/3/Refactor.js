if ( (recipe === "SPANISH") || (recipe === "FRENCH") || (recipe === "ENGLISH") ) {
    fudge = receipe + _FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
    if (recipe === "FRENCH") {
        chocolate = 7;
        }
}else {
    fudge = 1;
    amt = base;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
}
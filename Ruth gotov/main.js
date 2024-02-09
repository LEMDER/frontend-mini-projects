function Wh29(x){

    let ak1 = 1, ak = 2, ak2;
    let k = 2;
    while (Math.abs(ak - ak1) >= x) {
        ak2 = ak1;
        ak1 = ak;
        ak = (ak2 + 2 * ak1) / 3;
        ++k;
    }
    return ak
}

console.log(Wh29(5))
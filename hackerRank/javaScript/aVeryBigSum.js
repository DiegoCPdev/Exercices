let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
    let total = 0;
    for (let i = 0; i < ar.length; i++) {
        total += ar[i];
    }

    return (total);
}

console.log(aVeryBigSum(ar));
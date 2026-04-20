function koppchilikElement(ro'yxat) {
    let koppchilik = ro'yxat[0];
    let qoldiq = 0;

    for (let i = 0; i < ro'yxat.length; i++) {
        if (qoldiq < 0) {
            koppchilik = ro'yxat[i];
            qoldiq = 0;
        }
        qoldiq += ro'yxat[i] === koppchilik ? 1 : -1;
    }

    return koppchilik;
}

let ro'yxat = [3, 2, 3, 2, 2, 4, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(koppchilikElement(ro'yxat)); // 4

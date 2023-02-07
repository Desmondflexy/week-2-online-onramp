function withdraw(amount) {
    const m = [];
    [100, 50, 20].forEach(bill => {
        m.push(Math.trunc(amount / bill));
        amount = amount % bill;
    })
    return m;
}
module.exports = withdraw;
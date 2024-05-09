function bouncingBall(h, bounce, window) {
    if (h < 0 || bounce >= 1 || bounce <= 0 || window > h) return -1;
    let counter = -1;
    for (; window < h; counter += 2) {
        h = h * bounce;
    }
    return counter;
}

console.log(bouncingBall(3.0, 1, 1.5));
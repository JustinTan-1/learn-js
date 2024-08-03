function printPrimesUpTo(num) {
  for (i = 2; i <= num; i++) {
    let isComposite;
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        isComposite = true;
      }
    }
    if (isComposite) {
      continue;
    } else {
      console.log(i);
    }
  }
}

printPrimesUpTo(100);

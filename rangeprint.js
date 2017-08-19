function printRange(start, end, skip) {
  i = start
  if (start > end) {
    while (i > end) {
      console.log(i)
      i -= skip
    }
  } else {
    while (i < end) {
      console.log(i)
      i += skip
    }
  }
}

printRange(2,16,2)

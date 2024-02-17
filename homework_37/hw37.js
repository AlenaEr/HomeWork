for (let i = 0; i < 10; i++) {
  setTimeout(
    function (index) {
      console.log(index);
    },
    100 * i, i
  );
}

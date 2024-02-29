let sigintCount = 0;
let timer;

process.on("SIGINT", () => {
  sigintCount++;
  console.log("Just Rceceived SIGINT.");

  if (sigintCount >= 2) {
    console.log("Received SIGINT twice within 3 seconds. Exiting...");
    clearInterval(timer);
    process.exit(0);
  }
});

timer = setInterval(() => {
  sigintCount = 0;
}, 3000);

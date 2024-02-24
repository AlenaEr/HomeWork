зловити сигнал SIGINT (Ctrl+C), та завершити процес nodejs, якщо протягом 3 секунд якнайменш було надіслано 2 сигнала SIGINT

умови виконання:

process.on("SIGINT", () => {

  console.log('Just Received SIGINT.');

})

setInterval(() => { }, 2000)

нагадаю, процес може бути завершений за допомогою process.exit(0)
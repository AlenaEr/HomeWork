const types = {
    emergency: "emergency",
    alert: "alert",
    critical: "critical",
    error: "error",
    warning: "warning",
    notice: "notice",
  };

  const logger = (type, msg, ...args) => {
    const env = process.env.NODE_ENV;
    console.log(`ENVIRONMENT ${env}`);
    switch (env) {
      case 'local':
        console.log(`TYPE ${type}`)
        if (Object.values(types).includes(type)) {
          console.log(type, msg, ...args);
        }
        break;
      case 'dev':
        if (Object.values(types).includes(type)) {
          console.log(type, msg, ...args);
        }
        break;
      case 'prod':
        if (Object.values(types).includes(type)) {
          console.log(type, msg, ...args);
        }
        break;
      default:
        console.error(`Error: Unknown exception type "${type}"`);
        break;
    }
  };
  
  module.exports = { types, logger };
  

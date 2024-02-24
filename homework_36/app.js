require("dotenv").config();

const { types, logger } = require("./logger");
logger(types.alert, 'other args');
logger(types.warning, 'other args');

try {
  throw new Error("warning text");
} catch (warn) {
  logger(types.warning, warn.message);
}

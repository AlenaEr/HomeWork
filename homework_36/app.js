function logger(environment, errorType) {
    const localMap = new Map([
        ['Emergency', 'EMERGENCY::Помилка в локальному середовищі.'],
        ['Alert', 'ALERT:: Alert в локальному середовищі.'],
        ['Critical', 'CRITICAL:: критична помилка локально. Ні в якому разі не роби пулріквест поки не випраиш!'],
        ['Error', 'ERROR::локально.'],
        ['Warning', 'WARNING::Щось підозріло, перевір поки це локально.'],
        ['Notice', 'NOTICE::Хм..Ну ок, локально Notice.']
    ]);

    const developmentMap = new Map([
        ['Emergency', 'EMERGENCY::Помилка на деві'],
        ['Alert', 'ALERT:: Alert на деві.'],
        ['Critical', 'CRITICAL:: критична помилка потрапила на дев.., хтось не перевірив'],
        ['Error', 'ERROR:: на девіі.'],
        ['Warning', 'WARNING::Щось підозріло і вже на деві'],
        ['Notice', 'NOTICE:: на деві..']
    ]);

    const productionMap = new Map([
        ['Emergency', 'EMERGENCY::Помилка на ПРОДІ'],
        ['Alert', 'ALERT:: Alert на ПРОДІ.'],
        ['Critical', 'CRITICAL::КРИТИЧНА ПОМИЛКА НА ПРОДІ!!!'],
        ['Error', 'ERROR:: НА ПРОДІ ERROR O_0']
    ]);

    let message = '';

    switch (environment) {
        case 'LOCAL':
            message = new CustomError(localMap.get(errorType));
            break;
        case 'DEV':
            message = new CustomError(developmentMap.get(errorType));
            break;
        case 'PROD':
            message = new CustomError(productionMap.get(errorType));
            break;
        default:
            console.error(`Error: Unknown environment "${environment}"`);
            return;
    }

    if (message) {
        console.log(`Environment: ${environment}, ${message}`);
    } else {
        console.error(`Error: Invalid error type "${errorType}" for environment "${environment}"`);
    }
}

function CustomError(message) {
    this.name = 'CustomError';
    this.message = message || 'Default message';
}
CustomError.prototype = new Error();

module.exports = logger;

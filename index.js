module.exports = fn => (...args) =>
    new Promise((resolve, reject) => {
        args.push((err, result) => {
            if (err) {
                console.error(`\nError in ${fn.name}`, err);
                return reject(err);
            }
            return resolve(result);
        });
        try {
            fn(...args);
        } catch (err) {
            // error out to console, prevent err from
            // being silent in absence of a .catch
            console.error(`\nError in ${fn.name}`, err);
            reject(err);
        }
    }
    );
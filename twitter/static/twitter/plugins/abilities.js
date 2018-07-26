export default (Vue, options) => {
    if (!(options.itemType instanceof Function)) {
        throw new Error('[abilities] itemType should be a function');
    }

    Vue.prototype.$can = (action, subject) => {
        return options.abilities.reduce((can, [_action, _subject, _check]) => {
            if (_action !== action
            || _subject !== options.itemType(subject)) {
                return can;
            }
            return _check instanceof Function
                ? can && _check(subject)
                : can;
        }, true);
    };
};

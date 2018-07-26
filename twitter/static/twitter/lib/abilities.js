import store from 'source/store';

function itemType(item) {
    if (typeof item === 'string') {
        return item;
    } else if ('content' in item) {
        return 'tweet';
    }
    return 'unknown';
}

const abilities = [
    ['create', 'tweet'],
    ['delete', 'tweet', item => item.user.id === store.state.auth.user.id]
];

export default {
    itemType,
    abilities
};

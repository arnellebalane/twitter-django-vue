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
    ['delete', 'tweet', item => {
        const user = store.state.auth.user;
        return user
            ? item.user.id === user.id
            : false;
    }]
];

export default {
    itemType,
    abilities
};

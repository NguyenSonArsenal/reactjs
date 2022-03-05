let initialSkillsState = [
    {
        id: 1,
        avatar: '/images/1.jpg',
        name: 'a2017',
        tagLine: 'If you have a bad day, catch a wave',
        dateAdded: '2017-09-01T02:31:12Z'
    },
    {
        id: 2,
        avatar: '/images/2.jpg',
        name: 'c2015',
        tagLine: 'I am Two f',
        dateAdded: '2015-01-02T08:00:10Z'
    },
    {
        id: 3,
        avatar: '/images/3.jpg',
        name: 'b2011',
        tagLine: 'I am Three',
        dateAdded: '2011-05-01T08:02:07Z'
    },
    {
        id: 4,
        avatar: '/images/4.jpg',
        name: 's2016',
        tagLine: 'I am Four',
        dateAdded: '2016-12-14T08:12:05Z'
    },
    {
        id: 5,
        avatar: '/images/5.jpg',
        name: 'o2018',
        tagLine: 'I am Five',
        dateAdded: '2018-05-05T08:08:10Z'
    }
];

export const skillReducer = (state = initialSkillsState, action) => {
    let payload = action.payload;
    switch (action.type) {
        case 'UPDATE_TAG_LINE':
            return state.map(item => (
                item.id === payload.id ? {...item, tagLine: payload.tagLine} : item
            ));
        case 'SORT':
            return sort(state, payload);
        case 'STORE':
            return store(state, payload);
        default:
            return state
    }
};

function sort(state, payload) {
    let newState;
    let column = payload.column;
    if (payload.sortType == 'asc') {
        newState = [].concat(state).sort((a, b) => a[column] >= b[column] ? 1 : -1);
    } else {
        newState = [].concat(state).sort((a, b) => a[column] < b[column] ? 1 : -1);
    }
    return newState;
}

function store(state, payload) {
    let data = {id: state.length + 1, avatar: '', ...payload};
    state.push(data);
    return state;
}

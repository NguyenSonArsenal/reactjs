let initialSkillsState = [
    {
        id: 1,
        avatar: '/images/1.jpg',
        name: 'a2017',
        tagline: 'If you have a bad day, catch a wave',
        date_added: '2017-09-01T02:31:12Z'
    },
    {
        id: 2,
        avatar: '/images/2.jpg',
        name: 'c2015',
        tagline: 'I am Two f',
        date_added: '2015-01-02T08:00:10Z'
    },
    {
        id: 3,
        avatar: '/images/3.jpg',
        name: 'b2011',
        tagline: 'I am Three',
        date_added: '2011-05-01T08:02:07Z'
    },
    {
        id: 4,
        avatar: '/images/4.jpg',
        name: 's2016',
        tagline: 'I am Four',
        date_added: '2016-12-14T08:12:05Z'
    },
    {
        id: 5,
        avatar: '/images/5.jpg',
        name: 'o2018',
        tagline: 'I am Five',
        date_added: '2018-05-05T08:08:10Z'
    }
];

export const skillReducer = (state = initialSkillsState, action) => {
    switch (action.type) {
        case 'EDIT_TAGLINE':
            let newList = initialSkillsState.map(item => (
                item.id === action.id ? {...item, tagline: 'xxx'}: item
            ))

            // console.log(newList) // run ok
            // return {newList}

        default:
            return {state}
    }
};
angular.module('app').factory('listFactory', function () {
    var service = {};

    var lists = [
        {
            id: 1,
            listName: 'Tobo'
        },
        {
            id: 2,
            listName: 'Doing'
        },
        {
            id: 3,
            listName: 'Done'
        }
    ]

    service.getLists = function () {
        return lists;
    }

    service.removeList = function (list) {
        _.pull(lists, list);
        console.log('lists', lists);
    }

    return service;
})
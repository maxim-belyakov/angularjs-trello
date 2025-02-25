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

    service.addList = function (listName) {
        lists.push({
            id: _.uniqueId('list_'),
            listName: listName
        })
    }

    service.removeList = function (list) {
        _.pull(lists, list)
        console.log('lists', lists)
    }

    return service;
})
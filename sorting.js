function compareIds(a, b) {
    return a.id - b.id;
}

const obj = [
 {id : 4, name : 'abc'},
 {id : 10,name : 'ab2'},
 {id : 5, name : 'abc3'},
 {id : 6, name : 'abc5'}
]

console.log(obj.sort(compareIds));

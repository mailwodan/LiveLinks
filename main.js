var ref = firebase.database().ref('sitters');
// ref.on('child_added', function(val1){
//     //console.log(val1.val());
//     console.log(val1);    
// });

// ref.on('value', function(val1){
//     //console.log(val1.val());
//     console.log(val1);    
// });

var testApp = new Vue({
    el: '#test',
    data: {
        sitter: {
            name: '',
            age: ''
        },
        sitterList: {
        }
    },
    methods: {
        addSitter(name, age) {
            ref.push({
                name: name,
                age: age
            });
            this.sitter.name = '';
            this.sitter.age = '';
        },
        deleteItem(itemKey){
            console.log(itemKey);
            ref.child(itemKey).remove();
        },
        saveItem(itemValue, itemKey){
            ref.child(itemKey).set({
                name: itemValue.name,
                age: itemValue.age
            }); 
            console.log(this.sitterList[itemKey]);
            console.log(this.sitterList[itemKey].name);
        },
        show(){
            showSitters();
        }
    },
});

function showSitters() {
    ref.on('value', function (val1) {
        console.log(val1.val());
        testApp.sitterList = val1.val();
    });
}


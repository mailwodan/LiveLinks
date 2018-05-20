var ref = firebase.database().ref('www');
ref.on('child_added', function(val1){
    //console.log(val1.val());
    console.log(val1);    
});

ref.on('value', function(val1){
    //console.log(val1.val());
    console.log(val1);    
});

new Vue({
    el: '#test',
    data: {
        test: 'KKKKKKK'
    },
    methods: {
        addData(){
            ref.push({
                fff: 'rrtrtr',
                gggg: 'saaaaaaaaaaaaa'
            });
        }
    }
})
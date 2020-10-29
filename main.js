let app = new Vue({
    el: '#blogger',
    data:{
     
        h1:'ayisin blog',
        p1:'a simple blog. please fill in the blanks to create new blog',
        title:'',
        blogpost:'',
        publisher:'',
        checkedgender:[],
        result:'blog posts ',
        note:'please press enter after inputing all fields ("it helps it save your work")',
        date:''

    },

    methods:{
        alert: function(message){
            alert(message);
       }
       
    }


})



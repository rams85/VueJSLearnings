import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')


var app = new Vue({
    el: '#app',
    data: {
        message: 'My First Vue JS Task'
    }
});

export default {
    data() {
      return { count: 0 }
    },
    template: `<div>count is {{ count }}</div>`
}

function myFunction() {
    console.log('Button is clicked');
}

// var  vm = new Vue({
//     el: '#vue_det',
//     data: {
//        firstname : "Ramachandran",
//        lastname  : "Annamalai",
//        address    : "Chennai"
//     },
//     methods: {
//        mydetails : function() {
//           return "I am "+this.firstname +" "+ this.lastname;
//        }
//     }
//  })

var _obj = {
    fname: 'Ramachandran',
    lname: 'Annamalai',
    address: '<h2>Chennai</h2>',
    imgSrc: './images/vuejs-logo.jpg'
}

var vm = new Vue({
    el: '#vue_det',
    data: _obj
});

console.log("I am "+vm.fname +" "+ vm.lname + " from " + vm.address);




// Component


// Local registration

// var vm1 = new Vue({
//     el: '#component2',
//     components: {
//         'testcomponent' : {
//             template : '<div><h1>This is from second Component</h1></div>',
//         }
//     }
// });

//  Registering a global component

Vue.component('testcomponent', {
    template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
    // template: '',
    data: function() {
        return {
            name: 'Ram'
        }
    },

    methods:{
        changename : function() {
           this.name = "Jenno";
        },
        originalname: function() {
           this.name = "Ram";
        }
     }
});

var vm = new Vue({
    el: '#component1',
});

var vm = new Vue({
    el: '#component2'
});


// Dynamic Component

var dc = new Vue({
    el: '#data-binding',

    data: {
        view: 'component1'
    },

    components: {
        'component1': {
            template: '<div>This is from Dynamic Component</div>',
        }
    }
});


// Computed Property
// Computed properties are like methods but with some difference in comparison to methods, which we will discuss in this chapter.
 var cp = new Vue({
    el: "#computed-props",
    data: {
        firstname: "",
        lastname: "",
    },
    computed: {
        getfullname: function() {
            return `My name is ${this.firstname} ${this.lastname}`;
        }
    },
});

// Computed Properties with more explained

var cp1 = new Vue({
    el: "#get-random-numbers",
    data: {
        name: 'Return Random Numbers',
    },
    methods: {
        getrandfunction: function() {
            return Math.random();
        }
    },

    computed: {
        getrandcomputed: function() {
            return Math.random();
        }
    }

});

// Computed Properties with get and set methods

var comp_prpts_get_set = new Vue({
    el: '#comptd-methods-get-set',
    data: {
        firstname: '',
        lastname: '',
    },
    computed: {
        fullname: {
            get: function() {
                return `${this.firstname} ${this.lastname}`;
                // return this.firstname+" "+this.lastname;
            },
            set: function(name) {
                var fname = name.split(" ");
                this.firstname = fname[0];
                this.lastname = fname[1];
            }
        }
    }
});


// Watch Property

var wp = new Vue({
    el: "#watch-property",

    data: {
        litre: 0,
        millilitre: 0
    },
    methods: {

    },
    computed: {

    },
    watch: {
        litre: function(val) {
            this.litre = val; // considered the val as 1 litre
            this.millilitre = val * 1000; // coverting the litre into millilitre
        },

        millilitre: function(val) {
            this.millilitre = val;
            this.litre = val / 1000; // coverting the millilitre into litre
        }
    }
});

// 5. Bind Property

var bp = new Vue({
    el: '#bind-property',
    data: {
        title: "Data Binding",
        hreflink: "https://www.google.com/",
    }
});

// 5. Bind Property - Adding single and multiple classes to divs'

var bp_class = new Vue({
    el: '#bind-property-class',
    data: {
        title: "Data Binding Class",
        isActive: true
    }
});

// Multiple classes
var bp_classes = new Vue({
    el: '#bind-property-classes',
    data: {
        title: "Data Binding Classes",
        isActive: true,
        isError: true,
    }
});

var bp_form_tags = new Vue({
    el: '#databinding-form-tags',
    data: {
        picked: 'White',
        languages: 'Java'
    }
});

// VueJS - Events - On Event with click option

var vue_click = new Vue({
    el: '#vue-events',
    data: {
        num1: '',
        num2: '',
        total: ''
    },
    methods: {
        sum: function(event) {
            console.log(event);
            this.total = Number(this.num1) + Number(this.num2);
            return this.total;
        }
    }
});

var vue_more_events = new Vue({
    el: '#data-binding-events',
    data: {
        styleobj: {
            width:"100px",
            height:"100px",
            backgroundColor:"red"
        }
    },

    methods: {
        changebgcolor: function() {
            return this.styleobj.backgroundColor = "green";
        },
        originalcolor: function() {
            return this.styleobj.backgroundColor = "red";
        }
    }
});


// Event Modifiers

var bp_event_modifiers = new Vue({
    el:'#bind-event-modifiers',
    data: {
        num: ''
    },
    methods:{
        countme : function() {
            return this.num++;
        }
    }
});

var bind_key_modifiers = new Vue({
    el:'#bind-key-modifiers',
    data: {
        name: '',
    },
    methods: {
        PressEnterKey: function(event) {
            this.name = event.target.value;
        }
    }
});

// Conditional Rendering - If condition

var condnl_rendering_if = new Vue({
    el: '#condnl-rendering-if',
    data: {
        show: true,
    },
    methods: {
        showme: function() {
            this.show = !this.show;
        }
    }
});

// Conditional Rendering - show keyword whichs act like fadeIn/fadeOut

var condnl_rendering_show = new Vue({
    el: '#condnl-rendering-show',
    data: {
        show: true,
    },
    methods: {
        showdata: function() {
            this.show = !this.show;
        }
    }
});

// List Rendering

var lr = new Vue({
    el:'#list-rendering',
    data: {
        items: [],
        styleTextbox: {
            padding: "10px",
            width: "300px",
        }
    },

    methods: {
        CompnayNames: function(event) {
            this.items.push(event.target.value);
        }
    }
});

// Transition - Fade

var transition_fade = new Vue({
    el: '#transition-ex1',
    data: {
        show: true,
        styleobj: {
            color: 'red',
            fontSize: '30px'
        }
    },
    methods : {

    }
});

// Transition - TranslateX

var transition_fade = new Vue({
    el: '#transition-translateX',
    data: {
        show: true,
    },
    methods : {

    }
});

// Transition Hooks

var vm = new Vue({
    el: '#transition-js-hooks',
    data: {
       show: false
    },
    methods: {
       beforeEnter: function (el) {
          el.style.opacity = 0
       },
       enter: function (el, done) {
          Velocity(el, { opacity: 1, fontSize: '25px' }, { duration: 1000 })
          Velocity(el, { fontSize: '10px' }, { complete: done })
       },
       leave: function (el, done) {
          Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 1500 })
          Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
          Velocity(el, {
             rotateZ: '45deg',
             translateY: '30px',
             translateX: '30px',
             opacity: 0
          }, { complete: done })
       }
    }
 });

 // VueJS - Directives - Create Custom Directives  

 Vue.directive("changestyle1", {
    bind(e1, binding, vnode) {
        console.log(e1);
        e1.style.color="red";
        e1.style.fontSize="40px";
    }
 });

 var cd = new Vue({
    el: '#custom-directive1',
    data: {

    },
    methods: {

    }
 });

 // VueJS - Directives - Binding values to Custom Directive  

 Vue.directive("changestyle2", {
    bind(e1, binding, vnode) {
        console.log(binding.value.color);
        e1.style.color=binding.value.color;
        e1.style.fontSize="40px";
    }
 });

 var cd = new Vue({
    el: '#custom-directive2',
    data: {

    },
    methods: {

    }
});

// VueJS - Directives - Filters which helps text formatting

var cf = new Vue({
    el: '#custom-filter',
    data: {
        name: '',
    },
    filters: {
        countLetters: function(value) {
            return value.length;
        }
    }
});
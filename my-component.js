export default {
    data() {
      return { count: 0 }
    },
    template: `<div>count is {{ count }}</div>`
}

function myFunction() {
    console.log('Button is clicked');
}
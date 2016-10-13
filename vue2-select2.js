var Vue = require('vue')

module.exports = {
    template: require('./template.html'),
    props: {
        'options': {
            type: Array,
            required: true,
            default: () => []
        },
        'value': {
            default: () => ''
        }
    },
    data () {
        return {
            model: ''
        }
    },
    mounted () {
        this.model = this.value
    },
    watch: {
        model (model) {
            this.$emit('input', model)
        },
        value (value) {
            this.model = value
        },
    },
}
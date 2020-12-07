import Vue from 'vue'
import { 
    Form, 
    FormItem, 
    Button, 
    Input, 
    Message 
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 弹框组件挂载到Vue
Vue.prototype.$message = Message


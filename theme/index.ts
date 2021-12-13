import Default from './layout/Default.vue'
import NotFound from './layout/404.vue'
import './styles'
import 'windi-base.css'
import 'windi-components.css'
import 'windi-utilities.css'
// import Layout from "./Layout.vue";
// import NotFound from "./NotFound.vue";
const theme = {
  Layout: Default,
  NotFound,
  enhanceApp() {},
}
export default theme

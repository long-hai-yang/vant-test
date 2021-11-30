import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import {
  NumberKeyboard,
  Button,
  Toast,
  Loading,
  Cell,
  CellGroup,
  Icon,
  Image as VanImage,
  Uploader,
  Form,
  Field,
  Tabbar, 
  TabbarItem,
  ActionSheet,
  Checkbox,
  CheckboxGroup,
  Col, 
  Row,
  NavBar,
  Dialog
} from "vant";
const app = createApp(App);
app.use(NumberKeyboard);
app.use(Button);
app.use(Toast);
app.use(Loading);
app.use(Cell);
app.use(CellGroup);
app.use(Icon);
app.use(VanImage);
app.use(Uploader);
app.use(Form);
app.use(Field);
app.use(Col);
app.use(Row);
app.use(Tabbar);
app.use(TabbarItem);
app.use(ActionSheet);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(NavBar);
app.use(Dialog);
app.use(router);

app.mount("#app");

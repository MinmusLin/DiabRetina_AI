import Diagnosis from "layouts/diagnosis";
import History from "layouts/history";
import Education from "layouts/education";
import SignIn from "layouts/sign-in";
import SignUp from "layouts/sign-up";
import Icon from "@mui/material/Icon";

const breadcrumbMap = {
  diagnosis: {
    title: "病变诊断",
    subtitle: "上传眼底图像进行 AI 辅助的糖尿病性视网膜病变诊断分析",
  },
  history: {
    title: "历史记录",
    subtitle: "查看您的糖尿病性视网膜病变诊断分析历史记录",
  },
  education: {
    title: "教育科普",
    subtitle: "了解糖尿病性视网膜病变的医学知识与日常管理要点",
  },
};

const routes = [
  {
    type: "title",
    title: "欢迎使用",
  },
  {
    type: "collapse",
    name: "病变诊断",
    key: "diagnosis",
    icon: <Icon fontSize="small">preview</Icon>,
    route: "/diagnosis",
    component: <Diagnosis />,
  },
  {
    type: "collapse",
    name: "历史记录",
    key: "history",
    icon: <Icon fontSize="small">history</Icon>,
    route: "/history",
    component: <History />,
  },
  {
    type: "collapse",
    name: "教育科普",
    key: "education",
    icon: <Icon fontSize="small">library_books</Icon>,
    route: "/education",
    component: <Education />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    title: "帐号管理",
  },
  {
    type: "collapse",
    name: "登录",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "注册",
    key: "sign-up",
    icon: <Icon fontSize="small">person_add</Icon>,
    route: "/sign-up",
    component: <SignUp />,
  },
  {
    type: "divider",
  },
];

export { breadcrumbMap };
export default routes;

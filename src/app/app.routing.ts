import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { UserComponent } from "./userpage/user.component";
import { MygroupComponent } from "./pages/mygroup/mygroup.component";
import { CreategroupComponent } from "./pages/creategroup/creategroup.component";
import { GroupsComponent } from "./pages/groups/groups.component";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "pages/login",
        component: LoginComponent
      },
      {
        path: "pages/register",
        component: RegisterComponent
      },
      {
        path: "pages/mygroup",
        component: MygroupComponent
      },
      {
        path: "pages/creategroup",
        component: CreategroupComponent
      },
      {
        path: "pages/groups",
        component: GroupsComponent
      },
      {
        path: "pages/user",
        component: UserComponent
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "pages",
        loadChildren: "./pages/pages.module#PagesModule"
      }
    ]
  }
];

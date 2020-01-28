import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule, PreloadAllModules,NoPreloading } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';

const APP_LAZY_ROUTES: Routes = [
  {
    path: 'signin', component: SigninComponent
  },
  {
     path: 'student', component: StudentComponent
  },
  {
     path: 'student/add-student', component: AddStudentComponent
  }
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, {
  preloadingStrategy: NoPreloading,
});
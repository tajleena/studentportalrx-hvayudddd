import { SigninComponent } from './signin/signin.component';
import { Routes, RouterModule, PreloadAllModules,NoPreloading } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { EditStudentComponent } from './student-details/edit-student/edit-student.component';

const APP_LAZY_ROUTES: Routes = [
  {
    path: 'signin', component: SigninComponent
  },
  {
     path: 'student', component: StudentComponent
  },
  {
     path: 'student/add-student', component: AddStudentComponent
  },
  {
     path: 'student-details', component: StudentDetailsComponent
  },
  {
     path: 'edit-student/:id', component: EditStudentComponent
  }
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, {
  preloadingStrategy: NoPreloading,
});
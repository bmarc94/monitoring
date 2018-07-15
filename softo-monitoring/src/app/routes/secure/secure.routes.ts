import { Routes } from '@angular/router';


export const SECURE_ROUTES: Routes = [
  { path: 'parents', loadChildren: 'src/app/routes/secure/parents/parents.module#ParentsModule' },
  { path: 'students', loadChildren: 'src/app/routes/secure/students/students.module#StudentsModule' }
];

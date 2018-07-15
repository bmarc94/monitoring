import { Routes } from '@angular/router';


export const SECURE_ROUTES: Routes = [
  { path: 'classroom', loadChildren: 'src/app/routes/secure/classrooms/classrooms.module#ClassroomsModule' },
  { path: 'dashboard', loadChildren: 'src/app/routes/secure/dashboard/dashboard.module#DashboardModule' },
  { path: 'parents', loadChildren: 'src/app/routes/secure/parents/parents.module#ParentsModule' },
  { path: 'students', loadChildren: 'src/app/routes/secure/students/students.module#StudentsModule' },
  { path: 'teachers', loadChildren: 'src/app/routes/secure/teachers/teachers.module#TeachersModule' },
  { path: 'timetables', loadChildren: 'src/app/routes/secure/timetables/timetables.module#TimetablesModule' }
];

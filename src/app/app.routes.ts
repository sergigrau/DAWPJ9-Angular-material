import { Routes } from '@angular/router';
import { M01_SalutacioComponent } from './m01-salutacio.component';
import { M02_SumaComponent } from './m02-suma.component';
import { M02_SumaComponent_bis } from './m02bis-suma.component';
import { M03_IteradorComponent } from './m03-iterador.component';
import { M04_PomodoroComponent } from './m04-pomodoro.component';
import { M05_BindingsComponent } from './m05-bindings.component';
import { M06_DirectivesComponent } from './m06-directives.component';
import { M08_PipesComponent } from './m08-pipes.component';
import { M09_Alumnes_IteradorComponent } from './m9-alumnes.component';
import { M10_LogoComponent } from './m10-logo.component';
import { M11_AnimacionsComponent } from './m11-animacions.component';
import { M12Component } from './m12.component';
import { M13Component } from './m13-material-missatge';
import { M14Component } from './m14-material-inputs.component';
import { M15Component } from './m15-material-inputs.component';

export const routes: Routes = [
  { path: 'm01', component: M01_SalutacioComponent },
  { path: 'm02', component: M02_SumaComponent },
  { path: 'm02bis', component: M02_SumaComponent_bis },
  { path: 'm03', component: M03_IteradorComponent },
  { path: 'm04', component: M04_PomodoroComponent },
  { path: 'm05', component: M05_BindingsComponent },
  { path: 'm06', component: M06_DirectivesComponent },
  { path: 'pipes', component: M08_PipesComponent },
  { path: 'alumnes', component: M09_Alumnes_IteradorComponent },
  { path: 'm10', component: M10_LogoComponent },
  { path: 'm11', component: M11_AnimacionsComponent },
  { path: 'm12', component: M12Component },
  { path: 'm13', component: M13Component },
  { path: 'm14', component: M14Component },
  { path: 'm15', component: M15Component },

  { path: '', redirectTo: '/m01', pathMatch: 'full' },
  { path: '**', redirectTo: '/m01' }
];
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { HttpModule } from '@angular/http';
import { ModalModule } from './modal/modal.module';
import { AuthGuard } from './core/guard/auth.guard';

const appRoutes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'admin', loadChildren: () => AdminModule,canActivate:[AuthGuard] },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

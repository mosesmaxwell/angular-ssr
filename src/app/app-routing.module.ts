import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { AddResourceModule } from './add-resource/add-resource.module';

const routes = [
  {
    path: 'resources', component: TabsComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':status', component: ListComponent }
    ]
  },
  // {
  //   path: 'add-resource', loadChildren: () => AddResourceModule
  // },
  {
    path: '**', redirectTo: '/resources/'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

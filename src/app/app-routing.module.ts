import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/decision-tree/decision-tree.module')
        .then((m) => m.DecisionTreeModule)
  },
  {
    path: 'conversation',
    loadChildren: () =>
      import('./features/conversation/conversation.module')
        .then((m) => m.ConversationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

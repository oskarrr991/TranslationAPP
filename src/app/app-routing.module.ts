import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// first -> du failiukai
// services > translation service
// class translation service
// getteris lang() su dviem returnais (visa faila > en || lt), selceted lan
// public set currentlang - > pakeisti local storage
// reikia importuot prie app moduels + prie providers
// importas i app.component
// html pasirasyti funkcija changelang
// trans.lang.hello (trans is konstruktoriaus)

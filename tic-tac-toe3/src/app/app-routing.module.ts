import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { HumanComponent } from './components/human/human.component';
import { ComputerComponent } from './components/computer/computer.component';

const routes: Routes = [
    { path: 'main-menu', component: MainmenuComponent },
    { path: 'human', component: HumanComponent },
    { path: 'computer', component: ComputerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [MainmenuComponent, HumanComponent, ComputerComponent];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingSelectorComponent } from './components/Shopping-selector/Shopping-selector.component'
import { ShowShoppingListComponent } from './components/Show-shopping-list/Show-shopping-list.component';
import { UpdateShoppingListComponent } from './components/Update-Shopping-List/Update-Shopping-List.component';
import { WelcomeComponent } from './components/Welcome/Welcome.component';

import { ShoppingService } from './service/shopping.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FamilyDonationComponent } from './components/family-donation/family-donation.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent },
  {path: 'Update-Shopping-List', component: UpdateShoppingListComponent },
  {path: 'Show-shopping-list/:store', component: ShowShoppingListComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'family-donation', component: FamilyDonationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingSelectorComponent,
    UpdateShoppingListComponent,
    WelcomeComponent,
    ShowShoppingListComponent,
    TodoListComponent,
    FamilyDonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

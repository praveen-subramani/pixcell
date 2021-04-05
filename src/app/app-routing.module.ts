import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo:'light',
    
    },
{
  path:"light",
  component:ListingComponent
},
{
  path:"detail",
  component:DetailsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

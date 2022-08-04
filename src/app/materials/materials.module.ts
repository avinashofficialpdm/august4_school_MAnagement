import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



const materialModules=[MatButtonModule,MatInputModule,MatFormFieldModule]
@NgModule({
  imports: [materialModules],
  exports:[materialModules]
})
export class MaterialsModule { }

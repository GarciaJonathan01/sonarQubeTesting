import { Routes } from '@angular/router';
import { MangoComponent } from './mango/mango.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { BananoComponent } from './banano/banano.component';
import { CocoComponent } from './coco/coco.component';
import { PitahayaComponent } from './pitahaya/pitahaya.component';
import { PapayaComponent } from './papaya/papaya.component';
import { PinaComponent } from './pina/pina.component';


export const routes: Routes = [

    {path:'pina', component:PinaComponent},
    {path:'mango', component:MangoComponent},
    {path:'',component:ImagenesComponent},
    {path:'banano', component:BananoComponent},
    {path:'coco', component:CocoComponent},
    {path:'pitahaya', component:PitahayaComponent},
    {path:'papaya', component:PapayaComponent},
    

];

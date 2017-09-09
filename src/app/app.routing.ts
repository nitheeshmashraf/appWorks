import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CURDComponent } from './curd/curd.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: CURDComponent },
            { path: 'curd', component: CURDComponent },
            { path: 'search', component: SearchComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
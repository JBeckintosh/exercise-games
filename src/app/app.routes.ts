import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BopItComponent } from './bop-it/bop-it.component';
import { SecretSantaComponent } from './secret-santa/secret-santa.component';
import { TarotGameComponent } from './tarot-game/tarot-game.component';

export const routes: Routes = [
    {
        path: 'bop-it',
        component: BopItComponent
    },
    {
        path: 'secret-santa',
        component: SecretSantaComponent
    },
    {
        path: 'tarot-game',
        component: TarotGameComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

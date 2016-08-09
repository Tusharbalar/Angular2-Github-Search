import { Component } from '@angular/core';
import { GithubComponent } from './components/github.component';
import { GithubService } from './services/github.service';

@Component({
    selector: 'my-app',
    template: '<github></github>',
    directives: [GithubComponent],
    providers: [GithubService]
})
export class AppComponent { }

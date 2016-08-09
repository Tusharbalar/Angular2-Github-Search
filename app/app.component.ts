import { Component } from '@angular/core';
import { GithubComponent } from './components/github.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><github></github>',
    directives: [GithubComponent]
})
export class AppComponent { }

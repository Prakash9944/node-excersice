## What is angular

* Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications.

* As a framework, Angular has clear advantages while also providing a standard structure for developers to work with

## What is NgModule

* The set of components, directives, and pipes (declarable) that belong to this module.

* NgModule has imports and exports declaration and providers

# @ViewChild

* ViewChild is used to access child components or elements or directive in the template,

* @ViewChild is used to get a reference to a single child component, directive, or DOM element.

* It's typically used when you need to interact with a specific element or component after it has been rendered

* while @Input and @Output are used to pass data between components

# ngAfterViewInit:

 * Both @ViewChild and @ViewChildren should be used within or after the ngAfterViewInit life cycle hook to ensure that the view has been fully initialized. Accessing them earlier might result in undefined or incomplete references

 * Imagine you have a parent component that needs to access a child component's data or methods. Using ngAfterViewInit, you can ensure that the child component has been fully initialized before interacting with it.

 import { component } from "@angular/core"
 @component({
    selector: "app-child",
    templateUrl: "./child.html",
    styleUrl: "./child.css"
 })
 export Class childComponent {
    constructor() {}
    showMsg: string = "Show msg after child component fully initialized via parent!"
    sayHi () {
        console.log("Say hi")
    }
 }
 import { component, ViewChild, AfterViewInit } from "@angular/core"
 import { ChildComponent } from "./childComponent"
 @component({
    selector: "app-parent",
    templateUrl: "./parent.html",
    styleUrl: "./parent.css"
 })

 export Class ParentComponent implements AfterViewInit {
    @ViewChild(ChildComponent) viewChild: ChildComponent;

    constructor(){}
    ngViewAfterInit() {
        console.log("Show Child props: ", this.viewChild.showMsg)
        this.viewChild.sayHi()
    }
 }
 parent.hmtl
 ============
 <app-child> </app-child>

## What is angular lifecycle hooks

* ngOnChanges() - Responds when Angular sets/resets data-bound input properties.

* ngOnInit() - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties/

* ngDoCheck() - Detect and act upon changes that Angular can't or won't detect on its own.

* ngAfterContentInit() - Responds after Angular projects external content into the component's view.

* ngAfterContentChecked() - Respond after Angular checks the content projected into the component.

* ngAfterViewInit() - Respond after Angular initializes the component's views and child views.

* ngAfterViewChecked() - Respond after Angular checks the component's views and child views.

* ngOnDestroy - Cleanup just before Angular destroys the directive/component.


## what is directive

# Structural directives change the DOM layout by adding and removing DOM elements.

# Attribute directives change the appearance or behavior of an element.

# Components are directives that have a template.

# In Angular, directives are used to add custom behaviors or modify the appearance of HTML elements. Directives are declared using a specific syntax, which includes two types: component and attribute directives.

    import { Directive, ElementRef, Renderer2 } from '@angular/core';

    @Directive({
      selector: '[appExample]' // The selector used to identify the directive in HTML
    })
    export class ExampleDirective {
      constructor(private el: ElementRef, private renderer: Renderer2) {
        // Directive's behavior
        // You can use the 'el' and 'renderer' to modify the element's behavior or appearance
        // Example:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
      }
    }


## What is CanActive

    import { Injectable } from '@angular/core';
    import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

    @Injectable()
    export class AuthGuard implements CanActivate {

      constructor(private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Perform authentication and authorization checks here
        const isAuthenticated = // check if the user is authenticated
        const hasPermission = // check if the user has permission to access the route

        if (isAuthenticated && hasPermission) {
          return true; // allow navigation to the route
        } else {
          this.router.navigate(['/login']); // redirect to login page or any other page
          return false; // prevent navigation to the route
        }
      }
    }


    import { AuthGuard } from './auth.guard';

    const routes: Routes = [
      {
        path: 'secured',
        component: SecuredComponent,
        canActivate: [AuthGuard] // use the AuthGuard for route protection
      },
      // other routes
    ];


# Services in angular

Share data: Services can store and manage data that needs to be shared across multiple components or modules, acting as a central repository for data that can be accessed and updated from different parts of an application.


# Input

@Input: This decorator is used to define a property in a child component that can accept data from its parent component. The parent component can bind a value to this property using property binding. The child component can then use this data within its template or component logic.


import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <p>Received data from parent: {{ inputData }}</p>
  `
})
export class ChildComponent {
  @Input() inputData: string;
}


# @Output:

    This decorator is used to define an event emitter in a child component that can emit events to its parent component. The parent component can listen to these events using event binding and respond to them in its component logic.


https://stackblitz.com/edit/angular-hrvf9t?file=src%2Fapp%2Fapp.component.css



### AOT VS JIT

  # Ahead-of-Time (AOT): Compiles your application and libraries at build time. This is the default starting in Angular 9. Just-in-Time (JIT) Compilation: In JIT, the Angular application is compiled in the browser, during runtime. This means that the application is compiled just before it is executed

  # Ahead-of-Time (AOT): Compiles your application and libraries at build time. This is the default starting in Angular 9. Just-in-Time (JIT) Compilation: In JIT, the Angular application is compiled in the browser, during runtime. This means that the application is compiled just before it is executed.



### Observables

   # Reactive Extensions for JavaScript), which is a library for reactive programming in JavaScript. Observables are used to handle asynchronous data streams and provide a way to represent and manipulate streams of data over time

   # Observable in Angular are powerful tools for handling asynchronous data and managing

   # Observable can emit multiple values over time. A Promise only resolves once

   # Observable are used to run asynchronously, and we get the return value multiple times. Promises are used to run asynchronously, and we get the return value only once.

   import { Observable } from 'rxjs';

   const myObservable$ = new Observable<number>(observer => {
      // Emit data to observer
      observer.next(1);
      observer.next(2);
      observer.next(3);

      // Complete the observable
      observer.complete();

      // Clean up any resources if needed
      return () => {
        // Clean up logic here
      };
    });

    myObservable$.subscribe(
      data => {
        // Handle emitted data
        console.log(data);
      },
      error => {
        // Handle error
        console.error(error);
      },
      () => {
        // Handle completion
        console.log('Observable completed');
      }
    );

### Fork Join

  # Angular for handling asynchronous operations. forkJoin is used to combine multiple observable into a single observable that emits an array of values from the combined observable, once all of them complete.

  #  This is useful when you need to make several requests in parallel and perform an action when all requests are finished

  # Use forkJoin to combine the observables and subscribe to the resulting observable:

    import { forkJoin } from 'rxjs';
    const observable1$ = of('data1');
    const observable2$ = of('data2');
    const observable3$ = of('data3');

    forkJoin([observable1$, observable2$, observable3$])
    .subscribe(([data1, data2, data3]) => {
        // Handle combined data
        console.log('Data 1:', data1);
        console.log('Data 2:', data2);
        console.log('Data 3:', data3);
    });

    import { HttpClient } from '@angular/common/http';
    import { forkJoin } from 'rxjs';
    constructor(private http: HttpClient) {}

    fetchData() {
        const request1 = this.http.get('https://api.example.com/data1');
        const request2 = this.http.get('https://api.example.com/data2');
        const request3 = this.http.get('https://api.example.com/data3');

        forkJoin([request1, request2, request3]).subscribe(results => {
            const [data1, data2, data3] = results;
            console.log('Data 1:', data1);
            console.log('Data 2:', data2);
            console.log('Data 3:', data3);
        });
    }

  # single observable that emits an array of values ([data1, data2, data3]) once all of the combined observables complete

# 1. What is directive in angular

## Structural directive

    1. ngIf

    2. NgFor

    3. ngSwitch

    change in the dom structure

## Attribute directive

    1. ngStyle

    2. ngClass

    Changing the appearance

## Component directive

    1. Components

### Input Decorator

    1 Input decorator pass value to parent to child and @input decorator placed on the child component

### Output Decorator

    1 Output decorator pass value to child to parent and @output decorator placed on the parent component

### NgOnchages

    ngOnChanges is called when the input properties of a component or directive change. These changes occur when Angular sets or resets data-bound input properties. This lifecycle hook is particularly useful when a component needs to act on changes to its input properties.

## Host Binding vs Host Listener

    # HostBinding and HostListener are decorators in Angular that allow you to interact with the host element of a directive or component.

    # HostBinding is used to set properties on the host element,

    # HostListener is used to listen for events on the host element.


## what is Interceptor

    import { Injectable } from '@angular/core';

    import {
      HttpRequest,
      HttpHandler,
      HttpEvent,
      HttpInterceptor
    } from '@angular/common/http';
    import { Observable, tap } from 'rxjs';

    @Injectable()
    export class LoggingInterceptor implements HttpInterceptor {

      constructor() {}

      intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
          tap((event: HttpEvent<any>) => {
            console.log('Incoming HTTP response', event);
          })
        );
      }
    }


    var routes: Routes = [{
    path: "user",
    component: UserComponent
}]

## Ecapsulation

    * Component encapsulation in frameworks like Angular refers to how a component's view, styles, and behavior are kept isolated from other components. This ensures that the  internal workings of a component (such as its HTML structure and CSS) don’t interfere with or get affected by the surrounding components. Encapsulation allows for better modularity, maintainability, and reusability of components


import {CanActivate, Router } from "@angular/router"
import {authService} from "../authService"

@Injectable({
    ProvoiderIn: "root"
})

export class CanActivate implement CanActivate {
    constructor(private auth: authService, route: Router) {}

    CanActivate(): boolean {
        let isAutherised = this.auth.service()

        if (isAutherised) {
            return true;
        } else {
            this.route.navigate('/login')
        }
    }
}


const rount: Routes = [{
    path: "Home", component: HomeComponent
},{
    path: "User", component: UserComponent, canActive: [authService]
}]


@NgModule({
    imports: [RouterModule.forRoot(rount)],
    exports: RouterModule
})


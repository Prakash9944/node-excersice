1. What is Angular?
    # Answer:-
        Angular is a TypeScript-based open-source front-end web application framework developed by Google. It allows developers to build dynamic single-page web applications (SPAs) using components, directives, and dependency injection.

2.  What is a component in Angular?
    # Answer:-
        In Angular, a component is a fundamental building block of an Angular application. It is responsible for managing a part of the user interface (UI) and includes the logic and view for that part. Components are a combination of HTML templates, CSS styles, and TypeScript code that work together to render and interact with the UI

        TypeScript file (.ts) for logic
        HTML file (.html) for template
        CSS file (.css or .scss) for styling

3. Explain the purpose of NgModule.
    # Answer:-
        NgModule is a core concept in Angular that helps organize an application into cohesive blocks of functionality. It serves as a container for a collection of related components, directives, pipes, and services.

    1. Group related components, directives, and pipes.
    2. Define dependencies by importing other modules.
    3. Bootstrap an application.

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule } from '@angular/forms'; // Example of an imported module
    import { AppComponent } from './app.component';
    import { UserComponent } from './user/user.component'; // A custom component
    import { SharedModule } from './shared/shared.module'; // Example of a feature module

    @NgModule({
      declarations: [
        AppComponent,  // Declaring AppComponent
        UserComponent  // Declaring UserComponent
      ],
      imports: [
        BrowserModule, // Angular's core module for browser-based applications
        FormsModule,   // Angular module for handling forms
        SharedModule   // Importing a custom shared module
      ],
      providers: [], // Services can be added here
      bootstrap: [AppComponent] // Root component to bootstrap
    })
    export class AppModule {}

4. What are Directives in Angular?
    # Answer:-
        Directives are used to manipulate the DOM in Angular. In Angular, directives are used to add custom behaviors or modify the appearance of HTML elements. Directives are declared using a specific syntax, which includes two types: component and attribute directives.

    1. Structural directives:-
            Change the structure of the DOM (e.g., ngIf, ngFor).

    2. Attribute directives:-
            Modify the behavior or appearance of an element (e.g., ngClass, ngStyle).

    3. Component directives:-
            Directives that create new components.

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

5. What is Dependency Injection in Angular?
    # Answer:-
        Dependency Injection (DI) is a design pattern in Angular where a component's dependencies (like services) are injected into it, rather than creating them within the component. This helps with better test-ability, maintainability, and flexibility. Angular provides a DI framework, where services or other objects can be provided at different levels, such as in a component or in the root module.

    1. Component might need a Service to fetch data.
    2. Service might need an HTTP Client to make request.

    import { Injectable } from '@angular/core';
    @Injectable({
      providedIn: 'root', // Makes the service available application-wide
    })
    export class DataService {
      getData() {
        return ['Angular', 'React', 'Vue'];
      }
    }

6. What are Services in Angular?
    # Answer:-
        Services are classes that are used to handle logic and data retrieval, such as HTTP requests, business logic, or other functionalities that are needed across multiple components. Angular services are typically injected into components using dependency injection. The @Injectable() decorator marks the class as injectable.

    # Answer_2:-
        In Angular, services are reusable, singleton classes that contain logic and data that can be shared across components, directives, or other services in an Angular application. They help organize and encapsulate common functionalities like data fetching, business logic, or shared state, promoting clean code and separation of concerns.

    import { Component } from '@angular/core';
    import { MyService } from './my-service.service';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent {
      data: string;

      constructor(private myService: MyService) {
        this.data = this.myService.getData(); // Using the service
      }
    }

7. What is two-way data binding in Angular?
    # Answer:-
        Two-way data binding allows synchronization of data between the model and the view. In Angular, it can be achieved using the [(ngModel)] syntax. This means that when the value in the input field changes, the model (the component’s property) is updated, and vice versa.

    # Example:
        import { Component } from '@angular/core';
        @Component({
          selector: 'app-two-way-binding',
          templateUrl: './two-way-binding.component.html',
          styleUrls: ['./two-way-binding.component.css']
        })
        export class TwoWayBindingComponent {
          name: string = 'John Doe'; // Initial value for the input field
        }

        <div>
          <h1>Two-Way Data Binding Example</h1>
          <label for="nameInput">Enter your name:</label>
          <input id="nameInput" type="text" [(ngModel)]="name" />
          <p>Hello, {{ name }}!</p>
        </div>

8. What is Angular Routing?
    # Answer:-
        Angular Routing is used to navigate between different views or pages in a single-page application. The RouterModule is used to define routes for components. It allows you to define paths for components, pass parameters, and protect routes using guards.

    # Answer_2:-
        Angular Routing is a feature in Angular that enables navigation between different views or components within a single-page application (SPA). Instead of loading entire new pages from the server, Angular dynamically swaps components and updates the browser's URL

    # Example of defining routes:
        import { NgModule } from '@angular/core';
        import { RouterModule, Routes } from '@angular/router';
        import { HomeComponent } from './home/home.component';
        import { AboutComponent } from './about/about.component';

        const routes: Routes = [
          { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent }
        ];

        @NgModule({
          imports: [RouterModule.forRoot(routes)],
          exports: [RouterModule]
        })
        export class AppRoutingModule {}

9. What are Angular Pipes?

    # Answer:-
        Angular, Pipes are a powerful mechanism that allows you to transform data in templates. They are used to modify the displayed values in the view, such as formatting dates, numbers, or filtering arrays, without altering the underlying data. Pipes can be applied to expressions within template HTML, and they can either be built-in or custom-created

    # Built-in Pipes:-
        Built-in Pipes: Angular provides a set of built-in pipes like date, currency, uppercase, lowercase, json, slice, and async
        <p>{{ today | date: 'short' }}</p>
        <p>{{ amount | currency: 'USD' }}</p>

    # Custom Pipes:-
        You can create your own pipes by implementing the PipeTransform interface and using the @Pipe decorator. Custom pipes allow you to define any transformation logic you need

        import { Pipe, PipeTransform } from '@angular/core';
        @Pipe({
          name: 'exponentialStrength'
        })
        export class ExponentialStrengthPipe implements PipeTransform {
          transform(value: number, exponent: number): number {
            return Math.pow(value, exponent);
          }
        }
        <p>{{ 2 | exponentialStrength: 3 }}</p> <!-- Outputs: 8 -->

10. Pure Pipe Example

    # Pure Pipes:-
        Pure pipe only re-computes its result when the input data changes. If the input data remains the same, Angular will reuse the previously computed result, improving performance.

        1. Executes only when the input data changes.
        2. More efficient as Angular can cache the result.
        3. Angular automatically considers most built-in pipes as pure.

        import { Component } from '@angular/core';
        @Component({
          selector: 'app-pure-pipe',
          template: `<p>{{ name | uppercase }}</p>`
        })
        export class PurePipeComponent {
          name = 'Angular';
        }

    # When to Use:-
        Use pure pipes for better performance when the data transformation is dependent only on the input data.

11. Impure Pipe Example

    # Answer:-
        Impure pipe is recalculated on every change detection cycle, even if the input data has not changed. This is useful for scenarios where the data or transformation logic might change more dynamically or often.

        1. Executes on every change detection cycle, even if the input data has not changed.
        2. Useful for dynamic or frequently changing data.
        3. You need to manually specify pure: false in the pipe's metadata to make a pipe impure.

        import { Pipe, PipeTransform } from '@angular/core';
        @Pipe({
          name: 'random',
          pure: false  // Set to false to make it impure
        })
        export class RandomPipe implements PipeTransform {
          transform(value: any): number {
            return Math.random();  // Generates a new random number each time
          }
        }

        @Component({
          selector: 'app-impure-pipe',
          template: `
            <p>Random number: {{ '' | random }}</p>
          `
        })
        export class ImpurePipeComponent {}

    # When to Use:-
        Use impure pipes when you need the transformation to occur regardless of input data changes, such as when data is continuously changing, or when it depends on global variables, timers, etc.

12. What is the difference between ngOnInit and constructor in Angular?

    # Answer:-
        1. constructor:-
            A special function that is called when an instance of a class is created. It is used for initializing class members, not for Angular-specific initialization logic.

        2. ngOnInit:-
            A lifecycle hook called after Angular has initialized all data-bound properties of a component. It’s a good place to perform initialization tasks that require the component’s inputs to be set.

13. What are Angular Lifecycle Hooks?

    # Answer:-
        Angular provides a series of lifecycle hooks that allow you to run code at specific stages of a component’s lifecycle.

        1. ngOnInit():
             Called once after the component is initialized.
        2. ngOnChanges():
             Called when an input property changes.
        3. ngDoCheck():
             Called during every change detection cycle.
        4. ngAfterViewInit():
             Called after the component's view has been fully initialized.
        5. ngAfterViewChecked():
             Called after the component's view has been checked.
        6. ngOnDestroy():
             Called before the component is destroyed.

14. What is an AOT compilation? What are its advantages?

    # Answer:-
        The Ahead-of-time (AOT) compiler converts the Angular HTML and TypeScript code into JavaScript code during the build phase, i.e., before the browser downloads and runs the code.

        1. Faster rendering
        2. Fewer asynchronous requests
        3. Smaller Angular framework download size
        4. Quick detection of template errors
        5. Better security

15. What are HTTP interceptors?

    # Answer:-
        Using the HttpClient, interceptors allow us to intercept incoming and outgoing HTTP requests. They are capable of handling both HttpRequest and HttpResponse. We can edit or update the value of the request by intercepting the HTTP request, and we can perform some specified actions on a specific status code or message by intercepting the answer.

        1. Example: In the following example we will set the Authorization header Bearer for all the requests:

            import { Injectable } from '@angular/core';
            import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
            import { Observable } from 'rxjs/Observable';

            @Injectable()
            export class TokenInterceptor implements HttpInterceptor {
                public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                const token = localStorage.getItem('token') as string;
                    if (token) {
                    req = req.clone({
                        setHeaders: {
                        'Authorization': `Bearer ${token}`
                        }
                    });
                    }
                    return next.handle(req);
                }
            }

16. What is @Input() and @Output() decorators

    # Answer:-
         1. Angular, @Input() and @Output() are decorators used for data binding between components. They allow communication between parent and child components.
         2. Input decorator pass value to parent to child and @input decorator placed on the child component

    # @Input() Decorator
        The @Input() decorator is used to pass data from a parent component to a child component.

        # Parent.component.ts
        import { Component } from '@angular/core';
        @Component({
          selector: 'app-parent',
          template: `
            <h1>Parent Component</h1>
            <app-child [childData]="parentData"></app-child>
          `
        })
        export class ParentComponent {
          parentData = 'Hello from Parent!';
        }

        # Child.component.ts
        import { Component, Input } from '@angular/core';

        @Component({
          selector: 'app-child',
          template: `<p>{{ childData }}</p>`
        })
        export class ChildComponent {
          @Input() childData: string;
        }

    # @Output decorator:
        This decorator is used to define an event emitter in a child component that can emit events to its parent component. The parent component can listen to these events using event binding and respond to them in its component logic.

        import { Output, component, EventEmitter } from "angular/core"
        @component({
            selector: "app-child",
            templateUrl: "./child-component.html",
            styleUrl: "./child-component.css",
        })
        class Child {
            @Output eventEmitter: EventEmitter<string> = new EventEmitter<string>();
            emitData() {
                this.eventEmitter.emit("This data emit from child to parent!")
            }
        }
        <button (onClick)="emitData"> </button>
        class Parent {
            receiveDataFromChild(event: string) {
                console.log("Event received from..", event)
            }
        }
        <app-child (eventEmitter)="receiveDataFromChild($event)">

17. What is an Observable in Angular?

    # Answer:-
        1. Reactive Extensions for JavaScript), which is a library for reactive programming in JavaScript. Observables are used to handle asynchronous data streams and provide a way to represent and manipulate streams of data over time
        2. Observable in Angular are powerful tools for handling asynchronous data and managing
        3. Observable can emit multiple values over time. A Promise only resolves once
        4. Observable are used to run asynchronously, and we get the return value multiple times. Promises are used to run asynchronously, and we get the return value only once.

    # Why Use Observables in Angular?
        1. Asynchronous Handling: Observables are perfect for handling streams of asynchronous events, such as HTTP requests, user input, or WebSocket messages.

    # Example:-
        1. Producer: The source that emits data (e.g., user input, HTTP requests, etc.)
        2. Subscriber: The consumer that listens to the emitted data.
        3. Operators: Functions to modify or filter the data stream.

        import { Observable } from 'rxjs';

        const myObservable$ = new Observable<number>((observer) => {
          observer.next(1);
          observer.next(2);
          observer.next(3);
          observer.complete();

          return () => {
            console.log('Observable cleanup logic executed');
          };
        });

        myObservable$.subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.log('Observable completed');
          },
        });

18. What is forkJoin in Angular?

    # Answer:-
        1. ForkJoin is an RxJS operator used to combine the final values from multiple Observables into a single Observable. It waits for all Observables to complete and then emits a single array or object containing their last emitted values.
        2. Waits for Completion: All Observables must complete before forkJoin emits a value.
        3. This is useful when you need to make several requests in parallel and perform an action when all requests are finished

    # Example:-
        1. ForkJoin One
            import { forkJoin, of, delay } from 'rxjs';

            const user$ = of({ id: 1, name: 'John Doe' }).pipe(delay(1000));
            const posts$ = of([ { id: 101, title: 'Post 1' }, { id: 102, title: 'Post 2' }]).pipe(delay(2000));
            const comments$ = of([{ postId: 101, comment: 'Great post!' },{ postId: 102, comment: 'Very informative!' }]).pipe(delay(1500));

            <!--Combine all observables -->
            forkJoin([user$, posts$, comments$]).subscribe(
              ([user, posts, comments]) => {
                console.log('User:', user);
                console.log('Posts:', posts);
                console.log('Comments:', comments);
              }
            );

        2. ForkJoin Two
            const request1 = this.http.get('https://api.example.com/data1');
            const request2 = this.http.get('https://api.example.com/data2');
            const request3 = this.http.get('https://api.example.com/data3');

            forkJoin([request1, request2, request3]).subscribe(results => {
                const [data1, data2, data3] = results;
                console.log('Data 1:', data1);
                console.log('Data 2:', data2);
                console.log('Data 3:', data3);
            });


19. what is encapsulation?

    # Answer:-
        1. Component encapsulation in frameworks like Angular refers to how a component's view, styles, and behavior are kept isolated from other components. This ensures that the  internal workings of a component (such as its HTML structure and CSS) don’t interfere with or get affected by the surrounding components. Encapsulation allows for better modularity, maintainability, and reusability of components

        2. Encapsulation in Angular refers to controlling the styles and DOM structure of components to ensure that they do not interfere with each other. Angular achieves this by using View Encapsulation. It determines how styles defined in a component affect the DOM outside that component and how the external styles affect the component itself.

20. what is ngAfterViewInit?

    # Answer:-
        1. ngAfterViewInit is invoked after Angular has fully initialized the component's view and all its child views (if any). This ensures that the component’s view is fully rendered and that all DOM elements within it are accessible.

        2. Both @ViewChild and @ViewChildren should be used within or after the ngAfterViewInit life cycle hook to ensure that the view has been fully initialized. Accessing them earlier might result in undefined or incomplete references.

        3. Imagine you have a parent component that needs to access a child component's data or methods. Using ngAfterViewInit, you can ensure that the child component has been fully initialized before interacting with it.

    # Example:-
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

21. what is ViewChild?

    # Answer:-
        1. ViewChild is used to access child components or elements or directive in the template.
        2. ViewChild is used to get a reference to a single child component, directive, or DOM element.
        3. It's typically used when you need to interact with a specific element or component after it has been rendered
        4. In Angular, @ViewChild are decorators used to query and access DOM elements, child components, or directives in a parent component's template

    # Example of @ViewChild
        1. child.component.ts:-
            import { Component } from '@angular/core';
            @Component({
              selector: 'app-child',
              template: `<p>Child Component</p>`,
            })
            export class ChildComponent {
              greet() {
                console.log("Hello from the Child Component!");
              }
            }

        2. parent.component.ts:-
            import { Component, ViewChild } from '@angular/core';
            import { ChildComponent } from './child.component';

            @Component({
              selector: 'app-parent',
              template: "
                <app-child></app-child>
                <button (click)="callGreet()">Call Greet from Child</button>",
            })
            export class ParentComponent {
              @ViewChild(ChildComponent) childComponent: ChildComponent;

              callGreet() {
                this.childComponent.greet();
              }
            }

22. what is ViewChildren?

    # Answer:-
        1. @ViewChildren is used when you need to access multiple child elements or components. It returns a QueryList, which is an iterable list of the queried elements or components. It's useful when there are multiple instances of the same element or component.

    # Example of @ViewChildren

        1. child.component.ts:

            import { Component } from '@angular/core';
            @Component({
              selector: 'app-child',
              template: `<p>Child Component</p>`,
            })
            export class ChildComponent {
              greet() {
                console.log("Hello from the Child Component!");
              }
            }

        2. parent.component.ts:

            import { Component, ViewChildren, QueryList } from '@angular/core';
            import { ChildComponent } from './child.component';
            @Component({
              selector: 'app-parent',
              template: `
                <app-child></app-child>
                <app-child></app-child>
                <button (click)="callGreet()">Call Greet from All Children</button>
              `,
            })
            export class ParentComponent {
              @ViewChildren(ChildComponent) childComponents: QueryList<ChildComponent>;

              callGreet() {
                this.childComponents.toArray().forEach(child => child.greet());
              }
            }

23. what is viewChild?

    # Answer:-
        @ViewChild allows you to access a single child element or component from the template. It's often used when you want to interact with or manipulate a single child element or component directly.

24. what is ngOnChanges?

    # Angular:-
        1. ngOnChanges is a lifecycle hook in Angular that is triggered whenever the value of any @Input() property of a component or directive changes. It allows you to respond to input property changes and take necessary actions

        2. ngOnChanges is called when the input properties of a component or directive change. These changes occur when Angular sets or resets data-bound input properties. This lifecycle hook is particularly useful when a component needs to act on changes to its input properties.

        3. It is called before the ngOnInit method if the component has input-bound properties.

    # Example:-

        1. Parent Component (Sender)
            import { Component } from '@angular/core';
            @Component({
              selector: 'app-parent',
              template: `
                <button (click)="changeName()">Change Name</button>
                <app-child [name]="userName"></app-child>
              `,
            })
            export class ParentComponent {
              userName = 'John';

              changeName() {
                this.userName = 'Jane';
              }
            }

        2. Child Component (Receiver)
            import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
            @Component({
              selector: 'app-child',
              template: `<p>Name: {{ name }}</p>`,
            })
            export class ChildComponent implements OnChanges {
              @Input() name!: string;

              ngOnChanges(changes: SimpleChanges) {
                console.log('Changes:', changes);
              }
            }

25. What is canActive?

    # Answer:-
        1. In Angular, CanActivate is a guard used to control navigation to a particular route. It decides whether a route can be activated or not based on certain conditions. This is commonly used for authentication, authorization, or any other condition that must be met before accessing a route.

        2. The service's canActivate method is used to return true (allow navigation) or false (block navigation).

    import {CanActivate, Router } from "@angular/router"
    import {authService} from "../authService"

    # Example_1:- Protecting a Route Based on Authentication

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

    # Example_2:-

        import { Injectable } from '@angular/core';
        @Injectable({
          providedIn: 'root',
        })
        export class AuthService {
          private isLoggedIn = false;

          login() {
            this.isLoggedIn = true;
          }

          logout() {
            this.isLoggedIn = false;
          }

          isAuthenticated(): boolean {
            return this.isLoggedIn;
          }
        }

        import { Injectable } from '@angular/core';
        import { CanActivate, Router } from '@angular/router';
        import { AuthService } from './auth.service';

        @Injectable({
          providedIn: 'root',
        })
        export class AuthGuard implements CanActivate {
          constructor(private authService: AuthService, private router: Router) {}

          canActivate(): boolean {
            if (this.authService.isAuthenticated()) {
              return true; // Allow navigation
            }
            this.router.navigate(['/login']); // Redirect to login if not authenticated
            return false; // Block navigation
          }
        }

        import { NgModule } from '@angular/core';
        import { RouterModule, Routes } from '@angular/router';
        import { HomeComponent } from './home/home.component';
        import { LoginComponent } from './login/login.component';
        import { AuthGuard } from './auth.guard';

        const routes: Routes = [
          { path: '', component: HomeComponent },
          { path: 'login', component: LoginComponent },
          { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        ];

        @NgModule({
          imports: [RouterModule.forRoot(routes)],
          exports: [RouterModule],
        })
        export class AppRoutingModule {}

26. Host Binding vs Host Listener?

    # Answer:-
        1. In Angular, @HostBinding and @HostListener are decorators that help you interact with the host element of a directive or component. These allow you to bind properties and listen to events directly on the host element where the directive or component is applied.

        2. HostBinding and HostListener are decorators in Angular that allow you to interact with the host element of a directive or component.

        3. HostBinding is used to set properties on the host element,

        4. HostListener is used to listen for events on the host element.


27. What is AOT VS JIT?

    # AOT Answer:-
        1. Definition: The application is compiled during the build process, before it is delivered to the browser.
        2. Faster Rendering: The browser loads precompiled JavaScript, skipping runtime compilation.
        3. Smaller Bundle Size: Removes Angular decorators and metadata after compilation.
        4. Error Detection: Catches template and binding errors during the build phase.
        5. Enhanced Security: Converts templates to code, reducing runtime injection attacks (e.g., XSS)

    # JIT Answer:-
        1. Definition: The application is compiled in the browser at runtime.
        2. Quick Development Builds: No pre-compilation; faster iteration during development.
        3. Dynamic Loading: Can compile components dynamically at runtime.
        4. Ease of Debugging: Original templates and source files are intact for debugging.

        ------------------------------------------------------------------------------------
        Feature                     AOT                                                 JIT
        ------------------------------------------------------------------------------------
        Compilation Time        Build time (before deployment).                         Runtime (in the browser).
        Performance             Faster runtime; templates are precompiled.              Slower due to runtime compilation.
        Error Detection         Detects errors at build time.                           Detects errors at runtime.
        Bundle Size             Smaller (no Angular decorators/metadata).               Larger (includes Angular metadata).
        Use Case                Production builds.                                      Development/debugging builds.
        Security                Safer; reduces injection attacks.                       Less secure (evaluates templates at runtime).
# Input decorator

    @component({
        selector: "app-parent",
        templateUrl: ".parent-component.html",
        styleUrl: [".parent-component.css"]
    })

    class Parent {
        passValue : string = "Pass value to parent to child!";
        constructor() {}
    }

    <app-child [dataReceived] = "passValue"> </app-child>

    @component({
        selector: ".app-child",
        templateUrl: ".child-component.html",
        styleUrl: ".child-component.html"
    })

    import { Input } from "angular/core"

    class Child {
        @Input() dataReceived: string = ""
    }

# Output decorator

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

# Interceptor

    import { httpInterceptor, httpRequest, httpHandler, httpEvent } from "@angular/common/http"
    @Injectable()
    export class AuthInterceptor implement httpInterceptor {

        intercept(req : httpRequest<any>, next: httpHandler<any>): Observable<httpEvent<any>> {
            const cloneReq = req.clone({
                headers: req.headers.set("authorization", "Test")
            })
            return next.handle(cloneReq)
        }
    }

# Router

    import { RouterModule, Routes } from "angular/router"
    const routers: Routes = [{
            path: "", component: HomeComponent
        },
        {
            path: "user", component: UserComponent, canActivate: [AuthGuard]
    }]
    @NgModule({
        imports: [RouterModule.forRoot(routers)],
        exports: [RouterModule]
    })

# ViewChild

    # Access the Dom element in same component
        <p #viewPara> This content will change after ngViewInit initialized <p>
        <div (onClick) = "changeParagraphConten()" </div>

        import { component, ViewChild, AferViewInit, ElementRef } from "@angular/core"
        export class AppComponent implement AferViewInit {
            @ViewChild("viewPara") viewPara: ElementRef;
            constructor() {}
            ngAterViewInit() {
                console.log("Show after view initialized", this.viewPara.nativeElement)
                changeParagraphConten() {
                    this.viewPara.nativeElement.textContent =  "Change the value after view initialized"
                }
            }
        }

# Observable

    # An Observable is a collection of values over time that can be observed. It is a "cold" producer of data, meaning it does not produce values until there are subscribers.

    import { Component, VERSION } from '@angular/core';
    import { Observable } from 'rxjs';
    @Component({
      selector: 'my-app',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
    })
    export class AppComponent {
      name = 'Angular ' + VERSION.major;

      observabl = new Observable<Number>((obs) => {
        obs.next(5);
        obs.next(10);
        obs.error('Error: throwing from ja');

        setTimeout(function () {
          obs.next(20);
          obs.complete();
        }, 1000);
      }).subscribe({
        next(resutl) {
          console.log('Result', resutl);
        },
        error(err) {
          console.log(err);
        },
        complete() {
          console.log('Result is competed');
        },
      });
    }

    # another Example

    const observable = new Observable<number>((observer) => {
        observer.next(1);
        observer.next(2);
        observer.complete();
    });

    observable.subscribe((value) => console.log('Observer 1:', value));
    observable.subscribe((value) => console.log('Observer 2:', value));
    // Output:
    // Observer 1: 1
    // Observer 1: 2
    // Observer 2: 1
    // Observer 2: 2

# Subject

    # A Subject is a special type of observable that allows values to be multicasted to many observers. It is both an observable and an observer. It can emit values to its subscribers and also allows you to manually push values into it

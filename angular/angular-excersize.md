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




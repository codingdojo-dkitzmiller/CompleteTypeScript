import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CoursesService} from './services/courses.service';
import 'rxjs/add/operator/map';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        CourseDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [CoursesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

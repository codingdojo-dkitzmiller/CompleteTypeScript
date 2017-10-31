import {Component, OnInit} from '@angular/core';
import {CoursesService} from './services/courses.service';
import {Observable} from 'rxjs/Observable';
import {CourseDetail} from '../../../shared/model/course-detail';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    course$: Observable<CourseDetail>;

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit(): void {
        this.course$ = this.coursesService
            .loadCourseDetail(5);
    }

}

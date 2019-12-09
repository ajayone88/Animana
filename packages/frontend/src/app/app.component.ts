import {ChangeDetectorRef, AfterViewChecked, Component} from '@angular/core';
import {SharedService} from "./shared.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {

  showError = false;
  error:{
    heading:string,
    description:string
  };
  constructor(private cdRef : ChangeDetectorRef, private sharedService: SharedService){}

  //Life cycle hook is used to subscribe the error and set the values
  ngAfterViewChecked(){
    this.sharedService.error.subscribe( error =>{
      this.showError = error.showError;
      this.error = {
        heading : error.heading,
        description: error.description
      }
      this.cdRef.detectChanges();
    });
  }

}

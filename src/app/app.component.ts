import { Component, VERSION } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public keyDirection = fromEvent(document, 'keydown');
  public kesForDirection =this.keyDirection.subscribe(
    (evt:KeyboardEvent) => {
      alert("du hast die taste-- " + evt.key + " --getrückt" );
    });
  


}

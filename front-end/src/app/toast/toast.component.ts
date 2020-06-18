import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit {

  
  ngOnInit(): void {
  }

  constructor(private renderer: Renderer2) {}

  goToTop(){
    // TODO: replace #temp with a different id
    this.renderer.selectRootElement('#temp').focus();
    
  }

}

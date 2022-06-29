import { Directive, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAccessControl]'
})
export class AccessControlDirective implements OnInit {

  constructor(private elementRef: ElementRef, private auth: AuthService) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.display = "none";
    this.checkAccess();
  }

  /** */
  checkAccess() {
    const accessControls: any = this.auth.getRole();
    this.elementRef.nativeElement.style.display = accessControls['Admin'] ? "block" : "none";
  }

}

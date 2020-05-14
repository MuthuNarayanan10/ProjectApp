import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-issue',
  templateUrl: './server-issue.component.html',
  styleUrls: ['./server-issue.component.css']
})
export class ServerIssueComponent implements OnInit {

  constructor(
    public router: Router,

  ) { }

  public goToSignIn(): any {
    this.router.navigate(['/user/login']);
  }//end of goToSign function

  ngOnInit() {
  }

}

import { Component } from "@angular/core";
import { Button } from "protractor";

@Component({
selector:'app-server',
templateUrl:'./server.component.html'
})
export class ServerComponent {
 serverId:number=10;
 serverStatus:string='online';
allowNewServer=false;
serverCreationStatus='server was not created!';
serverName='TestServer';
constructor()
{
    setTimeout(() => {
        
    this.allowNewServer=true}, 2000);
}
 getServerStatus()
 {
     return this.serverStatus;
 }

 onCreateServer(event)
 {
     console.log(event);
     this.serverCreationStatus='server '+ this.serverName +' was created!';
 }
 onInput(event:Event)
 {
    this.serverName=(<HTMLInputElement>event.target).value;
 }
}
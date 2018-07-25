import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public sensor1;
  public warmth;
  public topic;
  public message;

  constructor(public navCtrl: NavController,private _mqttService: MqttService) {
  	//this.warmth = 100;
  	this._mqttService.observe('gotouch').subscribe((message: IMqttMessage) => 
   	{
   		this.sensor1 = message.payload.toString();
   		this.warmth = this.sensor1;
   		console.log(this.sensor1);
   	});
  }

  public unsafePublish(): void {
  	this._mqttService.unsafePublish(this.topic, this.message, {qos: 1, retain: true});
  }

}

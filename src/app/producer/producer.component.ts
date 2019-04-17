import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Farm} from '../models/farm';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit {
  param: string;
  farm: Farm;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    console.log("allo producer");
    // this.param = this.route.snapshot.paramMap.get('farm');
    this.http.get<Farm>(`/api/farm?id=${1}`)
      .subscribe((data: Farm) => {
        this.farm = data;
        console.log(this.farm);
      });
    //console.log(this.param);


  }

}

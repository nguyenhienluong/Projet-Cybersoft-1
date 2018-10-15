import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhimService } from '../../core/services/phim.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.css']
})
export class TrangChiTietComponent implements OnInit,OnDestroy {

  phim: any = {};
  private MaPhim;
  private subParam:Subscription;
  constructor(
    private activateRouter: ActivatedRoute,
    private phimService: PhimService,
    private titleService:Title
    ) { }
  ngOnInit() {
    //Nhận 1 tham số từ url
  //  this.subParam = this.activateRouter.params.subscribe(params => {
  //     let id = params['id'];
  //     this.loadPhim(id);
  //   });
  //Lấy nhiều tham số
    this.subParam = this.activateRouter.queryParams.subscribe((params) => {
        this.MaPhim = params.MaPhim;
        this.titleService.setTitle(params.TenPhim);
    })
    this.phimService.LayChiTietPhim(this.MaPhim).subscribe((res) => {this.phim = res
      console.log(this.phim)
    
    });
  }
 
  ngOnDestroy(){
    this.subParam.unsubscribe();
  }



}

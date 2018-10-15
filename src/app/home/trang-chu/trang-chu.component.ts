import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhimService } from '../../core/services/phim.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit, OnDestroy{

  dsPhims: any[];
  sub: Subscription;

  constructor(private phimService: PhimService,private titleService:Title,
    private modalService:ModalService) { }

  ngOnInit() {
    this.titleService.setTitle( "Trang chủ" );
    this.sub = this.phimService.LayDanhSachPhim().subscribe(res => {
      this.dsPhims = res;
    })
  }
  XemChiTiet(phim:any)
  {
    //Cách 1
    let objectData = {isOpen:true,phim:phim,Title:"Chi tiết phim - " + phim.TenPhim }; 
    this.modalService.setIsOpenModal(objectData);//Đưa 1 tham số vào service
    //Cách 2
    this.modalService.data.emit(JSON.stringify(objectData));
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

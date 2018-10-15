import { Component, OnInit,OnDestroy } from '@angular/core';
import { NguoiDungService } from '../../core/services/nguoi-dung.service';
import { Subscription } from 'rxjs';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit, OnDestroy {

  public nguoiDung:any = {};
  public isLogin=false;
  public sub:Subscription;
  constructor(private svNguoiDung:NguoiDungService) { 
  }
 
  ngOnInit() {
    //Kiểm tra trong storage có tài khoản người dùng chưa
    if(localStorage.getItem("nguoiDung"))
    {
        this.nguoiDung = JSON.parse(localStorage.getItem("nguoiDung"));
        this.isLogin = true;
    }
  }
  DangNhap(taikhoan:string,matkhau:string)
  {
    //Gọi service đăng nhập
    this.sub = this.svNguoiDung.DangNhap(taikhoan,matkhau).subscribe((ketqua)=>{
        if(ketqua != "Tài khoản hoặc mật khẩu không đúng !") //ĐN Thành công
        {
          console.log(ketqua);
          this.nguoiDung = ketqua;
          this.isLogin = true;
          //Lưu vào storage
          localStorage.setItem("nguoiDung",JSON.stringify(this.nguoiDung)); //Lưu storage
          location.reload(); //Load lại trang sau khi đăng nhập thành công
        }else{
          this.nguoiDung = {};
          this.isLogin = false;
          localStorage.setItem("nguoiDung","");
        }
    });
     
  }
  DangXuat()
  {
    localStorage.removeItem("nguoiDung"); 
    location.reload(); //Load lại trang sau khi đăng xuất
  }
  ngOnDestroy()
  { 
    this.sub.unsubscribe();
  }

}

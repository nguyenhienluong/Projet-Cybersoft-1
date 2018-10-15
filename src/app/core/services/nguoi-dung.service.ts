import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private http:Http) { }
  public DangNhap(taikhoan:string,matkhau:string):Observable<any>{
    let apiURL = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${taikhoan}&MatKhau=${matkhau}`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(apiURL,null,{headers:header})
    .pipe(map((res: Response) => res.json()));
    return observable;
  }

}

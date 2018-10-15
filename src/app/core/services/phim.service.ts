import { Injectable } from '@angular/core';
import { Http, Response,Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http: Http) { }

  LayDanhSachPhim(): Observable<any> {
    let observable = this.http.get('http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01')
    .pipe(map((res: Response) => res.json()));
    return observable;
  }

  LayChiTietPhim(id: string): Observable<any> {
    let observable = this.http.get('http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=' + id)
    .pipe(map((res: Response) => res.json()));
    return observable;
  }

  LayDanhSachGhe(MaLichChieu: string): Observable<any> {

    var apiLichChieu = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`;
    let observable = this.http.get(apiLichChieu)
    .pipe(map((res: Response) => res.json()));
    return observable;
  }

  DatVe(ve:any): Observable<any>{
    var apiDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(apiDatVe,ve,{headers:header})
    .pipe(map((res: Response) => res.json()));
    return observable;
  }
}
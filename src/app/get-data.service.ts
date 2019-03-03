import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  categories: Array<any> = [
    {
      id: '1',
      name: 'Cameras',
      link: 'cameras',
      brand: [
        {
          sid: '1',
          name: 'Canon',
          link: 'canon',
          products: [
            {
              pid: '1',
              name: 'Canon D700',
              link: 'canon-d700',
              img_url:
                'https://cspl-corpweb-site-asia-production.s3.amazonaws.com/media/image/2018/09/05/2d6ec79e270e43be9694618978e26939_EOS+R+Body+Front.png',
              dsc: 'Canon D700 description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            },
            {
              pid: '2',
              name: 'Canon D701',
              link: 'canon-d701',
              img_url:
                'https://cspl-corpweb-site-asia-production.s3.amazonaws.com/media/image/2018/03/25/937d6225816f49538c9dac956e8b8a8c_eos-1500d_b1.png',
              dsc: 'Canon D700 description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            }
          ]
        },
        {
          sid: '2',
          name: 'Nikon',
          link: 'nikon',
          products: [
            {
              pid: '1',
              name: 'Nikon D7000',
              link: 'nikon-d7000',
              img_url: 'https://imgsv.imaging.nikon.com/lineup/dslr/img/product_d850.png',
              dsc: 'Nikon D7000 description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            },
            {
              pid: '2',
              name: 'Nikon D8000',
              link: 'nikon-d8000',
              img_url: 'https://imgsv.imaging.nikon.com/lineup/dslr/img/product_d810.png',
              dsc: 'Nikon D8000 description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Cellphones',
      link: 'cellphones',
      brand: [
        {
          sid: '1',
          name: 'Samsung',
          link: 'samsung',
          products: [
            {
              pid: '1',
              name: 'Samsung Galaxy S9',
              link: 'samsung-galaxy-s9',
              img_url: 'https://cdn.tgdd.vn/Products/Images/42/113263/samsung-galaxy-s9-black-400x400.jpg',
              dsc: 'Samsung Galaxy S9 description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            },
            {
              pid: '2',
              name: 'Samsung Galaxy A7',
              link: 'samsung-galaxy-a7',
              img_url: 'https://cdn.tgdd.vn/Products/Images/42/111107/samsung-galaxy-a7-2018-blue-400x460.png',
              dsc: 'Samsung Galaxy A7 description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            }
          ]
        },
        {
          sid: '2',
          name: 'iPhone',
          link: 'iphone',
          products: [
            {
              pid: '1',
              name: 'iPhone 8',
              link: 'iphone-8',
              img_url: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-64gb-h1-400x460.png',
              dsc: 'iPhone 8 description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            },
            {
              pid: '2',
              name: 'iphone X',
              link: 'iphone-x',
              img_url: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
              dsc: 'iPhone X description',
              full_dsc:
                'Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Nghe nhạc với tai nghe Bluetooth, Từ chối cuộc gọi, Dự báo thời tiết, Điều khiển chơi nhạc'
            }
          ]
        }
      ]
    }
  ];

  constructor() {}

  getData() {
    return this.categories;
  }
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function LeftLayout() {

  //Đẩy data lên redux
  let dispatch = useDispatch();
  //Lấy data từ redux
  let movieArr = useSelector((state)=>state.MovieSlice.movieArr);
  
  let renderMovieList = () => {
    return movieArr.map((item, index)=>{
      return(
        <tr className='chonGhe' key={index}>
          <td className='firstChar'>{item.hang}</td>
          
          <td><button className=''>1{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>2{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>3{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>4{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>5{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>6{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>7{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>8{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>9{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>10{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>11{item.danhSachGhe.soGhe}</button></td>
          <td><button className=''>12{item.danhSachGhe.soGhe}</button></td>
          <td></td>
        </tr>
      )
    })
  }
  return (
    <div className=''>
        <header>
            <h3 style={{color: "orange"}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
            <h5 style={{color: "white"}}>Màn hình</h5>
            <div className='ps-5'>
            <div className='screen'></div>
             
            {renderMovieList()}

            </div>
        </header>
    </div>
  )
}

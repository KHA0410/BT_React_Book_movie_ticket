import React from 'react'

export default function RightLayout() {
  return (
    <div>
      <h3 style={{color: "white"}}>DANH SÁCH GHẾ BẠN CHỌN</h3>
      <div className='d-flex align-items-center' >
        <div className='gheDuocChon'></div>
        <div className='textWhite'><h5>Ghế đã đặt</h5></div>
        </div>
        <div className='d-flex'>
        <div className='gheDangChon'></div>
        <div className='textWhite'><h5>Ghế đang chọn</h5></div>
        </div>
        <div className='d-flex'>
        <div className='gheChuaChon'></div>
        <div className='textWhite'><h5>Ghế chưa chọn</h5></div>
        </div>
        <div>
          <table className='textWhite  table-bordered border-white'>
            <thead>
              <tr>
                <td>Số ghế</td>
                <td>Gía</td>
                <td>Hủy</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>X</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>X</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>X</td>
              </tr>
              <tr>
                <td>Tổng tiền</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

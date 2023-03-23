import React from 'react'
import { useState } from 'react'
import JsonData from './MOCK_DATA.json'
import ReactPaginate from 'react-paginate'
export default function App() {
  //sebelum mulai membuat pagination install dulu library dari react-paginate

  //1 buat state untuk mengambil data dari backend, kemudian di slice untuk mencari dari dari index dari number berapa yang akan diambil  
  const [users, setUsers ] = useState(JsonData.slice(0, 100))
  //2ini bagian dari set page number dimulai dari 0
  const [pageNumber, setPageNumber ] = useState(0)
//3 ini adalah userperpage yang bernilai 10
  const usersPerPage = 10
  //4 ini adalah perkalian dari untuk vistited page nya perkalian dari pagenumber bernilai 0 dan userpage bernilai 10 hasilnya 0 karena 0 X 10 = 0
  const pagesVisited = pageNumber * usersPerPage
  console.log(pagesVisited);
  //5 ini adalah function untuk menampilkan display user yang menggunakan methode slice yang mana menerima 2 parameter dari index pertama bernilai 0, parameter kedua merupakan penjumlahan dari 0 + 10 dimana penjumlahan ini akan di mapping untuk menampilkan users 
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
      return (
        <div className="user">
          <h3>{user.first_name}</h3>
          <h3>{user.last_name}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });
    // 6 buat sebuah const yang mana menerima methode math ceil yang untuk membulatkan bilangan bulat, dan didalamm akan ada pembagian dari banyaknya state users dibagi user per page, lebih lengkapnya 100/ 50 sama dengan 2
    const pageCount = Math.ceil(users.length / usersPerPage)
    //7 buat sebuah function untuk menselsksi changepage yang didalamnya terdapat setpage number artinya akan mengubah sebuah state nol menjadi any,
    const changePage  = ({selected}) =>{
      setPageNumber(selected)
    }
  return (

    <div className='App'>
      //panggil sebuah dispalyuser yang mana ini merupakan sebuah dari mapping untuk menampilkan seluruh data 
      {displayUsers}
      //reactpaginate merupakan library seusai dari data yang diminta
      <ReactPaginate 
      previousAriaLabel='Previous'
      nextLabel={"next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousClassName={"prevbtn"}
      nextLinkClassName={"nextbtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      />

  
  
    </div>
  )
}

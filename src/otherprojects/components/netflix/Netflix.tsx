import React, { Suspense, useEffect, useState } from 'react';

import "../../styles/Netflix.scss";
import logo from "../../../assets/Images/logo.png";
import { BrowserRouter, Link, Router, Routes } from 'react-router-dom';
import TvShows from "./TvShows"
import { ImSearch } from 'react-icons/im';
// import strings from '../../../utils/strings.js'
import * as defaults from '../../../utils/strings'
import axios from 'axios';


/**
 * 
 * axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

  =================================================
  async function getMovies(categories:string) {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
 */


function Netflix() {
  return (
    <div className='main-container'>
      <Header />
      <HomeSection />
    </div>
  )
}

export default Netflix

function Header() {
  return (


    <BrowserRouter>

      <nav className="header">
        <img src={logo} alt="" className="logo" />
        <div className="nav-links">
          <Link to={"./TvShows"}  >TV shows</Link>
          <Link to={"./TvShows"}  >Movies</Link>
          <Link to={"./TvShows"}  >Recently Added</Link>
          <Link to={"./TvShows"}  >My List</Link>
        </div>
        <ImSearch />
      </nav>

      <Routes>



      </Routes>

    </BrowserRouter>

  )
}

interface data_cell {
  id: string | number,
  url: string,
  title: string,
}

interface RowProps {
  category: string,
  // data_array:{ id: string|number; img:string; title:string  }[];
  data_array: data_cell[];

}

interface CardProps {
  title: string,
  url: string,
}

function Card({ title, url }: CardProps) {
  return (
    <div className="card">
      <img src={`${defaults.BASE_IMG_URL}${url}`} />
      <span>{title}</span>
    </div>
  )
}

let fake_data = {
  category: "Tv Shows",
  data_array: [{
    title: "first",
    id: 0,
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Stranger_Things_season_4.jpg/220px-Stranger_Things_season_4.jpg"

  },
  {
    title: "first",
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Stranger_Things_season_4.jpg/220px-Stranger_Things_season_4.jpg"

  },
  {
    title: "first",
    id: 2,
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Stranger_Things_season_4.jpg/220px-Stranger_Things_season_4.jpg"

  },
  {
    title: "first",
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Stranger_Things_season_4.jpg/220px-Stranger_Things_season_4.jpg"

  },
  ]
}


function Row({ category, data_array }: RowProps) {
  return (
    <div className="row">
      {/* fake_data.category = categories ; */}
      <p >{category.toUpperCase().replace(/[^a-z A-Z]/g, ' ')}</p>
      
      <div>
        {data_array.map((item, index) => {
          // console.log("=======>", item)
          return <Card key={index} title={item.title} url={item.url} />
        }
        )}
      </div>
    </div>
  )
}

// function HomeSection() {
// const [movieData,setMovieData]=useState([])

// async function getMovies(categories:string='') {
//   console.log("categories",categories)
//   try {
//     const {data:{results},status,statusText,} = await axios.get(`${defaults.BASE_URL}movie/${categories}?page=1`,{
//       headers:{
//         Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTA0OTIyNmRhZDZkZjhjMTk1MDA4NmViOWUxY2U3MyIsIm5iZiI6MTcyMDUwODU2MS4yMjAyLCJzdWIiOiI2NjhjZGFkMWM1ZWQ5NGEwMDJmMzVmOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cul5bXBCdjBDznN4IPLeLCYv2YlE69AoOw8SWdgKhz8' ,
//         accept:'application/json'

//       }
//     });
//     console.log("status,statusText,",status,statusText,);
//     if (status == 200){
//       fake_data.category = categories.replace(/[^a-z A-Z]/g, ' ');

//       const movie_arr = Object.keys(results)
//     .filter(item => {
//       return true;
//     })
//     .reduce((movies, item) => {
//       movies.push({
//         title: results[item].title,
//         url: results[item].poster_path,
//         id: results[item].id
//       });
//       return movies;
//     }, []);  
//     fake_data.data_array=movie_arr
//     setMovieData((fake_data)=>{

//       console.log("movie_arr======>",movieData);
//     })
//     }




//   } catch (error) {
//     console.error(error);
//   }
// }

// const categories_arr=['top_rated','popular','upcoming',]


//   useEffect(()=>{
//     categories_arr.forEach((item)=>{
//       getMovies(item);
//     })
//   },[movieData])

// console.log("movieData",movieData);

//   return (
//     <section className="home">
//       <div className="banner"></div>
//       {movieData?<Row category={movieData.category} data_array={movieData.data_array} />:<h2>🌀 Loading...</h2>}
//     </section>
//   )
// }

function HomeSection() {
  const [movieData, setMovieData] = useState([]);

  async function getMovies(categories: string = '') {
    console.log('categories', categories);
    try {
      const { data: { results }, status, statusText } = await axios.get(
        `${defaults.BASE_URL}movie/${categories}?page=1`,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTA0OTIyNmRhZDZkZjhjMTk1MDA4NmViOWUxY2U3MyIsIm5iZiI6MTcyMDUwODU2MS4yMjAyLCJzdWIiOiI2NjhjZGFkMWM1ZWQ5NGEwMDJmMzVmOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cul5bXBCdjBDznN4IPLeLCYv2YlE69AoOw8SWdgKhz8',
            accept: 'application/json',
          },
        }
      );
      console.log('status, statusText,', status, statusText);
      if (status === 200) {
        fake_data.category = categories.replace(/[^a-z A-Z]/g, ' ');
        const movie_arr = Object.keys(results)
          .filter(item => {
            return true;
          })
          .reduce((movies, item) => {
            movies.push({
              title: results[item].title,
              url: results[item].poster_path,
              id: results[item].id,
            });
            return movies;
          }, []);
        // setMovieData(movie_arr);
        setMovieData(prevMovieData => {

          // Create a copy of the previous state
          const updatedMovieData = [...prevMovieData, ...movie_arr];

          console.log("======>", updatedMovieData);
          return updatedMovieData;
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const categories_arr = ['top_rated', 'popular', 'upcoming'];

  useEffect(() => {
    categories_arr.forEach((item) => {
      getMovies(item);
    });
  }, []);

  console.log('movieData', movieData);

  return (
    <section className="home">
      <div className="banner"></div>
      {categories_arr.map((item, index) => (

        movieData.length > 0 ? (
          <Row key={index} category={item} data_array={movieData} />
        ) : (
          <h2>🌀 Loading...</h2>
        )
      ))}

    </section>
  );
}
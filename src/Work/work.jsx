import React, {useEffect, useState} from 'react';

import Logo from "./rs5.png"
import "./css.css";
import http from "../form/httpService";
import {apiRoot} from "../constants";
import Pagination from "../form/pagination";

const Service = () => {
  const [works, setWorks] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getUrl = async () => {
      let res = await http.get(`${apiRoot}/works/?limit=9&offset=${(page - 1) * 9}`);
      setWorks(res.data.results);
      setCount(res.data.count);
    }
    getUrl();
  }, [page]);

  const onChangePage = (page) => {
    // update state with new page of items
    setPage(page)
  }
  return (

      <section className="site-section dark" id="services">

        <div className="container">
          <br/> <br/> <br/><br/> <br/> <br/>

          <div className="row mb-4">
            <div className="col-md-12">
              <div className="section-heading green text-center">

                <h1><strong>ALl of my works</strong></h1>

                <div className="statistics-icon statistics-content "><i className="icon-fire  "/></div>


              </div>
            </div>
          </div>

          <div className="row">

            {works.map(work =>
                <div class="col-lg-4 col-md-3 col-sm-2 col-xs-1" id="box144">
                  <div class="box text-center">
                    <div class="img-container">
                      <img src={Logo} alt="Mega Menu" className="img-responsive img-fe" width="200"/>
                    </div>
                    <div className="box-14">

                      <div class="text_box">
                        <div class="title_features">{work.name}</div>
                        <div class="sub_title">{work.about}</div>
                      </div>
                      {[...Array(work.rating).keys()].map(() => <span className="icon-star"/>)}
                    </div>
                  </div>
                </div>
            )}
          </div>

          {/*# Pagination goes here*/}
          <Pagination numItems={count} pageSize={12} onChangePage={onChangePage}/>
        </div>
        <br/> <br/> <br/>

      </section>

  );
}

export default Service;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchRest, searchRest } from "../../React-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// import { restaurantSelector, restSelector } from "./selectors";

function Restaurants({
  restaurantData,

  fetchRest,
}) {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchRest();
    searchRest();
  }, []);

  return restaurantData.loading ? (
    <h2>Loading</h2>
  ) : restaurantData.error ? (
    <h2>{restaurantData.error}</h2>
  ) : (
    <div>
      <section className="item_section mt-4 container text-center">
        <h2 className="px-4" style={{ fontWeight: 400, fontSize: 60 }}>
          Restaurant In Pune
        </h2>

        <div>
          <input
            type="text"
            placeholder="Search...."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {/* <input
            type="text"
            placeholder="Search...."
            onChange={(event) => {
              dispatch(searchRest(event.target.value));
            }}
          /> */}
        </div>
        <br />
        <div className="row mt-2 d-flex justify-content-between align-item-center ">
          {restaurantData.map((eve) => {
            return eve
              .filter((val) => {
                if (search == "") {
                  return val;
                } else if (
                  val.rname.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((event, index) => {
                return (
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mb-4 hove "
                    key={index}
                  >
                    <Link to={`/menu/${event._id}`}>
                      <Card.Img
                        variant="top"
                        src={event.imgdata}
                        className="cd"
                      />

                      <div className="card_body my-1">
                        <div className="upper_data d-flex justify-content-between align-item-center">
                          <h4 className="mt">{event.rname}</h4>
                          <span>{event.rating}&nbsp;★</span>
                        </div>
                        <div className="lower_data d-flex justify-content-between align-item-center">
                          <h5>{event.address}</h5>
                          <span> {event.price}</span>
                        </div>
                        <div className="extra"></div>
                        <br />
                      </div>
                    </Link>
                  </Card>
                );
              });
          })}
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurant.restaurants,
    searches: state.restaurant.search,
    // restaurantDa: restaurantSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRest: () => dispatch(fetchRest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);

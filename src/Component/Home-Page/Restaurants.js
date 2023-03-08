import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../React-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { restaurant, restSelector } from "./selectors";

function Restaurants({ restaurantData, fetchUsers }) {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchUsers();
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
        </div>
        <div className="row mt-2 d-flex justify-content-between align-item-center">
          {restaurantData
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
                  <Link to={`/menu/${event.id}`}>
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
            })}
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurantData: restSelector(state),
    restaurantDa: restaurant(state),
    searches: state.restaurant.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);

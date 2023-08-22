import React, { Component } from "react";
import axios from "axios";
import { Grid, Paper, Table } from "@material-ui/core";

class Alltrains extends Component {
  state = {
    trains: [],
  };

  componentDidMount() {
    axios.get("/trains").then((response) => {
      this.setState({ trains: response.data });
    });
  }

  render() {
    return (
      <Paper>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Table>
              <thead>
                <tr>
                  <th>Train Number</th>
                  <th>Name</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Seat Availability</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.trains.map((train) => (
                  <tr key={train.id}>
                    <td>{train.number}</td>
                    <td>{train.name}</td>
                    <td>{train.origin}</td>
                    <td>{train.destination}</td>
                    <td>{train.departure_time}</td>
                    <td>{train.arrival_time}</td>
                    <td>{train.seats_available}</td>
                    <td>{train.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default Alltrains
import React, { Component } from "react";
import axios from "axios";
import { Grid, Paper, Table } from "@material-ui/core";

class TrainDetails extends Component {
  state = {
    train: {},
  };

  componentDidMount() {
    const trainId = this.props.match.params.trainId;
    axios.get(`/trains/${trainId}`).then((response) => {
      this.setState({ train: response.data });
    });
  }

  render() {
    const { train } = this.state;

    if (!train) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

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
                <tr>
                  <td>{train.number}</td>
                  <td>{train.name}</td>
                  <td>{train.origin}</td>
                  <td>{train.destination}</td>
                  <td>{train.departure_time}</td>
                  <td>{train.arrival_time}</td>
                  <td>{train.seats_available}</td>
                  <td>{train.price}</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default TrainDetails;

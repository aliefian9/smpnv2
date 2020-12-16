import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getLoggingDetail: state.inventorys.getLoggingDetail,
    errorLoggingDetail: state.inventorys.errorLoggingDetail,
  };
};

const DetailLoggingComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Jumlah</td>
          <td width="10">:</td>
          <td>{props.getLoggingDetail.qty}</td>
        </tr>
        <tr>
          <td width="200">Status</td>
          <td width="10">:</td>
          <td>{props.getLoggingDetail.status}</td>
        </tr>
        <tr>
          <td width="200">Warehouse</td>
          <td width="10">:</td>
          <td>{props.getLoggingDetail.warehouse}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailLoggingComponent);

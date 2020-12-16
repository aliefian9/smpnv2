import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getInventoryDetail: state.inventorys.getInventoryDetail,
    errorInventoryDetail: state.inventorys.errorInventoryDetail,
  };
};

const DetailInventoryComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getInventoryDetail.name}</td>
        </tr>
        <tr>
          <td width="200">Jumlah</td>
          <td width="10">:</td>
          <td>{props.getInventoryDetail.qty}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailInventoryComponent);

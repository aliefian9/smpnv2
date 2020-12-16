import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Spinner } from "reactstrap";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteInventory } from "../actions/inventoryAction";

const { SearchBar } = Search;

const handleClick = (dispatch, logical_uid) => {
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteInventory(logical_uid));
      swal("Data Inventoruy Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
};

const defaultSorted = [
  {
    dataField: "logical_uid",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getInventoryList: state.inventorys.getInventoryList,
    errorInventoryList: state.inventorys.errorInventoryList,
  };
};

const TableInventoryFullAccess = (props) => {
  const columns = [
    {
      dataField: "logical_uid",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "name",
      text: "Nama",
      sort: true,
    },
    {
      dataField: "qty",
      text: "Jumlah",
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      },
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "30%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"DetailInventory/" + row.logical_uid}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>

            <Link to={"EditInventory/" + row.logical_uid}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button
              color="dark"
              className="mr-2"
              onClick={() => handleClick(props.dispatch, row.logical_uid)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getInventoryList ? (
        <ToolkitProvider
          bootstrap4
          keyField="logical_uid"
          data={props.getInventoryList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          noDataIndication="Table is Empty"
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/Create">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faPlus} /> Create
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorInventorysList ? (
            <h4>{props.errorInventorysList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableInventoryFullAccess);
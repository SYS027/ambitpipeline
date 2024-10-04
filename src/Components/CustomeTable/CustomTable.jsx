import React from "react";
import { Table, Dropdown, Form, Row, Col } from "react-bootstrap";
import "./CustomStyle.css";
import CustomSingleButton from "../CustomSingleButton/CustomSingleButton";
import { TablePagination } from "@mui/material";
import CustomInput from "../CustomInput/CustomInput";
import Divider from "@mui/material/Divider";

const CustomTable = (props) => {
  const {
    data = [],
    setValue,
    pageCount,
    handleItemsPerPageChange,
    rowsPerPage,
    clickableColumns = [],
    onColumnClick,
  } = props;

  // format heading name code here......
  const formatHeader = (header) => {
    return header
      .replace(/_/g, " ")
      .replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      );
  };
  //   Render each table row code here...........
  const renderRow = (item, index) => (
    <tr key={index}>
      {/* Checkbox code here ....*/}
      {props?.enableCheckbox && (
        <td className="text-white bg-danger">
          <Form.Check
            type="checkbox"
            checked={props?.selectedRows.includes(index)}
            onChange={() => props?.onRowCheckboxChange(index)}
          />
        </td>
      )}

      {Object.keys(item).map((key, idx) => {
        const isClickable = clickableColumns.includes(key);
        return (
          <td
            key={idx}
            className={isClickable ? "clickable-column" : ""}
            onClick={() => {
              if (isClickable && onColumnClick) {
                alert(`Clicked on ${key}: ${item[key]}`);
                onColumnClick(key);
              }
            }}
            style={{ color: isClickable ? "#0d6efd" : "" }}
          >
            {item[key]}
          </td>
        );
      })}

      {/* Actions Column code here ....*/}
      {props?.actionVisibility && (
        <td>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                display: "flex",
                alignItems: "center",
                background: "#000",
                borderColor: "#000",
                padding: 5,
                fontSize: 14,
              }}
            >
              Actions
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {props.actions.map((action, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => action.onClick(item)}
                  className="select-dropdown"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#d3d3d3";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                  }}
                >
                  <span style={{ marginRight: "5px", fontSize: "12px" }}>
                    {action.icon}
                  </span>
                  <span style={{ fontSize: "16px" }}>{action.label}</span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </td>
      )}
    </tr>
  );

  return (
    <div>
      {props?.headingText && (
        <Row className="align-items-end mb-3 mt-3">
          <Col xs="auto mb-3">
            <h5 className="fw-bold text-danger">{props?.titleName}</h5>
          </Col>
        </Row>
      )}
      <Divider style={{ borderColor: "cadetblue" }} />
      <div
        className="d-flex align-items-end justify-content-between mt-4 me-3"
        style={{ marginBottom: props.dateVisibility ? "30px" : "30px" }}
      >
        {/* firstColumnVisibility code are start to here.. */}
        {props?.firstColumnVisibility && (
          <div className="d-flex align-items-end gap-2">
            {/* select column Dropdown code here..... */}
            {props?.selectColumnData && (
              <div className="align-items-center">
                <Col xs="auto">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      id="dropdown-basic"
                    >
                      {props?.SelectColumnValue || "Select Column"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {props?.SelectColumnData.map((item) => (
                        <Dropdown.Item
                          key={item.value}
                          onClick={() => setValue(item.value)}
                        >
                          {item.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            )}

            {/* from and to date code here....... */}
            {props?.dateVisibility && (
              <div
                className="d-flex gap-2"
                style={{ marginBottom: props.dateVisibility ? "0px" : "0" }}
              >
                <div className="w-50">
                  <CustomInput
                    labelName="From Date"
                    type="date"
                    value={props?.fromDateValue}
                    onChnage={props?.toDateChange}
                  />
                </div>
                <div className="w-50">
                  <CustomInput
                    labelName="To Date"
                    type="date"
                    value={props?.fromDateValue}
                    onChnage={props?.toDateChange}
                  />
                </div>
              </div>
            )}

            {props?.exportIconVisiblity && (
              <div onClick={props?.exceldownload}>
                <img src="/images/download.svg" alt="" />
              </div>
            )}
          </div>
        )}

        {/* Export To Excel button code here....... */}
        {props?.exportToExcelBtnVisiblity && (
          <div>
            <CustomSingleButton
              _ButtonText="Export To Excel"
              height={40}
              // width="50%"
              onPress={props?.onPress}
            />
          </div>
        )}

        {/* search field code here....... */}
        <div className="d-flex gap-4 align-items-end">
          {props?.searchVisibility && (
            <div>
              <CustomInput
                type="text"
                placeholder={props?.placeholder}
                value={props?.fromDateValue}
                onChnage={props?.toDateChange}
              />
            </div>
          )}
          {/* add new button code here....... */}
          <div>
            <CustomSingleButton
              _ButtonText={props.buttonTitle}
              height={40}
              // width="50%"
              onPress={props?.onPress}
            />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center m-4">
        {props?.fileUploadVisiblity && (
          <div className="d-flex align-items-sm-end justify-content-center gap-4">
            <div className="w-50">
              <CustomInput type="file" labelName="Upload Docoment" />
            </div>
            <div>
              <CustomSingleButton
                _ButtonText="Upload"
                height={40}
                width="100%"
                onPress={props?.onPress}
              />
            </div>
          </div>
        )}
      </div>
      {/* Table code here.....*/}
      <div className="table-responsive rounded-3 bookmakerTable">
        <Table
          bordered
          hover
          responsive
          style={{ whiteSpace: "pre" }}
          size="sm"
        >
          <thead>
            <tr>
              {props?.enableCheckbox && (
                <th className="text-white bg-danger">
                  <Form.Check
                    type="checkbox"
                    checked={props?.allSelected}
                    onChange={props?.MenuonHeaderCheckboxChange}
                  />
                </th>
              )}
              {Object.keys(data[0] || {}).map((key, index) => (
                <th key={index} className="text-white bg-danger">
                  {formatHeader(key)}
                </th>
              ))}

              {props?.actionVisibility && (
                <th className="text-white bg-danger">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data
              ?.slice(
                pageCount * rowsPerPage,
                pageCount * rowsPerPage + rowsPerPage
              )
              .map((item, index) => renderRow(item, index))}
          </tbody>
        </Table>

        {/* Pagination controls */}
        <TablePagination
          component="div"
          count={props?.dataContained}
          page={pageCount}
          onPageChange={(event, newPage) => props.handlePageClick(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(event) =>
            handleItemsPerPageChange(event.target.value)
          }
          classes={{
            selectLabel: "custom-select-label",
            displayedRows: "custom-select-label",
          }}
        />
      </div>
    </div>
  );
};

CustomTable.defaultProps = {
  headingText: false,
  selectColumnData: false,
  enableCheckbox: false,
  dateVisibility: false,
  searchVisibility: false,
  exportToExcelBtnVisiblity: false,
  exportIconVisiblity: false,
  firstColumnVisibility: false,
  actionVisibility: false,
};

export default CustomTable;

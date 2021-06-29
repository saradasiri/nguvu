import React, { useEffect, useState } from "react";
import axios from "axios.js";
import apiConstants from "app/constants/apiPaths";
import { useStyles } from "app/c1component/C1Styles";
import PredictiveAnalyticsDetails from "./pa-reports-details";
import C1ListPanel from "app/c1component/C1ListPanel";
import { MatxLoading } from "matx";
import Button from "@material-ui/core/Button";
import C1DropDownList from "app/c1component/C1DropDownList";
import C1Styles from "app/c1component/C1Styles";

import { Grid, Divider, Card } from "@material-ui/core";
import C1DataTable from "app/c1component/C1DataTable";
import { buttonStyles } from "app/c1component/C1Styles";
import C1ModalNotification from "app/c1component/C1ModalNotification";

const PredictiveAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [dropItems, setDropItems] = useState(null);
  const gridClasses = useStyles();
  const styles = buttonStyles();

  function handleClick() {
    console.log("Hello World");
    return <C1ModalNotification open={true} id="12" />;
  }

  const ExecutionColumns = [
    {
      name: "modelName",
      label: "Model Name",
      options: {
        filter: true,
      },
    },
    {
      name: "startTime",
      label: "Run Time",
      options: {
        filter: true,
      },
    },
    {
      name: "userName",
      label: "Run By",
      options: {
        filter: true,
      },
    },
  ];
  const ExecutionColumns2 = [
    {
      name: "modelName",
      label: "Model Name",
      options: {
        filter: true,
      },
    },
    {
      name: "arguments",
      label: "Schedule",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updatedValue) => {
          if (value != undefined) {
            let data = JSON.parse(value);
            let len = data.length;
            let dic = data[len - 1];
            let dta = JSON.stringify(dic);
            let parmDict = JSON.parse(dta);
            let option = parmDict["schedulingOption"];
            if (option === "daily" || option === "dailyUpdates") {
              return "Daily";
            } else if (option === "weekly" || option === "weeklyUpdates") {
              return "Weekly";
            } else if (option === "customize" || option === "customizeUpdate") {
              return "Custom";
            } else if (option === "monthly" || option === "monthlyUpdate") {
              return "Monthly";
            } else {
              return "";
            }
          }
          return value;
        },
      },
    },
    {
      name: "userName",
      label: "Created by",
      options: {
        filter: true,
      },
    },
  ];
  async function fetchData() {
    const response = await axios
      .get("/api/oys/predictiveAnalytics/getDropDownModel")
      .then((data) => data.data);
    console.log(response);
    const dropDownItems = [];
    response.map((el) => {
      dropDownItems.push({
        description: el.modelName,
        value: el.modelName,
      });
    });
    setDropItems(dropDownItems);
    console.log(dropDownItems);
  }

  useEffect(() => {
    setLoading(true);
    const getDashBoardReport =
      apiConstants.BUSINESS_ANALYTICS.GetTableauReportThumbnail;
    axios
      .post(getDashBoardReport, btoa(JSON.stringify({ reportType: "P" })))
      .then((res) => {
        setReports(res.data || []);

        fetchData();
        setLoading(false);
      })
      .catch(console.error);

    return () => {
      // TODO:OS Write cleanup here
      setLoading(false);
    };
  }, []);

  return (
    <React.Fragment>
      {loading && <MatxLoading />}
      <div>
        <C1ListPanel routeSegments={[{ name: "Predictive Analytics Reports" }]}>
          <Divider className="mb-2" />
          <Card elevation={3}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Grid
                  alignItems="center"
                  spacing={3}
                  className={gridClasses.gridContainer}
                >
                  {dropItems && (
                    <C1DropDownList
                      dropDownList={dropItems}
                      label="Model Name"
                      onChange={console.log}
                      name="Model Name"
                      value=""
                      viewType="edit"
                    />
                  )}
                  <Button
                    className={styles.buttonSpace}
                    style={{
                      backgroundColor: "#ee6a86",
                      color: "white",
                      borderRadius: "25px",
                      opacity: "75%",
                    }}
                  >
                    Run
                  </Button>
                  <Button
                    className={styles.buttonSpace}
                    style={{
                      backgroundColor: "#ee6a86",
                      color: "white",
                      borderRadius: "25px",
                      opacity: "75%",
                    }}
                    onClick={handleClick}
                  >
                    Schedule
                  </Button>
                  <br></br>
                </Grid>
                <Grid
                  alignItems="center"
                  spacing={3}
                  className={gridClasses.gridContainer}
                >
                  <C1DataTable
                    url="/api/oys/predictiveAnalytics/schedule"
                    title="Schedule History"
                    rowsperpage={5}
                    columns={ExecutionColumns2}
                    defaultOrder="recDtCreate"
                    isRowsSelectable="none"
                    onTableChangeParent={() => {}}
                  />
                </Grid>
                <Grid
                  alignItems="center"
                  spacing={3}
                  className={gridClasses.gridContainer}
                  style={{
                    borderRightStyle: "solid",
                    borderColor: "#3C77D0",
                    borderRight: "5",
                  }}
                >
                  <C1DataTable
                    url="/api/oys/predictiveAnalytics"
                    title="Execution History"
                    rowsperpage={5}
                    columns={ExecutionColumns}
                    defaultOrder="startTime"
                    defaultOrderDirection="desc"
                    isRowsSelectable="none"
                    onTableChangeParent={() => {}}
                  />
                </Grid>
              </Grid>

              <Grid xs={12} sm={6}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  className={gridClasses.gridContainer}
                  style={{ borderLeftStyle: "solid", borderColor: "#3C77D0" }}
                >
                  {reports.map((item, ind) => (
                    <PredictiveAnalyticsDetails props={item} key={ind} />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </C1ListPanel>
      </div>
    </React.Fragment>
  );
};

export default PredictiveAnalytics;

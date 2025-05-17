import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "components/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import DefaultCard from "components/DefaultCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MDBox mb={1.5}>
              <DefaultCard icon="weekend" title="Bookings">
                123
              </DefaultCard>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox mb={1.5}>
              <DefaultCard icon="leaderboard" title="Today's Users" />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;

import React from "react";
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = theme => ({
    root: {
        width: '100%',
    }, table: {
        minWidth: 650,
    },
});

class PlanetList extends React.Component {

    state = {
        planets: [],
        page: 0,
        rowsPerPage: 10
    }



    constructor(props) {

        super(props)
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

    }

    handleChangePage = (event, newPage) => {
        this.setPage(newPage);
    }

    handleChangeRowsPerPage = (event) => {
        this.setRowsPerPage(+event.target.value);
        this.setPage(0);
    }

    setPage = (page) => {
        this.setState({ page });
    }

    setRowsPerPage = (rowsPerPage) => {
        this.setState({ rowsPerPage });
    }

    componentDidMount() {

        axios
            .post("http://localhost:8080/", {
                query:
                    "{planets {name rotation_period orbital_period diameter climate terrain}}"
            })
            .then(response => {
                const planets = response.data.data.planets;
                this.setState({ planets });

            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    }

    render() {
        const { classes } = this.props;
        const rows = this.state.planets;
        const { page, rowsPerPage } = this.state;
        return (
            <Container maxWidth="md">
                <h1>Planets</h1>
                <Paper className={classes.root}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Rotation period</TableCell>
                                    <TableCell align="right">Orbital period</TableCell>
                                    <TableCell align="right">Diameter</TableCell>
                                    <TableCell align="right">Climate</TableCell>
                                    <TableCell align="right">Terrain</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.rotation_period}</TableCell>
                                        <TableCell align="right">{row.orbital_period}</TableCell>
                                        <TableCell align="right">{row.climate}</TableCell>
                                        <TableCell align="right">{row.terrain}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>

        )
    }
}

export default withStyles(useStyles)(PlanetList)
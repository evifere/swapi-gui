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
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import HomeBtn from '@material-ui/icons/Home';

import { Link } from "react-router-dom";

const useStyles = theme => ({
    root: {
        width: '100%',
    }, table: {
        minWidth: 900,
    },
    title: {
        "text-align": "center"
    }
});

class Datatable extends React.Component {

    state = {
        rows: [],
        page: 0,
        rowsPerPage: 10,
        errored: false,
        loading: false
    }



    constructor(props) {

        super(props)
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);

        console.log('props', props)
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
        this.setState({ loading: true, errored: false });

        axios
            .post("http://localhost:8080/", {
                query: this.props.dataQuery
            })
            .then(response => {
                const rows = response.data.data[this.props.dataKey];
                this.setState({ rows });

            })
            .catch(error => {
                console.log(error);
                this.setState({ errored: true });

            })
            .finally(() => (this.setState({ loading: false })));
    }

    render() {
        const { classes } = this.props;
        const rows = this.state.rows;
        const { page, rowsPerPage } = this.state;

        return (
            <Container maxWidth="md">
                <IconButton> <Link to="/"><HomeBtn /></Link></IconButton>
                <h1 className={classes.title}>{this.props.title}</h1>
                <Paper className={classes.root}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    {this.props.headers.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align || "center"}
                                            style={{ minWidth: (column.minWidth || "175px") }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.name}>
                                        {this.props.headers.map((column, i) => {
                                            const value = row[column.id];
                                            const btnDetail = (i === 0) ? <IconButton> <Link to={"/" + this.props.dataKey + "/" + value}><Visibility /></Link></IconButton> : null;

                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {btnDetail}
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}

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

export default withStyles(useStyles)(Datatable)
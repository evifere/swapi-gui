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
import IconButton from '@material-ui/core/IconButton';
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

class Datadetail extends React.Component {

    state = {
        data: {},
        errored: false,
        loading: false
    }



    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.setState({ loading: true, errored: false });

        axios
            .post("http://localhost:8080/", {
                query: this.props.dataQuery
            })
            .then(response => {
                const data = response.data.data[this.props.dataKey];
                this.setState({ data });

            })
            .catch(error => {
                console.log(error);
                this.setState({ errored: true });

            })
            .finally(() => (this.setState({ loading: false })));
    }

    render() {
        const { classes } = this.props;
        const data = this.state.data;
        const headers = this.props.headers;

        return (
            <Container maxWidth="md">
                <IconButton> <Link to="/"><HomeBtn /></Link></IconButton>
                <h1 className={classes.title}>{this.props.title}</h1>
                <Paper className={classes.root}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" style={{ minWidth: "175px" }}>{this.props.title}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{
                                    headers.map((field) => {
                                        return (<TableRow align="center" style={{ minWidth: "175px" }} key={field.id}>{field.label} : {data[field.id]}</TableRow>)
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>

        )
    }
}

export default withStyles(useStyles)(Datadetail)
import * as React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TableRow from "@material-ui/core/TableRow";
import {TableCell} from "@material-ui/core";

export default () => {
        return (
                <TableRow>
                    <TableCell colSpan={6} align={"center"}>
                        <Fab size="small" color="primary">
                            <AddIcon/>
                        </Fab>
                    </TableCell>
                </TableRow>
        );
}


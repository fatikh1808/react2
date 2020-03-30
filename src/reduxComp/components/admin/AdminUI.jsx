import React from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

import '../admin/AdminStyle.css'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {},
    },
    input: {
        display: 'none',
    },
}));


function AdminUI(props) {

    const classes = useStyles();
    const {
        title,
        info,
        url,
        image,
        onChangeTitle,
        onChangeInfo,
        onChangeImg,
        onChangeUrl,
        handleToolAdd
    } = props;

    return (
        <div className="admin-block">
            <TextField
                id="outlined-multiline-static"
                label={'Название оборудование'}
                multiline
                rows="1"
                variant="outlined"
                value={title}
                onChange={onChangeTitle}
            />
            <TextField
                id="outlined-multiline-static"
                label={'Описание оборудование'}
                multiline
                rows="1"
                variant="outlined"
                value={info}
                onChange={onChangeInfo}
            />
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                value={image}
                onChange={onChangeImg}

            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Добавить фотографие
                </Button>
            </label>
            <TextField
                id="outlined-multiline-static"
                label={'Cсылка на магазин'}
                multiline
                rows="1"
                variant="outlined"
                value={url}
                onChange={onChangeUrl}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleToolAdd}
            >
                Добавить
            </Button>
        </div>
    )
}

export default AdminUI;